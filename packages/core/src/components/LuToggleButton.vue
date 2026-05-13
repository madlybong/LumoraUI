<template>
  <button 
    v-bind="$attrs" 
    :class="[resolvedSkin, isActive ? activeSkin : '']" 
    @click="onClick"
    :aria-pressed="isActive"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  value: string | number | boolean;
  variant?: string;
}>();

const groupValue = inject<Ref<string | number | boolean | undefined>>("lu-toggle-value");
const setGroupValue = inject<(value: string | number | boolean) => void>("lu-toggle-set");

const isActive = computed(() => groupValue?.value === props.value);

const onClick = () => {
  if (setGroupValue) {
    setGroupValue(props.value);
  }
};

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuToggleButton", props.variant));
const activeSkin = computed(() => {
  const activeVariant = props.variant ? `${props.variant}-active` : "active";
  const skin = resolveSkin("LuToggleButton", activeVariant);
  // Fallback to standard 'active' if the variant-specific active skin isn't defined
  return skin || resolveSkin("LuToggleButton", "active");
});
</script>
