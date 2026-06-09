<template>
  <component :is="as" :class="listSkin">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";


const props = withDefaults(defineProps<{
  as?: string;
  variant?: string;
}>(), {
  as: "ul"
});

const listSkin = computed(() => `lu-list ${props.variant && props.variant !== 'default' ? 'lu-list--'+props.variant : ''}`.trim());
</script>
