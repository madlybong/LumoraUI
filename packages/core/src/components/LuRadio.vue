<template>
  <div :class="resolvedContainerSkin">
    <input
      type="radio"
      v-bind="$attrs"
      :class="resolvedSkin"
      :name="radioGroup?.name"
      :value="value"
      :checked="isChecked"
      :disabled="radioGroup?.disabled.value || disabled"
      @change="onChange"
    />
    <label v-if="$slots.default || label" :class="resolvedLabelSkin" @click.prevent="onClick">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { useLumoraConfig } from "../context";
import { LuRadioGroupContextKey } from "./LuRadioGroup.types";

const props = defineProps<{
  value: string | number;
  variant?: string;
  label?: string;
  disabled?: boolean;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedContainerSkin = computed(() => resolveSkin("LuRadioContainer", props.variant));
const resolvedSkin = computed(() => resolveSkin("LuRadio", props.variant));
const resolvedLabelSkin = computed(() => resolveSkin("LuRadioLabel", props.variant));

const radioGroup = inject(LuRadioGroupContextKey, null);

if (!radioGroup) {
  console.warn("LuRadio must be used within a LuRadioGroup");
}

const isChecked = computed(() => {
  return radioGroup?.modelValue.value === props.value;
});

const onChange = () => {
  if (props.disabled || radioGroup?.disabled.value) return;
  radioGroup?.updateValue(props.value);
};

const onClick = () => {
  if (props.disabled || radioGroup?.disabled.value) return;
  radioGroup?.updateValue(props.value);
};
</script>
