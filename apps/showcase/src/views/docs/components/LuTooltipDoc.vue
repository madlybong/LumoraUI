<template>
  <LuPageHeader title="LuTooltip" description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." />

  <PreviewBlock 
    title="Usage" 
    description="Provide a trigger and the content to display. Content is positioned via the position prop."
    :code="exampleCode"
  >
    <template #preview>
      <div class="flex items-center justify-center h-48 w-full gap-4">
        <LuTooltip position="top">
          <template #trigger>
            <LuButton variant="secondary">Hover me (Top)</LuButton>
          </template>
          <template #content>
            <div class="px-2 py-1 bg-zinc-900 text-white text-xs rounded shadow-lg absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Tooltip on top
            </div>
          </template>
        </LuTooltip>
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuTooltip, LuButton, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuTooltip position="top">
  <template #trigger>
    <LuButton variant="secondary">Hover me</LuButton>
  </template>
  
  <template #content>
    <!-- Note: Positioning classes are usually applied via your Skin config -->
    <div class="px-2 py-1 bg-zinc-900 text-white text-xs rounded absolute bottom-full mb-2">
      Tooltip content
    </div>
  </template>
</LuTooltip>`;

const propsData = [
  { name: 'position', type: '"top" | "bottom" | "left" | "right"', description: 'The tooltip position modifier.' },
  { name: 'delay', type: 'number', default: '0', description: 'Hover delay in milliseconds.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
