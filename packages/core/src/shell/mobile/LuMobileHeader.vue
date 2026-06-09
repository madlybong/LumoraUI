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

const props = defineProps<{ 
  variant?: "default" | "transparent";
  ariaLabel?: string;
}>();

const ariaLabel = computed(() => props.ariaLabel || "Header");
const resolvedSkin = computed(() => `lu-mobile-header ${props.variant && props.variant !== "default" ? "lu-mobile-header--"+props.variant : ""}`.trim());
</script>
