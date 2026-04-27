<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" :class="resolvedOverlaySkin" @click="handleOverlayClick" aria-modal="true" role="dialog" tabindex="-1">
        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          appear
        >
          <div v-if="modelValue" :class="resolvedSkin" @click.stop>
            <div v-if="$slots.header || title" :class="resolvedHeaderSkin">
              <slot name="header">
                <LuText variant="section-title">{{ title }}</LuText>
              </slot>
              <button v-if="closable" type="button" :class="resolvedCloseButtonSkin" @click="close" aria-label="Close modal">
                <LuIcon name="x" class="h-5 w-5" />
              </button>
            </div>
            
            <div :class="resolvedContentSkin">
              <slot />
            </div>

            <div v-if="$slots.footer" :class="resolvedFooterSkin">
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
import { useLumoraConfig } from "../context";
import LuText from "./LuText.vue";
import LuIcon from "./LuIcon.vue";

const props = withDefaults(defineProps<{
  modelValue: boolean;
  title?: string;
  variant?: string;
  closable?: boolean;
  closeOnOverlayClick?: boolean;
}>(), {
  closable: true,
  closeOnOverlayClick: true,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();

const { resolveSkin } = useLumoraConfig();

const resolvedOverlaySkin = computed(() => resolveSkin("LuModalOverlay", props.variant));
const resolvedSkin = computed(() => resolveSkin("LuModal", props.variant));
const resolvedHeaderSkin = computed(() => resolveSkin("LuModalHeader", props.variant));
const resolvedContentSkin = computed(() => resolveSkin("LuModalContent", props.variant));
const resolvedFooterSkin = computed(() => resolveSkin("LuModalFooter", props.variant));
const resolvedCloseButtonSkin = computed(() => resolveSkin("LuModalCloseButton", props.variant));

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
