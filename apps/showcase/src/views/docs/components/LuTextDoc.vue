<template>
  <LuPageHeader title="LuText" description="A polymorphic component for rendering text with semantic HTML tags." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="Use the 'as' prop to change the underlying HTML element (e.g. h1, p, label)."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack direction="vertical" gap="4">
        <LuText as="h1" variant="page-title">This is an H1 Heading</LuText>
        <LuText as="p" variant="body">This is a paragraph of text rendered using the p tag.</LuText>
        <LuText as="label" variant="label">This is a label</LuText>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuText, LuPageHeader, LuStack , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuStack direction="vertical" gap="4">
  <LuText as="h1" variant="page-title">Heading</LuText>
  <LuText as="p" variant="body">Paragraph text.</LuText>
  <LuText as="label" variant="label">Label</LuText>
</LuStack>`;

const propsData = [
  { name: 'as', type: 'string', default: '"span"', description: 'The HTML element to render as.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
