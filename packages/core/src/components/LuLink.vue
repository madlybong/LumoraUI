<template>
  <component
    :is="componentType"
    v-bind="bindingProps"
    :class="['lu-link', variant && `lu-link--${variant}`]"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from "vue";

/**
 * Anchor link component supporting external hrefs and vue-router logic.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ Do NOT use raw `<a>` tags for standard links.
 * - Variants: `default`, `brand`, `ghost`, `nav`, `nav-active`.
 */
const props = defineProps<{
  variant?: string;
  as?: string;
  to?: any;
  href?: string;
  target?: string;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const componentType = computed(() => {
  if (props.as) return props.as;
  if (props.to) {
    // Attempt to resolve RouterLink if available, otherwise fallback to 'a'
    const routerLink = resolveComponent("RouterLink");
    return typeof routerLink === 'string' ? 'a' : routerLink;
  }
  return "a";
});

const bindingProps = computed(() => {
  const p: any = { ...props };
  delete p.variant;
  delete p.as;
  return p;
});


</script>
