<template>
  <div :class="resolvedSkin" ref="popoverRef" @mouseleave="handleMouseLeave">
    <div 
      ref="triggerRef" 
      class="lu-popover-trigger inline-block" 
      @click="handleClick" 
      @mouseenter="handleMouseEnter"
    >
      <slot name="trigger" />
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div 
        v-if="isOpen" 
        ref="contentRef"
        :class="resolvedContentSkin" 
        :style="floatingStyle"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useLumoraConfig } from "../context";
import { useFloating } from "../composables/useFloating";

const props = withDefaults(defineProps<{
  position?: "top" | "bottom" | "left" | "right";
  trigger?: "click" | "hover";
  closeOnOutsideClick?: boolean;
  variant?: string;
}>(), {
  position: "bottom",
  trigger: "click",
  closeOnOutsideClick: true
});

const isOpen = ref(false);
const popoverRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);

const { x, y } = useFloating(triggerRef, contentRef, {
  placement: props.position,
  offset: 8
});

const floatingStyle = computed(() => ({
  position: 'absolute' as const,
  left: `${x.value}px`,
  top: `${y.value}px`,
  zIndex: 40
}));

const handleClick = () => {
  if (props.trigger !== 'click') return;
  isOpen.value = !isOpen.value;
};

const handleMouseEnter = () => {
  if (props.trigger !== 'hover') return;
  isOpen.value = true;
};

const handleMouseLeave = () => {
  if (props.trigger !== 'hover') return;
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (!props.closeOnOutsideClick) return;
  if (popoverRef.value && !popoverRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => resolveSkin("LuPopover", props.variant));
const resolvedContentSkin = computed(() => resolveSkin("LuPopoverContent", props.variant));
</script>
