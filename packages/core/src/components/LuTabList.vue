<template>
  <div v-bind="$attrs" :class="['lu-tab-list', variant && `lu-tab-list--${variant}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * Container for `LuTab` components. Typically flex-row layout.
 */
interface LuTabListProps {
  /** Visual variant. Resolves to BEM modifier `lu-tab-list--{variant}`. */
  variant?: string;
}

const props = defineProps<LuTabListProps>();
</script>
