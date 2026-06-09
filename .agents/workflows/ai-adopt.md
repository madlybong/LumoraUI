---
id: ai-adopt
name: "AI-ADOPT: Knowledge Base Sync"
category: workflows
trigger:
  - on: interval
    frequency: "every 2-3 minor versions"
requires_tools:
  - grep_search
  - write_to_file
  - replace_file_content
---

# AI-ADOPT: Knowledge Base Sync

Trigger this workflow every 2-3 minor versions or whenever documentation drift is suspected, to ensure agent configuration is up-to-date.

## Steps

1. **Review Rules**: Check if new patterns or `[NEVER]` rules were established recently. If so, document them inside `.agents/rules/`.
2. **Review Reference Directory**: Update the list of active skins inside `.agents/reference/skin-key-index.md` if any new components were introduced.
3. **Verify Index Integrity**: Check that files in `.agents/rules/` and `.agents/workflows/` have proper YAML blocks and matching IDs.
4. **Identify Dead References**:
   - Run grep search for old naming patterns (e.g. `LuM*`, `LuD*`, `LuE*`).
   - Look for phantom paths (like `src/tokens/` or references to deleted files).
5. **Commit**: Save changes with the commit prefix: `docs(agent): update AI knowledge base for vX.Y.Z cycle`.
