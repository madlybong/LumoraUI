# AI Agent Guide — `@astrake/lumora-ui`

## Purpose

This document helps coding agents make aligned changes without re-deriving the current
framework direction or violating the headless / surface-isolated architecture.

## High-confidence facts

- The active workspace is intentionally surface-isolated.
- The only published package is `packages/core`, published as `@astrake/lumora-ui`.
- The only reference app is `apps/showcase`.
- The framework is headless-first: components own structure and behavior only.
- Visual styling is entirely the consumer's responsibility via `--lu-*` CSS tokens.
- Surface isolation is a hard boundary: Mobile, Desktop, and Embedded do not import each other.

## Architectural intent

Optimize for:

- A slim, headless primitive layer per surface.
- Token-driven theming with no class-level theming.
- Three independent entry points — consumers bundle only what they need.
- Named-slot shell architecture for layout composition.
- Full TypeScript + Vue 3 Composition API correctness.
- Docs that match the current component API at all times.

## Where changes should go

- New or changed component behavior → `packages/core/src/{mobile,desktop,embedded,shared}/`
- New or changed tokens → `packages/core/src/tokens/`
- New or changed skin shape → `packages/core/src/skins/`
- New or changed composables → `packages/core/src/composables/`
- Shell layout changes → `packages/core/src/shell/`
- Public type contract changes → `packages/core/src/types.ts`
- Usage examples → `apps/showcase/src/views/`
- Build and verification → `tools/`

## Change heuristics

- If a capability changes the public component API, update `types.ts` and the component's
  `defineProps` / `defineEmits` first.
- If a capability adds a new token, add it in `tokens/` with a default value, then use it
  in the component. Do not hard-code values in component styles.
- If a capability is surface-specific, it belongs in that surface's directory only.
- If a capability applies to all surfaces, it belongs in `shared/` or `composables/`.
- If a capability would force cross-surface imports, it violates the architecture — pause and refactor.

## Safe extension patterns

### Adding a component to a surface

1. Create the `.vue` file in the correct surface directory.
2. Export it from `src/{surface}/index.ts`.
3. Ensure it uses only `--lu-*` tokens for any inline style values.
4. Add usage to `apps/showcase`.
5. Add Vitest tests.
6. Update docs.

### Adding a design token

1. Add the token to `src/tokens/` with a sensible default.
2. Add surface-specific overrides where needed (e.g., Embedded overrides for performance).
3. Use the token in any component that needs it.
4. Document the token in `docs/ARCHITECTURE.md`.

### Adding a composable

1. Add it to `src/composables/`.
2. Export from `src/composables/index.ts`.
3. Verify it works independently of any specific surface.
4. Add tests and update docs.

### Updating a skin

1. Update the skin type in `src/skins/index.ts`.
2. Verify `LumoraUI` plugin applies it correctly.
3. Update the showcase to demonstrate the updated skin.

## Known current limitations

- Desktop and Embedded surfaces are still in active development.
- No WCAG accessibility audit has been performed.
- Motion tokens are defined but not yet fully integrated.
- The showcase app is a demo only — the full docs site is planned at `https://ui.lumora.astrake.com`.

## Safe-change checklist

- Does the change stay within the correct surface boundary?
- Does the change use `--lu-*` tokens for all visual values?
- Does the change keep the public API minimal?
- Does the change keep docs, tests, and showcase aligned?
- Did you avoid cross-surface imports?

## Validation commands

```bash
bun run check       # vue-tsc typecheck
bun test            # Vitest test suite
bun run build       # Vite library build (three entry points)
```

For the showcase app:

```bash
bun run dev         # starts apps/showcase dev server
```
