<script setup lang="ts">
import { computed, ref } from "vue";
import LuText from "./LuText.vue";
import LuButton from "./LuButton.vue";
import LuIcon from "./LuIcon.vue";

defineOptions({ name: "LuCalendar" });

export interface CalendarEvent {
  id: string;
  date: string;   // ISO date string "YYYY-MM-DD"
  label: string;
  color?: string;
}

const props = withDefaults(defineProps<{
  modelValue?: string;
  events?: CalendarEvent[];
  rangeStart?: string;
  rangeEnd?: string;
  disabledDates?: string[];
  minDate?: string;
  maxDate?: string;
  firstDayOfWeek?: 0 | 1;
  size?: "default" | "mini";
  showEventLabels?: boolean;
}>(), {
  events: () => [],
  disabledDates: () => [],
  firstDayOfWeek: 1,
  size: "default",
  showEventLabels: true,
});

const emit = defineEmits<{
  (e: "update:modelValue", date: string): void;
  (e: "month-change", year: number, month: number): void;
  (e: "event-click", event: CalendarEvent): void;
}>();


// ── State ────────────────────────────────────────────────────────────────────
const today = new Date();
const viewDate = ref(new Date(today.getFullYear(), today.getMonth(), 1));

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function isoDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const viewYear = computed(() => viewDate.value.getFullYear());
const viewMonth = computed(() => viewDate.value.getMonth());

function prevMonth() {
  viewDate.value = new Date(viewYear.value, viewMonth.value - 1, 1);
  emit("month-change", viewDate.value.getFullYear(), viewDate.value.getMonth() + 1);
}

function nextMonth() {
  viewDate.value = new Date(viewYear.value, viewMonth.value + 1, 1);
  emit("month-change", viewDate.value.getFullYear(), viewDate.value.getMonth() + 1);
}

// Build ordered day headers
const orderedDays = computed(() => {
  const all = [...DAY_NAMES];
  const start = props.firstDayOfWeek;
  return [...all.slice(start), ...all.slice(0, start)];
});

// Grid cells
interface CalendarDay {
  date: Date;
  iso: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
  isDisabled: boolean;
  events: CalendarEvent[];
}

const calendarDays = computed((): CalendarDay[] => {
  const start = props.firstDayOfWeek;
  const firstDay = new Date(viewYear.value, viewMonth.value, 1);
  let startOffset = firstDay.getDay() - start;
  if (startOffset < 0) startOffset += 7;

  const days: CalendarDay[] = [];

  // Days from previous month
  for (let i = startOffset - 1; i >= 0; i--) {
    const d = new Date(viewYear.value, viewMonth.value, -i);
    days.push(makeDay(d, false));
  }

  // Days in current month
  const daysInMonth = new Date(viewYear.value, viewMonth.value + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(makeDay(new Date(viewYear.value, viewMonth.value, d), true));
  }

  // Pad to 6 rows (42 cells)
  while (days.length < 42) {
    const last = days[days.length - 1];
    const next = new Date(last.date);
    next.setDate(next.getDate() + 1);
    days.push(makeDay(next, false));
  }

  return days;
});

function makeDay(date: Date, isCurrentMonth: boolean): CalendarDay {
  const iso = isoDate(date);
  const todayIso = isoDate(today);
  const events = props.events.filter(e => e.date === iso);

  const isInRange = !!(
    props.rangeStart && props.rangeEnd &&
    iso > props.rangeStart && iso < props.rangeEnd
  );

  const isDisabled = props.disabledDates.includes(iso) ||
    (!!props.minDate && iso < props.minDate) ||
    (!!props.maxDate && iso > props.maxDate);

  return {
    date,
    iso,
    isCurrentMonth,
    isToday: iso === todayIso,
    isSelected: iso === props.modelValue,
    isRangeStart: iso === props.rangeStart,
    isRangeEnd: iso === props.rangeEnd,
    isInRange,
    isDisabled,
    events,
  };
}

function selectDay(day: CalendarDay) {
  if (day.isDisabled) return;
  emit("update:modelValue", day.iso);
}

function dayButtonVariant(day: CalendarDay): string | undefined {
  if (day.isSelected || day.isRangeStart || day.isRangeEnd) return "selected";
  if (day.isInRange) return "inRange";
  if (day.isToday) return "today";
  if (!day.isCurrentMonth) return "otherMonth";
  if (day.isDisabled) return "disabled";
  return undefined;
}


</script>

<template>
  <div :class="['lu-calendar', size && `lu-calendar--${size}`]">
    <!-- Month navigation -->
    <div :class="['lu-calendar__header']">
      <LuText :class="['lu-calendar__title']">{{ MONTH_NAMES[viewMonth] }} {{ viewYear }}</LuText>
      <div :class="['lu-calendar__nav']">
        <LuButton variant="ghost" :size="props.size === 'mini' ? 'sm' : 'sm'" class="lu-button--icon-sm" aria-label="Previous month" @click="prevMonth">
          <LuIcon name="chevron-left" :size="props.size === 'mini' ? 14 : 16" />
        </LuButton>
        <LuButton variant="ghost" :size="props.size === 'mini' ? 'sm' : 'sm'" class="lu-button--icon-sm" aria-label="Next month" @click="nextMonth">
          <LuIcon name="chevron-right" :size="props.size === 'mini' ? 14 : 16" />
        </LuButton>
      </div>
    </div>

    <!-- Day grid -->
    <table :class="['lu-calendar__grid']">
      <thead :class="['lu-calendar__grid-header']">
        <tr>
          <th
            v-for="day in orderedDays"
            :key="day"
            scope="col"
            :class="['lu-calendar__grid-header-cell']"
          >
            {{ props.size === 'mini' ? day.charAt(0) : day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(_, rowIdx) in Array(6)" :key="rowIdx">
          <td
            v-for="cellIdx in 7"
            :key="cellIdx"
            :class="['lu-calendar__day']"
          >
            <template v-if="calendarDays[rowIdx * 7 + cellIdx - 1]">
              <button
                type="button"
                :class="['lu-calendar__day-button', props.size === 'mini' ? 'lu-calendar__day-button--mini' : '', dayButtonVariant(calendarDays[rowIdx * 7 + cellIdx - 1]) && `lu-calendar__day-button--${dayButtonVariant(calendarDays[rowIdx * 7 + cellIdx - 1])}`]"
                :aria-label="calendarDays[rowIdx * 7 + cellIdx - 1].iso"
                :aria-selected="calendarDays[rowIdx * 7 + cellIdx - 1].isSelected"
                :aria-disabled="calendarDays[rowIdx * 7 + cellIdx - 1].isDisabled"
                @click="selectDay(calendarDays[rowIdx * 7 + cellIdx - 1])"
              >
                {{ calendarDays[rowIdx * 7 + cellIdx - 1].date.getDate() }}
              </button>
              <!-- Event dots -->
              <div
                v-for="evt in calendarDays[rowIdx * 7 + cellIdx - 1].events.slice(0, 2)"
                :key="evt.id"
                :class="['lu-calendar__event-dot']"
                :style="evt.color ? { backgroundColor: evt.color } : undefined"
                :title="evt.label"
                @click.stop="emit('event-click', evt)"
              />
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
