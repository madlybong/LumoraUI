<template>
  <LuPageHeader title="LuStack" description="A flexible container for stacking elements either vertically or horizontally. Equivalent to WPF's StackPanel." />

  <LuCodeBlock variant="preview" 
    title="Vertical Stack" 
    description="Stacks children from top to bottom."
    :code="verticalCode"
  >
    <template #preview>
      <PreviewFrame width="300px" >
        <LuStack direction="vertical" gap="4">
          <LuCard variant="default">Item 1</LuCard>
          <LuCard variant="default">Item 2</LuCard>
          <LuCard variant="default">Item 3</LuCard>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Horizontal Stack" 
    description="Stacks children from left to right."
    :code="horizontalCode"
  >
    <template #preview>
      <PreviewFrame width="400px" >
        <LuStack direction="horizontal" gap="4">
          <LuCard variant="default">Item 1</LuCard>
          <LuCard variant="default">Item 2</LuCard>
          <LuCard variant="default">Item 3</LuCard>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuStack, LuPageHeader, LuText, LuCodeBlock, LuCard } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const verticalCode = `<LuStack direction="vertical" gap="4">
  <LuStack   >Item 1</LuStack>
  <LuStack   >Item 2</LuStack>
  <LuStack   >Item 3</LuStack>
</LuStack>`;

const horizontalCode = `<LuStack direction="horizontal" gap="4">
  <LuStack   >Item 1</LuStack>
  <LuStack   >Item 2</LuStack>
  <LuStack   >Item 3</LuStack>
</LuStack>`;

const propsData = [
  { name: 'direction', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The stacking direction.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
