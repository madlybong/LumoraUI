<template>
  <div :class="['lu-popover', variant && `lu-popover--${variant}`]" ref="popoverRef" @mouseleave="handleMouseLeave">
    <div 
      ref="triggerRef" 
      class="lu-popover__trigger" 
      @click="handleClick" 
      @mouseenter="handleMouseEnter"
    >
      <slot name="trigger" />
    </div>
    <transition
      enter-active-class="lu-popover-enter-active"
      enter-from-class="lu-popover-enter-from"
      enter-to-class="lu-popover-enter-to"
      leave-active-class="lu-popover-leave-active"
      leave-from-class="lu-popover-leave-from"
      leave-to-class="lu-popover-leave-to"
    >
      <div 
        v-if="isOpen" 
        ref="contentRef"
        :class="['lu-popover__content']" 
        :style="floatingStyle"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useFloating } from "../composables/useFloating";

/**
 * Floating popover component. Uses Floating UI internally.
 * 
 * ⛔ Do NOT add a `class` prop with Tailwind utilities.
 */
interface LuPopoverProps {
  /** Preferred placement of the popover relative to the trigger. @default 'bottom' */
  position?: "top" | "bottom" | "left" | "right";
  /** Event that triggers the popover. @default 'click' */
  trigger?: "click" | "hover";
  /** Whether clicking outside closes the popover. @default true */
  closeOnOutsideClick?: boolean;
  /** Visual variant. Resolves to BEM modifier `lu-popover--{variant}`. */
  variant?: string;
}

const props = withDefaults(defineProps<LuPopoverProps>(), {
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
  offset: 8,
  strategy: 'fixed'
});

const floatingStyle = computed(() => ({
  position: 'fixed' as const,
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


</script>
