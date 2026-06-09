<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="banner">
    <div class="lu-desktop-top-bar__left">
      <slot name="left" />
    </div>
    <div class="lu-desktop-top-bar__center">
      <slot name="center" />
    </div>
    <div class="lu-desktop-top-bar__right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuDesktopTopBar" });

const props = defineProps<{ 
  variant?: "default" | "bordered" | "transparent" | "compact";
}>();

const resolvedSkin = computed(() => `lu-desktop-top-bar ${props.variant && props.variant !== "default" ? "lu-desktop-top-bar--"+props.variant : ""}`.trim());
</script>
