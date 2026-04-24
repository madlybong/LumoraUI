<template>
  <select
    v-bind="$attrs"
    :class="resolvedSkin"
    :value="modelValue"
    @change="onChange"
  >
    <option v-for="opt in options" :key="opt.value" :value="opt.value">
      {{ opt.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  modelValue?: string | number;
  variant?: string;
  options: Array<{ value: string | number; label: string }>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
};

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuSelect", props.variant));
</script>
