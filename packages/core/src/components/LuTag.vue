<template>
  <span :class="resolvedSkin">
    <slot />
    <LuButton
      v-if="closable"
      variant="icon"
      :class="resolvedCloseButtonSkin"
      @click.stop="emit('close')"
      aria-label="Remove"
    >
      <LuIcon name="x" :class="resolvedIconSkin" />
    </LuButton>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

import LuIcon from "./LuIcon.vue";
import LuButton from "./LuButton.vue";

const props = defineProps<{
  variant?: string;
  closable?: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const resolvedSkin = computed(() => `lu-tag ${props.variant && props.variant !== 'default' ? 'lu-tag--'+props.variant : ''}`.trim());
const resolvedCloseButtonSkin = computed(() => `lu-tag__close-button ${props.variant && props.variant !== 'default' ? 'lu-tag__close-button--'+props.variant : ''}`.trim());
const resolvedIconSkin = computed(() => `lu-tag__icon ${props.variant && props.variant !== 'default' ? 'lu-tag__icon--'+props.variant : ''}`.trim());
</script>
