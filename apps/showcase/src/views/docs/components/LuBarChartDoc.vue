<template>
  <LuPageHeader title="LuBarChart" description="A bar chart component powered by Apache ECharts." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Provide datasets and labels to render a bar chart."
    :code="basicCode"
  >
    <template #preview>
      <LuBarChart :labels="labels" :datasets="datasets" :height="300" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuBarChart, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const datasets = [
  { label: 'Sales', data: [120, 200, 150, 80, 70], color: 'primary' },
  { label: 'Profit', data: [80, 110, 90, 40, 50], color: 'success' },
];

const basicCode = `<template>
  <LuBarChart :labels="labels" :datasets="datasets" :height="300" />
</template>`;

const propsData = [
  { name: 'labels', type: 'string[]', description: 'X-axis labels.' },
  { name: 'datasets', type: 'Dataset[]', description: 'Chart datasets.' },
  { name: 'height', type: 'number', default: '300', description: 'Chart height in pixels.' },
];
</script>
