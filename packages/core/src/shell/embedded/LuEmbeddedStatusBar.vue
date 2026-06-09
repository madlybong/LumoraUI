<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="status">
    <div v-if="$slots.left" class="lu-embedded-status-bar__left">
      <slot name="left" />
    </div>
    <div class="lu-embedded-status-bar__center">
      <slot name="center" />
    </div>
    <div v-if="$slots.right" class="lu-embedded-status-bar__right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuEmbeddedStatusBar" });

const props = defineProps<{ 
  variant?: "default" | "icon-row";
}>();

const resolvedSkin = computed(() => `lu-embedded-status-bar ${props.variant && props.variant !== "default" ? "lu-embedded-status-bar--"+props.variant : ""}`.trim());
</script>
