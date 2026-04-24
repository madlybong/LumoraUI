<template>
  <LuPageHeader title="LuText" description="A polymorphic component for rendering text with semantic HTML tags." />

  <PreviewBlock 
    title="Usage" 
    description="Use the 'as' prop to change the underlying HTML element (e.g. h1, p, label)."
    :code="exampleCode"
  >
    <template #preview>
      <div class="flex flex-col gap-4 text-left w-full max-w-md">
        <LuText as="h1" class="text-2xl font-bold text-zinc-900 dark:text-white">This is an H1 Heading</LuText>
        <LuText as="p" class="text-base text-zinc-600 dark:text-zinc-400">This is a paragraph of text rendered using the p tag.</LuText>
        <LuText as="label" class="text-sm font-medium text-zinc-700 dark:text-zinc-300">This is a label</LuText>
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuText, LuPageHeader, LuStack } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<div class="flex flex-col gap-4">
  <LuText as="h1" class="text-2xl font-bold">Heading</LuText>
  <LuText as="p" class="text-zinc-600">Paragraph text.</LuText>
  <LuText as="label" class="text-sm font-medium">Label</LuText>
</div>`;

const propsData = [
  { name: 'as', type: 'string', default: '"span"', description: 'The HTML element to render as.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
