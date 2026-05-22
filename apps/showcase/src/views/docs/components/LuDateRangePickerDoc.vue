<template>
  <LuPageHeader title="LuDateRangePicker" description="Select a range of dates." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Select a start and end date."
    :code="basicCode"
  >
    <template #preview>
      <LuDateRangePicker v-model="range" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuDateRangePicker, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const range = ref({ start: new Date().toISOString(), end: new Date().toISOString() });

const basicCode = `<template>
  <LuDateRangePicker v-model="range" />
</template>
<script setup>
import { ref } from 'vue';
const range = ref({ start: new Date().toISOString(), end: new Date().toISOString() });
<\/script>`;

const propsData = [
  { name: 'modelValue', type: '{ start: Date, end: Date }', description: 'v-model for the selected range.' },
  { name: 'maxRange', type: 'number', description: 'Maximum allowed range in days.' },
  { name: 'presets', type: 'Array<{label, range}>', description: 'Pre-defined ranges.' },
];
</script>
