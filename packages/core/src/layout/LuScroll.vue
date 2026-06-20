<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * Scrollable container.
 */
interface LuScrollProps {
  /** Visual variant. Resolves to BEM modifier `lu-scroll--{variant}` (e.g. 'horizontal'). */
  variant?: string;
}
const props = defineProps<LuScrollProps>();
const resolvedSkin = computed(() => `lu-scroll ${props.variant && props.variant !== "default" ? "lu-scroll--"+props.variant : ""}`.trim());
</script>
