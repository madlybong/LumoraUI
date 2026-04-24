<template>
  <LuStack direction="horizontal" class="items-center p-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 gap-0.5 relative">
    <!-- Sliding background for active state -->
    <div 
      class="absolute top-0.5 bottom-0.5 rounded-full bg-white dark:bg-zinc-700 shadow-sm transition-all duration-300 ease-out"
      :style="activeBackgroundStyle"
    ></div>

    <LuButton
      v-for="(mode, index) in modes"
      :key="mode.value"
      @click="setMode(mode.value)"
      :aria-label="mode.label"
      class="relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200"
      :class="[
        themeStore.mode === mode.value 
          ? 'text-indigo-600 dark:text-indigo-400' 
          : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
      ]"
    >
      <LuIcon :name="mode.icon" class="w-3.5 h-3.5" />
    </LuButton>
  </LuStack>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LuIcon, LuStack, LuButton } from '@astrake/lumora-ui';
import { useThemeStore } from '../stores/useThemeStore';

const themeStore = useThemeStore();

const modes = [
  { value: 'light', label: 'Light Theme', icon: 'sun' },
  { value: 'system', label: 'System Theme', icon: 'monitor' },
  { value: 'dark', label: 'Dark Theme', icon: 'moon' }
] as const;

const setMode = (mode: 'light' | 'system' | 'dark') => {
  themeStore.setMode(mode);
};

const activeIndex = computed(() => modes.findIndex(m => m.value === themeStore.mode));

const activeBackgroundStyle = computed(() => {
  const width = 28; // w-7 is 28px
  const gap = 2;    // gap-0.5 is 2px
  const padding = 2; // p-0.5 is 2px
  const left = padding + (activeIndex.value * (width + gap));
  
  return {
    width: `${width}px`,
    transform: `translateX(${left - padding}px)`
  };
});
</script>
