#!/usr/bin/env bash
# Self-check for the Mutation Arena backend.
# Installs deps then confirms `import app` works.
#
# Run from the backend dir:
#     cd ~/mutation-arena/backend && bash selfcheck.sh
set -euo pipefail
cd "$(dirname "$0")"

echo "==> Installing dependencies"
python3 -m pip install -r requirements.txt 2>&1 | tail -3 || {
    echo "pip not available via python3 -m pip; trying 'pip'"
    pip install -r requirements.txt 2>&1 | tail -3
}

echo "==> Syntax check (no deps required)"
python3 -m py_compile \
    app.py settings.py \
    kraken_api.py kraken_bridge.py paper_executor.py trading_agent.py trading_routes.py \
    evolution/__init__.py evolution/genome.py evolution/models.py evolution/backtest.py \
    evolution/fitness.py evolution/validate.py evolution/tournament.py evolution/rl_harness.py \
    evolution/agent.py evolution/store.py evolution/engine.py evolution/routes.py \
    && echo "py_compile: OK"

echo "==> Import check"
python3 -c "import app; print('import app: OK')"

echo "==> Done"