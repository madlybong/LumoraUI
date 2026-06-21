<template>
  <div v-bind="$attrs" :class="[isAccordionControlled ? 'lu-accordion-item' : 'lu-collapsible', variant && `lu-collapsible--${variant}`]">
    <button type="button" :class="[isAccordionControlled ? 'lu-accordion-item__trigger' : 'lu-collapsible__trigger']" @click="toggle">
      <slot name="trigger" :isOpen="isOpen" />
    </button>
    <transition name="lu-collapsible">
      <div v-show="isOpen" :class="[isAccordionControlled ? 'lu-accordion-item__content' : 'lu-collapsible__content']">
        <div :class="['lu-collapsible__content-inner']">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, inject } from "vue";

/**
 * Collapsible section or Accordion item.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ Do NOT add a `class` prop with Tailwind utilities to style padding/margin.
 * - This component serves as both standalone `<LuCollapsible>` and `<LuAccordionItem>` when inside `<LuAccordion>`.
 */
const props = defineProps<{
  variant?: string;
  modelValue?: boolean;
  defaultOpen?: boolean;
  value?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", val: boolean): void;
}>();

const accordionContext = inject<any>("lu-accordion-context", null);

const isAccordionControlled = computed(() => accordionContext && props.value !== undefined);

const isOpen = ref(
  isAccordionControlled.value
    ? accordionContext.isPanelOpen(props.value)
    : (props.modelValue ?? props.defaultOpen ?? false)
);

if (isAccordionControlled.value) {
  watch(() => accordionContext.isPanelOpen(props.value), (val) => {
    isOpen.value = val;
  });
} else {
  watch(() => props.modelValue, (val) => {
    if (val !== undefined) isOpen.value = val;
  });
}

const toggle = () => {
  if (isAccordionControlled.value) {
    accordionContext.togglePanel(props.value);
  } else {
    isOpen.value = !isOpen.value;
    emit("update:modelValue", isOpen.value);
  }
};



defineExpose({ isOpen });
</script>
