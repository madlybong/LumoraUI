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
import { computed, resolveComponent, useAttrs } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: string;
  as?: string;
  to?: any;
  href?: string;
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

const bindingProps = computed(() => {
  const p: any = { ...props, ...useAttrs() };
  delete p.variant;
  delete p.as;
  
  if (componentType.value !== 'button') {
    delete p.type;
  }
  if (props.disabled && componentType.value !== 'button') {
    // Buttons can be natively disabled, but links cannot easily.
    // However, if disabled is true, we keep it so CSS can style it.
    // To prevent click navigation on disabled links, we would need to handle the click event.
    // For now, we pass it down so styling works.
  }
  return p;
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuButton", props.variant));
</script>
