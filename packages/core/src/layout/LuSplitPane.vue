<template>
  <div v-bind="$attrs" :class="resolvedSkin" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, unref, type Ref } from "vue";
import { useLumoraConfig } from "../context";

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


const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuSplitPane", props.variant));
</script>
