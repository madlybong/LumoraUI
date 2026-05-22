<template>
  <LuPageHeader title="LuTimeline" description="Vertical chronological event display." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Render a timeline from an array of items."
    :code="basicCode"
  >
    <template #preview>
      <LuTimeline :items="items" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuTimeline, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const items = [
  { id: '1', date: '2023-01-01', title: 'Event 1', description: 'Started the project', color: 'primary' },
  { id: '2', date: '2023-02-15', title: 'Event 2', description: 'Launched v1', color: 'success' },
];

const basicCode = `<template>
  <LuTimeline :items="items" />
</template>`;

const propsData = [
  { name: 'items', type: 'TimelineItem[]', description: 'Array of timeline events.' },
];
</script>
