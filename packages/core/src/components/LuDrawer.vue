<template>
  <teleport to="body">
    <transition name="lu-drawer-fade">
      <div 
        v-if="modelValue && mode === 'overlay'" 
        :class="backdropSkin" 
        @click="handleOutsideClick"
      />
    </transition>
    <transition :name="`lu-drawer-slide-${position}`">
      <div 
        v-if="modelValue" 
        :class="[panelSkin, positionSkin]"
        role="dialog"
        aria-modal="true"
      >
        <div v-if="$slots.header" :class="headerSkin">
          <slot name="header" />
        </div>
        <div :class="contentSkin">
          <slot />
        </div>
        <div v-if="$slots.footer" :class="footerSkin">
          <slot name="footer" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

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

const { resolveSkin } = useLumoraConfig();

const backdropSkin = computed(() => resolveSkin("LuDrawerBackdrop", props.variant));
const panelSkin = computed(() => resolveSkin("LuDrawerPanel", props.variant));
const positionSkin = computed(() => resolveSkin(`LuDrawerPanel.${props.position}`, props.variant));
const headerSkin = computed(() => resolveSkin("LuDrawerHeader", props.variant));
const contentSkin = computed(() => resolveSkin("LuDrawerContent", props.variant));
const footerSkin = computed(() => resolveSkin("LuDrawerFooter", props.variant));
</script>
