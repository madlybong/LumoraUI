<template>
  <button
    role="switch"
    type="button"
    :name="name"
    :aria-checked="modelValue"
    :disabled="mergedDisabled"
    :class="[resolvedSkin, modelValue ? activeSkin : '']"
    @click="toggle"
    @blur="onBlur"
  >
    <span :class="[thumbSkin, modelValue ? thumbActiveSkin : '']" />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from "vue";
import { useLumoraConfig } from "../context";
import { LuFormContextKey } from "./LuForm.types";

const props = defineProps<{
  modelValue?: boolean;
  variant?: string;
  disabled?: boolean;
  name?: string;
  error?: string | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "blur"): void;
}>();

const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => resolveSkin("LuSwitch", props.variant));
const activeSkin = computed(() => resolveSkin("LuSwitch", "active"));

const thumbSkin = computed(() => resolveSkin("LuSwitchThumb", props.variant));
const thumbActiveSkin = computed(() => resolveSkin("LuSwitchThumb", "active"));

const formContext = inject(LuFormContextKey, null);
const internalValue = ref<boolean | undefined>(props.modelValue);

const mergedDisabled = computed(() => props.disabled || formContext?.disabled.value);

const toggle = () => {
  if (mergedDisabled.value) return;
  const newValue = !props.modelValue;
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
    setValue: (v) => { internalValue.value = Boolean(v); },
    setError: (_msg) => { /* error display handled via formContext.getError in template if desired */ },
  });
});

onUnmounted(() => {
  if (props.name && formContext) formContext.unregister(props.name);
});
</script>
