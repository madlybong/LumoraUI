<template>
  <LuPageHeader title="LuBadge" description="A small visual indicator for statuses, tags, or counts." />

  <PreviewBlock 
    title="Usage" 
    description="Badges can be styled with variants or custom classes."
    :code="exampleCode"
  >
    <template #preview>
      <div class="flex items-center gap-4">
        <LuBadge class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300">Default</LuBadge>
        <LuBadge class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-400">Primary</LuBadge>
        <LuBadge class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400">Success</LuBadge>
        <LuBadge class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400">Danger</LuBadge>
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuBadge, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<div class="flex gap-4">
  <LuBadge class="bg-zinc-100 text-zinc-800">Default</LuBadge>
  <LuBadge class="bg-indigo-100 text-indigo-800">Primary</LuBadge>
  <LuBadge class="bg-emerald-100 text-emerald-800">Success</LuBadge>
  <LuBadge class="bg-red-100 text-red-800">Danger</LuBadge>
</div>`;

const propsData = [
  { name: 'as', type: 'string', default: '"span"', description: 'The HTML element to render as.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
