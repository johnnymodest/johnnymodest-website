#!/bin/bash

source "$HOME/.local/bin/env"

PROXY_DIR="$HOME/free-claude-code"
LOG_FILE="$HOME/free-claude-code-proxy.log"
PID_FILE="$HOME/free-claude-code-proxy.pid"

# Check if .env exists and has been configured
if [ ! -f "$PROXY_DIR/.env" ]; then
  echo "⚠️  ~/free-claude-code/.env not found. Proxy not started."
  echo "    Copy .devcontainer/free-claude-code.env.example to ~/free-claude-code/.env and fill in your API key."
  exit 0
fi

if grep -q "your-api-key-here" "$PROXY_DIR/.env"; then
  echo "⚠️  ~/free-claude-code/.env still contains placeholder values. Proxy not started."
  echo "    Edit ~/free-claude-code/.env and add your real API key."
  exit 0
fi

# Kill any existing proxy process
if [ -f "$PID_FILE" ]; then
  OLD_PID=$(cat "$PID_FILE")
  kill "$OLD_PID" 2>/dev/null || true
  rm "$PID_FILE"
fi

echo "==> Starting free-claude-code proxy on port 8082..."
cd "$PROXY_DIR"
nohup uv run uvicorn server:app --host 0.0.0.0 --port 8082 > "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"

echo "    Proxy PID: $(cat $PID_FILE)"
echo "    Logs: $LOG_FILE"
echo "    Run 'tail -f ~/free-claude-code-proxy.log' to watch logs"