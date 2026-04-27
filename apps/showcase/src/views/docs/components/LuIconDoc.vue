<template>
  <LuPageHeader title="LuIcon" description="A simple wrapper for icons. It applies the skin class and aria-hidden='true'." />

  <LuCodeBlock variant="preview" 
    title="Usage with Lucide Icons" 
    description="Pass the name of the icon to the name prop. The icon is resolved via the configured IconResolver."
    :code="svgCode"
  >
    <template #preview>
      <LuStack direction="horizontal" gap="4">
        <LuIcon name="bar-chart" />
        <LuIcon name="check-circle" />
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuIcon, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const svgCode = `<LuStack direction="horizontal" gap="4">
  <LuIcon name="bar-chart" />
  <LuIcon name="check-circle" />
</LuStack>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
