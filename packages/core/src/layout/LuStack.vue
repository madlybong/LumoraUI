<template>
  <component :is="as" v-bind="$attrs" :class="resolvedClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  direction?: "vertical" | "horizontal";
  variant?: string;
  as?: string;
  /** Tailwind gap step, e.g. gap="4" → gap-4 */
  gap?: string | number;
  /** Tailwind items-* shorthand: center | start | end | stretch | baseline */
  align?: "center" | "start" | "end" | "stretch" | "baseline";
  /** Tailwind justify-* shorthand: center | start | end | between | around | evenly */
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
}>(), {
  as: 'div'
});

const ALIGN: Record<string, string> = {
  center: 'items-center',
  start: 'items-start',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const JUSTIFY: Record<string, string> = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const resolvedClasses = computed(() => {
  const skin = `lu-stack ${props.direction ? "lu-stack--"+props.direction : props.variant && props.variant !== "default" ? "lu-stack--"+props.variant : ""}`.trim();
  const gap = props.gap !== undefined ? `gap-${props.gap}` : '';
  const align = props.align ? (ALIGN[props.align] ?? '') : '';
  const justify = props.justify ? (JUSTIFY[props.justify] ?? '') : '';
  return [skin, gap, align, justify].filter(Boolean).join(' ');
});
</script>
