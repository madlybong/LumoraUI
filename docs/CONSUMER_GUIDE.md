# @astrake/lumora-ui — Consumer Integration Guide

> **This document is written for AI coding agents and developers building applications
> that CONSUME `@astrake/lumora-ui`. It is not about contributing to the framework itself.**
>
> Framework contributors: see `AGENTS.md` and `docs/AI_AGENT_GUIDE.md`.

---

## 1. What Is LumoraUI?

`@astrake/lumora-ui` is a **headless Vue 3 component framework** with three strictly isolated
surface targets. "Headless" means components own structure and behavior only — visual styling
is entirely the consumer's responsibility through the **skin system**.

### Three Surfaces — Strict Isolation

| Surface | Target Use Case | Namespace | Shell Component |
|---|---|---|---|
| **Desktop** | Web apps, Electron, browser dashboards | `LuDesktop*` | `LuDesktopShell` |
| **Mobile** | PWA, mobile-first web apps | `LuMobile*` | `LuMobileShell` |
| **Embedded** | Kiosk, IoT, in-car HMI, fixed-viewport | `LuEmbedded*` | `LuEmbeddedShell` |

**Do not mix surfaces.** A desktop app uses only `LuDesktop*` components and `LuDesktopShell`.
Shared primitives (`LuIcon`, `LuButton`, `LuInput`, etc.) are surface-agnostic and usable anywhere.

---

## 2. Mandatory Setup

### Step 1 — Install

```bash
bun add @astrake/lumora-ui  # or npm/yarn/pnpm
```

### Step 2 — Import the CSS baseline (REQUIRED)

The framework ships its own structural CSS. **Without this import, shells and layout
primitives will render as invisible zero-height containers.**

```ts
// main.ts (app entry)
import '@astrake/lumora-ui/style'
import { createApp } from 'vue'
import App from './App.vue'
```

### Step 3 — Install the Vue plugin

```ts
import { createLumoraUI } from '@astrake/lumora-ui'
import { myAppSkin } from './skins/myApp'

app.use(createLumoraUI({
  target: 'desktop',   // 'desktop' | 'mobile' | 'embedded'
  skin: myAppSkin,
}))
```

---

## 3. The Skin System

Skins are plain TypeScript objects that map component names to CSS class strings.
The framework applies them via `provide/inject` — no prop drilling.

### SkinMap Shape

```ts
import type { SkinMap } from '@astrake/lumora-ui'

export const mySkin: SkinMap = {
  // Each key is a component name. 'default' applies always; other keys are variants.
  LuDesktopShell: {
    default: 'bg-gray-50',
  },
  LuDesktopTopBar: {
    default: 'h-14 bg-slate-900 text-white px-4 border-b border-slate-700',
  },
  LuDesktopSidebar: {
    default: 'w-64 bg-white border-r border-gray-200',
  },
  LuButton: {
    default: 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost:   'hover:bg-gray-100 text-gray-700',
  },
}
```

### Applying the Skin

**Option A — At plugin install time (recommended for static skins):**
```ts
app.use(createLumoraUI({ skin: mySkin }))
```

**Option B — Reactive mutation (for dynamic runtime switching):**
```ts
// App.vue
import { useLumoraConfig } from '@astrake/lumora-ui'
const { config } = useLumoraConfig()
config.skin = mySkin  // triggers reactive re-render in all components
```

> [!IMPORTANT]
> The plugin config is `shallowReactive`. Assigning `config.skin = newSkin` is reactive and
> will instantly re-render all components. Do NOT mutate nested properties inside an existing
> skin object — always replace the whole skin reference.

---

## 4. Tailwind CSS Integration (v4 via Vite Plugin)

The framework's structural CSS (`lumora.css`) is Tailwind-independent. However, your
**skin class strings** (the values in `SkinMap`) can be Tailwind utility classes.

If you use Tailwind v4 with `@tailwindcss/vite`, you must tell Tailwind to scan
the framework source so your skin classes are generated correctly.

### In your CSS entry file:

```css
@import "tailwindcss";

/* Tell Tailwind v4 to scan lumora-ui source for any classes used in skins */
@source "../../node_modules/@astrake/lumora-ui/src";
```

The `@source` path is relative to your CSS file. Adjust as needed.

### Using the helper (programmatic approach):

```ts
// vite.config.ts — NOT needed for @source directive, but useful for debugging
import { getLumoraSourceDir } from '@astrake/lumora-ui/tailwind'
console.log(getLumoraSourceDir(import.meta.url))
// → /absolute/path/to/node_modules/@astrake/lumora-ui/src
```

> [!WARNING]
> Do NOT use the old `tailwindContent()` pattern — it was a Tailwind v3 PostCSS helper.
> Tailwind v4 uses the `@source` CSS directive exclusively.

---

## 5. Desktop App Layout Reference

```vue
<template>
  <LuDesktopShell>
    <template #topbar>
      <LuDesktopTopBar><!-- app header, nav, user menu --></LuDesktopTopBar>
    </template>

    <template #rail>
      <!-- Optional: icon-only navigation rail -->
      <LuDesktopRailBar :expandOnHover="true">
        <LuDesktopRailItem :active="route === 'home'">
          <template #icon><LuIcon name="home" /></template>
          Home
        </LuDesktopRailItem>
      </LuDesktopRailBar>
    </template>

    <template #sidebar>
      <!-- Optional: wider sidebar with header/content/footer slots -->
      <LuDesktopSidebar>
        <template #header>...</template>
        <template #content>...</template>
        <template #footer>...</template>
      </LuDesktopSidebar>
    </template>

    <template #content>
      <!-- Main content area — use layout primitives here -->
      <LuScroll>
        <RouterView />
      </LuScroll>
    </template>

    <template #statusbar>
      <LuDesktopStatusBar><!-- status info --></LuDesktopStatusBar>
    </template>
  </LuDesktopShell>
</template>
```

