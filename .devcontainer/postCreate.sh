#!/bin/bash
set -e

echo "==> Installing uv..."
curl -LsSf https://astral.sh/uv/install.sh | sh
source "$HOME/.local/bin/env"

echo "==> Installing Python 3.14..."
uv python install 3.14

echo "==> Cloning free-claude-code..."
if [ ! -d "$HOME/free-claude-code" ]; then
  git clone https://github.com/Alishahryar1/free-claude-code.git "$HOME/free-claude-code"
fi

echo "==> Configuring free-claude-code..."
if [ ! -f "$HOME/free-claude-code/.env" ]; then
  cp /workspaces/johnnymodest/.devcontainer/free-claude-code.env.example "$HOME/free-claude-code/.env"
  echo ""
  echo "⚠️  No free-claude-code .env found. A template has been copied to ~/free-claude-code/.env"
  echo "    Edit it and add your API key, then restart the container or run postStart.sh manually."
  echo ""
fi

echo "==> Installing Claude Code CLI..."
npm install -g @anthropic-ai/claude-code

echo "==> Installing project dependencies..."
npm install

echo "==> Done. Proxy will start on next postStart."