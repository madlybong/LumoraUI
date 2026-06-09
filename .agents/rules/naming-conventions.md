---
id: naming-conventions
name: "Naming Conventions & Prefixes"
category: rules
severity: high
applies_to:
  - "packages/core/src/**/*.vue"
  - "packages/core/src/**/*.ts"
---

# Naming Conventions & Prefixes

To prevent namespace clutter and clearly delineate device targets, files and exports must adhere to these exact naming patterns.

## Target Namespaces

- **Shared Component Primitives**: Always prefix with `Lu` (e.g. `LuButton`, `LuInput`).
- **Desktop Target Components**: Always prefix with `LuDesktop` (e.g. `LuDesktopShell`, `LuDesktopSidebar`).
- **Mobile Target Components**: Always prefix with `LuMobile` (e.g. `LuMobileShell`, `LuMobileNavBar`).
- **Embedded Target Components**: Always prefix with `LuEmbedded` (e.g. `LuEmbeddedShell`, `LuEmbeddedHeader`).

## The Rule

- **[NEVER]** Use old shorthand prefixes (`LuM*`, `LuD*`, `LuE*`).
- **[NEVER]** Create or register any component that does not match these explicit namespaces.
