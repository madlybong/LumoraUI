<template>
  <div v-bind="$attrs" :class="['lu-tabs', variant && `lu-tabs--${variant}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";

/**
 * Container for a tabbed interface. Manages active tab state via provide/inject.
 */
interface LuTabsProps {
  /** Visual variant. Resolves to BEM modifier `lu-tabs--{variant}`. */
  variant?: string;
  /** Currently active tab value. Bind with `v-model`. */
  modelValue?: string | number;
}

const props = defineProps<LuTabsProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const activeTab = ref(props.modelValue);
watch(() => props.modelValue, (val) => activeTab.value = val);
watch(activeTab, (val) => {
  if (val !== undefined) emit("update:modelValue", val);
});

provide("lu-tabs-active", activeTab);

</script>
