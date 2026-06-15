<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { LuPlannerEvent, LuPlannerSlotClickPayload } from "./LuPlanner.types";
import LuButton from "./LuButton.vue";
import LuIcon from "./LuIcon.vue";
import LuText from "./LuText.vue";

defineOptions({ name: "LuPlanner" });

const props = withDefaults(defineProps<{
  events?: LuPlannerEvent[];
  startDate?: string; // ISO date string "YYYY-MM-DD"
  view?: "week" | "day";
  startHour?: number;
  endHour?: number;
}>(), {
  events: () => [],
  view: "week",
  startHour: 7,
  endHour: 21,
});

const emit = defineEmits<{
  (e: "event-click", event: LuPlannerEvent): void;
  (e: "slot-click", payload: LuPlannerSlotClickPayload): void;
  (e: "week-change", startDate: string): void;
}>();


// Helper to format Date to ISO "YYYY-MM-DD"
function formatISO(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Get the Monday of a given date's week
function getMonday(d: Date): Date {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  return new Date(date.setDate(diff));
}

// State for active view base date
const baseDate = ref<Date>(
  props.startDate ? new Date(props.startDate) : getMonday(new Date())
);

// Keep baseDate synchronized if prop changes
watch(() => props.startDate, (newVal) => {
  if (newVal) {
    baseDate.value = new Date(newVal);
  }
});

// Compute the 7 weekdays for the week view
const weekDays = computed(() => {
  const monday = getMonday(baseDate.value);
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    return {
      date: day,
      iso: formatISO(day),
      dayName: day.toLocaleDateString("en-US", { weekday: "short" }),
      dayNumber: day.getDate(),
      isToday: formatISO(day) === formatISO(new Date()),
    };
  });
});

// List of hourly time slots
const timeSlots = computed(() => {
  const slots = [];
  for (let h = props.startHour; h <= props.endHour; h++) {
    slots.push({
      hour: h,
      label: `${String(h % 12 || 12).padStart(2, "0")}:00 ${h >= 12 ? "PM" : "AM"}`,
      timeString: `${String(h).padStart(2, "0")}:00`,
    });
  }
  return slots;
});

// Formatted string for current range display
const currentRangeLabel = computed(() => {
  const start = weekDays.value[0].date;
  const end = weekDays.value[6].date;
  const startMonth = start.toLocaleDateString("en-US", { month: "short" });
  const endMonth = end.toLocaleDateString("en-US", { month: "short" });
  
  if (start.getFullYear() !== end.getFullYear()) {
    return `${startMonth} ${start.getDate()}, ${start.getFullYear()} – ${endMonth} ${end.getDate()}, ${end.getFullYear()}`;
  }
  if (start.getMonth() !== end.getMonth()) {
    return `${startMonth} ${start.getDate()} – ${endMonth} ${end.getDate()}, ${start.getFullYear()}`;
  }
  return `${startMonth} ${start.getDate()} – ${end.getDate()}, ${start.getFullYear()}`;
});

// Navigation handlers
function prevWeek() {
  const newDate = new Date(baseDate.value);
  newDate.setDate(newDate.getDate() - 7);
  baseDate.value = newDate;
  emit("week-change", formatISO(getMonday(baseDate.value)));
}

function nextWeek() {
  const newDate = new Date(baseDate.value);
  newDate.setDate(newDate.getDate() + 7);
  baseDate.value = newDate;
  emit("week-change", formatISO(getMonday(baseDate.value)));
}

function goToToday() {
  baseDate.value = getMonday(new Date());
  emit("week-change", formatISO(baseDate.value));
}