### Desktop skin keys to define:

| Key | Purpose |
|---|---|
| `LuDesktopShell` | Root shell background |
| `LuDesktopTopBar` | Top bar height, bg, border |
| `LuDesktopStatusBar` | Bottom bar height, bg, text |
| `LuDesktopSidebar` | Width, bg, border |
| `LuDesktopSidebarHeader` | Sidebar header region |
| `LuDesktopSidebarContent` | Sidebar scrollable content |
| `LuDesktopSidebarFooter` | Sidebar footer region |
| `LuDesktopRailBar` | Rail width, bg, border |
| `LuDesktopRailBar.expanded` | Expanded rail width |
| `LuDesktopRailItem` | Rail item padding, color |
| `LuDesktopRailItem.active` | Active item highlight |
| `LuDesktopRailItemIcon` | Icon container overrides |
| `LuDesktopRailItemLabel` | Label text overrides |

---

## 6. Mobile App Layout Reference

```vue
<template>
  <LuMobileShell>
    <template #header>
      <LuMobileHeader><!-- title, back button --></LuMobileHeader>
    </template>
    <template #content>
      <LuScroll><RouterView /></LuScroll>
    </template>
    <template #navbar>
      <LuMobileNavBar><!-- bottom nav --></LuMobileNavBar>
    </template>
  </LuMobileShell>
</template>
```

- The shell uses `100dvh` for correct mobile viewport height.
- Content area uses `-webkit-overflow-scrolling: touch` for iOS momentum scroll.

---

## 7. Embedded App Layout Reference

```vue
<template>
  <!-- Fixed viewport — touch-action: none, user-select: none by default -->
  <LuEmbeddedShell>
    <template #topbar><!-- HMI header --></template>
    <template #content><!-- dashboard panels --></template>
    <template #bottombar><!-- controls bar --></template>
  </LuEmbeddedShell>
</template>
```

> [!NOTE]
> Embedded shell enforces `touch-action: none` and `user-select: none` by default
> to prevent browser-default behaviors on kiosk/IoT screens. Override in skin if needed.

---

## 8. Layout Primitives

These are surface-agnostic structural building blocks. Use them inside any shell content area.

| Component | Role |
|---|---|
| `LuDock` | Composable flex container with `direction` prop |
| `LuDockItem` | Dock region — `dock="top|bottom|left|right|fill"` |
| `LuFill` | Greedy `flex: 1` child that fills available space |
| `LuFixed` | Non-growing `flex-shrink: 0` child |
| `LuScroll` | Scrollable region — `variant="horizontal"` for X-scroll |
| `LuStack` | Flex container — `direction="vertical|horizontal"` |
| `LuGrid` | CSS grid container with optional `cols` prop |
| `LuSplit` | Resizable split pane with `direction="horizontal|vertical"` |
| `LuOverlay` | Absolute-fill layer for modals, drawers, tooltips |
| `LuCodeBlock` | Native syntax highlighting component with shiki integration |
| `LuToggleGroup` | Container for grouped `LuToggleButton` selections |

---

## 9. Form Components

```vue
<LuForm :rules="formRules" @submit="onSubmit" @error="onError">
  <LuInput name="email"    v-model="email" />
  <LuSelect name="role"    v-model="role"  :options="roles" />
  <LuSwitch name="active"  v-model="active" />

  <template #actions>
    <LuButton type="submit" variant="primary">Save</LuButton>
  </template>
</LuForm>
```

Rules shape:
```ts
const formRules = {
  email: (v: unknown) => !v ? 'Required' : null,
  role:  [(v) => !v ? 'Required' : null, (v) => ...],
}
```

---

## 10. Anti-Patterns (Agent Checklist)

> [!CAUTION]
> These patterns will break the framework or cause silent failures.

| ❌ Anti-Pattern | ✅ Correct |
|---|---|
| Missing `import '@astrake/lumora-ui/style'` | Always import in app entry |
| Using `LuDesktop*` components in a mobile app | Use `LuMobile*` components |
| Using `tailwindContent()` with Tailwind v4 | Use `@source` directive in CSS |
| Hard-coding colors inside skin strings via inline `style` | Use Tailwind/CSS classes in skin |
| Mutating nested skin properties: `config.skin.LuButton.default = '...'` | Assign a new skin object |
| Configuring `tailwind.config.js content` in a v4 setup | Use `@source` in CSS only |
| Defining `LuMobileShell` skin key in a desktop app | Only define relevant surface keys |
| Importing from `@astrake/lumora-ui/mobile` in a desktop app | Import from main entry only |

---

## 11. Exports Quick Reference

```ts
// Main entry — all components, types, composables
import { createLumoraUI, useLumoraConfig, LuDesktopShell, LuForm, ... } from '@astrake/lumora-ui'

// CSS structural baseline — REQUIRED
import '@astrake/lumora-ui/style'

// Tailwind v4 integration helper (optional)
import { getLumoraSourceDir } from '@astrake/lumora-ui/tailwind'

// Default skin preset (optional starting point)
import { defaultSkin } from '@astrake/lumora-ui/skins'
```
