<template>
  <component
    :is="componentType"
    v-bind="bindingProps"
    :class="resolvedSkin"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from "vue";
import { useLumoraConfig } from "../context";

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

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuLink", props.variant));
</script>
