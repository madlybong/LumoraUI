<template>
  <div :class="['lu-checkbox-container', variant && `lu-checkbox-container--${variant}`]">
    <button
      type="button"
      role="checkbox"
      :aria-checked="indeterminate ? 'mixed' : isChecked"
      :aria-disabled="isDisabled"
      :disabled="isDisabled"
      :name="name"
      :class="[
        'lu-checkbox',
        variant && `lu-checkbox--${variant}`,
        (isChecked || indeterminate) && 'lu-checkbox--active',
        error && 'lu-checkbox--error'
      ]"
      @click="toggle"
      @blur="onBlur"
    >
      <slot name="icon" :checked="isChecked" :indeterminate="indeterminate">
        <svg v-if="indeterminate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lu-checkbox__icon">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <svg v-else-if="isChecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lu-checkbox__icon">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </slot>
    </button>
    
    <input
      type="checkbox"
      hidden
      :name="name"
      :checked="isChecked"
      :disabled="isDisabled"
      :value="value"
      tabindex="-1"
      aria-hidden="true"
    />
    
    <label v-if="$slots.default || label" class="lu-checkbox__label" @click.prevent="toggle">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, watch } from "vue";
import { LuFormContextKey } from "./LuForm.types";

const props = withDefaults(defineProps<{
  modelValue?: boolean;
  indeterminate?: boolean;
  variant?: string;
  name?: string;
  label?: string;
  error?: string | null;
  disabled?: boolean;
  value?: string | number; // for array-based checkboxes in future, or just native submit
}>(), {
  indeterminate: false,
  disabled: false
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "update:indeterminate", value: boolean): void;
  (e: "change", value: boolean): void;
  (e: "blur"): void;
}>();



const formContext = inject(LuFormContextKey, null);
const internalValue = ref<boolean>(!!props.modelValue);

const isChecked = computed(() => props.modelValue !== undefined ? !!props.modelValue : internalValue.value);
const isDisabled = computed(() => props.disabled || formContext?.disabled.value);

watch(() => props.modelValue, (newVal) => {
  internalValue.value = !!newVal;
});

const toggle = () => {
  if (isDisabled.value) return;
  
  if (props.indeterminate) {
    emit("update:indeterminate", false);
  }
  
  const newValue = !isChecked.value;
  internalValue.value = newValue;
  emit("update:modelValue", newValue);
  emit("change", newValue);
  
  if (props.name && formContext && (formContext.validateOn.value === "blur" || formContext.validateOn.value === "both")) {
    // trigger validation handled by parent
  }
};

const onBlur = () => {
  if (props.name && formContext && (formContext.validateOn.value === "blur" || formContext.validateOn.value === "both")) {
    // trigger validation handled by parent
  }
  emit("blur");
};

onMounted(() => {
  if (!props.name || !formContext) return;
  formContext.register({
    name: props.name,
    getValue: () => internalValue.value,
    setValue: (v) => { internalValue.value = !!v; },
    setError: (_msg) => {},
  });
});

onUnmounted(() => {
  if (props.name && formContext) formContext.unregister(props.name);
});
</script>
