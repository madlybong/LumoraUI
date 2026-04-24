<template>
  <LuDesktopTopBar>
    <LuStack direction="horizontal" class="items-center gap-3">
      <LuLink to="/" class="font-bold text-lg tracking-tight text-zinc-900 dark:text-white flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <LuIcon name="layout-grid" class="w-6 h-6 text-indigo-600 dark:text-indigo-500" />
        Lumora UI
      </LuLink>
      <LuBadge variant="docs-version">v{{ version }}</LuBadge>
    </LuStack>
    
    <LuStack direction="horizontal" class="items-center gap-4">
      <!-- Skin Toggle (Styled / Naked) -->
      <LuCard variant="skin-toggle">
        <LuTooltip content="Styled (Default)" position="bottom">
          <template #trigger>
            <LuButton 
              :variant="isSkinEnabled ? 'docs-action' : 'docs-icon-btn'" 
              @click="!isSkinEnabled && toggleSkin()"
              class="w-8 h-8 !px-0"
              :class="{ 'bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700': isSkinEnabled }"
            >
              <LuIcon name="paintbrush" class="w-4 h-4" />
            </LuButton>
          </template>
        </LuTooltip>
        
        <LuTooltip content="Naked (Unstyled)" position="bottom">
          <template #trigger>
            <LuButton 
              :variant="!isSkinEnabled ? 'docs-action' : 'docs-icon-btn'" 
              @click="isSkinEnabled && toggleSkin()"
              class="w-8 h-8 !px-0"
              :class="{ 'bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700': !isSkinEnabled }"
            >
              <LuIcon name="code-2" class="w-4 h-4" />
            </LuButton>
          </template>
        </LuTooltip>
      </LuCard>

      <LuDivider orientation="vertical" />
      
      <ThemeToggle />

      <LuLink href="https://github.com/madlybong/lumora-ui" target="_blank" variant="docs-external">
        <LuIcon name="github" class="w-5 h-5" />
      </LuLink>
    </LuStack>
  </LuDesktopTopBar>
</template>

<script setup lang="ts">
import { LuDesktopTopBar, LuIcon, LuBadge, LuButton, LuTooltip, LuStack, LuLink, LuCard, LuDivider } from '@astrake/lumora-ui';
import { useSkinToggle } from '../composables/useSkinToggle';
import ThemeToggle from './ThemeToggle.vue';

const { isSkinEnabled, toggleSkin } = useSkinToggle();

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.1.0';
</script>
