<template>
  <button
    role="switch"
    type="button"
    :aria-checked="modelValue"
    :disabled="disabled"
    :class="[resolvedSkin, modelValue ? activeSkin : '']"
    @click="toggle"
  >
    <span :class="[thumbSkin, modelValue ? thumbActiveSkin : '']" />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  modelValue?: boolean;
  variant?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const toggle = () => {
  if (props.disabled) return;
  emit("update:modelValue", !props.modelValue);
};

const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => resolveSkin("LuSwitch", props.variant));
const activeSkin = computed(() => resolveSkin("LuSwitch", "active"));

const thumbSkin = computed(() => resolveSkin("LuSwitchThumb", props.variant));
const thumbActiveSkin = computed(() => resolveSkin("LuSwitchThumb", "active"));
</script>
