# Google Antigravity — Project Rules for `@astrake/lumora-ui`

This document represents the absolute, non-negotiable guidelines and rules for Google Antigravity and other AI coding agents when working inside this repository.

---

## 1. Core Architectural Pillars

### Headless Component Framework
* **No Opinionated Styling in Vue templates**: Visual styles (colors, border-radii, shadows, margins, etc.) must NEVER be hard-coded in `.vue` files or `.css` classes inside templates.
* **Skin-Driven Design**: Spacing, layout, and visual styling must flow entirely through the skin config (`SkinMap`) and be resolved dynamically at runtime using the `resolveSkin()` method.
* **Component-owned Structure only**: Components manage structural semantics (HTML elements, slots), functional state, accessibility tags, and core events.

### Absolute Surface Isolation
The library targets three distinct surface targets which must remain strictly isolated:
1. **Desktop** (`packages/core/src/shell/desktop/` or components prefix `LuDesktop*`)
2. **Mobile** (`packages/core/src/shell/mobile/` or components prefix `LuMobile*`)
3. **Embedded** (`packages/core/src/shell/embedded/` or components prefix `LuEmbedded*`)

> [!CAUTION]
> **Zero Cross-Surface Imports**: Desktop components must NEVER import from Mobile or Embedded components, composables, or directories, and vice versa. Common primitives (prefix `Lu*`) reside in `src/components/` and are surface-agnostic; they can be used anywhere.

### CSS Escape Hatch Invariant
* **`lumora.css` is an escape hatch**: Reserved exclusively for complex styles Tailwind utilities cannot resolve easily (e.g., custom animations, standard pseudo-classes, responsive/container queries baseline structural layout).
* **`lu-` Class Namespace Invariant**: Every custom structural CSS class used as a fallback or structure in a component must be prefixed with `lu-` (e.g., `lu-button`, `lu-dock`) and MUST have a corresponding class definition in `packages/core/src/lumora.css`.

---

## 2. Coding Patterns & Theming APIs

### Skin Resolution Pattern
Components must always resolve their skin classes dynamically using the `useLumoraConfig()` composable:

```vue
<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();

// Always use the component name as the primary skin key
const resolvedSkin = computed(() => resolveSkin("LuButton", props.variant) || "lu-button");
</script>

<template>
  <button :class="resolvedSkin">
    <slot />
  </button>
</template>
```

### Skin Map Precedence
* Skin classes override structural fallback classes.
* When adding default classes, ensure they combine or merge correctly without creating conflicts. The utility helper `cn()` handles merge logic inside `resolveSkin()`.

### Skin State Reactivity
* The plugin context config is `shallowReactive`.
* **Reactivity Invariant**: When mutating skins dynamically at runtime, assign a completely **new skin object** to `config.skin` rather than mutating nested properties (e.g., do `config.skin = { ...newSkin }` instead of `config.skin.LuButton.default = '...'`).

---

## 3. Workflow & Verification Rules

### Conventional Commits
All commits must strictly follow standard Conventional Commits formatting:
* `feat:` for new features or new components
* `fix:` for bug fixes
* `docs:` for documentation updates
* `chore:` for chore updates, tool changes, or release preparation

### Mandatory Local Verification Checklist
Before completing any coding task or declaring "Done", you MUST execute and pass the following three validation steps:
1. **Typecheck**: `bun run check` (runs `vue-tsc` to ensure zero compilation or type errors).
2. **Unit Tests**: `bun test` (runs all Vitest suites and checks for behavior regression).
3. **Production Build**: `bun run build` (builds packages and verifies showcase app compiles flawlessly).

---

## 4. First Places to Look
* `docs/CONSUMER_GUIDE.md` — guidelines for building apps that *consume* this library.
* `packages/core/src/types.ts` — contains the `SkinMap` and `LumoraUIConfig` definitions.
* `packages/core/src/context.ts` — contains the `resolveSkin()` implementation.
* `packages/core/src/skins/default.ts` — source of truth for the default Tailwind skin preset.
