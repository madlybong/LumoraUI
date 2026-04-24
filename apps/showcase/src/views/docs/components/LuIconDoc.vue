<template>
  <LuPageHeader title="LuIcon" description="A simple wrapper for icons. It applies the skin class and aria-hidden='true'." />

  <PreviewBlock 
    title="Usage with Inline SVG" 
    description="You bring your own SVGs (e.g. from Lucide or Heroicons)."
    :code="svgCode"
  >
    <template #preview>
      <div class="flex gap-4">
        <LuIcon class="w-6 h-6 text-indigo-600 dark:text-indigo-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20v-6M6 20V10M18 20V4"/>
          </svg>
        </LuIcon>
        <LuIcon class="w-6 h-6 text-emerald-600 dark:text-emerald-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"/>
          </svg>
        </LuIcon>
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuIcon, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const svgCode = `<div class="flex gap-4">
  <LuIcon class="w-6 h-6 text-indigo-600">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <!-- SVG paths -->
    </svg>
  </LuIcon>
</div>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
