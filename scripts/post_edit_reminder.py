#!/usr/bin/env python3
"""Remind agent to update progress.md after file edits. Hook-safe — no shell."""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

if (ROOT / "task_plan.md").exists():
    print("[mutation-arena] File edited. Update progress.md. Run mock_audit.py if frontend/backend src changed.")
    print("[mutation-arena] Sign off section when done: python scripts/section_signoff.py <SN> --agent <id>")

sys.exit(0)