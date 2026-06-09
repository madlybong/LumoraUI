---
id: doc-sync
name: "DOC-SYNC: Documentation Synchronization"
category: workflows
trigger:
  - on: component_change
    paths:
      - "packages/core/src/components/**/*.vue"
      - "packages/core/src/shell/**/*.vue"
requires_tools:
  - grep_search
  - write_to_file
  - replace_file_content
---

# DOC-SYNC: Documentation Synchronization

Trigger this workflow whenever a component's props, emits, slots, or public API is added, removed, or modified.

## Steps

1. **Identify Modified Components**: Review git diffs or file change history to list components that were added or modified.
2. **Update Skin Key Reference Table**: If new variants were added, append them to the skin keys table inside `.agents/reference/skin-key-index.md`.
3. **Update Consumer Guides**: If the component is brand new, export it in `docs/CONSUMER_GUIDE.md` under the exports list.
4. **Update Showcase App Views**:
   - Locate the component's demo page in `apps/showcase/src/views/`.
   - Update the code markup to preview the new variants/props.
   - Update the `PropTable` data arrays inside the showcase view file to reflect the new typings.
5. **Verify Compiles**:
   - Run type-checking: `bun run check`.
   - Compile showcase application: `bun run build`.
6. **Commit Format**: Commit changes using the prefix: `docs: sync [ComponentName] API documentation`.
