<template>
  <button
    type="button"
    :class="resolvedSkin"
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
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuMenuItem", props.variant));

const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emit("click", event);
};
</script>
