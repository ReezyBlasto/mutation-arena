# Section Sign-Offs

Each section produces `S1.md` … `S10.md` when an agent runs:

```bash
python scripts/section_signoff.py S1 --agent claude-backend --notes "summary"
```

No section is marked `complete` in `task_plan.md` until its sign-off file exists here.