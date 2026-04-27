<template>
  <LuPageHeader title="LuDivider" description="A visual separator between content." />

  <LuCodeBlock variant="preview" 
    title="Dividers" 
    description="Dividers can be horizontal or vertical."
    :code="dividerCode"
  >
    <template #preview>
      <LuStack direction="vertical" class="w-full">
        <LuText variant="body">Above</LuText>
        <LuDivider variant="horizontal" />
        <LuText variant="body">Below</LuText>
        
        <LuStack direction="horizontal" class="h-8">
          <LuText variant="body">Left</LuText>
          <LuDivider variant="vertical" />
          <LuText variant="body">Right</LuText>
        </LuStack>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuDivider , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const dividerCode = `<template>
  <LuDivider variant="horizontal" />
  <LuDivider variant="vertical" />
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration (e.g., horizontal, vertical).' },
  { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The orientation of the divider.' },
];
</script>
