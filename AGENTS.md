# LumoraUI AI Agent Guide

## Purpose

This document helps coding agents understand the structural, headless, zero-CSS philosophy of `@astrake/lumora-ui`.

## Principles

1. **Zero CSS**: No stylesheet ships with any component. Components have no visual output by default.
2. **Structural purity**: Components enforce semantic HTML structure and layout contracts, never appearance.
3. **Zero-Raw-HTML Constitution**: Consumers of the framework MUST strive to eliminate raw HTML tags (`<div>`, `<span>`, `<a>`, `<table>`, etc.) from their view layer, replacing them with 100% canonical `Lu*` primitives.
4. **Individually importable**: Every component tree-shakes cleanly. One-line usage.
5. **Skin-external**: Appearance is applied via CSS classes (Tailwind or custom) passed globally through the plugin init (`app.use(createLumoraUI({ skin }))`). View layers should not contain hardcoded Tailwind classes; styling should be managed via the `variant` prop.
6. **WPF/Qt layout model**: Layout primitives mirror docking, stacking, splitting, and grid patterns from native desktop toolkits.
7. **Enterprise shells**: Pre-built application shell layouts for Mobile, Desktop, and Embedded.

## The Zero-Raw-HTML Constitution

When building applications or documentation with LumoraUI, coding agents must adhere to the following mapping rules to ensure strict design system compliance:

| Raw HTML Element | LumoraUI Canonical Primitive | Usage Notes |
| :--- | :--- | :--- |
| `<div>` (flex/grid) | `LuStack` / `LuGrid` / `LuDock` | Always prefer `LuStack` for linear 1D flex layouts. |
| `<div>` (container) | `LuCard` / `LuFill` | `LuCard` provides a generic surface container. `LuFill` is for greedy flex containers. |
| `<p>`, `<span>`, `<h1>` | `LuText` | Use the `as` prop to dictate the semantic tag (`as="h1"`), and `variant` to dictate styling. |
| `<a>`, `<router-link>` | `LuLink` | Polymorphic anchor that intelligently maps to `RouterLink` if `to` is provided, or `<a>` if `href` is used. |
| `<hr>` | `LuDivider` | Supports horizontal and vertical orientations. |
| `<table>`, `<tr>`, `<td>` | `LuTable` Suite | Use `LuTable`, `LuTableHead`, `LuTableBody`, `LuTableRow`, `LuTableHeadCell`, `LuTableCell`. |
| `<button>` | `LuButton` | Supports standard button behavior, and `as` polymorphic rendering. |
| *Header Blocks* | `LuPageHeader` | For standardized title + subtitle combinations. |

## Package Architecture

- `packages/core/` (published as `@astrake/lumora-ui`)
  - Subpaths: `.`, `./layout`, `./shell`, `./components`, `./skins`
  - `src/skins/default.ts` contains the Tailwind default skin string map.
- `apps/showcase/` (Vite + Vue 3 reference app)

## Component Contract

Do not write `<style>` blocks in Vue SFCs within this package.
Resolve skins using `useLumoraConfig()`.

```vue
<template>
  <div v-bind="$attrs" :class="skin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLumoraConfig } from '../context'

const props = defineProps<{ variant?: string }>()
const { resolveSkin } = useLumoraConfig()
const skin = computed(() => resolveSkin('ComponentName', props.variant))
</script>
```
