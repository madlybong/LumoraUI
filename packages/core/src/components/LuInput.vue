<template>
  <input
    v-bind="$attrs"
    :class="resolvedSkin"
    :value="modelValue"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  modelValue?: string | number;
  variant?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuInput", props.variant));
</script>
