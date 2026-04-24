<template>
  <LuCard as="footer" class="mt-20 pt-8 pb-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-start justify-between gap-8 text-sm text-zinc-500 dark:text-zinc-400">
    <LuStack direction="vertical" class="gap-2">
      <LuStack direction="horizontal" class="items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
        <LuIcon name="layout-grid" class="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        Lumora UI
      </LuStack>
      <LuText as="p" class="text-xs max-w-xs">A headless, zero-CSS framework for building ambitious web interfaces.</LuText>
    </LuStack>
    
    <LuStack direction="vertical" class="gap-2">
      <LuText class="font-semibold text-zinc-900 dark:text-zinc-100 text-xs tracking-wider uppercase mb-1">Resources</LuText>
      <LuLink href="https://github.com/madlybong/lumora-ui" target="_blank" variant="footer-link">
        <LuIcon name="github" class="w-3.5 h-3.5" /> Source Code
      </LuLink>
      <LuLink href="#" variant="footer-link">
        <LuIcon name="bug" class="w-3.5 h-3.5" /> Report an Issue
      </LuLink>
    </LuStack>

    <LuStack direction="vertical" class="gap-2 md:items-end">
      <LuText class="font-semibold text-zinc-900 dark:text-zinc-100 text-xs tracking-wider uppercase mb-1">Legal</LuText>
      <LuText>© 2025 Astrake · MIT License</LuText>
      <LuStack direction="horizontal" class="items-center gap-2">
        Version <LuBadge variant="docs-version">{{ version }}</LuBadge>
      </LuStack>
    </LuStack>
  </LuCard>
</template>

<script setup lang="ts">
import { LuIcon, LuBadge, LuCard, LuStack, LuText, LuLink } from '@astrake/lumora-ui';

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.1.0';
</script>
