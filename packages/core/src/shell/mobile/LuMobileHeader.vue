<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="banner" :aria-label="ariaLabel" style="padding-top: env(safe-area-inset-top, 0px)">
    <div v-if="$slots.left" class="lu-mobile-header__left">
      <slot name="left" />
    </div>
    <div class="lu-mobile-header__center">
      <slot />
    </div>
    <div v-if="$slots.right" class="lu-mobile-header__right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuMobileHeader" });

/**
 * Top app bar for mobile shell. Automatically adds padding for safe area.
 * 
 * @slots
 * - `left`: Left action (e.g., back button, menu toggle)
 * - `default`: Center title area
 * - `right`: Right actions
 */
interface LuMobileHeaderProps {
  /** Visual variant. Resolves to BEM modifier `lu-mobile-header--{variant}`. */
  variant?: "default" | "transparent";
  /** ARIA label. @default "Header" */
  ariaLabel?: string;
}

const props = defineProps<LuMobileHeaderProps>();

const ariaLabel = computed(() => props.ariaLabel || "Header");
const resolvedSkin = computed(() => `lu-mobile-header ${props.variant && props.variant !== "default" ? "lu-mobile-header--"+props.variant : ""}`.trim());
</script>
