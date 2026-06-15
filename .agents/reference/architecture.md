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
│  │  (LuMobile*)│ │  (LuDesktop*)│ │    (LuEmbedded*)    │  │
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

## 2. Static BEM Styling Architecture

Skins and component visuals are entirely driven by static BEM classes. There is no dynamic CSS injection or skin resolution helper at runtime.

```
[Consumer Application] ──► [Component] ──► computed() ──► BEM classes ──► matched in src/styles/*.css
```

### Class Resolution Contract

1. When a component mounts, it computes its class names statically using template literals.
2. The root class is the component name (e.g. `lu-button`).
3. Variants are applied as BEM modifiers (e.g. `lu-button--primary`).
4. These classes map directly to definitions in the `packages/core/src/styles/` directory.

### Pseudocode Core

```vue
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ variant?: string }>();

const resolvedSkin = computed(() => 
  `lu-button ${props.variant && props.variant !== 'default' ? 'lu-button--'+props.variant : ''}`.trim()
);
</script>
```

---

## 3. The `lu-` Structural Invariant

To ensure consumers who do not use Tailwind CSS still get fully functioning components and layouts, the framework provides its own structural CSS.

- **Modular CSS**: Written in `packages/core/src/styles/*.css`.
- **Structural Prefix**: All structural CSS selectors must start with `lu-` (e.g., `.lu-desktop-shell`, `.lu-button`).
- **The Rule**: Every structural class string literal used in a component template must have a matching class rule defined in the appropriate file inside `src/styles/`.

Example standard component layout binding:
```vue
<div class="lu-desktop-shell">
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
      // Used for locale, target surface, icons, etc.
      const state = shallowReactive({
        target: config.target || "desktop",
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

- **Directive**: Consumers specify `@source "path_to_node_modules/@astrake/lumora-ui"` in their primary CSS entry file.
- **Why**: Tailwind's compiler reads the framework's TypeScript/Vue files directly to parse and extract the utility classes.
- **Helper**: `@astrake/lumora-ui/tailwind` exports `getLumoraSourceDir()` to let consumers programmatically find the absolute path of the framework within `node_modules` during server runs or builds.

---

## 6. Styles Directory Structure

All styles for components, layouts, forms, shell, and tokens are located in `packages/core/src/styles/`.

- `tokens.css`: Core design tokens (CSS variables for color, spacing, radius, etc.).
- `components.css`: Styles for base UI components (`LuButton`, `LuBadge`, `LuIcon`, etc.).
- `forms.css`: Styles for form inputs and controls.
- `layout.css`: Styles for structural layouts (`LuStack`, `LuGrid`, `LuCard`, etc.).
- `shell.css`: Styles for the top-level shell containers (`LuDesktopShell`, `LuMobileShell`, `LuEmbeddedShell`).
