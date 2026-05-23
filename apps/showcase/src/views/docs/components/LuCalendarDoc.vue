<template>
  <LuPageHeader title="LuCalendar" description="Interactive month-view calendar with event dots, date selection, and range support." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A month-view calendar with event indicators and date selection."
    :code="basicCode"
  >
    <template #preview>
      <LuCalendar v-model="selectedDate" :events="events" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCalendar, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const today = new Date();
const selectedDate = ref(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`);

const events = [
  { id: '1', label: 'Team Standup', date: selectedDate.value, color: '#3b82f6' },
  { id: '2', label: 'Sprint Review', date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-15` },
];

const basicCode = `<template>
  <LuCalendar v-model="selectedDate" :events="events" />
</template>
<script setup>
import { ref } from 'vue';
const selectedDate = ref('2026-05-23');
const events = [
  { id: '1', label: 'Team Standup', date: '2026-05-23', color: '#3b82f6' },
  { id: '2', label: 'Sprint Review', date: '2026-05-15' },
];
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'string', description: 'Selected date in ISO format (YYYY-MM-DD). Supports v-model.' },
  { name: 'events', type: 'CalendarEvent[]', default: '[]', description: 'Array of events with id, date, label, and optional color.' },
  { name: 'rangeStart', type: 'string', description: 'ISO date string for range selection start.' },
  { name: 'rangeEnd', type: 'string', description: 'ISO date string for range selection end.' },
  { name: 'disabledDates', type: 'string[]', default: '[]', description: 'Array of ISO date strings that cannot be selected.' },
  { name: 'minDate', type: 'string', description: 'Earliest selectable date (ISO format).' },
  { name: 'maxDate', type: 'string', description: 'Latest selectable date (ISO format).' },
  { name: 'firstDayOfWeek', type: '0 | 1', default: '1', description: '0 = Sunday, 1 = Monday.' },
];
</script>
