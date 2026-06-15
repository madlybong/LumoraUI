---
id: component-structure
name: "Standard Component Structure"
category: rules
severity: high
applies_to:
  - "packages/core/src/components/**/*.vue"
  - "packages/core/src/shell/**/*.vue"
---

# Standard Component Structure

To maintain consistency and type safety across the monorepo, all Vue Single File Components (SFCs) must follow this structural template.

## Structural Requirements

1. **Composition API**: Use `<script setup lang="ts">` exclusively.
2. **Options declaration**: Explicitly define the component name via `defineOptions({ name: 'LuComponent' })` to support devtools and testing registry checks.
3. **TypeScript Interfaces**:
   - Strongly type the component Props using a dedicated `Props` or `[Component]Props` interface.
   - Strongly type component Emits.
   - Avoid `any` or loose types.
4. **Clean Slots**: Rely on semantic HTML structure inside `<template>` and do not introduce unstyled outer wrapper elements unless structurally necessary.

## Example Blueprint

```vue
<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuBadge" });

interface BadgeProps {
  variant?: "primary" | "secondary" | "success" | "danger";
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "primary",
});

const emit = defineEmits<{
  (e: "close"): void;
}>();

const resolvedClasses = computed(() => {
  return `lu-badge lu-badge--${props.variant}`;
});
</script>

<template>
  <span :class="resolvedClasses">
    <slot />
  </span>
</template>
```
