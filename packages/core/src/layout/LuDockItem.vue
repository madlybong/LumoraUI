<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * Item placed inside a `LuDock` container.
 */
interface LuDockItemProps {
  /** The edge to dock to. The last item in the dock should be 'fill'. @default 'left' */
  dock?: "top" | "bottom" | "left" | "right" | "fill";
  /** Visual variant. Resolves to BEM modifier `lu-dock-item--{variant}`. */
  variant?: string;
}
const props = defineProps<LuDockItemProps>();
const resolvedSkin = computed(() => `lu-dock-item ${props.dock ? "lu-dock-item--"+props.dock : props.variant && props.variant !== "default" ? "lu-dock-item--"+props.variant : ""}`.trim());
</script>
