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

/**
 * Renders an icon from the configured icon pack.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ NEVER use raw SVGs or external icon components directly. Always use `<LuIcon>`.
 * - To style icon colors, inherit text color by placing it in a container, or use `class="text-[color]"`.
 */
interface LuIconProps {
  /** Visual variant. Resolves to BEM modifier `lu-icon--{variant}`. */
  variant?: string;
  /** Icon name as registered in the UI plugin config. */
  name?: string;
  /** Exact size in pixels. Maps to width/height styles. */
  size?: number;
  /** Stroke width if using SVG stroke icons. */
  strokeWidth?: number;
}

const props = defineProps<LuIconProps>();

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
