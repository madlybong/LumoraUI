<template>
  <div v-bind="$attrs" :class="['lu-toggle-group', variant && `lu-toggle-group--${variant}`]" role="group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";

const props = defineProps<{
  modelValue?: string | number | boolean;
  variant?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | boolean): void;
}>();

provide("lu-toggle-value", computed(() => props.modelValue));
provide("lu-toggle-set", (value: string | number | boolean) => {
  emit("update:modelValue", value);
});
</script>
