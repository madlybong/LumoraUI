<template>
  <button
    type="button"
    :class="['lu-menu-item', variant && `lu-menu-item--${variant}`]"
    role="menuitem"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();



const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emit("click", event);
};
</script>
