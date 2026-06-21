# BEM Class Index Reference

This document maps components to their corresponding root BEM classes and modifiers inside the `src/styles/` system.

---

## 1. Type Interface Reference

```ts
// Legacy SkinMap system has been removed.
// Components now construct their class names statically using template literals.
// Example: `lu-button ${props.variant && props.variant !== 'default' ? 'lu-button--'+props.variant : ''}`
```

---

## 2. Complete BEM Class Index Reference

Use this index to target components when styling or overriding themes inside the modular CSS files.

### Layout Primitives

| Component | Root Class | Modifiers | Purpose |
|:---|:---|:---|:---|
| `LuStack` | `.lu-stack` | `--vertical`, `--horizontal`, <del>`--container`</del> | Flex stacks |
| `LuContainer` | `.lu-container` | `--sm`, `--md`, `--lg`, `--xl`, `--fluid` | Main max-width responsive page container blocks |
| `LuDock` | `.lu-dock` | `--vertical`, `--horizontal` | View docking frames |
| `LuDockItem` | `.lu-dock-item` | `--top`, `--bottom`, `--left`, `--right`, `--fill` | Multi-directional dock regions |
| `LuFixed` | `.lu-fixed` | none | Layout panels that cannot stretch or shrink |
| `LuFill` | `.lu-fill` | none | Layout panels filling available space |
| `LuScroll` | `.lu-scroll` | `--horizontal` | Scroll containers |
| `LuOverlay` | `.lu-overlay` | none | Absolute positioned layers |
| `LuGrid` | `.lu-grid` | `--responsive-3` | Grid systems |
| `LuSplit` | `.lu-split` | `--horizontal`, `--vertical` | Resizable pane container |
| `LuSplitPane` | `.lu-split-pane` | none | Resizable pane item |
| `LuSplitResizer` | `.lu-split-resizer` | `--horizontal`, `--vertical` | Separator line bar draggable target |

### Shell Containers

#### Desktop Shell
- `.lu-desktop-shell`
- `.lu-desktop-shell__content-wrapper`
- `.lu-desktop-shell__main-content`
- `.lu-desktop-top-bar`
- `.lu-desktop-top-bar__left`
- `.lu-desktop-top-bar__center`
- `.lu-desktop-top-bar__right`
- `.lu-desktop-sidebar`
- `.lu-desktop-sidebar__header`
- `.lu-desktop-sidebar__content`
- `.lu-desktop-sidebar__footer`
- `.lu-desktop-status-bar`
- `.lu-desktop-status-bar__left`
- `.lu-desktop-status-bar__center`
- `.lu-desktop-status-bar__right`
- `.lu-desktop-rail-bar` (Modifiers: `--expanded`)
- `.lu-desktop-rail-item` (Modifiers: `--active`)
- `.lu-desktop-rail-item__icon`
- `.lu-desktop-rail-item__label`

#### Mobile Shell
- `.lu-mobile-shell`
- `.lu-mobile-shell__content`
- `.lu-mobile-header`
- `.lu-mobile-header__left`
- `.lu-mobile-header__center`
- `.lu-mobile-header__right`
- `.lu-mobile-nav-bar`
- `.lu-mobile-nav-bar-item` (Modifiers: `--active`)
- `.lu-mobile-nav-bar-item__icon`
- `.lu-mobile-nav-bar-item__label`

#### Embedded Shell
- `.lu-embedded-shell`
- `.lu-embedded-shell__content`
- `.lu-embedded-top-bar`
- `.lu-embedded-top-bar__left`
- `.lu-embedded-top-bar__center`
- `.lu-embedded-top-bar__right`
- `.lu-embedded-status-bar`
- `.lu-embedded-status-bar__left`
- `.lu-embedded-status-bar__center`
- `.lu-embedded-status-bar__right`

### Shared Primitives

| Component | Root Class | Modifiers | Purpose |
|:---|:---|:---|:---|
| `LuButton` | `.lu-button` | `--primary`, `--secondary`, `--success`, `--danger`, `--ghost`, `--link` | Generic action buttons |
| `LuInput` | `.lu-input` | `--error`, `--disabled` | Text input boxes |
| `LuSelect` | `.lu-select` | `--error`, `--disabled` | Selection menus |
| `LuSwitch` | `.lu-switch` | `--checked`, `--disabled` | Toggle switch pills |
| `LuBadge` | `.lu-badge` | `--primary`, `--secondary`, `--success`, `--danger` | Text tag count indicators |
| `LuCard` | `.lu-card` | `--header`, `--body`, `--footer` | Section blocks |
| `LuForm` | `.lu-form` | none | Structural form blocks |
| `LuIcon` | `.lu-icon` | none | SVG icon sizing block wrapper |
| `LuSpinner` | `.lu-spinner` | none | Loading indicator spinner SVG |
| `LuAccordion` | `.lu-accordion` | `--item`, `--trigger`, `--content` | Accordion system |
| `LuChip` | `.lu-chip` | `--active`, `--closable` | Interactive badge chips |
| `LuDrawer` | `.lu-drawer` | `--header`, `--body`, `--footer` | Slide-out overlay drawer |
| `LuToast` | `.lu-toast` | `--success`, `--error`, `--info`, `--warning` | Overlay notifications |
| `LuPlanner` | `.lu-planner` | `--header`, `--calendar`, `--event` | Drag and drop timeline/calendar planner |
| `LuDataGrid` | `.lu-data-grid` | `--header`, `--row`, `--cell`, `--paginator` | Feature-rich tabular data grid |
