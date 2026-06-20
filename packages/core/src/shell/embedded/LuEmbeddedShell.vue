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

/**
 * Root container for embedded widgets or nested micro-frontends.
 * 
 * @slots
 * - `topbar`: Place `LuEmbeddedTopBar` here
 * - `content`: Main content area
 * - `statusbar`: Place `LuEmbeddedStatusBar` here
 */
interface LuEmbeddedShellProps {
  /** Visual variant. Resolves to BEM modifier `lu-embedded-shell--{variant}`. */
  variant?: "default" | "fullscreen";
  /** ARIA label. @default "Embedded application" */
  ariaLabel?: string;
}

const props = defineProps<LuEmbeddedShellProps>();

const ariaLabel = computed(() => props.ariaLabel || "Embedded application");
const resolvedSkin = computed(() => `lu-embedded-shell ${props.variant && props.variant !== "default" ? "lu-embedded-shell--"+props.variant : ""}`.trim());
const contentSkin = computed(() => `lu-embedded-shell-content ${props.variant && props.variant !== "default" ? "lu-embedded-shell-content--"+props.variant : ""}`.trim());
</script>
