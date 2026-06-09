<template>
  <li :class="subheaderSkin">
    <slot>{{ label }}</slot>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";


const props = defineProps<{
  label?: string;
  variant?: string;
}>();

const subheaderSkin = computed(() => `lu-list-subheader ${props.variant && props.variant !== 'default' ? 'lu-list-subheader--'+props.variant : ''}`.trim());
</script>
