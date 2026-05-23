<template>
  <div :class="resolvedContainerSkin">
    <button
      type="button"
      role="checkbox"
      :aria-checked="indeterminate ? 'mixed' : isChecked"
      :aria-disabled="isDisabled"
      :disabled="isDisabled"
      :name="name"
      :class="[
        resolvedSkin,
        isChecked || indeterminate ? activeSkin : '',
        error ? errorSkin : ''
      ]"
      @click="toggle"
      @blur="onBlur"
    >
      <slot name="icon" :checked="isChecked" :indeterminate="indeterminate">
        <svg v-if="indeterminate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" :class="iconSkin">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <svg v-else-if="isChecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" :class="iconSkin">
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
    
    <label v-if="$slots.default || label" :class="resolvedLabelSkin" @click.prevent="toggle">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, watch } from "vue";
import { useLumoraConfig } from "../context";
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
  modelValue: false,
  indeterminate: false,
  disabled: false
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "update:indeterminate", value: boolean): void;
  (e: "change", value: boolean): void;
  (e: "blur"): void;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedContainerSkin = computed(() => resolveSkin("LuCheckContainer", props.variant));
const resolvedSkin = computed(() => resolveSkin("LuCheck", props.variant));
const activeSkin = computed(() => resolveSkin("LuCheck", props.indeterminate ? "indeterminate" : "checked"));
const errorSkin = computed(() => resolveSkin("LuCheck.error", props.variant));
const iconSkin = computed(() => resolveSkin("LuCheckIcon", props.variant));
const resolvedLabelSkin = computed(() => resolveSkin("LuCheckLabel", props.variant));

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
