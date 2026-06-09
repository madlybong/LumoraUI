---
id: surface-isolation
name: "Surface Target Isolation"
category: rules
severity: critical
applies_to:
  - "packages/core/src/shell/mobile/**/*"
  - "packages/core/src/shell/desktop/**/*"
  - "packages/core/src/shell/embedded/**/*"
enforce:
  - pattern: 'import.*shell/(desktop|mobile|embedded)'
    message: "Do not import across surface target directories. Shell layers must remain strictly isolated."
---

# Surface Target Isolation

Lumora UI targets three distinct platforms (Desktop, Mobile, Embedded). These interfaces are distinct in interactions, density, and device constraints, and must remain completely decoupled.

## Surface Isolation Rules

1. **Desktop Shell (`LuDesktop*`)**:
   - For mouse and keyboard, dense grids, resize behaviors.
   - **[NEVER]** Import from Mobile or Embedded shell domains.
2. **Mobile Shell (`LuMobile*`)**:
   - Touch targets (minimum 44px hit areas), swipe gestures, bottom drawer layouts.
   - **[NEVER]** Import from Desktop or Embedded shell domains.
3. **Embedded Shell (`LuEmbedded*`)**:
   - Fixed resolution, POS layouts, maximum contrast accessibility.
   - **[NEVER]** Import from Desktop or Mobile shell domains.

## Allowed Cross-Imports

All shared primitive components (`LuButton`, `LuInput`, etc.) inside `src/components/` and shared composables/utils are accessible to all three shell scopes.
If you need to share a layout behavior, promote it to a generic layout primitive (e.g. `LuStack`, `LuDock`) in `src/layout/`.
