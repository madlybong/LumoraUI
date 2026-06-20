<template>
  <div v-bind="$attrs" :class="[resolvedSkin, isExpanded ? expandedSkin : '']" role="navigation" :aria-label="ariaLabel" @mouseenter="onHover(true)" @mouseleave="onHover(false)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, provide } from "vue";

defineOptions({ name: "LuDesktopRailBar" });

/**
 * Narrow vertical rail navigation, typically used alongside or instead of a sidebar.
 * 
 * @slots
 * - `default`: The vertical content of the rail
 */
interface LuDesktopRailBarProps {
  /** Visual variant. Resolves to BEM modifier `lu-desktop-rail-bar--{variant}`. */
  variant?: "default";
  /** Force expanded state. */
  expanded?: boolean; 
  /** Automatically expand when hovered. @default false */
  expandOnHover?: boolean;
  /** ARIA label. @default "Primary navigation" */
  ariaLabel?: string;
}

const props = defineProps<LuDesktopRailBarProps>();

const ariaLabel = computed(() => props.ariaLabel || "Primary navigation");
const hovered = ref(false);
const isExpanded = computed(() => props.expanded || (props.expandOnHover && hovered.value));

provide("lu-rail-expanded", isExpanded);

const onHover = (val: boolean) => {
  hovered.value = val;
};
const resolvedSkin = computed(() => `lu-desktop-rail-bar ${props.variant && props.variant !== "default" ? "lu-desktop-rail-bar--"+props.variant : ""}`.trim());
const expandedSkin = computed(() => `lu-desktop-rail-bar--expanded`);
</script>
