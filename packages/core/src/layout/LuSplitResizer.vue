<template>
  <div v-bind="$attrs" :class="resolvedSkin"></div>
</template>

<script setup lang="ts">
import { computed, inject, unref, type Ref } from "vue";

const props = defineProps<{
  variant?: string;
}>();

const direction = inject<Ref<"horizontal" | "vertical"> | "horizontal">("lu-split-direction", "horizontal");
const resolvedSkin = computed(() => `lu-split-resizer ${unref(direction) === "horizontal" ? "lu-split-resizer--horizontal" : "lu-split-resizer--vertical"}`);
</script>
