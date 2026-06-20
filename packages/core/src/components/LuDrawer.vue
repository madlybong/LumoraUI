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

/**
 * Slide-out drawer overlay panel.
 * 
 * ⛔ Do NOT add a `class` prop with Tailwind utilities.
 */
interface LuDrawerProps {
  /** Controls visibility. Use `v-model`. */
  modelValue: boolean;
  /** Drawer origin side. @default 'right' */
  position?: "left" | "right" | "top" | "bottom";
  /** How the drawer behaves over content. 'overlay' darkens backdrop. @default 'overlay' */
  mode?: "overlay" | "push";
  /** Whether clicking outside the drawer closes it. @default true */
  closeOnOutsideClick?: boolean;
  /** Visual variant. Resolves to BEM modifier `lu-drawer__panel--{variant}`. */
  variant?: string;
}

const props = withDefaults(defineProps<LuDrawerProps>(), {
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
