<template>
  <component 
    :is="componentTag" 
    v-bind="componentProps" 
    :class="[resolvedSkin, active ? activeSkin : '']"
    :aria-current="active ? 'page' : undefined"
    :title="!isExpanded && title ? title : undefined"
  >
    <div :class="iconSkin">
      <slot name="icon" />
    </div>
    <div v-if="$slots.default && isExpanded" :class="labelSkin">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, inject, useAttrs } from "vue";

defineOptions({ name: "LuDesktopRailItem" });

const props = defineProps<{ 
  variant?: "default"; 
  active?: boolean;
  to?: any;
  title?: string;
}>();

const isExpanded = inject("lu-rail-expanded", computed(() => false));

const componentTag = computed(() => props.to ? "RouterLink" : "button");
const componentProps = computed(() => {
  const base = { ...useAttrs() };
  if (props.to) base.to = props.to;
  else base.type = "button";
  return base;
});

const resolvedSkin = computed(() => `lu-desktop-rail-item ${props.variant && props.variant !== "default" ? "lu-desktop-rail-item--"+props.variant : ""}`.trim());
const activeSkin = computed(() => `lu-desktop-rail-item--active`);
const iconSkin = computed(() => `lu-desktop-rail-item-icon ${props.variant && props.variant !== "default" ? "lu-desktop-rail-item-icon--"+props.variant : ""}`.trim());
const labelSkin = computed(() => `lu-desktop-rail-item-label ${props.variant && props.variant !== "default" ? "lu-desktop-rail-item-label--"+props.variant : ""}`.trim());
</script>
