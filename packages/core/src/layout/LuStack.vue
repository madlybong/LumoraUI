<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  direction?: "vertical" | "horizontal";
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => {
  const base = resolveSkin("LuStack", props.variant);
  let extra = "";
  if (props.direction === "vertical") extra = " flex-col";
  if (props.direction === "horizontal") extra = " flex-row";
  return base + extra;
});
</script>
