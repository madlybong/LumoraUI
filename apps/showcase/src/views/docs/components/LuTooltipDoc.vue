<template>
  <LuPageHeader title="LuTooltip" description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="Provide a trigger and the content to display. Content is positioned via the position prop."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack   >
        <LuTooltip position="top">
          <template #trigger>
            <LuButton variant="default">Hover me (Top)</LuButton>
          </template>
          <template #content>
            <LuStack   >
              Tooltip on top
            </LuStack>
          </template>
        </LuTooltip>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuTooltip, LuButton, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuTooltip position="top">
  <template #trigger>
    <LuButton variant="default">Hover me</LuButton>
  </template>
  
  <template #content>
    <!-- Note: Positioning classes are usually applied via your Skin config -->
    <LuStack   >
      Tooltip content
    </LuStack>
  </template>
</LuTooltip>`;

const propsData = [
  { name: 'position', type: '"top" | "bottom" | "left" | "right"', description: 'The tooltip position modifier.' },
  { name: 'delay', type: 'number', default: '0', description: 'Hover delay in milliseconds.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
