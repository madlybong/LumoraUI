<template>
  <LuDesktopTopBar>
    <LuStack direction="horizontal">
      <LuLink to="/" variant="brand" class="flex items-center gap-2">
        <LuIcon name="layout-grid" class="h-5 w-5" />
        <span class="font-semibold text-base">Lumora UI</span>
      </LuLink>
      <LuBadge variant="default">v{{ version }}</LuBadge>
    </LuStack>
    
    <LuStack direction="horizontal">
      <ThemeToggle />

      <LuLink href="https://github.com/madlybong/lumora-ui" target="_blank" variant="default">
        <LuIcon name="github" />
      </LuLink>
    </LuStack>
  </LuDesktopTopBar>
</template>

<script setup lang="ts">
import { LuDesktopTopBar, LuIcon, LuBadge, LuStack, LuLink } from '@astrake/lumora-ui';
import ThemeToggle from './ThemeToggle.vue';

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.1.0';
</script>
