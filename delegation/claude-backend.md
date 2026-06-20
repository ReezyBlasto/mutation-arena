# Delegation Brief — claude-backend

**Project:** `/home/reezy/mutation-arena`  
**Loop prompt:** `loop/claude-tick.md`  
**Sections:** S1, S2, S9 (+ backend half of S7)

## Your sections

| Section | Title | DependsOn |
|---------|-------|-----------|
| S1 | Backend Foundation (P0 bugs) | — |
| S2 | Backend Evolution + Trading API | S1 |
| S9 | Electron Hardening | S1 |

## Sign-off required

After each section:

```bash
python scripts/check_section.py S1
python scripts/mock_audit.py
python scripts/section_signoff.py S1 --agent claude-backend --notes "what you did"
python scripts/phase_status.py S1 complete
```

Append to `.planning/ledger-claude-backend.jsonl`:
`{"event":"section_complete","section":"S1","agent":"claude-backend"}`

## Rules

- No `rm` — deprecate, don't delete
- No inline shell — use `scripts/*.py`
- No mock backend responses
- Do not touch frontend unless S7 requires it