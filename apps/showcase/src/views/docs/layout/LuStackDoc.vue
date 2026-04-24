<template>
  <LuPageHeader title="LuStack" description="A flexible container for stacking elements either vertically or horizontally. Equivalent to WPF's StackPanel." />

  <PreviewBlock 
    title="Vertical Stack" 
    description="Stacks children from top to bottom."
    :code="verticalCode"
  >
    <template #preview>
      <PreviewFrame width="300px" class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm">
        <LuStack direction="vertical" class="gap-2">
          <LuCard variant="demo-box">Item 1</LuCard>
          <LuCard variant="demo-box">Item 2</LuCard>
          <LuCard variant="demo-box">Item 3</LuCard>
        </LuStack>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <PreviewBlock 
    title="Horizontal Stack" 
    description="Stacks children from left to right."
    :code="horizontalCode"
  >
    <template #preview>
      <PreviewFrame width="400px" class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm">
        <LuStack direction="horizontal" class="gap-2">
          <LuCard variant="demo-box">Item 1</LuCard>
          <LuCard variant="demo-box">Item 2</LuCard>
          <LuCard variant="demo-box">Item 3</LuCard>
        </LuStack>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuStack, LuPageHeader, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const verticalCode = `<LuStack direction="vertical" class="gap-2">
  <div class="bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-center text-zinc-600">Item 1</div>
  <div class="bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-center text-zinc-600">Item 2</div>
  <div class="bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-center text-zinc-600">Item 3</div>
</LuStack>`;

const horizontalCode = `<LuStack direction="horizontal" class="gap-2">
  <div class="flex-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-center text-zinc-600">Item 1</div>
  <div class="flex-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-center text-zinc-600">Item 2</div>
  <div class="flex-1 bg-zinc-100 border border-zinc-200 rounded-lg p-2 text-center text-zinc-600">Item 3</div>
</LuStack>`;

const propsData = [
  { name: 'direction', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The stacking direction.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
