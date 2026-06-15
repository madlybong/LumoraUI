# Lumora UI Agent Guide

This is the operating guide for Google Antigravity working in this repository.

> [!IMPORTANT]
> **Primary Rulebook & Workflows**: A structured directory of rules, workflows, and references is established inside the **`.agents/`** directory. Before making any modifications, read and follow the auto-detected configurations under:
> - Rules: **[`.agents/rules/`](file:///.agents/rules/)**
> - Workflows: **[`.agents/workflows/`](file:///.agents/workflows/)**
>
> 🤖 **New to this repo?** Read **[`.agents/rules/context-reentry.md`](file:///.agents/rules/context-reentry.md)** first.

---

## Mission

`@astrake/lumora-ui` is a **headless Vue 3 component framework** with three surface targets.
Keep the repo aligned with this model:

- one published package: `@astrake/lumora-ui`
- one showcase app: `apps/showcase`
- three surface namespaces: `LuMobile*` (mobile), `LuDesktop*` (desktop), `LuEmbedded*` (embedded)
- one shared primitive layer: `Lu*` (LuButton, LuInput, LuIcon, LuForm, etc.)
- one structural CSS layer: `packages/core/src/styles/*.css` (static BEM CSS)
- one lightweight plugin system via `createLumoraUI()`

> **Building a consumer app?** Read `docs/CONSUMER_GUIDE.md` instead — it is written for
> agents building apps that USE this framework, not agents working inside it.

---

## Current State (v0.8.0)

| Subsystem | Status |
|---|---|
| Plugin (`plugin.ts`) | `shallowReactive` — config container (no SkinMap) |
| CSS baseline (`packages/core/src/styles`) | Modular static BEM CSS files (`components.css`, `shell.css`, etc.) |
| Shell components | Fixed `100dvh` layout, static BEM CSS structure |
| Layout primitives | Fully migrated to static BEM CSS. Charts have been removed. |
| Skin system | **DELETED**. Component classes are static. |
| Showcase App | 100% Zero-Raw-HTML adherence. Recipes isolated in `sc-*` namespace. |
| Tailwind helper (`src/tailwind.ts`) | Exports `getLumoraSourceDir()` for Tailwind v4 `@source` directive |
| Form validation (`LuForm`) | Orchestrator with `LuInput`/`LuSelect`/`LuSwitch` integration |
| Advanced Components | `LuPlanner`, `LuSelect` (rebuilt), `LuDataGrid` (extended), `LuTimeline`, `LuAccordion`, `LuToast`, `LuChip`, `LuDrawer`, `LuList`, `LuPopover`, `LuBottomSheet` |
| Floating-UI | Integrated via `useFloating` composable |

---

## Directory Navigation

Refer to the targeted guides within `.agents/` depending on your task:

* 📚 **Rules & Invariants**: **[`.agents/rules/`](file:///.agents/rules/)**
  - **[Headless Invariant](file:///.agents/rules/headless-styling.md)**
  - **[Surface Isolation](file:///.agents/rules/surface-isolation.md)**
  - **[Component Structure](file:///.agents/rules/component-structure.md)**
  - **[Styles Directory](file:///.agents/rules/styles-directory.md)**
  - **[BEM Class Index](file:///.agents/reference/bem-class-index.md)**
  - **[Testing Contracts](file:///.agents/rules/testing-contracts.md)**
  - **[Naming Conventions](file:///.agents/rules/naming-conventions.md)**
  - **[Reactivity Model](file:///.agents/rules/reactivity-model.md)**
  - **[Context Re-entry](file:///.agents/rules/context-reentry.md)**

* 🤖 **Workflows**: **[`.agents/workflows/`](file:///.agents/workflows/)**
  - **[DOC-SYNC](file:///.agents/workflows/doc-sync.md)** (Sync API documentation)
  - **[BUILD-TEST-RELEASE](file:///.agents/workflows/build-test-release.md)** (Version release flow)
  - **[AI-ADOPT](file:///.agents/workflows/ai-adopt.md)** (Knowledge base refresh)
  - **[CONSTITUTION-CHECK](file:///.agents/workflows/constitution-check.md)** (Automated rule validation)
  - **[NEW-COMPONENT](file:///.agents/workflows/new-component.md)** (Step-by-step component creation checklist)

* 📖 **References & Specifications**: **[`.agents/reference/`](file:///.agents/reference/)**
  - **[Architecture Blueprint](file:///.agents/reference/architecture.md)**
  - **[Composables Reference](file:///.agents/reference/composables.md)**
  - **[Betterment Backlog](file:///.agents/reference/betterment.md)**
  - **[Showcase Application Docs](file:///.agents/reference/showcase.md)**
  - **[Release & Lifecycle Reference](file:///.agents/reference/release.md)**

---

## Mandatory Verification Command

Before finalizing any changes or declaring a task complete, run and pass this validation suite:
```bash
bun run check          # vue-tsc typecheck
bun run test --run     # Vitest suite runs
bun run build          # Compiles packages & showcase application
```
