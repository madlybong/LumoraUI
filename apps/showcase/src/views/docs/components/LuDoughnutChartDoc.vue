<template>
  <LuPageHeader title="LuDoughnutChart" description="A doughnut chart component powered by Apache ECharts." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Provide datasets and labels to render a doughnut chart."
    :code="basicCode"
  >
    <template #preview>
      <LuDoughnutChart :datasets="datasets" :height="300" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuDoughnutChart, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const datasets = [
  { label: 'Desktop', value: 400 },
  { label: 'Mobile', value: 300 },
  { label: 'Tablet', value: 100 },
];

const basicCode = `<template>
  <LuDoughnutChart :datasets="datasets" :height="300" />
</template>`;

const propsData = [
  { name: 'labels', type: 'string[]', description: 'Labels for data segments.' },
  { name: 'datasets', type: 'Dataset[]', description: 'Chart datasets.' },
  { name: 'height', type: 'number', default: '300', description: 'Chart height in pixels.' },
];
</script>
