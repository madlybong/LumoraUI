<template>
  <button 
    v-bind="$attrs" 
    :class="['lu-toggle-button', variant && `lu-toggle-button--${variant}`, isActive && 'lu-toggle-button--active']" 
    @click="onClick"
    :aria-pressed="isActive"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";

const props = defineProps<{
  value: string | number | boolean;
  variant?: string;
}>();

const groupValue = inject<Ref<string | number | boolean | undefined>>("lu-toggle-value");
const setGroupValue = inject<(value: string | number | boolean) => void>("lu-toggle-set");

const isActive = computed(() => groupValue?.value === props.value);

const onClick = () => {
  if (setGroupValue) {
    setGroupValue(props.value);
  }
};
</script>
