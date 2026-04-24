<template>
  <LuPageHeader title="LuScroll" description="A container that handles overflow by providing a scrollable area." />

  <PreviewBlock 
    title="Vertical Scroll" 
    description="The default variant provides vertical scrolling."
    :code="verticalCode"
  >
    <template #preview>
      <PreviewFrame width="300px" height="200px" class="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
        <LuScroll class="p-4">
          <div class="space-y-4">
            <div v-for="i in 10" :key="i" class="h-12 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center text-zinc-500">
              Item {{ i }}
            </div>
          </div>
        </LuScroll>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <PreviewBlock 
    title="Horizontal Scroll" 
    description="Use variant='horizontal' for horizontal scrolling."
    :code="horizontalCode"
  >
    <template #preview>
      <PreviewFrame width="300px" height="150px" class="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
        <LuScroll variant="horizontal" class="p-4 flex items-center">
          <div class="flex gap-4 w-max">
            <div v-for="i in 10" :key="i" class="w-24 h-24 shrink-0 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded flex items-center justify-center font-medium text-indigo-700 dark:text-indigo-400">
              Card {{ i }}
            </div>
          </div>
        </LuScroll>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuScroll, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const verticalCode = `<LuScroll class="p-4">
  <div class="space-y-4">
    <div v-for="i in 10" :key="i" class="h-12 bg-zinc-100">
      Item {{ i }}
    </div>
  </div>
</LuScroll>`;

const horizontalCode = `<LuScroll variant="horizontal" class="p-4">
  <div class="flex gap-4 w-max">
    <div v-for="i in 10" :key="i" class="w-24 h-24 shrink-0 bg-indigo-50">
      Card {{ i }}
    </div>
  </div>
</LuScroll>`;

const propsData = [
  { name: 'variant', type: '"default" | "horizontal"', default: '"default"', description: 'The scroll direction variant.' },
];
</script>
