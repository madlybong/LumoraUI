<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="application" :aria-label="ariaLabel">
    <slot name="topbar" />
    <div :class="contentSkin">
      <slot name="content" />
    </div>
    <slot name="statusbar" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuEmbeddedShell" });

const props = defineProps<{ 
  variant?: "default" | "fullscreen";
  ariaLabel?: string;
}>();

const ariaLabel = computed(() => props.ariaLabel || "Embedded application");
const resolvedSkin = computed(() => `lu-embedded-shell ${props.variant && props.variant !== "default" ? "lu-embedded-shell--"+props.variant : ""}`.trim());
const contentSkin = computed(() => `lu-embedded-shell-content ${props.variant && props.variant !== "default" ? "lu-embedded-shell-content--"+props.variant : ""}`.trim());
</script>
