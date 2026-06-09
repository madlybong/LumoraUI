<template>
  <div :class="['lu-skeleton', variant && `lu-skeleton--${variant}`]" aria-hidden="true" />
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  variant?: string;
}>();
</script>
