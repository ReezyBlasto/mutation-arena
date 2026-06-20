# Mutation Arena — Planning Loop (default tick)

Read `task_plan.md` and `progress.md` in `/home/reezy/mutation-arena`.

Run `python scripts/check_complete.py` to see remaining sections.

If no progress.md entry since last tick, write one summarizing current state.

Identify your agent role from the prompt or default to orchestrator.

Continue the next incomplete section per `loop/claude-tick.md`, `loop/pi-tick.md`, or `loop/orchestrator-tick.md`.

**UI rule:** 1:1 with `/home/reezy/CryptoTradingDashboardWireframes/delivery/source/Mutation Arena.dc.html`
**Data rule:** zero mock/synthetic — run `python scripts/mock_audit.py` each tick.

Sign off each section before marking complete: `python scripts/section_signoff.py <SN> --agent <id>`