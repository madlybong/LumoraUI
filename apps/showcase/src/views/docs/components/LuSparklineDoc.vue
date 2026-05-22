<template>
  <LuPageHeader title="LuSparkline" description="A minimalist sparkline component." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Render a small sparkline to indicate trends."
    :code="basicCode"
  >
    <template #preview>
      <LuSparkline :data="[10, 20, 15, 30, 25]" color="success" :height="40" :width="100" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuSparkline, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const basicCode = `<template>
  <LuSparkline :data="[10, 20, 15, 30, 25]" color="success" :height="40" :width="100" />
</template>`;

const propsData = [
  { name: 'data', type: 'number[]', description: 'Array of numbers for the sparkline.' },
  { name: 'color', type: 'string', description: 'Semantic color for the line.' },
  { name: 'height', type: 'number', default: '40', description: 'Height in pixels.' },
  { name: 'width', type: 'number', default: '100', description: 'Width in pixels.' },
];
</script>
