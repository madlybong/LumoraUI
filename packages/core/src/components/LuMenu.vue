<template>
  <div :class="resolvedSkin" ref="dropdownRef">
    <div @click="toggle" :class="resolvedTriggerSkin" aria-haspopup="true" :aria-expanded="isOpen">
      <slot name="trigger">
        <LuButton variant="default">Options <LuIcon name="chevron-down" class="ml-2 h-4 w-4" /></LuButton>
      </slot>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div v-if="isOpen" :class="[resolvedContentSkin, alignClass]">
        <div :class="resolvedGroupSkin" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useLumoraConfig } from "../context";
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

const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => resolveSkin("LuMenu", props.variant));
const resolvedTriggerSkin = computed(() => resolveSkin("LuMenuTrigger", props.variant));
const resolvedContentSkin = computed(() => resolveSkin("LuMenuContent", props.variant));
const resolvedGroupSkin = computed(() => resolveSkin("LuMenuGroup", props.variant));

const alignClass = computed(() => {
  return props.align === 'right' ? 'right-0 origin-top-right' : 'left-0 origin-top-left';
});

const toggle = () => {
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
