<script lang="ts">
// Module-scope constants must live in a separate <script> block so that
// withDefaults() can reference them (SFC hoisting restriction)
export interface DateRange {
  start: string;
  end: string;
}

interface Preset {
  label: string;
  key: "today" | "yesterday" | "last7" | "last30" | "thisMonth" | "lastMonth";
}

const DEFAULT_PRESETS: Preset[] = [
  { label: "Today",        key: "today" },
  { label: "Yesterday",    key: "yesterday" },
  { label: "Last 7 days",  key: "last7" },
  { label: "Last 30 days", key: "last30" },
  { label: "This month",   key: "thisMonth" },
  { label: "Last month",   key: "lastMonth" },
];
</script>

<script setup lang="ts">
import { computed, ref } from "vue";
import LuCalendar from "./LuCalendar.vue";
import LuText from "./LuText.vue";
import LuIcon from "./LuIcon.vue";
import type { CalendarEvent } from "./LuCalendar.vue";

defineOptions({ name: "LuDateRangePicker" });


const props = withDefaults(defineProps<{
  modelValue?: DateRange;
  presets?: Preset[];
  events?: CalendarEvent[];
  placeholder?: string;
}>(), {
  presets: () => DEFAULT_PRESETS,
  events: () => [],
  placeholder: "Select range…",
});


const emit = defineEmits<{
  (e: "update:modelValue", range: DateRange): void;
}>();


const isOpen = ref(false);
const activePreset = ref<Preset["key"] | null>(null);
const selectionStart = ref(props.modelValue?.start ?? "");
const selectionEnd = ref(props.modelValue?.end ?? "");

function isoDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function applyPreset(preset: Preset) {
  activePreset.value = preset.key;
  const now = new Date();
  let start: Date, end: Date = now;

  switch (preset.key) {
    case "today":    start = now; break;
    case "yesterday":
      start = new Date(now); start.setDate(now.getDate() - 1);
      end = new Date(start);
      break;
    case "last7":
      start = new Date(now); start.setDate(now.getDate() - 6); break;
    case "last30":
      start = new Date(now); start.setDate(now.getDate() - 29); break;
    case "thisMonth":
      start = new Date(now.getFullYear(), now.getMonth(), 1); break;
    case "lastMonth":
      start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      end = new Date(now.getFullYear(), now.getMonth(), 0);
      break;
    default: start = now;
  }

  selectionStart.value = isoDate(start);
  selectionEnd.value = isoDate(end);
  commitRange();
}

function onCalendarSelect(date: string) {
  if (!selectionStart.value || (selectionStart.value && selectionEnd.value)) {
    selectionStart.value = date;
    selectionEnd.value = "";
    activePreset.value = null;
  } else {
    if (date < selectionStart.value) {
      selectionEnd.value = selectionStart.value;
      selectionStart.value = date;
    } else {
      selectionEnd.value = date;
    }
    commitRange();
  }
}

function commitRange() {
  if (!selectionStart.value || !selectionEnd.value) return;
  const range: DateRange = { start: selectionStart.value, end: selectionEnd.value };
  emit("update:modelValue", range);
  isOpen.value = false;
}

const displayLabel = computed(() => {
  if (!props.modelValue?.start) return props.placeholder;
  if (props.modelValue.start === props.modelValue.end)
    return props.modelValue.start;
  return `${props.modelValue.start} → ${props.modelValue.end}`;
});


</script>

<template>
  <div :class="['lu-date-range-picker']">
    <!-- Trigger -->
    <button
      type="button"
      :class="['lu-date-range-picker__input']"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <LuIcon name="calendar" :size="15" class="text-zinc-400" />
      <LuText>{{ displayLabel }}</LuText>
      <LuIcon name="chevron-down" :size="14" class="ml-2" />
    </button>

    <!-- Dropdown -->
    <Transition name="lu-slide-down">
      <div v-if="isOpen" :class="['lu-date-range-picker__dropdown']">
        <div class="flex gap-3">
          <!-- Presets -->
          <nav :class="['lu-date-range-presets']" aria-label="Date presets">
            <button
              v-for="preset in presets"
              :key="preset.key"
              type="button"
              :class="['lu-date-range-preset', activePreset === preset.key ? 'lu-date-range-preset--active' : '']"
              @click="applyPreset(preset)"
            >
              {{ preset.label }}
            </button>
          </nav>

          <!-- Calendar -->
          <LuCalendar
            :model-value="selectionStart"
            :range-start="selectionStart"
            :range-end="selectionEnd"
            :events="events"
            @update:model-value="onCalendarSelect"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>
