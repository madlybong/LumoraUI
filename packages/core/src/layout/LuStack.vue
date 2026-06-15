<template>
  <component :is="as" v-bind="$attrs" :class="resolvedClasses" :style="resolvedStyles">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  direction?: "vertical" | "horizontal";
  variant?: string;
  as?: string;
  /** Space token scale gap, e.g. gap="4" → gap: var(--lu-space-4) */
  gap?: string | number;
  /** Flexbox align-items property */
  align?: "center" | "start" | "end" | "stretch" | "baseline";
  /** Flexbox justify-content property */
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
}>(), {
  as: 'div'
});

const ALIGN_VALUES: Record<string, string> = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
};

const JUSTIFY_VALUES: Record<string, string> = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

const resolvedClasses = computed(() => {
  return `lu-stack ${props.direction ? "lu-stack--"+props.direction : props.variant && props.variant !== "default" ? "lu-stack--"+props.variant : ""}`.trim();
});

const resolvedStyles = computed(() => {
  return {
    gap: props.gap !== undefined ? `var(--lu-space-${props.gap})` : undefined,
    alignItems: props.align ? ALIGN_VALUES[props.align] : undefined,
    justifyContent: props.justify ? JUSTIFY_VALUES[props.justify] : undefined,
  };
});
</script>
