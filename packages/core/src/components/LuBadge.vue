<template>
  <component :is="as || 'span'" v-bind="$attrs" :class="['lu-badge', variant && `lu-badge--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
/**
 * A small visual badge for count numbers or status tags.
 */
interface LuBadgeProps {
  /** Visual variant. Resolves to BEM modifier `lu-badge--{variant}`. */
  variant?: string;
  /** The HTML tag to render. @default 'span' */
  as?: string;
}

const props = defineProps<LuBadgeProps>();
</script>
