# Lumora UI Agent Guide

This is the short operating guide for AI coding agents working in this repository.

## Mission

`@astrake/lumora-ui` is a headless Vue 3 component library with three surface targets.
Keep the repo aligned with this model:

- one published package: `@astrake/lumora-ui`
- one showcase app: `apps/showcase`
- three surface namespaces: `LuM*` (mobile), `LuD*` (desktop), `LuE*` (embedded)
- one shared primitive layer: `Lu*`
- one token system: `--lu-*` CSS custom properties

## First places to read

- `README.md`
- `docs/PROJECT.md`
- `docs/ARCHITECTURE.md`
- `docs/AI_AGENT_GUIDE.md`
- `docs/DEVELOPMENT.md`
- `packages/core/src/types.ts`
- `packages/core/src/index.ts`
- `packages/core/src/skins/index.ts`

## Repo map

- `packages/core/src/tokens/` — CSS custom property definitions (`--lu-*`)
- `packages/core/src/shared/` — cross-surface primitives (`LuIcon`, `LuSpinner`, `LuBadge`, `LuPortal`)
- `packages/core/src/mobile/` — Mobile components (`LuM*`)
- `packages/core/src/desktop/` — Desktop components (`LuD*`)
- `packages/core/src/embedded/` — Embedded components (`LuE*`)
- `packages/core/src/shell/` — shell layout components with named-slot architecture
- `packages/core/src/composables/` — shared Vue composables
- `packages/core/src/skins/` — skin configuration system
- `apps/showcase/` — Vite + Vue 3 reference app
- `tools/` — build, typecheck, version sync, changelog scripts
- `.github/workflows/` — `ci.yml`, `release.yml`, `version-check.yml`, `codeql.yml`

## Working rules

- Keep components headless — structure and behavior only; no opinionated visual styles.
- Respect the surface isolation boundary — no cross-surface imports.
- All tokens must use the `--lu-*` namespace.
- Skin configuration drives theming — do not hard-code colors in components.
- Keep the public API surface minimal per surface target.
- Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`, etc.) so the changelog tool works correctly.
- Add tests for any new component behavior.
- Update docs in the same change.

## Release workflow

To release a new version:

1. Update `VERSION` file.
2. Run `bun run release:prep` (syncs versions + generates changelog).
3. Commit: `git commit -am "chore(release): bump version to X.Y.Z"`.
4. Push to `main` — the release workflow fires automatically.

Do **not** manually create npm packages or GitHub releases — automation handles this.

## What "done" looks like

- `bun run check` passes (`vue-tsc`)
- `bun test` passes
- `bun run build` passes (three Vite entry points)
- docs match the current component API
- `bun run version:check` produces a clean `git diff`

## Common mistakes to avoid

- Adding raw HTML in components — use semantic primitives instead
- Hard-coding color values — use `--lu-color-*` tokens
- Adding Desktop imports into Mobile components or vice versa
- Tracking build artifacts (`dist/`, `*.tgz`, `*.tsbuildinfo`)
- Writing non-conventional commits that break changelog grouping
- Modifying `packages/core/package.json` version directly — edit `VERSION` file only
