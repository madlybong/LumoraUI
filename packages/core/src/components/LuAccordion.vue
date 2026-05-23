<template>
  <div v-bind="$attrs" :class="accordionSkin" class="lu-accordion">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { useLumoraConfig } from "../context";

const props = withDefaults(defineProps<{
  modelValue?: string | string[];
  multiple?: boolean;
  variant?: string;
}>(), {
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

const { resolveSkin } = useLumoraConfig();
const accordionSkin = computed(() => resolveSkin("LuAccordion", props.variant));
</script>
