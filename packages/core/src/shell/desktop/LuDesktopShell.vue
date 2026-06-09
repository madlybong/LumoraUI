<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="application" :aria-label="ariaLabel">
    <slot name="topbar" />
    <div :class="contentWrapperSkin">
      <slot name="rail" />
      <slot name="sidebar" />
      <div :class="mainContentSkin">
        <slot name="content" />
      </div>
    </div>
    <slot name="statusbar" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuDesktopShell" });

const props = defineProps<{ 
  variant?: "default" | "compact";
  ariaLabel?: string;
}>();

const ariaLabel = computed(() => props.ariaLabel || "Application");
const resolvedSkin = computed(() => `lu-desktop-shell ${props.variant && props.variant !== "default" ? "lu-desktop-shell--"+props.variant : ""}`.trim());
const contentWrapperSkin = computed(() => `lu-desktop-shell-content-wrapper`);
const mainContentSkin = computed(() => `lu-desktop-shell-main-content`);
</script>
