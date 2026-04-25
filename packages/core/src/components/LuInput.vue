<template>
  <input
    v-bind="$attrs"
    :class="resolvedSkin"
    :value="modelValue"
    :name="name"
    :disabled="formContext?.disabled.value"
    @input="onInput"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from "vue";
import { useLumoraConfig } from "../context";
import { LuFormContextKey } from "./LuForm.types";

const props = defineProps<{
  modelValue?: string | number;
  variant?: string;
  name?: string;
  error?: string | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur"): void;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuInput", props.variant));

const formContext = inject(LuFormContextKey, null);
const internalValue = ref<string | number | undefined>(props.modelValue);

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  internalValue.value = value;
  emit("update:modelValue", value);
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
    setValue: (v) => { internalValue.value = v as string; },
    setError: (_msg) => { /* error display handled via formContext.getError in template if desired */ },
  });
});

onUnmounted(() => {
  if (props.name && formContext) formContext.unregister(props.name);
});
</script>
