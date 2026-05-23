<template>
  <LuPageHeader title="LuGaugeChart" description="A gauge chart component powered by Apache ECharts." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Display a single value within a defined min/max range."
    :code="basicCode"
  >
    <template #preview>
      <LuGaugeChart :value="75" :min="0" :max="100" :height="300" color="primary" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuGaugeChart, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const basicCode = `<template>
  <LuGaugeChart :value="75" :min="0" :max="100" :height="300" color="primary" />
</template>`;

const propsData = [
  { name: 'value', type: 'number', description: 'Current value to display.' },
  { name: 'min', type: 'number', default: '0', description: 'Minimum value.' },
  { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
  { name: 'color', type: 'string', description: 'Semantic color for the gauge fill.' },
  { name: 'height', type: 'number', default: '300', description: 'Height in pixels.' },
];
</script>
