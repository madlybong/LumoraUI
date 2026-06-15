<template>
  <component :is="as ?? 'span'" v-bind="$attrs" :class="['lu-text', variant && `lu-text--${variant}`]" :style="resolvedStyles">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant?: string;
  as?: string;
  color?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}>();

const resolvedStyles = computed(() => {
  const styles: Record<string, string> = {};
  
  if (props.color) {
    if (props.color.startsWith('--') || /[^a-zA-Z0-9-]/.test(props.color)) {
      styles.color = props.color;
    } else {
      styles.color = `var(--lu-color-${props.color})`;
    }
  }

  if (props.weight) {
    styles.fontWeight = `var(--lu-font-${props.weight})`;
  }

  return styles;
});
</script>
