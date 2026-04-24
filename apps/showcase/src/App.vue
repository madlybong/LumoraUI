<template>
  <component :is="layoutConfig.component" :class="layoutConfig.class">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import DocsLayout from './layouts/DocsLayout.vue';
import { useLumoraConfig } from '@astrake/lumora-ui';
import { useSkinToggle } from './composables/useSkinToggle';
import { mobileSkin, mobileDarkSkin, desktopSkin, desktopDarkSkin, embeddedSkin, docsSkin } from './skins';
import { useThemeStore } from './stores/useThemeStore';
import { useTheme } from '@astrake/lumora-ui/composables';

const route = useRoute();
const { isSkinEnabled } = useSkinToggle();

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

// Create a reactive skin map based on the active route and theme
const activeSkin = computed(() => {
  if (!isSkinEnabled.value) return {};

  const path = route.path;
  const isDark = themeStore.resolved === 'dark';

  if (path.startsWith('/demo/mobile')) {
    return isDark ? mobileDarkSkin : mobileSkin;
  }
  if (path.startsWith('/demo/embedded')) {
    return embeddedSkin; // Embedded is always dark
  }
  if (path.startsWith('/demo/desktop')) {
    return isDark ? desktopDarkSkin : desktopSkin;
  }
  
  // Default to docs skin for the showcase itself
  return docsSkin;
});

// Dynamic layout config to provide proper height/overflow to the outer frame
const layoutConfig = computed(() => {
  if (route.path.startsWith('/demo')) {
    return { component: 'div', class: 'h-screen w-screen overflow-hidden' };
  } else if (route.path === '/') {
    return { component: 'div', class: 'min-h-screen overflow-y-auto' };
  }
  return { component: DocsLayout, class: '' };
});

const { config } = useLumoraConfig();

// Dynamically update the global skin configuration
watchEffect(() => {
  config.skin = activeSkin.value;
});
</script>
