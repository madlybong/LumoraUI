<template>
  <LuPageHeader title="LuBadge" description="A small visual indicator for statuses, tags, or counts." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="Badges can be styled with variants or custom classes."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack   >
        <LuBadge>Default</LuBadge>
        <LuBadge variant="primary">Primary</LuBadge>
        <LuBadge variant="success">Success</LuBadge>
        <LuBadge variant="danger">Danger</LuBadge>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuBadge, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuStack   >
  <LuBadge>Default</LuBadge>
  <LuBadge variant="primary">Primary</LuBadge>
  <LuBadge variant="success">Success</LuBadge>
  <LuBadge variant="danger">Danger</LuBadge>
</LuStack>`;

const propsData = [
  { name: 'as', type: 'string', default: '"span"', description: 'The HTML element to render as.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
