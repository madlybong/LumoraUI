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
| **Mobile** (`LuM*`) | `LuMButton`, `LuMInput`, `LuMCard`, `LuMList`, `LuMBottomSheet`, `LuMNavBar` | PWA-ready apps — touch targets ≥44px, swipe gestures, bottom nav |
| **Desktop** (`LuD*`) | `LuDButton`, `LuDInput`, `LuDTable`, `LuDSidebar`, `LuDDropdown`, `LuDModal` | Feature-rich browser / Electron apps — data tables, keyboard shortcuts |
| **Embedded** (`LuE*`) | `LuEButton`, `LuEDisplay`, `LuEGrid`, `LuEStatusBar`, `LuEAlert`, `LuENumpad` | Kiosk, IoT, in-car screens — fixed viewport, high contrast, minimal JS |
| **Shared** (`Lu*`) | `LuIcon`, `LuSpinner`, `LuBadge`, `LuPortal` | Cross-surface primitives |

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
// Import all targets
import { LuIcon, LuSpinner } from "@astrake/lumora-ui"

// Import a specific target (recommended for tree-shaking)
import { LuMButton, LuMCard } from "@astrake/lumora-ui/mobile"
import { LuDTable, LuDSidebar } from "@astrake/lumora-ui/desktop"
import { LuEDisplay, LuEGrid } from "@astrake/lumora-ui/embedded"
```

**Register the plugin:**

```ts
// main.ts
import { createApp } from "vue"
import { LumoraUI } from "@astrake/lumora-ui"
import App from "./App.vue"

createApp(App).use(LumoraUI).mount("#app")
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
| Type check | vue-tsc |
| Tests | Vitest + @vue/test-utils |
| Package manager | Bun 1.3.12 |

---

## Repo Shape

```
LumoraUI/
├── packages/core/        ← @astrake/lumora-ui (published package)
│   └── src/
│       ├── tokens/       ← CSS custom properties (--lu-*)
│       ├── shared/       ← cross-target primitives (Lu*)
│       ├── mobile/       ← Mobile components (LuM*)
│       ├── desktop/      ← Desktop components (LuD*)
│       ├── embedded/     ← Embedded components (LuE*)
│       └── index.ts
├── apps/showcase/        ← reference Vite + Vue 3 app
├── tools/                ← build, check, version, changelog scripts
└── docs/                 ← architecture, development, releases, legal
```

---

## Local Development

```bash
git clone https://github.com/madlybong/LumoraUI.git
cd LumoraUI
bun install
bun run check      # typecheck
bun test           # run test suite
bun run dev        # start the showcase app
```

---

## Documentation

- [Project Overview](./docs/PROJECT.md)
- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Development Workflow](./docs/DEVELOPMENT.md)
- [Release Workflow](./docs/RELEASES.md)
- [AI Agent Guide](./docs/AI_AGENT_GUIDE.md)
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
