<template>
  <div v-bind="$attrs" :class="['lu-toggle-group', variant && `lu-toggle-group--${variant}`]" role="group" :aria-multiselectable="multiple ? 'true' : undefined">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, toRef } from "vue";

const props = defineProps<{
  modelValue?: string | number | boolean | (string | number | boolean)[];
  variant?: string;
  multiple?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | boolean | (string | number | boolean)[]): void;
}>();

provide("lu-toggle-value", toRef(props, "modelValue"));
provide("lu-toggle-multiple", toRef(props, "multiple"));
provide("lu-toggle-set", (value: string | number | boolean) => {
  if (props.multiple) {
    const current = Array.isArray(props.modelValue) ? props.modelValue : [];
    const index = current.indexOf(value);
    const next = [...current];
    if (index >= 0) {
      next.splice(index, 1);
    } else {
      next.push(value);
    }
    emit("update:modelValue", next);
  } else {
    emit("update:modelValue", value);
  }
});
</script>
