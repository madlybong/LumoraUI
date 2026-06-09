<template>
  <span v-bind="$attrs" :class="['lu-icon', variant && `lu-icon--${variant}`]" aria-hidden="true" :style="sizeStyle">
    <slot>
      <component
        v-if="resolvedIcon"
        :is="resolvedIcon"
        :size="size"
        :stroke-width="strokeWidth"
      />
    </slot>
  </span>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
  name?: string;
  size?: number;
  strokeWidth?: number;
}>();

const slots = useSlots();
const { resolveIcon } = useLumoraConfig();

const resolvedIcon = computed(() => {
  if (slots.default) return null;
  if (!props.name) return null;
  return resolveIcon(props.name, props.size);
});

const sizeStyle = computed(() =>
  props.size ? { width: `${props.size}px`, height: `${props.size}px` } : undefined
);
</script>
