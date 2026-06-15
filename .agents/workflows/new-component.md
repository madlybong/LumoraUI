---
id: new-component
name: "NEW-COMPONENT: Add Component Flow"
category: workflows
trigger:
  - on: demand
requires_tools:
  - write_to_file
  - replace_file_content
  - run_command
---

# NEW-COMPONENT: Add Component Flow

Use this step-by-step workflow when asked to design or implement a new UI component.

## Steps

1. **Verify Prerequisites**:
   - Ensure the component is written using `<script setup lang="ts">`.
   - Select the target location:
     - Shared primitives: `packages/core/src/components/Lu[Name].vue`
     - Desktop surface: `packages/core/src/shell/desktop/LuDesktop[Name].vue`
     - Mobile surface: `packages/core/src/shell/mobile/LuMobile[Name].vue`
     - Embedded surface: `packages/core/src/shell/embedded/LuEmbedded[Name].vue`
2. **Implement Structural Template**:
   - Assign static BEM class names using template literals (e.g., `` `lu-[name] lu-[name]--${props.variant}` ``).
   - Do not hardcode Tailwind utility classes in `<template>`.
3. **CSS Framework Support**:
   - Add the default layout definition rules inside `packages/core/src/styles/components.css`.
5. **Export the Component**:
   - Re-export the component from the main namespace entry points (`src/components/index.ts` or corresponding shell entry points).
6. **Write Unit Tests**:
   - Add a test suite under `__tests__` using Happy DOM mount mocks.
7. **Register in Showcase**:
   - Add a demo page inside the showcase application. Use framework layout primitives (like `LuStack` or `LuGrid`) to compose the page instead of raw HTML tag trees.
8. **Verify all gates pass**:
   - Run validation: `bun run check && bun run test --run && bun run build`.
9. **Update Documentation**:
   - Execute the `DOC-SYNC` workflow to document the new component.
