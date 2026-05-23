<template>
  <LuDesktopTopBar>
    <LuStack direction="horizontal" class="items-center gap-2">
      <LuLink to="/" variant="brand" class="flex items-center gap-2">
        <LuIcon name="layout-grid" class="h-5 w-5 text-rose-500" />
        <LuText as="span" variant="brand-label">Lumora UI</LuText>
      </LuLink>
      <LuBadge variant="default" class="ml-1">v{{ version }}</LuBadge>
    </LuStack>
    
    <LuStack direction="horizontal" class="items-center gap-3">
      <ThemeToggle />
      <LuDivider variant="vertical" class="h-5" />
      <LuLink href="https://github.com/madlybong/lumora-ui" target="_blank" variant="ghost" class="p-1.5 -m-1.5">
        <LuIcon name="github" class="w-4 h-4" />
      </LuLink>
    </LuStack>
  </LuDesktopTopBar>
</template>

<script setup lang="ts">
import { LuDesktopTopBar, LuIcon, LuBadge, LuStack, LuLink, LuText, LuDivider } from '@astrake/lumora-ui';
import ThemeToggle from './ThemeToggle.vue';

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '?.?.?';
</script>
