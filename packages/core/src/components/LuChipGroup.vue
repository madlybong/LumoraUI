<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";


const props = withDefaults(defineProps<{
  modelValue?: any;
  multiple?: boolean;
  variant?: string;
}>(), {
  multiple: false
});

const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
}>();

const isSelected = (value: any) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

const toggleValue = (value: any) => {
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
    emit("update:modelValue", props.modelValue === value ? null : value);
  }
};

provide("lu-chip-group-selection", {
  isSelected: (value: any) => computed(() => isSelected(value)),
  toggleValue
});

const resolvedSkin = computed(() => `lu-chip-group ${props.variant && props.variant !== 'default' ? 'lu-chip-group--'+props.variant : ''}`.trim());
</script>
