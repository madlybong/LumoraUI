<template>
  <LuPageHeader title="LuCalendar" description="Calendar event display." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A basic month-view calendar with events."
    :code="basicCode"
  >
    <template #preview>
      <LuCalendar :events="events" view="month" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuCalendar, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const events = [
  { id: '1', label: 'Meeting', date: new Date().toISOString() }
];

const basicCode = `<template>
  <LuCalendar :events="events" view="month" />
</template>`;

const propsData = [
  { name: 'events', type: 'CalendarEvent[]', description: 'Array of events to display.' },
  { name: 'view', type: '"month" | "week" | "day"', default: '"month"', description: 'The current calendar view mode.' },
];
</script>
