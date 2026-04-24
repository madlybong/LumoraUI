<template>
  <div v-bind="$attrs" :class="resolvedSkin" :style="gridStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  cols?: number;
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuGrid", props.variant) || "grid");

const gridStyle = computed(() => 
  props.cols ? { gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))` } : {}
);
</script>
