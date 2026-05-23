<template>
  <label :class="rootSkin" @click.prevent="toggle">
    <button
      role="switch"
      type="button"
      :name="name"
      :aria-checked="ariaChecked"
      :disabled="mergedDisabled"
      :class="currentSkin"
      @blur="onBlur"
      tabindex="-1"
    >
      <span :class="currentThumbSkin" />
    </button>
    <span v-if="label" :class="labelSkin">
      {{ label }}
    </span>
    <slot v-else />
  </label>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, watch } from "vue";
import { useLumoraConfig } from "../context";
import { LuFormContextKey } from "./LuForm.types";
import { cn } from "../utils";

const props = withDefaults(defineProps<{
  modelValue?: boolean | null;
  variant?: string;
  disabled?: boolean;
  name?: string;
  error?: string | null;
  label?: string;
}>(), {
  modelValue: false,
  disabled: false
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean | null): void;
  (e: "blur"): void;
}>();

const { resolveSkin } = useLumoraConfig();

const rootSkin = computed(() => resolveSkin("LuSwitchRoot", props.variant));
const labelSkin = computed(() => resolveSkin("LuSwitchLabel", props.variant));

const baseSkin = computed(() => resolveSkin("LuSwitch", props.variant));
const checkedSkin = computed(() => resolveSkin("LuSwitch", props.variant ? `${props.variant}-checked` : "checked"));
const indeterminateSkin = computed(() => resolveSkin("LuSwitch", "indeterminate"));

const thumbBaseSkin = computed(() => resolveSkin("LuSwitchThumb", props.variant));
const thumbCheckedSkin = computed(() => resolveSkin("LuSwitchThumb", "checked"));
const thumbIndeterminateSkin = computed(() => resolveSkin("LuSwitchThumb", "indeterminate"));

const formContext = inject(LuFormContextKey, null);
const internalValue = ref<boolean | null | undefined>(props.modelValue);

const currentValue = computed(() => props.modelValue !== undefined ? props.modelValue : (internalValue.value ?? false));

const currentSkin = computed(() => {
  if (currentValue.value === null) return cn(baseSkin.value, indeterminateSkin.value);
  if (currentValue.value === true) return cn(baseSkin.value, checkedSkin.value);
  return baseSkin.value;
});

const currentThumbSkin = computed(() => {
  if (currentValue.value === null) return cn(thumbBaseSkin.value, thumbIndeterminateSkin.value);
  if (currentValue.value === true) return cn(thumbBaseSkin.value, thumbCheckedSkin.value);
  return thumbBaseSkin.value;
});

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
