<template>
  <LuPageHeader title="LuCalendar & LuPlanner" description="Interactive calendar displays including month-view grid layout and hourly weekly schedule planner for event tracking." />

  <LuStack direction="vertical" gap="8">
    <LuCodeBlock variant="preview"
      title="Basic Month View"
      description="Standard month calendar with day grid, event dots, and date selection capability."
      :code="basicCode"
    >
      <template #preview>
        <div class="w-full max-w-sm">
          <LuCalendar v-model="selectedDate" :events="monthEvents" />
        </div>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      title="Mini Sidebar Calendar"
      description="A highly compact, sidebar-ready mini calendar using size='mini' with auto-hidden event text."
      :code="miniCode"
    >
      <template #preview>
        <div class="w-full max-w-[280px] p-2 border border-zinc-100 rounded-2xl dark:border-zinc-800">
          <div class="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider mb-2 px-1">Quick Select</div>
          <LuCalendar v-model="selectedDate" size="mini" :events="monthEvents" />
        </div>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      title="LuPlanner Weekly Agenda Grid"
      description="Full-screen weekly scheduler featuring hourly time blocks and absolutely positioned interactive event overlay panels."
      :code="plannerCode"
    >
      <template #preview>
        <div class="w-full">
          <LuPlanner 
            :events="plannerEvents" 
            :start-hour="8" 
            :end-hour="18"
            @event-click="onEventClick"
            @slot-click="onSlotClick"
          />
        </div>
      </template>
    </LuCodeBlock>
  </LuStack>

  <LuText variant="section-title" class="mt-12 mb-4">LuCalendar Props</LuText>
  <PropTable :propsList="calendarProps" />

  <LuText variant="section-title" class="mt-12 mb-4">LuPlanner Props</LuText>
  <PropTable :propsList="plannerProps" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCalendar, LuPlanner, LuStack, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import type { LuPlannerEvent } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const today = new Date();

