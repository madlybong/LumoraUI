# Lumora UI — Architecture Blueprint

This document details the architectural core of `@astrake/lumora-ui`, explaining package boundaries, internal reactive pipelines, skin resolution, and Tailwind v4 compilation strategies.

---

## 1. System Layer Model

The framework exposes a single public surface but maintains a multi-tier rendering architecture internally:

```
┌─────────────────────────────────────────────────────────┐
│                   Consumer Application                  │
│         (Any Vue 3 App — Vite, Nuxt, Electron)          │
└─────────────────────┬───────────────────────────────────┘
                      │ imports from
┌─────────────────────▼───────────────────────────────────┐
│               @astrake/lumora-ui                        │
│  ┌────────────┐ ┌────────────┐ ┌─────────────────────┐  │
│  │  /mobile   │ │  /desktop  │ │     /embedded       │  │
│  │  (LuM*)    │ │  (LuD*)    │ │     (LuE*)          │  │
│  └─────┬──────┘ └─────┬──────┘ └──────────┬──────────┘  │
│        └──────────────┴──────────────────┘              │
│                  Shared Layer (Lu*)                     │
│         LuButton · LuIcon · LuSpinner · LuForm          │
└─────────────────────┬───────────────────────────────────┘
                      │ resolves classes via
┌─────────────────────▼───────────────────────────────────┐
│                   Skin Map / presets                    │
│          defaultSkin · HSL tailored palettes            │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Dynamic Skin Resolution Flow

Skins are injected via Vue's standard `provide`/`inject` API and resolved at runtime on the fly. 

```
[Consumer Skin Map] ──┐
                      ├─► extendSkin() ─► skinMap ─► [Component] ─► computed() ─► cn() ─► rendered template
[defaultSkin Preset] ─┘
```

### Skin Map Merge Contract

1. When a component mounts, it calls `useLumoraConfig()`.
2. The user's dynamic skin (if supplied) is merged over the framework's baseline `defaultSkin` via `extendSkin()`.
3. The component-specific keys are read. The helper merges `default` classes with any `variant` class requested via props.
4. Classes are resolved using a custom `cn()` utility (wrapper around `clsx` or simple string join/deduplication) to ensure class collisions (e.g., conflicting text sizes or spacing) merge gracefully.

### Pseudocode Core

```ts
// How resolveSkin works internally under the hood:
function resolveSkin(componentName: string, variant?: string): string {
  const userSkinMap = isRef(config.skin) ? config.skin.value : (config.skin || {});
  const skinMap = extendSkin(defaultSkin, userSkinMap);
  
  const componentSkin = skinMap[componentName];
  if (!componentSkin) return "";

  const classes = [];
  if (componentSkin.default) {
    classes.push(componentSkin.default);
  }
  if (variant && componentSkin[variant]) {
    classes.push(componentSkin[variant]);
  }

  return cn(classes); // Collisions are resolved here, variant classes taking precedence
}
```

---

## 3. The `lu-` Structural Invariant

To ensure consumers who do not use Tailwind CSS still get fully functioning layout envelopes (zero-height parent blocks, flex layout properties, relative position parameters, grid configurations), the framework uses native CSS fallbacks.

* **Escape Hatch CSS**: Written in `packages/core/src/lumora.css`.
* **Structural Prefix**: All structural CSS selectors must start with `lu-` (e.g., `.lu-desktop-shell`).
* **The Rule**: For every single class string literal returned by a component as a fallback, there must be a matching class rule defined in `lumora.css`.

Example standard component layout binding:
```vue
<div :class="[resolveSkin('LuDesktopShell') || 'lu-desktop-shell']">
  ...
</div>
```

---

## 4. Vue Reactivity & Plugin Lifecycle

The plugin mounts config options within a reactive frame:

```ts
// plugin.ts
import { shallowReactive, type App } from "vue";
import { LumoraUIConfigKey } from "./context";
import type { LumoraUIConfig } from "./types";

export const createLumoraUI = (config: LumoraUIConfig = {}) => {
  return {
    install(app: App) {
      // The configuration state is shallowReactive.
      // Modifying config.skin = newSkin triggers reactive re-renders across all templates.
      const state = shallowReactive({
        target: config.target || "desktop",
        skin: config.skin || {},
        locale: config.locale || "en",
        a11y: config.a11y ?? true,
        icons: config.icons,
      });

      app.provide(LumoraUIConfigKey, state);
    }
  };
};
```

---

## 5. Tailwind v4 `@source` Strategy

In Tailwind v4, compilation uses the native `@source` directive rather than JavaScript-based file globs in a `tailwind.config.js`.

* **Directive**: Consumers specify `@source "path_to_node_modules/@astrake/lumora-ui"` in their primary CSS entry file.
* **Why**: Tailwind's compiler reads the framework's TypeScript/Vue files directly to parse and extract the dynamic utility classes used in the consumer's skin mapping.
* **Helper**: `@astrake/lumora-ui/tailwind` exports `getLumoraSourceDir()` to let consumers programmatically find the absolute path of the framework within `node_modules` during server runs or builds.
