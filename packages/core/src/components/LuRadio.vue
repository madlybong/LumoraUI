<template>
  <div :class="resolvedContainerSkin">
    <button
      type="button"
      role="radio"
      :aria-checked="isChecked"
      :aria-disabled="isDisabled"
      :disabled="isDisabled"
      :name="radioGroup?.name"
      :value="value"
      :class="[resolvedSkin, isChecked ? activeSkin : '']"
      @click="onClick"
      @keydown.space.prevent="onClick"
    >
      <span v-if="isChecked" :class="dotSkin"></span>
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

const radioGroup = inject(LuRadioGroupContextKey, null);

if (!radioGroup) {
  console.warn("LuRadio must be used within a LuRadioGroup");
}

const { resolveSkin } = useLumoraConfig();

// If the group is using 'card' variant, we want the radio to inherit it for container/label
const resolvedVariant = computed(() => props.variant || radioGroup?.variant?.value);

const resolvedContainerSkin = computed(() => resolveSkin("LuRadioContainer", resolvedVariant.value));
const resolvedSkin = computed(() => resolveSkin("LuRadio", props.variant)); // Radio circle itself doesn't need card variant
const activeSkin = computed(() => resolveSkin("LuRadio", "checked"));
const dotSkin = computed(() => resolveSkin("LuRadioDot", props.variant));
const resolvedLabelSkin = computed(() => resolveSkin("LuRadioLabel", resolvedVariant.value));

const isDisabled = computed(() => !!props.disabled || !!radioGroup?.disabled.value);

const isChecked = computed(() => {
  return radioGroup?.modelValue.value === props.value;
});

const onClick = () => {
  if (isDisabled.value) return;
  radioGroup?.updateValue(props.value);
};
</script>
