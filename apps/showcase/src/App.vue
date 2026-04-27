<template>
  <component :is="layoutConfig.component">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import DocsLayout from './layouts/DocsLayout.vue';
import { useThemeStore } from './stores/useThemeStore';
import { useTheme } from '@astrake/lumora-ui/composables';

const route = useRoute();

const themeStore = useThemeStore();
const coreTheme = useTheme();

// Sync Pinia store with core theme composable
watch(() => themeStore.mode, (m) => coreTheme.setMode(m), { immediate: true });
watch(() => coreTheme.mode.value, (m) => themeStore.setMode(m));

// Toggle html.dark class globally for Tailwind
watch(() => themeStore.resolved, (theme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}, { immediate: true });


// Dynamic layout config to provide proper height/overflow to the outer frame
const layoutConfig = computed(() => {
  if (route.path.startsWith('/demo')) {
    return { component: 'div', class: 'h-screen w-screen overflow-hidden' };
  }
  return { component: DocsLayout, class: '' };
});



</script>
