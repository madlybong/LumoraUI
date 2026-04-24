<template>
  <div v-bind="$attrs" :class="containerSkin" @mouseenter="onEnter" @mouseleave="onLeave">
    <slot name="trigger" />
    <div v-if="isVisible" :class="contentSkin">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string; position?: "top" | "bottom" | "left" | "right"; delay?: number }>();

const isVisible = ref(false);
let timeout: ReturnType<typeof setTimeout> | null = null;

const onEnter = () => {
  if (timeout) clearTimeout(timeout);
  if (props.delay) {
    timeout = setTimeout(() => isVisible.value = true, props.delay);
  } else {
    isVisible.value = true;
  }
};

const onLeave = () => {
  if (timeout) clearTimeout(timeout);
  isVisible.value = false;
};

const { resolveSkin } = useLumoraConfig();
const containerSkin = computed(() => resolveSkin("LuTooltip", props.variant));
const contentSkin = computed(() => resolveSkin("LuTooltipContent", props.position ?? props.variant));
</script>
