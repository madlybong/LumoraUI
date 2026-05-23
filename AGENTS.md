# Lumora UI Agent Guide

This is the operating guide for AI coding agents working in this repository.

> [!IMPORTANT]
> **Primary Rulebook**: A comprehensive repository of project constraints, architectural guides, authoring checklists, and test patterns has been established inside the **`.agent/`** directory. Before making any modifications, AI coding agents must read and follow **[`.agent/rules.md`](file:///.agent/rules.md)**.

---

## Mission

`@astrake/lumora-ui` is a **headless Vue 3 component framework** with three surface targets.
Keep the repo aligned with this model:

- one published package: `@astrake/lumora-ui`
- one showcase app: `apps/showcase`
- three surface namespaces: `LuMobile*` (mobile), `LuDesktop*` (desktop), `LuEmbedded*` (embedded)
- one shared primitive layer: `Lu*` (LuButton, LuInput, LuIcon, LuForm, etc.)
- one structural CSS escape hatch: `src/lumora.css` (for keyframes/psuedo-classes)
- one skin injection system: `SkinMap` via `createLumoraUI({ skin })` and `useLumoraConfig()`

> **Building a consumer app?** Read `docs/CONSUMER_GUIDE.md` instead — it is written for
> agents building apps that USE this framework, not agents working inside it.

---

## Current State (v0.5.0)

| Subsystem | Status |
|---|---|
| Plugin (`plugin.ts`) | `shallowReactive` — reactive skin switching works |
| CSS baseline (`src/lumora.css`) | Escape hatch for non-Tailwind CSS (keyframes, etc.) |
| Shell components | Fully reliant on SkinMap for structure and style |
| Layout primitives | Fully reliant on SkinMap for structure and style. Includes new LuCodeBlock native syntax highlighting |
| Skin system | `SkinMap` keys dictate all layout and visual properties via `resolveSkin()` |
| Showcase App | 100% Zero-Raw-HTML adherence. All previews use framework primitives only. |
| Tailwind helper (`src/tailwind.ts`) | Exports `getLumoraSourceDir()` for Tailwind v4 `@source` directive |
| Form validation (`LuForm`) | Orchestrator with `LuInput`/`LuSelect`/`LuSwitch` integration |

---

## Directory Navigation

Refer to the targeted guides within `.agent/` depending on your task:

* 📚 **Global Rulebook**: **[`.agent/rules.md`](file:///.agent/rules.md)** (Headless constraints, Surface isolation boundaries)
* 🏗️ **Core Architecture**: **[`.agent/architecture.md`](file:///.agent/architecture.md)** (Dynamic skin resolution flow, dynamic merges)
* 🧩 **Component Checklists**: **[`.agent/component-authoring.md`](file:///.agent/component-authoring.md)** (Step-by-step component creation checklist)
* 🎨 **Skin Customization**: **[`.agent/skin-authoring.md`](file:///.agent/skin-authoring.md)** (Component variants, class merges)
* 🧪 **Testing Framework**: **[`.agent/testing.md`](file:///.agent/testing.md)** (Vitest configuration, mount mocks)
* 📦 **Release Life cycle**: **[`.agent/release.md`](file:///.agent/release.md)** (Bumping versions, synchronization, publishes)
* 💻 **Reference Previews**: **[`.agent/showcase.md`](file:///.agent/showcase.md)** (Showcase views, local verification server)

---

## Release Workflow

1. Update `VERSION` file.
2. Run `bun run version:sync` (syncs versions to all `package.json` files).
3. Update `CHANGELOG.md` manually.
4. Commit: `git commit -am "chore(release): bump version to X.Y.Z"`.
5. Push to `main` — the release workflow fires automatically.

Do **not** manually create npm packages or GitHub releases — automation handles this.

---

## Mandatory Verification Command

Before finalizing any changes or declaring a task complete, run and pass this validation suite:
```bash
bun run check          # vue-tsc typecheck
bun run test --run     # Vitest suite runs (must use 'run' script, not native bun test)
bun run build          # Compiles packages & showcase application
```
