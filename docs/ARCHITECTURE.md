# Architecture — `@astrake/lumora-ui`

## Layer model

```
┌─────────────────────────────────────────────────────────┐
│                   Consumer Application                  │
│         (any Vue 3 app — Vite, Nuxt, Electron)         │
└─────────────────────┬───────────────────────────────────┘
                      │  imports from
┌─────────────────────▼───────────────────────────────────┐
│               @astrake/lumora-ui                        │
│  ┌────────────┐ ┌────────────┐ ┌─────────────────────┐ │
│  │  /mobile   │ │  /desktop  │ │     /embedded       │ │
│  │  (LuM*)   │ │  (LuD*)   │ │     (LuE*)          │ │
│  └─────┬──────┘ └─────┬──────┘ └──────────┬──────────┘ │
│        └──────────────┴──────────────────┘             │
│                  Shared Layer (Lu*)                     │
│         LuIcon · LuSpinner · LuBadge · LuPortal        │
└─────────────────────────────────────────────────────────┘
                      │  resolves tokens from
┌─────────────────────▼───────────────────────────────────┐
│                 Token System (tokens/)                   │
│             --lu-* CSS custom properties                │
│    color · typography · spacing · radius · shadow · motion │
└─────────────────────────────────────────────────────────┘
```

## Package entry points (Vite library mode)

Each surface is a separate Vite entry point. Tree-shaking works at the entry-point level:

| Import path | Entry file | What it exports |
|-------------|-----------|----------------|
| `@astrake/lumora-ui` | `src/index.ts` | All surfaces + shared + plugin |
| `@astrake/lumora-ui/mobile` | `src/mobile/index.ts` | LuM* components only |
| `@astrake/lumora-ui/desktop` | `src/desktop/index.ts` | LuD* components only |
| `@astrake/lumora-ui/embedded` | `src/embedded/index.ts` | LuE* components only |

## Token system (`tokens/`)

All `--lu-*` custom properties are defined in `tokens/`. Each surface root element
(`[data-lu-surface="mobile"]`, `[data-lu-surface="desktop"]`, `[data-lu-surface="embedded"]`)
applies overrides appropriate for that context.

**Example overrides:**
- Embedded reduces `--lu-duration-*` and `--lu-shadow-*` to near-zero for performance.
- Mobile enlarges `--lu-space-*` scale for touch comfort.

## Skin system (`skins/`)

A "skin" is a structured object that overrides `--lu-*` token values at runtime.
Skins are applied via the `LumoraUI` Vue plugin:

```ts
app.use(LumoraUI, { skin: myCustomSkin })
```

The skin system is deliberately separate from the token file — tokens define the
shape; skins define the values.

## Shell components (`shell/`)

Each surface has a shell component that provides the primary layout container and
named-slot architecture:

| Component | Surface | Named slots |
|-----------|---------|-------------|
| `LuMobileShell` | Mobile | `nav`, `default`, `sheet` |
| `LuDesktopShell` | Desktop | `sidebar`, `header`, `default`, `panel` |
| `LuEmbeddedShell` | Embedded | `statusbar`, `default`, `alert` |

## Composables (`composables/`)

Shared composition functions — e.g., `useLuSkin()`, `useLuBreakpoint()`,
`useLuPortal()` — are available to both internal components and consuming apps.

## Component naming convention

| Prefix | Surface | Example |
|--------|---------|---------|
| `LuM` | Mobile | `LuMButton`, `LuMCard` |
| `LuD` | Desktop | `LuDTable`, `LuDModal` |
| `LuE` | Embedded | `LuEDisplay`, `LuENumpad` |
| `Lu` | Shared | `LuIcon`, `LuBadge` |

## Build pipeline

```
tools/build.ts
  └── Vite library mode
        ├── Entry: src/index.ts          → dist/index.{js,d.ts}
        ├── Entry: src/mobile/index.ts   → dist/mobile.{js,d.ts}
        ├── Entry: src/desktop/index.ts  → dist/desktop.{js,d.ts}
        └── Entry: src/embedded/index.ts → dist/embedded.{js,d.ts}
```

Types are generated via `vue-tsc` (`tools/check.ts`).
