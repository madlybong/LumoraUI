# Lumora UI Agent Guide

This is the operating guide for AI coding agents working in this repository.

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

## Current State (v0.2.0+)

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

## Repo Map

```
packages/core/src/
  plugin.ts          ← Vue plugin — installs shallowReactive config via provide()
  context.ts         ← useLumoraConfig() — inject + resolveSkin() + resolveIcon()
  types.ts           ← SkinMap, LumoraUIConfig, IconResolver
  lumora.css         ← Framework-owned CSS escape hatch (rarely used)
  tailwind.ts        ← getLumoraSourceDir() for Tailwind v4 @source
  index.ts           ← Public entry point — all exports
  components/        ← Shared primitives: LuButton, LuCodeBlock, LuInput, LuToggleGroup, LuIcon...
  shell/
    desktop/         ← LuDesktopShell, LuDesktopTopBar, LuDesktopSidebar, LuDesktopRailBar...
    mobile/          ← LuMobileShell
    embedded/        ← LuEmbeddedShell
  layout/            ← LuDock, LuFill, LuFixed, LuScroll, LuStack, LuGrid, LuSplit, LuOverlay
  composables/       ← useTheme, useRail, useSplit
  skins/default.ts   ← defaultSkin preset (Tailwind-based, optional)
apps/showcase/       ← Reference app demonstrating all components
tools/               ← build.ts, check.ts, version.ts, changelog.ts
```

---

## Architectural Rules

- **Components are headless.** No opinionated visual styles in `.vue` files. All layout, spacing, and styling flow through the skin string.
- **`lumora.css` is an escape hatch.** It is reserved for complex CSS that Tailwind utilities cannot handle well (e.g., specific animation keyframes). Do not use it for standard layout.
- **Surface isolation is absolute.** Desktop components never import Mobile or Embedded, and vice versa.
- **`resolveSkin()` is the only theming API.** Never hard-code colors or decorative styles in components.

---

## Working Rules

- Keep components headless — structure and behavior only; no opinionated visual styles.
- All structure and visual design must come from the `defaultSkin` via `resolveSkin()`.
- Respect the surface isolation boundary — no cross-surface imports.
- Keep the public API surface minimal per surface target.
- Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`, etc.).
- Add tests for any new component behavior.
- Update docs in the same change.

---

## First Places to Read

- `docs/CONSUMER_GUIDE.md` — if you are building a consumer app
- `packages/core/src/types.ts` — SkinMap, LumoraUIConfig
- `packages/core/src/context.ts` — resolveSkin() implementation
- `packages/core/src/skins/default.ts` — The source of truth for all layout and styling

---

## Release Workflow

1. Update `VERSION` file.
2. Run `bun run version:sync` (syncs versions to all `package.json` files).
3. Update `CHANGELOG.md` manually.
4. Commit: `git commit -am "chore(release): bump version to X.Y.Z"`.
5. Push to `main` — the release workflow fires automatically.

Do **not** manually create npm packages or GitHub releases — automation handles this.

---

## What "Done" Looks Like

- `bun run check` passes (`vue-tsc`)
- `bun test` passes (Vitest)
- `bun run build` passes (full Vite showcase build)
- Docs match the current component API

---

## Common Mistakes to Avoid

| ❌ Mistake | ✅ Correct |
|---|---|
| Hard-coding Tailwind classes in Vue template | All classes must come from `resolveSkin()` |
| Adding CSS layout rules to `lumora.css` | Define structural layout in `defaultSkin` via Tailwind classes |
| Using `createRequire` glob pattern for Tailwind v4 | Use `@source` CSS directive |
| Importing Desktop components into Mobile shell | Respect surface isolation |
| Tracking build artifacts (`dist/`, `*.tgz`, `*.tsbuildinfo`) | Add to `.gitignore` |
| Modifying `packages/core/package.json` version directly | Edit `VERSION` file only |
| Non-conventional commits | Use `feat:`, `fix:`, `docs:`, `chore:` prefixes |
