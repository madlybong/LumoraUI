<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot name="header" />
    <div :class="contentSkin">
      <slot name="content" />
    </div>
    <div class="lu-mobile-shell-navbar">
      <slot name="navbar" />
    </div>
    <slot name="drawer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuMobileShell" });

const props = defineProps<{ 
  variant?: "default" | "full";
}>();

const resolvedSkin = computed(() => `lu-mobile-shell ${props.variant && props.variant !== "default" ? "lu-mobile-shell--"+props.variant : ""}`.trim());
const contentSkin = computed(() => `lu-mobile-shell-content`);
</script>
