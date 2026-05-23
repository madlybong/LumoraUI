<template>
  <div v-bind="$attrs" ref="triggerRef" :class="containerSkin" @mouseenter="onEnter" @mouseleave="onLeave">
    <slot name="trigger" />
    <div 
      v-show="isVisible" 
      ref="contentRef"
      :class="contentSkin" 
      :style="floatingStyle"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";
import { useFloating } from "../composables/useFloating";

const props = defineProps<{ variant?: string; position?: "top" | "bottom" | "left" | "right"; delay?: number }>();

const isVisible = ref(false);
let timeout: ReturnType<typeof setTimeout> | null = null;

const triggerRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);

const { x, y } = useFloating(triggerRef, contentRef, {
  placement: props.position || 'top',
  offset: 8
});

const floatingStyle = computed(() => ({
  position: 'absolute' as const,
  left: `${x.value}px`,
  top: `${y.value}px`,
}));

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
const contentSkin = computed(() => resolveSkin("LuTooltipContent", props.variant));
</script>

