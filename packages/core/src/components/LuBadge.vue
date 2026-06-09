<template>
  <component :is="as || 'span'" v-bind="$attrs" :class="['lu-badge', variant && `lu-badge--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ variant?: string; as?: string }>();
</script>
