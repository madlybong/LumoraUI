# Development Workflow — `@astrake/lumora-ui`

## Local setup

```bash
git clone https://github.com/madlybong/LumoraUI.git
cd LumoraUI
bun install
bun run check
bun test
```

## Main commands

Start the showcase app (Vite dev server):

```bash
bun run dev
```

Typecheck all packages:

```bash
bun run check
```

Run the full test suite:

```bash
bun test
```

Build the library (Vite library mode — three entry points):

```bash
bun run build
```

Sync all `package.json` versions from the `VERSION` file:

```bash
bun run version:sync
```

Generate a changelog entry for the current version:

```bash
bun run changelog
```

Prepare a release (sync + changelog in one step):

```bash
bun run release:prep
```

## Repo conventions

- **TypeScript only** — no plain `.js` files in `packages/core`.
- **Vue 3 Composition API** — use `<script setup>` for all components.
- **Headless components** — no hard-coded colors, spacing, or visual styles; use `--lu-*` tokens.
- **Surface isolation** — `mobile/`, `desktop/`, `embedded/` do not import from each other.
- **Bun workspace** with two active projects:
  - `packages/core` — the published library
  - `apps/showcase` — the reference demo app
- Root `tools/` scripts orchestrate check, build, version, and changelog.

## Component authoring workflow

1. Identify the correct surface: `mobile/`, `desktop/`, `embedded/`, or `shared/`.
2. Create the `.vue` file with `<script setup lang="ts">`.
3. Define props with explicit types — no `any`.
4. Use only `--lu-*` CSS custom properties for styling.
5. Export the component from the surface's `index.ts`.
6. Add a usage example in `apps/showcase/src/views/`.
7. Add Vitest unit tests.
8. Update relevant docs.

## Token authoring workflow

1. Add the token to `packages/core/src/tokens/` with a default value.
2. Add surface overrides in the appropriate surface root styles if needed.
3. Use the token in the component that requires it.
4. Document the new token in `docs/ARCHITECTURE.md`.

## Coding conventions

- Keep component props minimal and explicit.
- Prefer `defineExpose` sparingly — expose only what consumers genuinely need.
- Prefer slots over prop-driven content injection for flexible composition.
- Keep composables side-effect-free where possible.
- Emit typed events — no untyped `$emit`.
- Keep the skin shape flat and predictable.
- Update tests and docs in the same change when the component API changes.

## Verification rule

Before closing any work, run:

```bash
bun run check
bun test
bun run build
```

All three must pass cleanly.

## Documentation rule

Any change to a component's props, emits, slots, or tokens must update the relevant
docs in the same commit or PR. The showcase app must reflect the updated API.
