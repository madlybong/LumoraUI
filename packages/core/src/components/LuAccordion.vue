<template>
  <div v-bind="$attrs" :class="['lu-accordion', variant && `lu-accordion--${variant}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";

/**
 * Exclusive single or multi-expandable accordion container.
 * Wraps `<LuCollapsible>` instances.
 * 
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - When using `LuAccordion` inside a navigation sidebar, ALWAYS use `variant="ghost"`. 
 *   The default variant includes borders and heavy padding, which ruins sidebar layouts.
 * - Always use `<LuCollapsible>` as direct children.
 */
interface LuAccordionProps {
  /** Currently active panel ID(s). Bind with `v-model`. */
  modelValue?: string | string[];
  /** Allow multiple panels to be open simultaneously. @default false */
  multiple?: boolean;
  /** Visual variant. Resolves to BEM modifier `lu-accordion--{variant}`. */
  variant?: string;
}

const props = withDefaults(defineProps<LuAccordionProps>(), {
  multiple: false
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | string[]): void;
}>();

const isPanelOpen = (value: string) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

const togglePanel = (value: string) => {
  if (props.multiple) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const index = current.indexOf(value);
    if (index === -1) {
      current.push(value);
    } else {
      current.splice(index, 1);
    }
    emit("update:modelValue", current);
  } else {
    emit("update:modelValue", props.modelValue === value ? "" : value);
  }
};

provide("lu-accordion-context", {
  isPanelOpen,
  togglePanel
});

</script>
