# Component Authoring Guide — `@astrake/lumora-ui`

This document details the precise process for creating or modifying Vue components inside this repository. Follow this checklist step-by-step to maintain quality and prevent architectural regression.

---

## 1. Prerequisites Check

* **TypeScript-first**: All components must use `<script setup lang="ts">`. Zero raw JS allowed.
* **Composition API**: Use the Composition API exclusively.
* **Surface target selection**:
  * If it's a generic UI control (e.g. badge, button, input, toggle, select, spinner), it belongs in the shared primitive layer (`src/components/`). Name: `Lu*.vue`.
  * If it's specific to a surface layout context, place it in the respective subdirectory under `src/shell/` or `src/components/` with target prefixes:
    * **Desktop**: `LuDesktop*.vue`
    * **Mobile**: `LuMobile*.vue`
    * **Embedded**: `LuEmbedded*.vue`

---

## 2. Component Blueprint Template

Use this basic blueprint when creating a new component (e.g., `LuTag.vue`):

```vue
<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

// 1. Explicitly type component props (avoid using "any" or untyped definitions)
interface TagProps {
  variant?: "primary" | "secondary" | "success" | "danger";
  interactive?: boolean;
}

const props = withDefaults(defineProps<TagProps>(), {
  variant: "primary",
  interactive: false,
});

// 2. Explicitly type component emits
const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
  (e: "close"): void;
}>();

// 3. Resolve style classes using the dynamic skin system
const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => {
  // Merges SkinMap["LuTag"].default + SkinMap["LuTag"][props.variant]
  return resolveSkin("LuTag", props.variant) || `lu-tag lu-tag--${props.variant}`;
});

const handleClick = (event: MouseEvent) => {
  if (props.interactive) {
    emit("click", event);
  }
};
</script>

<template>
  <span 
    :class="[resolvedSkin, { 'lu-tag--interactive': interactive }]" 
    @click="handleClick"
  >
    <!-- Keep content slots clean and semantic -->
    <slot />
  </span>
</template>
```

---

## 3. Mandatory Steps for Adding a Component

### Step 1 — Create the Component
1. Create the `.vue` file in `packages/core/src/components/` (shared) or the surface directories `packages/core/src/shell/{desktop,mobile,embedded}/`.
2. Implement your logic according to the **Component Blueprint** above.
3. Ensure no visual colors or paddings are hardcoded; fetch everything via `resolveSkin()`.

### Step 2 — Declare in the Skin Baseline
Every component must have a structural skin baseline representation:
1. Add the component skin interface or key mapping in `packages/core/src/types.ts` if typing is enforced.
2. Define the baseline structure skin in `packages/core/src/skins/components.ts` (or the surface shell skin `layout.ts` etc.):
   ```ts
   // Example definition
   export const componentsSkin: SkinMap = {
     LuTag: {
       default: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
       primary: "bg-blue-100 text-blue-800",
       secondary: "bg-gray-100 text-gray-800",
     }
   }
   ```

### Step 3 — Structural CSS Fallback
1. Add a structural fallback CSS rule inside `packages/core/src/lumora.css` prefixed with `lu-` so that non-Tailwind users have a functional outline.
   ```css
   /* Under the correct category in src/lumora.css */
   .lu-tag {
     display: inline-flex;
     align-items: center;
     font-size: 0.75rem;
     font-weight: 500;
   }
   ```

### Step 4 — Wire up Exports
Make sure the component is fully visible through the entry points:
1. Export the component from `packages/core/src/components/index.ts` (or shell indexes).
   ```ts
   export { default as LuTag } from "./LuTag.vue";
   ```
2. Verify it is exported by `packages/core/src/index.ts`.

### Step 5 — Add Vitest Unit Tests
Create unit tests under `__tests__` directories (e.g. `packages/core/src/components/__tests__/LuTag.spec.ts`):
- Test default slot rendering.
- Test prop updates (e.g. `variant`, `interactive`).
- Test event emissions (e.g. `click` action fires emit).
- Test skin class resolution fallback logic.

### Step 6 — Showcase Demo
1. Open the showcase application at `apps/showcase/`.
2. Add a sample use case under the relevant demo page view in `apps/showcase/src/views/`.
3. Use the component in accordance with the Zero-Raw-HTML layout rule (compose layouts using primitives like `LuStack` or `LuGrid`, not raw custom tables or generic styled divs).

---

## 4. Verification Check

Run the strict check script and test suite before finalizing your commit:
```bash
bun run check
bun test
bun run build
```
If any checks throw a warning, resolve it immediately.
