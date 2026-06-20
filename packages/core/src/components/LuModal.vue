<template>
  <Teleport to="body">
    <transition
      enter-active-class="lu-modal-overlay-enter-active"
      enter-from-class="lu-modal-overlay-enter-from"
      enter-to-class="lu-modal-overlay-enter-to"
      leave-active-class="lu-modal-overlay-leave-active"
      leave-from-class="lu-modal-overlay-leave-from"
      leave-to-class="lu-modal-overlay-leave-to"
    >
      <div v-if="modelValue" :class="['lu-modal__overlay']" @click="handleOverlayClick" aria-modal="true" role="dialog" tabindex="-1">
        <transition
          enter-active-class="lu-modal-content-enter-active"
          enter-from-class="lu-modal-content-enter-from"
          enter-to-class="lu-modal-content-enter-to"
          leave-active-class="lu-modal-content-leave-active"
          leave-from-class="lu-modal-content-leave-from"
          leave-to-class="lu-modal-content-leave-to"
          appear
        >
          <div v-if="modelValue" :class="['lu-modal', variant && `lu-modal--${variant}`]" @click.stop>
            <div v-if="$slots.header || title" :class="['lu-modal__header']">
              <slot name="header">
                <LuText variant="section-title">{{ title }}</LuText>
              </slot>
              <LuButton v-if="closable" variant="icon" :class="['lu-modal__close-button']" @click="close" aria-label="Close modal">
                <LuIcon name="x" class="lu-modal__close-icon" />
              </LuButton>
            </div>
            
            <div :class="['lu-modal__content']">
              <slot />
            </div>

            <div v-if="$slots.footer" :class="['lu-modal__footer']">
              <slot name="footer" />
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, watch } from "vue";
import LuText from "./LuText.vue";
import LuIcon from "./LuIcon.vue";
import LuButton from "./LuButton.vue";

/**
 * Overlay dialog modal. Renders via Vue `<Teleport>` to body.
 *
 * ⛔ Do NOT add a `class` prop with Tailwind utilities.
 */
interface LuModalProps {
  /** Controls visibility of the modal. Use `v-model` to bind. */
  modelValue: boolean;
  /** Modal title, rendered in the header slot if provided. */
  title?: string;
  /** Visual variant. Resolves to BEM modifier `lu-modal--{variant}`. */
  variant?: string;
  /** Whether to show a close button in the header. @default true */
  closable?: boolean;
  /** Whether clicking the overlay backdrop closes the modal. @default true */
  closeOnOverlayClick?: boolean;
}

const props = withDefaults(defineProps<LuModalProps>(), {
  closable: true,
  closeOnOverlayClick: true,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();



const close = () => {
  if (props.closable) {
    emit("update:modelValue", false);
    emit("close");
  }
};

const handleOverlayClick = () => {
  if (props.closeOnOverlayClick) {
    close();
  }
};

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.modelValue) {
    close();
  }
};

watch(() => props.modelValue, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}, { immediate: true });

onMounted(() => {
  document.addEventListener('keydown', handleEscKey);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscKey);
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
});
</script>
