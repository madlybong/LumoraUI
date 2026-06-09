<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="status" aria-live="polite">
    <div class="lu-desktop-status-bar__left">
      <slot name="left" />
    </div>
    <div class="lu-desktop-status-bar__center">
      <slot name="center" />
    </div>
    <div class="lu-desktop-status-bar__right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuDesktopStatusBar" });

const props = defineProps<{ 
  variant?: "default";
}>();

const resolvedSkin = computed(() => `lu-desktop-status-bar ${props.variant && props.variant !== "default" ? "lu-desktop-status-bar--"+props.variant : ""}`.trim());
</script>
