<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
  modelValue?: string | number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const activeTab = ref(props.modelValue);
watch(() => props.modelValue, (val) => activeTab.value = val);
watch(activeTab, (val) => {
  if (val !== undefined) emit("update:modelValue", val);
});

provide("lu-tabs-active", activeTab);

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuTabs", props.variant));
</script>
