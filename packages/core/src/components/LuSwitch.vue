<template>
  <label :class="['lu-switch-root', variant && `lu-switch-root--${variant}`]" @click.prevent="toggle">
    <button
      role="switch"
      type="button"
      :name="name"
      :aria-checked="ariaChecked"
      :disabled="mergedDisabled"
      :class="[
        'lu-switch',
        variant && `lu-switch--${variant}`,
        currentValue === true && 'lu-switch--checked',
        currentValue === null && 'lu-switch--indeterminate'
      ]"
      @blur="onBlur"
      tabindex="-1"
    >
      <span :class="[
        'lu-switch__thumb',
        currentValue === true && 'lu-switch__thumb--checked',
        currentValue === null && 'lu-switch__thumb--indeterminate'
      ]" />
    </button>
    <span v-if="label" class="lu-switch__label">
      {{ label }}
    </span>
    <slot v-else />
  </label>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, watch } from "vue";
import { LuFormContextKey } from "./LuForm.types";

const props = withDefaults(defineProps<{
  modelValue?: boolean | null;
  variant?: string;
  disabled?: boolean;
  name?: string;
  error?: string | null;
  label?: string;
}>(), {
  disabled: false
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean | null): void;
  (e: "blur"): void;
}>();

const formContext = inject(LuFormContextKey, null);
const internalValue = ref<boolean | null | undefined>(props.modelValue);

const currentValue = computed(() => props.modelValue !== undefined ? props.modelValue : (internalValue.value ?? false));

const ariaChecked = computed(() => {
  if (currentValue.value === null) return "mixed";
  return currentValue.value ? "true" : "false";
});

const mergedDisabled = computed(() => props.disabled || formContext?.disabled.value);

watch(() => props.modelValue, (newVal) => {
  internalValue.value = newVal;
});

const toggle = () => {
  if (mergedDisabled.value) return;
  let newValue: boolean | null = false;
  
  if (currentValue.value === false) {
    newValue = true;
  } else if (currentValue.value === true) {
    newValue = false;
  } else if (currentValue.value === null) {
    // from indeterminate, default to true or false. let's say true.
    newValue = true;
  }
  
  internalValue.value = newValue;
  emit("update:modelValue", newValue);
};

const onBlur = () => {
  if (props.name && formContext && (formContext.validateOn.value === "blur" || formContext.validateOn.value === "both")) {
    // trigger single-field validation — handled by parent LuForm
  }
  emit("blur");
};

onMounted(() => {
  if (!props.name || !formContext) return;
  formContext.register({
    name: props.name,
    getValue: () => internalValue.value,
    setValue: (v) => { internalValue.value = v as boolean | null; },
    setError: (_msg) => { /* error display handled via formContext.getError in template if desired */ },
  });
});

onUnmounted(() => {
  if (props.name && formContext) formContext.unregister(props.name);
});
</script>
