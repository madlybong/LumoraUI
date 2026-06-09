<template>
  <div v-bind="$attrs" :class="resolvedSkin" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, unref, type Ref } from "vue";

const props = defineProps<{
  minSize?: number;
  maxSize?: number;
  defaultSize?: number;
  variant?: string;
}>();

const direction = inject<Ref<"horizontal" | "vertical"> | "horizontal">("lu-split-direction", "horizontal");
const size = ref(props.defaultSize);

const style = computed(() => {
  if (size.value === undefined) return { flex: "1 1 0%" };
  const dim = `${size.value}px`;
  return unref(direction) === "horizontal"
    ? { width: dim, flex: `0 0 ${dim}` }
    : { height: dim, flex: `0 0 ${dim}` };
});
const resolvedSkin = computed(() => `lu-split-pane ${props.variant && props.variant !== "default" ? "lu-split-pane--"+props.variant : ""}`.trim());
</script>
