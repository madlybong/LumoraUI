<template>
  <component :is="as" :class="listSkin">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * A semantic container for rendering list items.
 * 
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - Use `LuList` combined with `LuListItem` for sidebars, dropdowns, and menus.
 * - NEVER use `LuStack` as a generic wrapper to hold repetitive clickable items without padding; use `LuList` instead.
 */
interface LuListProps {
  /** Visual variant. Resolves to BEM modifier `lu-list--{variant}`. */
  variant?: string;
  /** HTML element to render as. @default 'ul' */
  as?: string;
}

const props = withDefaults(defineProps<LuListProps>(), {
  as: "ul"
});

const listSkin = computed(() => `lu-list ${props.variant && props.variant !== 'default' ? 'lu-list--'+props.variant : ''}`.trim());
</script>
