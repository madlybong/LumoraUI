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

/**
 * Horizontal top navigation bar for desktop shell.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ NEVER use raw `<header>` tags or Tailwind flex rows for the main topbar.
 * - Always use `LuDesktopTopBar` placed inside the `topbar` slot of `LuDesktopShell`.
 * - Leverage `left`, `center`, and `right` slots for automatic alignment.
 * 
 * @slots
 * - `left`: Left-aligned items (brand, menu toggle)
 * - `center`: Center-aligned items (search, tabs)
 * - `right`: Right-aligned items (actions, profile)
 */
interface LuDesktopTopBarProps {
  /** Visual variant. Resolves to BEM modifier `lu-desktop-top-bar--{variant}`. */
  variant?: "default" | "bordered" | "transparent" | "compact";
}

const props = defineProps<LuDesktopTopBarProps>();

const resolvedSkin = computed(() => `lu-desktop-top-bar ${props.variant && props.variant !== "default" ? "lu-desktop-top-bar--"+props.variant : ""}`.trim());
</script>
