<template>
  <teleport to="body">
    <div :class="containerSkin" class="lu-toast-container">
      <transition-group name="lu-toast-fade">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="[toastSkin(toast.variant), 'lu-toast']"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="flex-1 min-w-0">
            <div :class="titleSkin(toast.variant)" class="lu-toast-title">
              {{ toast.title }}
            </div>
            <div v-if="toast.description" :class="descriptionSkin(toast.variant)" class="lu-toast-description">
              {{ toast.description }}
            </div>
          </div>
          <button
            :class="closeSkin(toast.variant)"
            class="lu-toast-close"
            type="button"
            aria-label="Close"
            @click="dismiss(toast.id)"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
import { useLumoraConfig } from "../context";
import { useLuToast } from "../composables/useLuToast";

const { toasts, dismiss } = useLuToast();
const { resolveSkin } = useLumoraConfig();

const props = defineProps<{
  variant?: string;
}>();

const containerSkin = computed(() => resolveSkin("LuToastContainer", props.variant));
const toastSkin = (toastVariant?: string) => resolveSkin("LuToast", toastVariant || props.variant);
const titleSkin = (toastVariant?: string) => resolveSkin("LuToastTitle", toastVariant || props.variant);
const descriptionSkin = (toastVariant?: string) => resolveSkin("LuToastDescription", toastVariant || props.variant);
const closeSkin = (toastVariant?: string) => resolveSkin("LuToastClose", toastVariant || props.variant);
</script>