// Time positioning calculations
function parseTimeToMinutes(timeStr: string): number {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

const totalVisibleMinutes = computed(() => (props.endHour - props.startHour + 1) * 60);

function getEventStyle(event: LuPlannerEvent) {
  const startMin = parseTimeToMinutes(event.startTime);
  const endMin = parseTimeToMinutes(event.endTime);
  const planStartMin = props.startHour * 60;
  
  // Calculate relative top position and height
  const topOffset = startMin - planStartMin;
  const duration = endMin - startMin;
  
  const topPercent = (topOffset / totalVisibleMinutes.value) * 100;
  const heightPercent = (duration / totalVisibleMinutes.value) * 100;
  
  // Cap values to grid bounds
  const top = Math.max(0, Math.min(100, topPercent));
  const height = Math.max(2, Math.min(100 - top, heightPercent));

  // Determine accent color
  const baseColor = event.color || "#3b82f6"; // Default blue
  
  return {
    top: `${top}%`,
    height: `${height}%`,
    backgroundColor: `${baseColor}15`, // Light tint background
    borderColor: baseColor,
    color: baseColor,
  };
}

// Filter events falling inside a specific day column
function getDayEvents(isoDateStr: string): LuPlannerEvent[] {
  return props.events.filter(e => {
    if (e.date !== isoDateStr) return false;
    const startMin = parseTimeToMinutes(e.startTime);
    const endMin = parseTimeToMinutes(e.endTime);
    const planStartMin = props.startHour * 60;
    const planEndMin = (props.endHour + 1) * 60;
    
    // Check if event overlaps visible window
    return startMin < planEndMin && endMin > planStartMin;
  });
}

// Emits slot-click when empty cell row is clicked
function handleSlotClick(isoDateStr: string, timeStr: string) {
  emit("slot-click", { date: isoDateStr, time: timeStr });
}


</script>

<template>
  <div :class="['lu-planner']">
    <!-- Top toolbar navigation -->
    <div :class="['lu-planner__header']">
      <div class="lu-planner__header-nav">
        <LuButton variant="ghost" size="sm" :class="['lu-planner__nav-button', 'lu-button--icon-sm']" aria-label="Previous week" @click="prevWeek">
          <LuIcon name="chevron-left" :size="16" />
        </LuButton>
        <LuButton variant="ghost" size="sm" :class="['lu-planner__nav-button']" @click="goToToday">
          Today
        </LuButton>
        <LuButton variant="ghost" size="sm" :class="['lu-planner__nav-button', 'lu-button--icon-sm']" aria-label="Next week" @click="nextWeek">
          <LuIcon name="chevron-right" :size="16" />
        </LuButton>
      </div>
      <LuText :class="['lu-planner__week-label']">{{ currentRangeLabel }}</LuText>
      <div class="lu-planner__header-spacer" />
    </div>

    <!-- Scrollable schedule calendar grid -->
    <div :class="['lu-planner__grid']">
      <!-- Time scale left gutter -->
      <div :class="['lu-planner__time-gutter']">
        <div class="lu-planner__time-gutter-header" />
        <div v-for="slot in timeSlots" :key="slot.hour" :class="['lu-planner__time-cell']">
          <span :class="['lu-planner__time-label']">{{ slot.label }}</span>
        </div>
      </div>

      <!-- Weekly column grid mapping 7 days -->
      <div v-for="day in weekDays" :key="day.iso" :class="['lu-planner__day-column']">
        <!-- Day header column cell -->
        <div :class="['lu-planner__day-header', day.isToday ? 'lu-planner__day-header--today' : '']">
          <span class="lu-planner__day-name">{{ day.dayName }}</span>
          <span class="lu-planner__day-number" :class="day.isToday ? 'lu-planner__day-number--today' : ''">{{ day.dayNumber }}</span>
        </div>

        <!-- 1-Hour row empty slots click targets -->
        <div 
          v-for="slot in timeSlots" 
          :key="slot.hour" 
          :class="['lu-planner__hour-cell']" 
          @click="handleSlotClick(day.iso, slot.timeString)"
        />

        <!-- Absolute positioned overlay event blocks -->
        <div
          v-for="evt in getDayEvents(day.iso)"
          :key="evt.id"
          :class="['lu-planner__event']"
          :style="getEventStyle(evt)"
          @click.stop="emit('event-click', evt)"
        >
          <div class="lu-planner__event-title">{{ evt.title }}</div>
          <div class="lu-planner__event-time">{{ evt.startTime }} – {{ evt.endTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
