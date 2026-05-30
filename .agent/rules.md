# 📚 Lumora UI — Global Rulebook

> This is the foundational rulebook for all AI coding agents working on the `@astrake/lumora-ui` project. These rules define the non-negotiable architecture and workflow constraints of the repository.

---

## 1. Context Re-entry Protocol

Every agent invocation that involves making changes MUST execute this checklist before writing any code:

1. Read `AGENTS.md` — follow routing to `.agent/rules.md` (this file)
2. Run `git status` — understand any in-progress work
3. Read the `VERSION` file — know which version you are operating on
4. Read the task-specific `.agent/*.md` for the domain being touched
5. Run `bun run check` (read-only pass) — understand current type state
6. **NEVER start writing code until steps 1-5 are done.**

---

## 2. Core Architectural Pillars

### Headless Framework
`@astrake/lumora-ui` is a headless framework. Components contain **zero** structural CSS or design-specific HTML classes out of the box. All presentation is delegated to the `SkinMap` object, which maps UI intent variants to Tailwind class strings. 

### Surface Target Isolation
The library targets three distinct surfaces. A strict boundary exists between them:
1. `LuMobile*`: Designed for touch (min 44px hit areas), mobile PWA shells, gesture-driven.
2. `LuDesktop*`: Designed for mouse/keyboard, dense data grids, resizable panels, shortcuts.
3. `LuEmbedded*`: Designed for kiosk/POS terminals, high-contrast, fixed resolution.

*Rule: A Desktop component must never import or rely on a Mobile component, and vice-versa.*

---

## 3. Coding Patterns & Theming APIs

### The `resolveSkin` API
All structural classes are injected dynamically via the skin resolver:
```ts
// Inside a setup() function
import { useLumoraConfig } from '../context';
const { resolveSkin } = useLumoraConfig();
// resolveSkin(ComponentName, VariantName)
const baseClasses = computed(() => resolveSkin('LuButton', 'primary'));
```

### Component Structure
Every component should be written in Vue SFC `<script setup>` syntax and must define:
1. `defineOptions({ name: 'LuComponent' })`
2. Strongly typed `Props` interface
3. Strongly typed `Emits` definition (if applicable)

### No Tailwind in Templates
Do not hardcode Tailwind classes directly in `<template>`. Use the `resolveSkin` resolver to fetch classes from the active skin configuration (`src/skins/`).

---

## 4. Workflow & Verification Rules

### Zero-Raw-HTML Showcase
The `apps/showcase` reference app must be built entirely using the library's exported components. **No raw HTML** (`<div>`, `<span>`, `<section>`) should be used in the showcase views, except in `index.html`.

### The Verification Gate
No task is complete until the following three commands pass without error:
```bash
bun run check          # Type-checking for the workspace
bun run test --run     # Run Vitest test suite
bun run build          # Builds both the library and showcase app
```

---

## 5. NEVER-DO-THIS LIST (Critical Constraints)

* `[NEVER]` Hard-code any color, padding, shadow, border, or font-size in a `.vue` template.
* `[NEVER]` Import a Desktop component from inside a Mobile or Embedded component.
* `[NEVER]` Mutate `config.skin` nested properties — always replace the root reference.
* `[NEVER]` Run `npm publish` locally — CI handles publishing exclusively.
* `[NEVER]` Declare a task done without running: `bun run check && bun run test --run && bun run build`.
* `[NEVER]` Create a new component without adding its skin key to `skins/components.ts`.
* `[NEVER]` Create a new `lu-*` class in a component without adding it to `lumora.css`.
* `[NEVER]` Add a peer dependency without updating `scripts/postinstall.mjs`.
* `[NEVER]` Add a heavy test dependency without adding a `vitest.config.mts` alias → `__mocks__/empty.ts`.
* `[NEVER]` Reference a file path in any doc that doesn't exist in the actual source tree.
* `[NEVER]` Push directly to main — use PRs or the release commit flow.
* `[NEVER]` Use old prefix naming (`LuM*`, `LuD*`, `LuE*`) — use full names (`LuMobile*`, `LuDesktop*`, `LuEmbedded*`).

---

## 6. ERROR RECOVERY PLAYBOOK

### If `bun run check` fails:
1. Read the full error — is it in a new `.vue` file or existing code?
2. Common: `resolveSkin()` return type — check `context.ts` for the correct signature.
3. Common: Missing export — check `components/index.ts` or `shell/index.ts`.
4. Common: Cross-surface import — grep for the import and reroute through shared `Lu*` primitives.
5. Fix all errors before proceeding — **never skip or suppress**.

### If `bun run test --run` fails:
1. Read the test name and error — identify the component.
2. Check: does the test provide `LumoraUIConfigKey` via `global.provide`?
3. Check: is a heavy dependency being imported? Add alias to `vitest.config.mts`.
4. Run single file: `bun run test packages/core/src/components/__tests__/[component].test.ts`
5. Check `__mocks__/empty.ts` — does it export what the failing import expects?

### If `bun run build` fails:
1. Check `packages/core/vite.config.ts` — is the new component exported as an entry?
2. Check for circular imports between surface directories (`shell/desktop` ↔ `shell/mobile`).
3. Check that all new composables are exported from `src/composables/index.ts`.
4. Check that new skin files are exported from `src/skins/index.ts`.

---

## 7. First Places to Look

* Need to check default skins? `packages/core/src/skins/`
* Need structural CSS details? `packages/core/src/lumora.css`
* Need the plugin injector logic? `packages/core/src/plugin.ts`
* Need to add a new primitive? `packages/core/src/components/`
* Need to run local tests? `packages/core/src/components/__tests__/`
