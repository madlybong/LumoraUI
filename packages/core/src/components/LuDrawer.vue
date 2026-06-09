<template>
  <teleport to="body">
    <transition name="lu-drawer-fade">
      <div 
        v-if="modelValue && mode === 'overlay'" 
        :class="['lu-drawer__backdrop']" 
        @click="handleOutsideClick"
      />
    </transition>
    <transition :name="`lu-drawer-slide-${position}`">
      <div 
        v-if="modelValue" 
        :class="['lu-drawer__panel', `lu-drawer__panel--${position}`, variant && `lu-drawer__panel--${variant}`]"
        role="dialog"
        aria-modal="true"
      >
        <div v-if="$slots.header" :class="['lu-drawer__header']">
          <slot name="header" />
        </div>
        <div :class="['lu-drawer__content']">
          <slot />
        </div>
        <div v-if="$slots.footer" :class="['lu-drawer__footer']">
          <slot name="footer" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  modelValue: boolean;
  position?: "left" | "right" | "top" | "bottom";
  mode?: "overlay" | "push";
  closeOnOutsideClick?: boolean;
  variant?: string;
}>(), {
  position: "right",
  mode: "overlay",
  closeOnOutsideClick: true
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();

const close = () => {
  emit("update:modelValue", false);
  emit("close");
};

const handleOutsideClick = () => {
  if (props.closeOnOutsideClick) {
    close();
  }
};


</script>
