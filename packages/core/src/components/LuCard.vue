<template>
  <component :is="as" v-bind="$attrs" :class="['lu-card', variant && `lu-card--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
/**
 * A flexible container for grouping related content.
 * 
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - NEVER use raw HTML classes like `<div class="lu-card__header">`.
 * - ALWAYS compose a card using its dedicated subcomponents:
 *   - `<LuCardHeader>` (can contain `<LuCardTitle>` and `<LuCardSubtitle>`)
 *   - `<LuCardBody>` (for primary content, automatically adds padding)
 *   - `<LuCardFooter>` (for actions/buttons, usually wrapped in a `<LuStack pad="0">`)
 *   - `<LuCardMedia>` (for top-level images/video)
 */
interface LuCardProps {
  /** Visual variant. Resolves to BEM modifier `lu-card--{variant}`. */
  variant?: string;
  /** The HTML tag to render. @default 'div' */
  as?: string;
}

const props = withDefaults(defineProps<LuCardProps>(), {
  as: "div"
});
</script>