function formatISO(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function addDays(d: Date, days: number): Date {
  const res = new Date(d);
  res.setDate(res.getDate() + days);
  return res;
}

// Get the Monday of the current week
function getMonday(d: Date): Date {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}

const currentMonday = getMonday(today);

const selectedDate = ref(formatISO(today));

const monthEvents = [
  { id: 'm1', label: 'Team Standup', date: formatISO(today), color: '#3b82f6' },
  { id: 'm2', label: 'Sprint Planning', date: formatISO(addDays(today, 2)), color: '#10b981' },
  { id: 'm3', label: 'Design Review', date: formatISO(addDays(today, -3)), color: '#8b5cf6' },
  { id: 'm4', label: 'Bug Scrub', date: formatISO(addDays(today, 4)), color: '#f59e0b' },
];

const plannerEvents = ref<LuPlannerEvent[]>([
  {
    id: 1,
    title: "Weekly Sync & Standup",
    date: formatISO(currentMonday),
    startTime: "09:00",
    endTime: "10:30",
    color: "#3b82f6",
    description: "Align on active tasks and blocker reviews"
  },
  {
    id: 2,
    title: "Lumora UI Review",
    date: formatISO(addDays(currentMonday, 1)),
    startTime: "14:00",
    endTime: "15:30",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Design System Handoff",
    date: formatISO(addDays(currentMonday, 2)),
    startTime: "10:00",
    endTime: "11:00",
    color: "#10b981",
  },
  {
    id: 4,
    title: "Product Roadmap Planning",
    date: formatISO(addDays(currentMonday, 2)),
    startTime: "13:00",
    endTime: "15:00",
    color: "#f59e0b",
  },
  {
    id: 5,
    title: "Bug Triage & Scrub",
    date: formatISO(addDays(currentMonday, 3)),
    startTime: "11:00",
    endTime: "12:00",
    color: "#ef4444",
  },
  {
    id: 6,
    title: "Marketing Strategy",
    date: formatISO(addDays(currentMonday, 3)),
    startTime: "15:00",
    endTime: "16:30",
    color: "#ec4899",
  },
  {
    id: 7,
    title: "1-on-1 Sync",
    date: formatISO(addDays(currentMonday, 4)),
    startTime: "10:30",
    endTime: "11:30",
    color: "#06b6d4",
  },
  {
    id: 8,
    title: "Sprint Retrospective",
    date: formatISO(addDays(currentMonday, 4)),
    startTime: "16:00",
    endTime: "17:30",
    color: "#6b7280",
  }
]);

function onEventClick(evt: any) {
  alert(`Clicked event: "${evt.title}" (${evt.startTime} – ${evt.endTime})`);
}

function onSlotClick(payload: any) {
  const title = prompt(`Add quick event at ${payload.time} on ${payload.date}:`);
  if (title) {
    plannerEvents.value.push({
      id: Date.now(),
      title,
      date: payload.date,
      startTime: payload.time,
      endTime: `${String(Number(payload.time.split(':')[0]) + 1).padStart(2, '0')}:00`,
      color: '#3b82f6',
    });
  }
}

const basicCode = `<template>
  <LuCalendar v-model="selectedDate" :events="events" />
</template>

<script setup>
import { ref } from 'vue';
import { LuCalendar } from '@astrake/lumora-ui';

const selectedDate = ref('2026-05-23');
const events = [
  { id: '1', label: 'Team Standup', date: '2026-05-23', color: '#3b82f6' },
  { id: '2', label: 'Sprint Planning', date: '2026-05-25', color: '#10b981' }
];
<\/script>`;

const miniCode = `<template>
  <div class="max-w-[280px]">
    <LuCalendar v-model="selectedDate" size="mini" :events="events" />
  </div>
</template>`;

const plannerCode = `<template>
  <LuPlanner 
    :events="events" 
    :start-hour="8" 
    :end-hour="18"
    @event-click="onEventClick"
    @slot-click="onSlotClick"
  />
</template>

<script setup>
import { ref } from 'vue';
import { LuPlanner } from '@astrake/lumora-ui';

const events = ref([
  {
    id: 1,
    title: "Weekly Sync & Standup",
    date: "2026-05-25",
    startTime: "09:00",
    endTime: "10:30",
    color: "#3b82f6"
  }
]);

function onEventClick(evt) {
  console.log("Clicked event", evt);
}

function onSlotClick(payload) {
  console.log("Clicked empty slot", payload);
}
<\/script>`;

const calendarProps = [
  { name: 'modelValue', type: 'string', description: 'Selected date in ISO format (YYYY-MM-DD). Supports v-model.' },
  { name: 'events', type: 'CalendarEvent[]', default: '[]', description: 'Array of events with id, date, label, and optional color.' },
  { name: 'size', type: "'default' | 'mini'", default: "'default'", description: 'The overall size variant of the calendar cells, headers, and container.' },
  { name: 'showEventLabels', type: 'boolean', default: 'true', description: 'Displays full event texts in default mode. Hidden in mini size.' },
  { name: 'rangeStart', type: 'string', description: 'ISO date string for range selection start.' },
  { name: 'rangeEnd', type: 'string', description: 'ISO date string for range selection end.' },
  { name: 'disabledDates', type: 'string[]', default: '[]', description: 'Array of ISO date strings that cannot be selected.' },
  { name: 'minDate', type: 'string', description: 'Earliest selectable date (ISO format).' },
  { name: 'maxDate', type: 'string', description: 'Latest selectable date (ISO format).' },
  { name: 'firstDayOfWeek', type: '0 | 1', default: '1', description: '0 = Sunday, 1 = Monday.' },
];

const plannerProps = [
  { name: 'events', type: 'LuPlannerEvent[]', default: '[]', description: 'Array of planner events containing id, title, date, startTime, and endTime.' },
  { name: 'startDate', type: 'string', description: 'ISO date string "YYYY-MM-DD" serving as active week base. Defaults to current Monday.' },
  { name: 'startHour', type: 'number', default: '7', description: 'First visible hour row in the schedule gutter.' },
  { name: 'endHour', type: 'number', default: '21', description: 'Last visible hour row in the schedule gutter.' }
];
</script>
