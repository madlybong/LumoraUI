# Project Overview — `@astrake/lumora-ui`

## What Lumora UI is

`@astrake/lumora-ui` is a **headless Vue 3 component framework** that targets three
distinct rendering surfaces from a single codebase:

| Target | Namespace | Use case |
|--------|-----------|---------|
| **Mobile** | `LuM*` | PWA-ready apps — touch targets ≥44px, swipe gestures, bottom nav, bottom sheets |
| **Desktop** | `LuD*` | Feature-rich browser / Electron apps — data tables, sidebars, command palette, keyboard shortcuts |
| **Embedded** | `LuE*` | Kiosk, IoT dashboard, in-car screens — fixed viewport, no scroll, high contrast, minimal JS footprint |
| **Shared** | `Lu*` | Cross-surface primitives consumed by all three targets |

## Core design philosophy

- **Headless first** — components own structure and behavior; consuming apps own all visual styling.
- **Skin-driven theming** — a centralized skin configuration provides `--lu-*` CSS tokens; no class-level theming.
- **Surface isolation** — Mobile, Desktop, and Embedded are separate entry points with no cross-surface imports.
- **Zero opinions on layout frameworks** — works alongside Tailwind, plain CSS, or any design system.

## Package entry points

```ts
import { LuIcon, LuSpinner } from "@astrake/lumora-ui"           // all targets + shared
import { LuMButton, LuMCard } from "@astrake/lumora-ui/mobile"
import { LuDTable, LuDSidebar } from "@astrake/lumora-ui/desktop"
import { LuEDisplay, LuEGrid } from "@astrake/lumora-ui/embedded"
```

## Current repo shape

```
LumoraUI/
├── packages/core/        ← @astrake/lumora-ui (published)
│   └── src/
│       ├── tokens/       ← CSS custom property definitions
│       ├── shared/       ← Lu* primitives
│       ├── mobile/       ← LuM* components
│       ├── desktop/      ← LuD* components
│       ├── embedded/     ← LuE* components
│       ├── composables/  ← shared composition functions
│       ├── skins/        ← skin configuration
│       ├── shell/        ← shell layout components
│       └── index.ts
├── apps/showcase/        ← Vite + Vue 3 reference app
├── tools/                ← build, check, version, changelog
└── docs/                 ← project, architecture, releases, legal
```

## What the showcase app proves

The showcase app at `apps/showcase` demonstrates:

- How to install and configure the `LumoraUI` plugin.
- How to apply a skin configuration.
- How each surface target looks and behaves at `/mobile`, `/desktop`, `/embedded` routes.
- How to compose shell layouts with named slots.

## Current limitations

- Desktop and Embedded targets are still in active development.
- No accessibility audit (WCAG) has been performed on the current component set.
- Animation and motion tokens are defined but not yet fully integrated across all components.
- The showcase app is for demonstration only — it is not a documentation site yet.
  The full docs site will be at `https://ui.lumora.astrake.com`.
