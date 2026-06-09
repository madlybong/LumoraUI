---
id: styles-directory
name: "Styles Directory & CSS Rules"
category: rules
severity: high
applies_to:
  - "packages/core/src/components/**/*.vue"
  - "packages/core/src/shell/**/*.vue"
  - "packages/core/src/styles/*.css"
---

# Styles Directory & CSS Rules

The Lumora UI framework utilizes a modular CSS architecture to manage styles using strict BEM conventions. The old `lumora.css` monolithic file has been removed.

## The Rule

- **[NEVER]** Add style elements (`<style scoped>`) inside component `.vue` files. All CSS must be centralized in `packages/core/src/styles/*.css`.
- **[ALWAYS]** Every custom selector used in components **must** start with the `lu-` namespace prefix (e.g. `.lu-button`, `.lu-grid`).
- **[ALWAYS]** Place CSS rules in the correct domain file within `packages/core/src/styles/`:
  - `tokens.css`: Core design tokens (CSS variables for color, spacing, radius, etc.).
  - `components.css`: Styles for base UI components (`LuButton`, `LuBadge`, `LuIcon`, etc.).
  - `forms.css`: Styles for form inputs and controls (`LuInput`, `LuSelect`, `LuCheckbox`, etc.).
  - `layout.css`: Styles for structural layouts (`LuStack`, `LuGrid`, `LuCard`, etc.).
  - `shell.css`: Styles for the top-level shell containers (`LuDesktopShell`, `LuMobileShell`, `LuEmbeddedShell`).

## Purpose of Modular CSS

The `src/styles/` directory contains all component visuals, replacing the old dynamic SkinMap system. Every BEM class generated in the components must have its matching definition mapped within these static CSS files.
