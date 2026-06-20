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

/**
 * Root container for desktop applications.
 * 
 * @slots
 * - `topbar`: Place `LuDesktopTopBar` here
 * - `rail`: Place `LuDesktopRailBar` here
 * - `sidebar`: Place `LuDesktopSidebar` here
 * - `content`: Main scrollable application view
 * - `statusbar`: Place `LuDesktopStatusBar` here
 */
interface LuDesktopShellProps {
  /** Visual variant. Resolves to BEM modifier `lu-desktop-shell--{variant}`. */
  variant?: "default" | "compact";
  /** ARIA label for the application region. */
  ariaLabel?: string;
}

const props = defineProps<LuDesktopShellProps>();

const ariaLabel = computed(() => props.ariaLabel || "Application");
const resolvedSkin = computed(() => `lu-desktop-shell ${props.variant && props.variant !== "default" ? "lu-desktop-shell--"+props.variant : ""}`.trim());
const contentWrapperSkin = computed(() => `lu-desktop-shell-content-wrapper`);
const mainContentSkin = computed(() => `lu-desktop-shell-main-content`);
</script>
