<template>
  <Teleport to="body">
    <transition
      :enter-active-class="resolvedOverlayTransitionSkin.enterActive"
      :enter-from-class="resolvedOverlayTransitionSkin.enterFrom"
      :enter-to-class="resolvedOverlayTransitionSkin.enterTo"
      :leave-active-class="resolvedOverlayTransitionSkin.leaveActive"
      :leave-from-class="resolvedOverlayTransitionSkin.leaveFrom"
      :leave-to-class="resolvedOverlayTransitionSkin.leaveTo"
    >
      <div v-if="modelValue" :class="resolvedOverlaySkin" @click="handleOverlayClick" aria-modal="true" role="dialog" tabindex="-1">
        <transition
          :enter-active-class="resolvedContentTransitionSkin.enterActive"
          :enter-from-class="resolvedContentTransitionSkin.enterFrom"
          :enter-to-class="resolvedContentTransitionSkin.enterTo"
          :leave-active-class="resolvedContentTransitionSkin.leaveActive"
          :leave-from-class="resolvedContentTransitionSkin.leaveFrom"
          :leave-to-class="resolvedContentTransitionSkin.leaveTo"
          appear
        >
          <div v-if="modelValue" :class="resolvedSkin" @click.stop>
            <div v-if="$slots.header || title" :class="resolvedHeaderSkin">
              <slot name="header">
                <LuText variant="section-title">{{ title }}</LuText>
              </slot>
              <LuButton v-if="closable" variant="icon" :class="resolvedCloseButtonSkin" @click="close" aria-label="Close modal">
                <LuIcon name="x" class="h-5 w-5" />
              </LuButton>
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
import LuButton from "./LuButton.vue";

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

const resolvedOverlayTransitionSkin = computed(() => ({
  enterActive: resolveSkin("LuModalTransitionOverlay", "enterActive"),
  enterFrom: resolveSkin("LuModalTransitionOverlay", "enterFrom"),
  enterTo: resolveSkin("LuModalTransitionOverlay", "enterTo"),
  leaveActive: resolveSkin("LuModalTransitionOverlay", "leaveActive"),
  leaveFrom: resolveSkin("LuModalTransitionOverlay", "leaveFrom"),
  leaveTo: resolveSkin("LuModalTransitionOverlay", "leaveTo"),
}));

const resolvedContentTransitionSkin = computed(() => ({
  enterActive: resolveSkin("LuModalTransitionContent", "enterActive"),
  enterFrom: resolveSkin("LuModalTransitionContent", "enterFrom"),
  enterTo: resolveSkin("LuModalTransitionContent", "enterTo"),
  leaveActive: resolveSkin("LuModalTransitionContent", "leaveActive"),
  leaveFrom: resolveSkin("LuModalTransitionContent", "leaveFrom"),
  leaveTo: resolveSkin("LuModalTransitionContent", "leaveTo"),
}));

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
