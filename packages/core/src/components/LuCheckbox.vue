<template>
  <div :class="resolvedContainerSkin">
    <input
      type="checkbox"
      v-bind="$attrs"
      :class="resolvedSkin"
      :checked="modelValue"
      :name="name"
      :disabled="formContext?.disabled.value"
      @change="onChange"
      @blur="onBlur"
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

const props = defineProps<{
  modelValue?: boolean;
  variant?: string;
  name?: string;
  label?: string;
  error?: string | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
  (e: "blur"): void;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedContainerSkin = computed(() => resolveSkin("LuCheckboxContainer", props.variant));
const resolvedSkin = computed(() => resolveSkin("LuCheckbox", props.variant));
const resolvedLabelSkin = computed(() => resolveSkin("LuCheckboxLabel", props.variant));

const formContext = inject(LuFormContextKey, null);
const internalValue = ref<boolean>(!!props.modelValue);

watch(() => props.modelValue, (newVal) => {
  internalValue.value = !!newVal;
});

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.checked;
  internalValue.value = value;
  emit("update:modelValue", value);
  emit("change", value);
  
  if (props.name && formContext && (formContext.validateOn.value === "blur" || formContext.validateOn.value === "both")) {
    // trigger validation handled by parent
  }
};

const toggle = () => {
  if (formContext?.disabled.value || ("disabled" in props && (props as any).disabled !== false)) return;
  const newValue = !internalValue.value;
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
