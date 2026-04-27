<template>
  <LuPageHeader title="LuCard" description="A flexible container component for grouping content." />

  <LuCodeBlock variant="preview" 
    title="Basic Card" 
    description="Cards can contain any content and provide standard border and background styling."
    :code="cardCode"
  >
    <template #preview>
      <LuStack>
        <LuCard variant="default">
          <LuStack direction="vertical">
            <LuText as="h3" variant="section-title">Card Title</LuText>
            <LuText as="p" variant="body">This is the card body content.</LuText>
            <LuButton variant="primary">Action</LuButton>
          </LuStack>
        </LuCard>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuCard, LuButton , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const cardCode = `<template>
  <LuCard variant="default">
    <LuStack direction="vertical">
      <LuText as="h3" variant="section-title">Card Title</LuText>
      <LuText as="p" variant="body">This is the card body content.</LuText>
      <LuButton variant="primary">Action</LuButton>
    </LuStack>
  </LuCard>
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
  { name: 'as', type: 'string', default: '"div"', description: 'The HTML tag to render as.' },
];
</script>
