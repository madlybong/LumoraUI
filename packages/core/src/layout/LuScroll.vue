<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant?: string;
}>();
const resolvedSkin = computed(() => `lu-scroll ${props.variant && props.variant !== "default" ? "lu-scroll--"+props.variant : ""}`.trim());
</script>
