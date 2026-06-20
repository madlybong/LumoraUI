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
          <LuButton variant="outline">Button 1</LuButton>
          <LuButton variant="outline">Button 2</LuButton>
          <LuButton variant="outline">Button 3</LuButton>
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
          <LuButton variant="outline">Button 1</LuButton>
          <LuButton variant="outline">Button 2</LuButton>
          <LuButton variant="outline">Button 3</LuButton>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Alignment & Justify" 
    description="Align and justify children inside a horizontal stack."
    :code="alignmentCode"
  >
    <template #preview>
      <PreviewFrame width="400px" >
        <LuStack direction="horizontal" gap="4" align="center" justify="between" style="width: 100%;">
          <LuButton variant="outline">Start</LuButton>
          <LuText>Center Text</LuText>
          <LuButton variant="primary">End</LuButton>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Gap Scale" 
    description="Demonstrates spacing using gap values (2, 4, 8)."
    :code="gapCode"
  >
    <template #preview>
      <PreviewFrame width="500px" >
        <LuStack direction="horizontal" gap="8">
          <LuStack direction="vertical" gap="2">
            <LuText variant="muted">gap="2"</LuText>
            <LuButton variant="outline">Item A1</LuButton>
            <LuButton variant="outline">Item A2</LuButton>
          </LuStack>
          <LuStack direction="vertical" gap="4">
            <LuText variant="muted">gap="4"</LuText>
            <LuButton variant="outline">Item B1</LuButton>
            <LuButton variant="outline">Item B2</LuButton>
          </LuStack>
          <LuStack direction="vertical" gap="8">
            <LuText variant="muted">gap="8"</LuText>
            <LuButton variant="outline">Item C1</LuButton>
            <LuButton variant="outline">Item C2</LuButton>
          </LuStack>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuStack, LuText, LuCodeBlock, LuButton } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const verticalCode = `<LuStack direction="vertical" gap="4">
  <LuButton variant="outline">Button 1</LuButton>
  <LuButton variant="outline">Button 2</LuButton>
  <LuButton variant="outline">Button 3</LuButton>
</LuStack>`;

const horizontalCode = `<LuStack direction="horizontal" gap="4">
  <LuButton variant="outline">Button 1</LuButton>
  <LuButton variant="outline">Button 2</LuButton>
  <LuButton variant="outline">Button 3</LuButton>
</LuStack>`;

const alignmentCode = `<LuStack direction="horizontal" gap="4" align="center" justify="between" style="width: 100%;">
  <LuButton variant="outline">Start</LuButton>
  <LuText>Center Text</LuText>
  <LuButton variant="primary">End</LuButton>
</LuStack>`;

const gapCode = `<LuStack direction="horizontal" gap="8">
  <LuStack direction="vertical" gap="2">
    <LuText variant="muted">gap="2"</LuText>
    <LuButton variant="outline">Item A1</LuButton>
    <LuButton variant="outline">Item A2</LuButton>
  </LuStack>
  <LuStack direction="vertical" gap="4">
    <LuText variant="muted">gap="4"</LuText>
    <LuButton variant="outline">Item B1</LuButton>
    <LuButton variant="outline">Item B2</LuButton>
  </LuStack>
  <LuStack direction="vertical" gap="8">
    <LuText variant="muted">gap="8"</LuText>
    <LuButton variant="outline">Item C1</LuButton>
    <LuButton variant="outline">Item C2</LuButton>
  </LuStack>
</LuStack>`;

const propsData = [
  { name: 'direction', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The stacking direction.' },
  { name: 'gap', type: 'string | number', description: 'Space token scale gap, e.g. gap="4" → gap: var(--lu-space-4).' },
  { name: 'align', type: '"center" | "start" | "end" | "stretch" | "baseline"', description: 'Flexbox align-items property.' },
  { name: 'justify', type: '"center" | "start" | "end" | "between" | "around" | "evenly"', description: 'Flexbox justify-content property.' },
  { name: 'as', type: 'string', default: '"div"', description: 'HTML element to render as.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
