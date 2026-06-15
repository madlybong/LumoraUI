<template>
  <component
    :is="componentType"
    v-bind="$attrs"
    :to="to"
    :href="href"
    :type="componentType === 'button' ? type : undefined"
    :disabled="componentType === 'button' ? isDisabled : undefined"
    :aria-disabled="isDisabled ? 'true' : undefined"
    :aria-busy="loading ? 'true' : undefined"
    :class="[
      'lu-button',
      variant && `lu-button--${variant}`,
      size && size !== 'md' && `lu-button--${size}`,
      align && align !== 'center' && `lu-button--align-${align}`,
      { 'lu-button--full': full },
      { 'lu-button--loading': loading },
      { 'pointer-events-none': isDisabled && componentType !== 'button' }
    ]"
    @click="emit('click', $event)"
  >
    <span class="lu-button__content"><slot /></span>
    <span v-if="loading" class="lu-button__spinner">
      <slot name="loading">
        <LuSpinner class="lu-spinner--md" />
      </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from "vue";
import LuSpinner from "./LuSpinner.vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<{
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  variant?: string;
  size?: "sm" | "md" | "lg";
  as?: string;
  to?: any;
  href?: string;
  align?: "left" | "center" | "right";
  full?: boolean;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const isDisabled = computed(() => props.disabled || props.loading);

const componentType = computed(() => {
  if (props.as) return props.as;
  if (props.to) {
    const routerLink = resolveComponent("RouterLink");
    return typeof routerLink === 'string' ? 'a' : routerLink;
  }
  if (props.href) return "a";
  return "button";
});
</script>
