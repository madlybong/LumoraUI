# @astrake/lumora-ui

[![CI](https://github.com/madlybong/LumoraUI/actions/workflows/ci.yml/badge.svg)](https://github.com/madlybong/LumoraUI/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@astrake/lumora-ui.svg?style=flat)](https://www.npmjs.com/package/@astrake/lumora-ui)
[![npm downloads](https://img.shields.io/npm/dm/@astrake/lumora-ui.svg?style=flat)](https://www.npmjs.com/package/@astrake/lumora-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Bun](https://img.shields.io/badge/runtime-Bun_1.3-f9f1e1?logo=bun&logoColor=black)](https://bun.sh)
[![Vue 3](https://img.shields.io/badge/Vue-3.5%2B-42b883?logo=vue.js&logoColor=white)](https://vuejs.org)

> Headless **Vue 3** component framework targeting three distinct surface types —
> Mobile, Desktop, and Embedded — with a unified `--lu-*` design token system.

**[Documentation](https://ui.lumora.astrake.com)** · **[npm](https://www.npmjs.com/package/@astrake/lumora-ui)** · **[Changelog](./CHANGELOG.md)** · **[Issues](https://github.com/madlybong/LumoraUI/issues)**

---

## Overview

`@astrake/lumora-ui` provides a single component library with three surface targets:

| Target | Components | Use case |
|--------|-----------|---------|
| **Mobile** (`LuMobile*`) | `LuMobileShell`, `LuMobileHeader`, `LuMobileNavBar` | PWA-ready apps — touch targets ≥44px, swipe gestures, bottom nav |
| **Desktop** (`LuDesktop*`) | `LuDesktopShell`, `LuDesktopSidebar`, `LuDesktopTopBar` | Feature-rich browser / Electron apps — resizable splits, keyboard shortcuts |
| **Embedded** (`LuEmbedded*`) | `LuEmbeddedShell`, `LuEmbeddedPOSLayout`, `LuEmbeddedPOSSummary` | Retail POS, Kiosk, IoT, in-car screens — fixed viewport, high contrast, touch-first |
| **Shared** (`Lu*`) | `LuDataGrid`, `LuKanban`, `LuBarChart`, `LuRichTextEditor`, `LuButton` | Cross-surface primitives, data-rich components, and operational features |

---

## Install

```bash
bun add @astrake/lumora-ui
# or
npm install @astrake/lumora-ui
# or
pnpm add @astrake/lumora-ui
```

**Peer dependency:**

```bash
bun add vue@^3.5.0
```

---

## Usage

```ts
// Import shared components and layout primitives
import { LuButton, LuDataGrid, LuKanban, LuStack } from "@astrake/lumora-ui"

// Import surface-specific shells
import { LuMobileShell, LuDesktopShell, LuEmbeddedShell, LuPOSLayout } from "@astrake/lumora-ui"
```

**Register the plugin:**

```ts
// main.ts
import { createApp } from "vue"
import { createLumoraUI } from "@astrake/lumora-ui"
import "@astrake/lumora-ui/style"
import App from "./App.vue"

createApp(App).use(createLumoraUI()).mount("#app")
```

---

## Design Token System

All targets share a `--lu-*` CSS custom property namespace:

| Token group | Examples |
|-------------|---------|
| Color | `--lu-color-surface`, `--lu-color-accent`, `--lu-color-border` |
| Typography | `--lu-text-sm`, `--lu-font-weight-semibold` |
| Spacing | `--lu-space-1` … `--lu-space-16` (4px grid) |
| Radius | `--lu-radius-sm` … `--lu-radius-full` |
| Shadow | `--lu-shadow-sm` … `--lu-shadow-lg` |
| Motion | `--lu-duration-fast`, `--lu-easing-standard` |

Each target root overrides tokens as appropriate (e.g., Embedded reduces shadow and motion values for performance).

---

## Runtime Stack

| Concern | Technology |
|---------|-----------|
| Component framework | Vue 3.5+ (Composition API) |
| Language | TypeScript 5.9+ |
| Bundler | Vite (library mode, three entry points) |
| Interactive Add-ons (Peer) | Apache ECharts, Tiptap, Sortable.js (`vue-draggable-plus`) |
| Type check | vue-tsc |
| Tests | Vitest + @vue/test-utils |
| Package manager | Bun 1.3+ |

---

## Repo Shape

```
LumoraUI/
├── packages/core/        ← @astrake/lumora-ui (published package)
│   └── src/
│       ├── components/   ← shared primitives + complex components (Lu*)
│       ├── layout/       ← layout primitives (LuStack, LuGrid, LuDock, etc.)
│       ├── shell/        ← surface shells (LuDesktopShell, LuMobileShell, etc.)
│       ├── composables/  ← shared composition functions
│       ├── skins/        ← SkinMap default theme
│       ├── lumora.css    ← structural CSS baseline
│       └── index.ts
├── apps/showcase/        ← reference Vite + Vue 3 showcase app
├── tools/                ← build, check, version, changelog scripts
├── .agent/               ← AI agent rules and authoring guides
└── docs/                 ← architecture, development, releases, legal
```

---

## Local Development

```bash
git clone https://github.com/madlybong/LumoraUI.git
cd LumoraUI
bun install
bun run check      # typecheck
bun run test --run # run test suite
bun run dev        # start the showcase app
```

---

## Documentation

- [Project Overview](./docs/PROJECT.md)
- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Development Workflow](./docs/DEVELOPMENT.md)
- [Release Workflow](./docs/RELEASES.md)
- [AI Agent Knowledge Base](./.agent/README.md)
- [Legal Notice & Disclaimer](./docs/LEGAL.md)

---

## Automation

| Trigger | Workflow | Effect |
|---------|----------|--------|
| Push to `main` | CI | Install → typecheck → test → build |
| PR with `VERSION` change | Version Check | Ensures VERSION is the single source of truth |
| `VERSION` bump on `main` | Release | Build → changelog → GitHub Release → npm publish |
| Manual tag `v*` | Release | Same as above |
| Every Monday | CodeQL | Security scan |

**Required secrets:** `NPM_TOKEN` — see [docs/RELEASES.md](./docs/RELEASES.md).

---

## Contributing

Contributions are welcome. Please read the working rules in [AGENTS.md](./AGENTS.md) before submitting a PR.
By contributing, you agree your work is licensed under MIT. See [docs/LEGAL.md](./docs/LEGAL.md).

---

## Disclaimer

> `@astrake/lumora-ui` is provided **"as is"** without warranty of any kind.
> The author accepts no liability for damages arising from the use of this software.
> See [docs/LEGAL.md](./docs/LEGAL.md) for the full warranty disclaimer and legal notice.

---

## License

[MIT](./LICENSE) © 2026 [Anuvab Chakraborty](https://github.com/madlybong)
