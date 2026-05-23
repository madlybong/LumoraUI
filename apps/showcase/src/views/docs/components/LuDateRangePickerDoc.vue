<template>
  <LuPageHeader title="LuDateRangePicker" description="Select a range of dates with preset shortcuts and a calendar dropdown." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Select a start and end date using the calendar dropdown or preset shortcuts."
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
import { LuDateRangePicker, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const today = new Date();
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const range = ref({ start: iso(today), end: iso(today) });

const basicCode = `<template>
  <LuDateRangePicker v-model="range" />
</template>
<script setup>
import { ref } from 'vue';
const range = ref({ start: '2026-05-01', end: '2026-05-23' });
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'DateRange', description: 'v-model for { start: string, end: string } in ISO format.' },
  { name: 'presets', type: 'Preset[]', default: 'Default presets', description: 'Shortcut buttons: Today, Yesterday, Last 7/30 days, This/Last month.' },
  { name: 'events', type: 'CalendarEvent[]', default: '[]', description: 'Events to display as dots on the calendar.' },
  { name: 'placeholder', type: 'string', default: '"Select range…"', description: 'Placeholder text for the trigger button.' },
];
</script>
