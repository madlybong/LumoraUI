<template>
  <component
    :is="componentType"
    v-bind="$attrs"
    :to="to"
    :href="href"
    :type="componentType === 'button' ? type : undefined"
    :disabled="componentType === 'button' ? disabled : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :class="[
      'lu-button',
      variant && `lu-button--${variant}`,
      align && align !== 'center' && `lu-button--align-${align}`,
      { 'lu-button--full': full },
      { 'pointer-events-none': disabled && componentType !== 'button' }
    ]"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from "vue";

defineOptions({ inheritAttrs: false });

const props = defineProps<{
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: string;
  as?: string;
  to?: any;
  href?: string;
  align?: "left" | "center" | "right";
  full?: boolean;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

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
