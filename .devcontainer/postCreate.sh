#!/bin/bash
set -e

echo "==> Installing uv..."
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"

echo "==> Installing Python 3.14..."
uv python install 3.14

echo "==> Cloning free-claude-code..."
if [ ! -d "$HOME/free-claude-code" ]; then
  git clone https://github.com/Alishahryar1/free-claude-code.git "$HOME/free-claude-code"
fi

echo "==> Symlinking persistent dirs into workspace..."
WORK="/workspaces/johnnymodest-website"

# .claude — Claude Code project memory and settings
mkdir -p "$WORK/.claude"
rm -rf ~/.claude
ln -sf "$WORK/.claude" ~/.claude

# .claude.json — Claude Code global config
touch "$WORK/.claude.json"
ln -sf "$WORK/.claude.json" ~/.claude.json

# free-claude-code config
mkdir -p "$WORK/.config/free-claude-code"
mkdir -p ~/.config
rm -rf ~/.config/free-claude-code
ln -sf "$WORK/.config/free-claude-code" ~/.config/free-claude-code

# proxy log and pid (useful for debugging)
touch "$WORK/free-claude-code-proxy.log"
touch "$WORK/free-claude-code-proxy.pid"
ln -sf "$WORK/free-claude-code-proxy.log" ~/free-claude-code-proxy.log
ln -sf "$WORK/free-claude-code-proxy.pid" ~/free-claude-code-proxy.pid

echo "==> Configuring free-claude-code..."
CONFIG="$WORK/.config/free-claude-code/.env"
EXAMPLE="$WORK/.devcontainer/free-claude-code.env.example"
LOCAL="$WORK/.env.local"

# Always start fresh from the example
cp "$EXAMPLE" "$CONFIG"

if [ -f "$LOCAL" ]; then
  echo "    Found .env.local — merging secrets into config..."
  while IFS= read -r line; do
    [[ "$line" =~ ^[[:space:]]*# ]] && continue
    [[ -z "${line// }" ]] && continue
    KEY="${line%%=*}"
    if grep -q "^${KEY}=" "$CONFIG"; then
      sed -i "s|^${KEY}=.*|${line}|" "$CONFIG"
    else
      echo "$line" >> "$CONFIG"
    fi
  done < "$LOCAL"
  echo "    Done."
else
  echo ""
  echo "⚠️  No .env.local found in project root."
  echo "    Create it with your API keys — see .devcontainer/free-claude-code.env.example for key names."
  echo "    Then rebuild the container."
  echo ""
fi

echo "==> Adding shell aliases..."
echo 'alias ds="ANTHROPIC_BASE_URL=http://localhost:8082 ANTHROPIC_API_KEY=freecc claude"' >> ~/.bashrc

echo "==> Setting git identity..."
git config --global user.name "johnnymodest"
git config --global user.email "me+claude@tudormarciu.ro"

echo "==> Installing Claude Code CLI..."
npm install -g @anthropic-ai/claude-code

echo "==> Installing project dependencies..."
npm install

echo "==> Done. Proxy will start on next postStart."