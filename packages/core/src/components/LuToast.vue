<template>
  <teleport to="body">
    <div :class="['lu-toast-container', variant && `lu-toast-container--${variant}`]">
      <transition-group name="lu-toast-fade">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="['lu-toast', toast.variant && `lu-toast--${toast.variant}`]"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="lu-toast__message">
            <div :class="['lu-toast__title']">
              {{ toast.title }}
            </div>
            <div v-if="toast.description" :class="['lu-toast__description']">
              {{ toast.description }}
            </div>
          </div>
          <button
            :class="['lu-toast__close']"
            type="button"
            aria-label="Close"
            @click="dismiss(toast.id)"
          >
            <svg class="lu-toast__close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </transition-group>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLuToast } from "../composables/useLuToast";

const { toasts, dismiss } = useLuToast();

/**
 * Toast notification container. Typically rendered once at the app root.
 */
interface LuToastProps {
  /** Visual variant. Resolves to BEM modifier `lu-toast-container--{variant}`. */
  variant?: string;
}

const props = defineProps<LuToastProps>();

</script>
