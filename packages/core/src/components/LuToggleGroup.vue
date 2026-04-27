<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, type Ref } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  modelValue?: string | number | boolean;
  variant?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | boolean): void;
}>();

provide("lu-toggle-value", computed(() => props.modelValue));
provide("lu-toggle-set", (value: string | number | boolean) => {
  emit("update:modelValue", value);
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuToggleGroup", props.variant));
</script>
