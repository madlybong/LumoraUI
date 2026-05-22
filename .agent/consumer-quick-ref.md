# Consumer Quick Reference — `@astrake/lumora-ui`

This document provides a single-page integration cheat sheet for developers or subagents building applications that **consume** `@astrake/lumora-ui`.

---

## 1. Quick Setup Checklist

### Step 1 — Add the Dependency
```bash
bun add @astrake/lumora-ui
```

### Step 2 — Import the CSS Structural Baseline
Place this import at the absolute top of your main entry file (e.g. `main.ts` or `app.ts`):
```ts
import "@astrake/lumora-ui/style";
```

### Step 3 — Install the Vue Plugin
Initialize the library inside your Vue creation setup, passing target surface preferences and styling skins:
```ts
import { createApp } from "vue";
import { createLumoraUI } from "@astrake/lumora-ui";
import { mySkin } from "./mySkin";
import App from "./App.vue";

const app = createApp(App);

app.use(createLumoraUI({
  target: "desktop",  // Target surface: 'desktop' | 'mobile' | 'embedded'
  skin: mySkin,       // Custom SkinMap mapping components to Tailwind/CSS classes
}));

app.mount("#app");
```

---

## 2. Basic Skin Structuring

A skin is a plain object mapping component tags to target style class strings:

```ts
import type { SkinMap } from "@astrake/lumora-ui";

export const mySkin: SkinMap = {
  LuButton: {
    default: "px-4 py-2 font-medium rounded transition-colors text-sm",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "text-zinc-600 hover:bg-zinc-100",
  },
  LuDesktopTopBar: {
    default: "h-14 bg-zinc-900 border-b border-zinc-800 px-6 flex items-center justify-between text-white",
  }
};
```

---

## 3. Tailwind v4 `@source` Core

To compile class keys defined inside your Javascript/Typescript skins cleanly using Tailwind v4, add the scanning source path inside your CSS entry file:

```css
@import "tailwindcss";

/* Point the compiler directly to scan packages inside node_modules */
@source "../../node_modules/@astrake/lumora-ui";
```

---

## 4. Key Anti-Patterns to Avoid

| ❌ Anti-Pattern | ✅ Correct Practice |
|:---|:---|
| Skipping the baseline style sheet import (`@astrake/lumora-ui/style`). | Always import style configurations inside main entry modules. |
| Hardcoding style parameters inside component prop setups. | Pass custom styling parameters by adding tailored variants inside the `SkinMap`. |
| Mixing surface shell types (e.g. loading mobile navigation items inside desktop shells). | Respect target surface boundaries. |
| Mutating skin elements dynamically at nested level (e.g., `config.skin.LuButton.default = '...'`). | Assign a **new skin object** to replace references (`config.skin = { ...newSkin }`). |
| Configuring scanning paths inside old Tailwind v3 JS settings. | Use the modern Tailwind v4 `@source` CSS directive. |
