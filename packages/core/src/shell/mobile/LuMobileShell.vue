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

/**
 * Root container for mobile applications.
 * 
 * @slots
 * - `header`: Place `LuMobileHeader` here
 * - `content`: Main scrollable content
 * - `navbar`: Place `LuMobileNavBar` here
 * - `drawer`: Place `LuDrawer` here for mobile menus
 */
interface LuMobileShellProps {
  /** Visual variant. Resolves to BEM modifier `lu-mobile-shell--{variant}`. */
  variant?: "default" | "full";
}

const props = defineProps<LuMobileShellProps>();

const resolvedSkin = computed(() => `lu-mobile-shell ${props.variant && props.variant !== "default" ? "lu-mobile-shell--"+props.variant : ""}`.trim());
const contentSkin = computed(() => `lu-mobile-shell-content`);
</script>
