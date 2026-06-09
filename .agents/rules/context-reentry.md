---
id: context-reentry
name: "Context Re-entry Protocol"
category: rules
severity: high
applies_to:
  - "*"
---

# Context Re-entry Protocol

To prevent hallucinating old components or path structures, you must align on the workspace state at the start of any work session.

## Checklist

Every agent invocation that involves writing code MUST execute this checklist before writing any code:

1. **Read `AGENTS.md`**: Note the routing map and current version index.
2. **Review task board**: If a `task.md` or active plan is present, check current item status.
3. **Inspect version**: Read the root `VERSION` file to identify active versioning.
4. **Git state**: Inspect git state to understand any in-progress changes.
5. **Typecheck run**: Execute typechecking (`bun run check`) to find any active TS compiler issues.
6. **[NEVER]** Start writing code until steps 1-5 are done.
