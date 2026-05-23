<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useLumoraConfig } from "../context";
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

const { resolveSkin } = useLumoraConfig();

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

// Skins computed properties
const skinContainer = computed(() => resolveSkin("LuPlannerContainer"));
const skinHeader = computed(() => resolveSkin("LuPlannerHeader"));
const skinNavButton = computed(() => resolveSkin("LuPlannerNavButton"));
const skinWeekLabel = computed(() => resolveSkin("LuPlannerWeekLabel"));
const skinGrid = computed(() => resolveSkin("LuPlannerGrid"));
const skinTimeGutter = computed(() => resolveSkin("LuPlannerTimeGutter"));
const skinTimeCell = computed(() => resolveSkin("LuPlannerTimeCell"));
const skinTimeLabel = computed(() => resolveSkin("LuPlannerTimeLabel"));
const skinDayColumn = computed(() => resolveSkin("LuPlannerDayColumn"));
const skinDayHeader = computed(() => resolveSkin("LuPlannerDayHeader"));
const skinDayHeaderToday = computed(() => resolveSkin("LuPlannerDayHeaderToday"));
const skinHourCell = computed(() => resolveSkin("LuPlannerHourCell"));
const skinEvent = computed(() => resolveSkin("LuPlannerEvent"));
</script>

<template>
  <div :class="skinContainer">
    <!-- Top toolbar navigation -->
    <div :class="skinHeader">
      <div class="flex items-center gap-2">
        <LuButton variant="ghost" size="icon-sm" :class="skinNavButton" aria-label="Previous week" @click="prevWeek">
          <LuIcon name="chevron-left" :size="16" />
        </LuButton>
        <LuButton variant="ghost" size="sm" :class="skinNavButton" @click="goToToday">
          Today
        </LuButton>
        <LuButton variant="ghost" size="icon-sm" :class="skinNavButton" aria-label="Next week" @click="nextWeek">
          <LuIcon name="chevron-right" :size="16" />
        </LuButton>
      </div>
      <LuText :class="skinWeekLabel">{{ currentRangeLabel }}</LuText>
      <div class="w-20" /> <!-- Spacer for visual balance -->
    </div>

    <!-- Scrollable schedule calendar grid -->
    <div :class="skinGrid">
      <!-- Time scale left gutter -->
      <div :class="skinTimeGutter">
        <!-- Top spacer cell matching day headers -->
        <div class="h-12 border-b border-zinc-200 dark:border-zinc-800 shrink-0" />
        <div v-for="slot in timeSlots" :key="slot.hour" :class="skinTimeCell" class="h-16 relative">
          <span :class="skinTimeLabel" class="absolute -top-2 right-2">{{ slot.label }}</span>
        </div>
      </div>

      <!-- Weekly column grid mapping 7 days -->
      <div v-for="day in weekDays" :key="day.iso" :class="skinDayColumn">
        <!-- Day header column cell -->
        <div :class="[skinDayHeader, day.isToday ? skinDayHeaderToday : '']" class="h-12 flex flex-col items-center justify-center shrink-0 border-b border-zinc-200 dark:border-zinc-800">
          <span class="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{{ day.dayName }}</span>
          <span class="text-sm font-semibold mt-0.5" :class="day.isToday ? 'text-rose-600 dark:text-rose-400' : 'text-zinc-700 dark:text-zinc-200'">{{ day.dayNumber }}</span>
        </div>

        <!-- 1-Hour row empty slots click targets -->
        <div 
          v-for="slot in timeSlots" 
          :key="slot.hour" 
          :class="skinHourCell" 
          class="h-16 cursor-pointer"
          @click="handleSlotClick(day.iso, slot.timeString)"
        />

        <!-- Absolute positioned overlay event blocks -->
        <div
          v-for="evt in getDayEvents(day.iso)"
          :key="evt.id"
          :class="skinEvent"
          :style="getEventStyle(evt)"
          class="border-l-4"
          @click.stop="emit('event-click', evt)"
        >
          <div class="font-bold truncate text-[11px]">{{ evt.title }}</div>
          <div class="text-[10px] opacity-90 font-medium mt-0.5">{{ evt.startTime }} – {{ evt.endTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
