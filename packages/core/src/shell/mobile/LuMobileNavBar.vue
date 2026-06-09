<template>
  <div v-bind="$attrs" :class="resolvedSkin" role="navigation" :aria-label="ariaLabel" style="padding-bottom: env(safe-area-inset-bottom, 0px)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";

defineOptions({ name: "LuMobileNavBar" });

const props = defineProps<{ 
  variant?: "default";
  modelValue?: string | number;
  ariaLabel?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const ariaLabel = computed(() => props.ariaLabel || "Bottom navigation");

const activeItem = computed({
  get: () => props.modelValue,
  set: (val) => {
    if (val !== undefined) emit("update:modelValue", val);
  }
});

provide("lu-mobile-nav-active", activeItem);

const resolvedSkin = computed(() => `lu-mobile-nav-bar ${props.variant && props.variant !== "default" ? "lu-mobile-nav-bar--"+props.variant : ""}`.trim());
</script>
