#!/usr/bin/env bash
# Launch the Mutation Arena Electron app.
# Electron spawns the FastAPI backend (python3 app.py on :8920), which serves
# the built SPA at "/", and loads http://127.0.0.1:8920 in a window.
#
# First-time setup: run ./setup.sh once (installs deps + builds the frontend).
set -euo pipefail

cd "$(dirname "$(readlink -f "$0")")"
ROOT="$(pwd)"

# Load nvm so the electron binary on PATH is found.
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then . "$NVM_DIR/nvm.sh"; fi

mkdir -p "$ROOT/logs"

# Quick sanity check: if the backend deps aren't installed, the app won't run.
if [ ! -d "$ROOT/backend/.venv" ] && ! python3 -c "import fastapi" 2>/dev/null; then
  echo "Backend deps not found. Run ./setup.sh first."
  exit 1
fi
if [ ! -d "$ROOT/frontend/dist" ]; then
  echo "frontend/dist not found (frontend not built). Run ./setup.sh first."
  exit 1
fi
if [ ! -d "$ROOT/electron/node_modules" ]; then
  echo "Electron not installed. Run ./setup.sh first."
  exit 1
fi

cd "$ROOT/electron"
exec npm start