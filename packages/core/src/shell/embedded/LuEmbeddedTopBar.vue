<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <div class="lu-embedded-top-bar__left">
      <slot name="left" />
    </div>
    <div class="lu-embedded-top-bar__center">
      <slot name="center" />
    </div>
    <div class="lu-embedded-top-bar__right">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuEmbeddedTopBar" });

const props = defineProps<{ 
  variant?: "default" | "compact";
}>();

const resolvedSkin = computed(() => `lu-embedded-top-bar ${props.variant && props.variant !== "default" ? "lu-embedded-top-bar--"+props.variant : ""}`.trim());
</script>
