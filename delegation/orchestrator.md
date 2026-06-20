# Delegation Brief — orchestrator

**Project:** `/home/reezy/mutation-arena`  
**Loop prompt:** `loop/orchestrator-tick.md`  
**Section:** S10 (after S1–S9 signed off)

## Responsibilities

- Monitor `python scripts/check_complete.py` each tick
- Track `.planning/ledger-*.jsonl` for worker progress
- Nudge stalled agents if no ledger entry in 2+ ticks
- Own `task_plan.md` status updates (workers do NOT edit it directly)
- Run S10 final QA when all workers signed off

## S10 checklist

- [ ] `python scripts/mock_audit.py` → 0 violations
- [ ] `pytest` passes
- [ ] `npm run build` succeeds
- [ ] UI spot-check at 1280px, 768px, 375px vs reference HTML
- [ ] Sign off S10

## Loop termination

```
/goal python scripts/check_complete.py exits 0
```