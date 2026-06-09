<template>
  <div :class="['lu-radio-container', variant && `lu-radio-container--${variant}`]">
    <button
      type="button"
      role="radio"
      :aria-checked="isChecked"
      :aria-disabled="isDisabled"
      :disabled="isDisabled"
      :name="radioGroup?.name"
      :value="value"
      :class="['lu-radio', variant && `lu-radio--${variant}`, isChecked && 'lu-radio--checked']"
      @click="onClick"
      @keydown.space.prevent="onClick"
    >
      <span v-if="isChecked" class="lu-radio__dot"></span>
    </button>
    
    <input
      type="radio"
      hidden
      :name="radioGroup?.name"
      :value="value"
      :checked="isChecked"
      :disabled="isDisabled"
      tabindex="-1"
      aria-hidden="true"
    />
    
    <label v-if="$slots.default || label" class="lu-radio__label" @click.prevent="onClick">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { LuRadioGroupContextKey } from "./LuRadioGroup.types";

const props = defineProps<{
  value: string | number;
  variant?: string;
  label?: string;
  disabled?: boolean;
}>();

const radioGroup = inject(LuRadioGroupContextKey, null);

if (!radioGroup) {
  console.warn("LuRadio must be used within a LuRadioGroup");
}



const isDisabled = computed(() => !!props.disabled || !!radioGroup?.disabled.value);

const isChecked = computed(() => {
  return radioGroup?.modelValue.value === props.value;
});

const onClick = () => {
  if (isDisabled.value) return;
  radioGroup?.updateValue(props.value);
};
</script>
