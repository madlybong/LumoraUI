<template>
  <component 
    :is="componentTag" 
    v-bind="componentProps" 
    :class="[resolvedSkin, isActive ? activeSkin : '']"
    :aria-current="isActive ? 'page' : undefined"
    :aria-disabled="disabled"
    :disabled="disabled"
    @click="onClick"
  >
    <div :class="iconSkin">
      <slot name="icon" />
    </div>
    <div v-if="label" :class="labelSkin">
      {{ label }}
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, inject, useAttrs } from "vue";

defineOptions({ name: "LuMobileNavBarItem" });

const props = defineProps<{ 
  variant?: "default";
  value: string | number;
  label?: string;
  to?: any;
  disabled?: boolean;
}>();

const activeItem = inject<any>("lu-mobile-nav-active", null);

const isActive = computed(() => {
  if (activeItem && activeItem.value !== undefined) {
    return activeItem.value === props.value;
  }
  return false;
});

const onClick = (e: Event) => {
  if (props.disabled) {
    e.preventDefault();
    return;
  }
  if (activeItem) {
    activeItem.value = props.value;
  }
};

const componentTag = computed(() => props.to ? "RouterLink" : "button");
const componentProps = computed(() => {
  const base = { ...useAttrs() };
  if (props.to) base.to = props.to;
  else base.type = "button";
  return base;
});

const resolvedSkin = computed(() => `lu-mobile-nav-bar-item ${props.variant && props.variant !== "default" ? "lu-mobile-nav-bar-item--"+props.variant : ""}`.trim());
const activeSkin = computed(() => `lu-mobile-nav-bar-item--active`);
const iconSkin = computed(() => `lu-mobile-nav-bar-item__icon`);
const labelSkin = computed(() => `lu-mobile-nav-bar-item__label`);
</script>
