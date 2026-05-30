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
│                 Token System (lumora.css)                │
│             --lu-* CSS custom properties                │
│    color · typography · spacing · radius · shadow · motion │
└─────────────────────────────────────────────────────────┘
```

## Package entry points (Vite library mode)

Each surface is a separate Vite entry point. Tree-shaking works at the entry-point level:

| Import path | Entry file | What it exports |
|-------------|-----------|----------------|
| `@astrake/lumora-ui` | `src/index.ts` | All components + plugin + types |
| `@astrake/lumora-ui/style` | `src/lumora.css` | Structural CSS baseline |
| `@astrake/lumora-ui/layout` | `src/layout/index.ts` | LuStack, LuGrid, LuSplit, LuDock, etc. |
| `@astrake/lumora-ui/shell` | `src/shell/index.ts` | LuDesktopShell, LuMobileShell, LuEmbeddedShell, etc. |
| `@astrake/lumora-ui/components` | `src/components/index.ts` | Lu* shared primitives and complex components |
| `@astrake/lumora-ui/composables` | `src/composables/index.ts` | Shared composition functions |
| `@astrake/lumora-ui/skins` | `src/skins/index.ts` | Default skin map and skin types |
| `@astrake/lumora-ui/tailwind` | `src/tailwind.ts` | `getLumoraSourceDir()` for Tailwind v4 `@source` |

## Token system

All `--lu-*` custom properties are defined in `src/lumora.css`. Each surface root element
(`[data-lu-surface="mobile"]`, `[data-lu-surface="desktop"]`, `[data-lu-surface="embedded"]`)
applies overrides appropriate for that context.

**Example overrides:**
- Embedded reduces `--lu-duration-*` and `--lu-shadow-*` to near-zero for performance.
- Mobile enlarges `--lu-space-*` scale for touch comfort.

## Skin system (`skins/`)

A "skin" is a `SkinMap` — a flat object whose keys are component names and values are
variant-to-class-string maps. Skins are injected via the Vue plugin:

```ts
import { createLumoraUI, type SkinMap } from '@astrake/lumora-ui';

const mySkin: SkinMap = {
  LuButton: { primary: 'bg-purple-600' },
};

app.use(createLumoraUI({ skin: mySkin }));
```

Components resolve their classes via `useLumoraConfig().resolveSkin(componentName, variant)`.
Consumer skin values are merged with defaults using `tailwind-merge`.

## Shell components (`shell/`)

Each surface has a shell component that provides the primary layout container and
named-slot architecture:

| Component | Surface | Named slots |
|-----------|---------|-------------|
| `LuMobileShell` | Mobile | `nav`, `default`, `sheet` |
| `LuDesktopShell` | Desktop | `topbar`, `rail`, `sidebar`, `content`, `statusbar` |
| `LuEmbeddedShell` | Embedded | `topbar`, `content`, `bottombar` |

## Composables (`composables/`)

Shared composition functions — e.g., `useDataGrid()`, `useFloating()`,
`useLuToast()` — are available to both internal components and consuming apps.

## Component naming convention

| Prefix | Surface | Example |
|--------|---------|---------|
| `LuMobile` | Mobile | `LuMobileButton`, `LuMobileCard` |
| `LuDesktop` | Desktop | `LuDesktopTable`, `LuDesktopModal` |
| `LuEmbedded` | Embedded | `LuEmbeddedDisplay`, `LuEmbeddedNumpad` |
| `Lu` | Shared | `LuIcon`, `LuBadge` |

## Build pipeline

```
vite.config.ts (library mode)
  └── Vite library mode
        ├── Entry: src/index.ts           → dist/index.{js,d.ts}
        ├── Entry: src/layout/index.ts    → dist/layout/index.{js,d.ts}
        ├── Entry: src/shell/index.ts     → dist/shell/index.{js,d.ts}
        ├── Entry: src/components/index.ts → dist/components/index.{js,d.ts}
        ├── Entry: src/composables/index.ts → dist/composables/index.{js,d.ts}
        └── Entry: src/skins/index.ts     → dist/skins/index.{js,d.ts}
```

Types are generated via `vue-tsc` (`tools/check.ts`).
