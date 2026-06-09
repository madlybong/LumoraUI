---
id: styling-architecture
name: "Tier 3B Styling Architecture (Static BEM)"
category: rules
severity: critical
applies_to:
  - "packages/core/src/components/**/*.vue"
  - "packages/core/src/layout/**/*.vue"
  - "packages/core/src/shell/**/*.vue"
enforce:
  - pattern: 'useLumoraConfig'
    on: script
    message: "Do not import useLumoraConfig. The components are static BEM classes. Dynamic skin swapping is removed."
  - pattern: 'resolveSkin'
    on: script
    message: "Do not use resolveSkin. Use template literals to construct static BEM class names."
---

# Tier 3B Styling Architecture (Static BEM)

Lumora UI uses a static Tier 3B BEM styling architecture to ensure maximum performance and high-speed interpretabilty for AI coding agents. The old dynamic `resolveSkin` and SkinMap architectures are strictly forbidden.

## The Rule

- **[NEVER]** Use `resolveSkin` or `useLumoraConfig`.
- **[NEVER]** Hard-code Tailwind utility classes in component templates.
- **[NEVER]** Add files to `packages/core/src/skins/` (this directory is deleted).
- **[ALWAYS]** Compute structural class names directly in the `<script setup>` block using template literals.
- **[ALWAYS]** Add corresponding CSS definitions in `packages/core/src/styles/` inside the appropriate file (e.g. `components.css`, `shell.css`, `forms.css`).
- **[ALWAYS]** Prefix showcase recipe BEM classes with `sc-` instead of `lu-`.

## Class Naming Convention (BEM)

Classes must use a strict BEM convention prefixed with `lu-`.
- **Block**: The component root, e.g. `lu-button`
- **Element**: A child element, separated by `__`, e.g. `lu-button__icon`
- **Modifier**: A variant or state, separated by `--`, e.g. `lu-button--primary`, `lu-button--active`

## Correct Pattern

```vue
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant?: string;
}>();

const resolvedSkin = computed(() => `lu-button ${props.variant && props.variant !== 'default' ? 'lu-button--'+props.variant : ''}`.trim());
const resolvedIconSkin = computed(() => `lu-button__icon ${props.variant && props.variant !== 'default' ? 'lu-button__icon--'+props.variant : ''}`.trim());
</script>

<template>
  <button :class="resolvedSkin">
    <span :class="resolvedIconSkin">Icon</span>
    <slot />
  </button>
</template>
```

## Incorrect Pattern

```vue
<!-- VIOLATION: Using the deprecated resolveSkin API -->
<script setup lang="ts">
import { useLumoraConfig } from "../context";
const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuButton", props.variant));
</script>
```
