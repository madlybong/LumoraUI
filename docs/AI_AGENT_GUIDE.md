# AI Agent Guide — `@astrake/lumora-ui`

## Purpose

This document helps agents making changes **inside the framework repository** stay aligned
with the architectural direction. For building **consumer apps**, see `docs/CONSUMER_GUIDE.md`.

---

## Framework Identity

`@astrake/lumora-ui` is a **headless Vue 3 component library** with three strictly isolated
surface targets:

| Surface | Components | Shell |
|---|---|---|
| **Desktop** | `LuDesktop*` | `LuDesktopShell` |
| **Mobile** | `LuMobile*` | `LuMobileShell` |
| **Embedded** | `LuEmbedded*` | `LuEmbeddedShell` |

Shared/cross-surface primitives: `LuButton`, `LuInput`, `LuSelect`, `LuSwitch`, `LuIcon`, `LuForm`, layout primitives.

---

## Architecture

### How Theming Works

1. Consumer defines a `SkinMap` (plain TypeScript object mapping component names to class strings)
2. Plugin installs the skin: `app.use(createLumoraUI({ skin: mySkin }))` → `shallowReactive(config)` → `app.provide()`
3. Each component calls `const { resolveSkin } = useLumoraConfig()` → `inject(LumoraUIConfigKey)`
4. `resolveSkin("LuButton", "primary")` returns `skinMap.LuButton.default + skinMap.LuButton.primary`
5. Fallback if no skin: `resolveSkin("LuButton") || "lu-button"` — uses framework CSS class from `lumora.css`

### `lu-*` CSS Namespace

All structural/layout CSS shipped by the framework uses the `lu-` prefix. Defined in `src/lumora.css`.

**Invariant:** Every `lu-xyz` class reference in a component **must** have a corresponding `.lu-xyz { }` rule in `lumora.css`. This is a hard rule — violations mean invisible/broken layouts for consumers who don't use Tailwind.

### Skin values win over `lu-*` fallbacks

```ts
// Component pattern — skin overrides structural default
const resolvedSkin = computed(() => resolveSkin("LuDesktopTopBar", props.variant) || "lu-desktop-top-bar")
// OR for classes that always apply alongside skin:
const resolvedSkin = computed(() => [resolveSkin("LuFill", props.variant), "lu-fill"])
```

---

## High-Confidence Facts

- Active workspace is intentionally surface-isolated.
- Only published package: `packages/core` as `@astrake/lumora-ui`.
- Only reference app: `apps/showcase`.
- Framework is headless-first: components own structure and behavior only.
- Visual styling is entirely the consumer's responsibility via the skin system.
- Surface isolation is a hard boundary — Mobile, Desktop, and Embedded never import each other.
- The plugin config (`LumoraUIConfig`) is `shallowReactive` — mutations to `config.skin` are reactive.
- The `tailwind.ts` helper exports `getLumoraSourceDir()` for Tailwind v4 `@source` directive support.

---

## Current Limitations

- No WCAG accessibility audit has been performed.
- Motion tokens (`--lu-motion-*`) are partially defined but not fully integrated.
- Mobile-specific components beyond `LuMobileShell` are limited.
- The full docs site at `https://ui.lumora.astrake.com` is planned but not live.

---

## Where Changes Go

| Type of Change | Location |
|---|---|
| New/changed component behavior | `packages/core/src/components/` or surface shell dir |
| New layout primitive | `packages/core/src/layout/` |
| New `lu-*` CSS class | `packages/core/src/lumora.css` |
| New/changed skin types | `packages/core/src/types.ts` |
| New/changed composable | `packages/core/src/composables/` |
| Usage examples | `apps/showcase/src/views/` |
| Build/tooling | `tools/` |

---

## Safe Extension Patterns

### Adding a new component

1. Create `.vue` file in correct surface or `components/` dir.
2. Export from `src/components/index.ts` (or shell index).
3. Use `resolveSkin("ComponentName") || "lu-component-class"` pattern.
4. Define `.lu-component-class {}` structural CSS in `lumora.css`.
5. Add showcase demo.
6. Add Vitest tests.

### Adding a structural CSS class

1. Add to `src/lumora.css` under the correct surface section.
2. Use the `lu-` prefix.
3. Reference it in the component as a fallback.

---

## Validation Commands

```bash
bun run check       # vue-tsc typecheck
bun test            # Vitest (run via: bun run test)
bun run build       # Full build: types + Vite showcase
```

---

## Safe-Change Checklist

- Does the component use `lu-*` classes as structural fallback (not Tailwind)?
- Is every `lu-*` class referenced in the component also defined in `lumora.css`?
- Does the change stay within the correct surface boundary?
- Does the change avoid hard-coded colors or decorative styles?
- Did you update docs and tests?
