<template>
  <div v-bind="$attrs" :class="wrapperSkin">
    <button type="button" :class="triggerSkin" @click="toggle">
      <slot name="trigger" :isOpen="isOpen" />
    </button>
    <transition name="lu-collapsible">
      <div v-show="isOpen" :class="contentSkin.wrapper">
        <div :class="contentSkin.inner">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string; modelValue?: boolean; defaultOpen?: boolean }>();
const emit = defineEmits<{ (e: "update:modelValue", val: boolean): void }>();

const isOpen = ref(props.modelValue ?? props.defaultOpen ?? false);

watch(() => props.modelValue, (val) => {
  if (val !== undefined) isOpen.value = val;
});

const toggle = () => {
  isOpen.value = !isOpen.value;
  emit("update:modelValue", isOpen.value);
};

const { resolveSkin } = useLumoraConfig();
const wrapperSkin = computed(() => resolveSkin("LuCollapsible", props.variant));
const triggerSkin = computed(() => resolveSkin("LuCollapsibleTrigger", props.variant));
const contentSkin = computed(() => ({
  wrapper: resolveSkin("LuCollapsibleContent", props.variant),
  inner: resolveSkin("LuCollapsibleContent", "inner")
}));
</script>
