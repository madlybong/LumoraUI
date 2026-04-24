<template>
  <LuPageHeader title="Theme Controls" description="Pre-wired components that integrate directly with the LumoraUI theme system to toggle between light and dark modes." />

  <PreviewBlock 
    title="LuThemeSwitch" 
    description="A simple toggle switch that toggles the global theme."
    :code="switchCode"
  >
    <template #preview>
      <div class="flex items-center gap-4 border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg bg-white dark:bg-zinc-950">
        <span class="text-sm font-medium text-zinc-900 dark:text-zinc-100">Dark Mode</span>
        <LuThemeSwitch />
      </div>
    </template>
  </PreviewBlock>

  <PreviewBlock 
    title="LuThemeSelect" 
    description="A dropdown select that allows choosing light, dark, or system preference."
    :code="selectCode"
  >
    <template #preview>
      <div class="w-full max-w-[200px]">
        <LuThemeSelect />
      </div>
    </template>
  </PreviewBlock>

  <div class="mt-16">
    <h2 class="text-xl font-semibold mb-6 dark:text-white">Props API</h2>
    <p class="text-sm text-zinc-500 mb-4">Both components accept a <code>variant</code> prop for skinning. They do not require a <code>v-model</code> as they manage state internally via the theme context.</p>
  </div>
</template>

<script setup lang="ts">
import { LuThemeSwitch, LuThemeSelect, LuPageHeader } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';

const switchCode = `<template>
  <div class="flex items-center gap-4">
    <span>Dark Mode</span>
    <LuThemeSwitch />
  </div>
</template>`;

const selectCode = `<template>
  <LuThemeSelect />
</template>`;
</script>
