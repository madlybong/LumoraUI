<template>
  <div :class="['lu-radio-group', variant && `lu-radio-group--${variant}`]" role="radiogroup" :aria-disabled="disabled || formContext?.disabled.value">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, provide, ref, watch } from "vue";
import { LuFormContextKey } from "./LuForm.types";
import { LuRadioGroupContextKey } from "./LuRadioGroup.types";

const props = defineProps<{
  modelValue?: string | number;
  name: string;
  variant?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
  (e: "change", value: string | number): void;
}>();

const formContext = inject(LuFormContextKey, null);
const internalValue = ref<string | number | undefined>(props.modelValue);

watch(() => props.modelValue, (newVal) => {
  internalValue.value = newVal;
});

const updateValue = (value: string | number) => {
  if (props.disabled || formContext?.disabled.value) return;
  internalValue.value = value;
  emit("update:modelValue", value);
  emit("change", value);
  
  if (props.name && formContext && (formContext.validateOn.value === "blur" || formContext.validateOn.value === "both")) {
    // validation
  }
};

provide(LuRadioGroupContextKey, {
  name: props.name,
  modelValue: computed(() => internalValue.value),
  updateValue,
  disabled: computed(() => !!props.disabled || !!formContext?.disabled.value),
  variant: computed(() => props.variant)
});

onMounted(() => {
  if (!props.name || !formContext) return;
  formContext.register({
    name: props.name,
    getValue: () => internalValue.value,
    setValue: (v) => { internalValue.value = v as string | number; },
    setError: (_msg) => {},
  });
});

onUnmounted(() => {
  if (props.name && formContext) formContext.unregister(props.name);
});
</script>
