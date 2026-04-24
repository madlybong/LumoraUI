<template>
  <LuPageHeader title="LuOverlay" description="A container that absolutely positions itself to fill its closest relative parent. Useful for modals, dialogs, or loading states." />

  <PreviewBlock 
    title="Loading Overlay" 
    description="Placing an overlay over a relative container."
    :code="exampleCode"
  >
    <template #preview>
      <PreviewFrame width="400px" height="200px" class="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
        <div class="relative w-full h-full p-4">
          <p class="text-zinc-500">This is the underlying content. It is obscured by the overlay.</p>
          
          <LuOverlay class="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center">
            <div class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-lg font-medium">
              Loading...
            </div>
          </LuOverlay>
        </div>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuOverlay, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<div class="relative w-full h-full p-4">
  <p>Content goes here</p>
  
  <LuOverlay class="bg-white/80 backdrop-blur-sm flex items-center justify-center">
    <div class="bg-indigo-600 text-white p-2 rounded">
      Loading...
    </div>
  </LuOverlay>
</div>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
