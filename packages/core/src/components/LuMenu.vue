<template>
  <div :class="['lu-menu', variant && `lu-menu--${variant}`]" ref="dropdownRef">
    <div @click="toggle" ref="triggerRef" :class="['lu-menu__trigger']" aria-haspopup="true" :aria-expanded="isOpen">
      <slot name="trigger">
        <LuButton variant="default">Options <LuIcon name="chevron-down" class="lu-menu__chevron" /></LuButton>
      </slot>
    </div>
    <transition
      enter-active-class="lu-menu-enter-active"
      enter-from-class="lu-menu-enter-from"
      enter-to-class="lu-menu-enter-to"
      leave-active-class="lu-menu-leave-active"
      leave-from-class="lu-menu-leave-from"
      leave-to-class="lu-menu-leave-to"
    >
      <div v-if="isOpen" ref="contentRef" :class="['lu-menu__content']" :style="floatingStyle">
        <div :class="['lu-menu__group']" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useFloating } from "../composables/useFloating";
import LuButton from "./LuButton.vue";
import LuIcon from "./LuIcon.vue";

const props = withDefaults(defineProps<{
  variant?: string;
  align?: 'left' | 'right';
}>(), {
  align: 'left'
});

const emit = defineEmits<{
  (e: "open"): void;
  (e: "close"): void;
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);

const { x, y } = useFloating(triggerRef, contentRef, {
  placement: props.align === 'right' ? 'bottom-end' : 'bottom-start',
  offset: 4,
  strategy: 'fixed'
});

const floatingStyle = computed(() => ({
  position: 'fixed' as const,
  left: `${x.value}px`,
  top: `${y.value}px`,
  zIndex: 50
}));



const toggle = (event: Event) => {
  event.stopPropagation();
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    emit("open");
  } else {
    emit("close");
  }
};

const close = () => {
  if (isOpen.value) {
    isOpen.value = false;
    emit("close");
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

