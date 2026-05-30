# CLAUDE.md — Claude Code Developer Guide

Operating manual and command index for working in `@astrake/lumora-ui`.

---

## 🛠️ Essential Commands

### Development Server
* Start showcase app: `bun run dev`

### Verification Suite
* **Full Verification**: `bun run check && bun test && bun run build`
* Static Vue / TypeScript Typecheck: `bun run check`
* Run Vitest Unit Tests: `bun run test --run`
* Run Single Test File: `bun test packages/core/src/components/__tests__/LuForm.test.ts`
* Library & Showcase Compiles: `bun run build`

### Version & Release Tools
* Sync Monorepo Versions: `bun run version:sync`
* Prepare Release: `bun run release:prep`

---

## 📐 Development Guidelines

### Headless Styling Rule
* **No Opinionated Styling**: Never hardcode colors, padding, borders, shadows, or alignments in `.vue` files or template tags.
* **Skin Resolution**: Always resolve visual style classes dynamically using the `resolveSkin()` method inside the `useLumoraConfig()` composable:
  ```ts
  const resolvedSkin = computed(() => resolveSkin("LuButton", props.variant) || "lu-button");
  ```

### Surface Isolation Boundaries
* **Absolute Separation**: Component systems for Desktop (`LuDesktop*`), Mobile (`LuMobile*`), and Embedded (`LuEmbedded*`) must remain strictly isolated. **Never cross-import across surfaces**.
* **Shared Layer**: Surface-agnostic primitives (prefix `Lu*`) reside in `src/components/` and are usable globally.

### Escape Hatch CSS
* Custom CSS is reserved for structural fallbacks inside `packages/core/src/lumora.css`.
* Every custom fallback class in a component (prefixed with `lu-`) **must** have a corresponding class definition inside `lumora.css`.

### Reactivity Setup
* **Plugin State**: The dynamic config is `shallowReactive`.
* **State Updates**: Always replace the `config.skin` object reference with a new reference instead of mutating nested properties dynamically.

---

## 📖 Deep References

Refer to the `.agent/` knowledge directory for deep architectural specifications:
* Guidelines & Constraints: **[`.agent/rules.md`](file:///.agent/rules.md)**
* Agentic Workflows: **[`.agent/skills.md`](file:///.agent/skills.md)**
* Dynamic Skin Merges: **[`.agent/architecture.md`](file:///.agent/architecture.md)**
* Testing & Mount Mocks: **[`.agent/testing.md`](file:///.agent/testing.md)**
