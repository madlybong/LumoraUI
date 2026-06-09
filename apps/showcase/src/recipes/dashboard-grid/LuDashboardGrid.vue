<script setup lang="ts">
import { computed } from "vue";
import { LuText } from '@astrake/lumora-ui';
import { LuIcon } from '@astrake/lumora-ui';

defineOptions({ name: "LuDashboardGrid" });

export interface DashboardWidget {
  id: string;
  title?: string;
  col?: number;
  row?: number;
  colSpan?: number;
  rowSpan?: number;
}

const props = withDefaults(defineProps<{
  widgets?: DashboardWidget[];
  columns?: number;
  gap?: number;
  editMode?: boolean;
}>(), {
  widgets: () => [],
  columns: 12,
  gap: 4,
  editMode: false,
});

const emit = defineEmits<{
  (e: "widget-move", widgetId: string, newPos: { col: number; row: number }): void;
}>();

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))`,
  gap: `${props.gap * 4}px`,
}));

function widgetStyle(widget: DashboardWidget) {
  return {
    gridColumn: widget.colSpan ? `span ${widget.colSpan} / span ${widget.colSpan}` : undefined,
    gridRow: widget.rowSpan ? `span ${widget.rowSpan} / span ${widget.rowSpan}` : undefined,
  };
}

const skinGrid = computed(() => `sc-dashboard-grid`);
const skinWidget = computed(() => `sc-dashboard-grid__widget`);
const skinWidgetHeader = computed(() => `sc-dashboard-grid__widget-header`);
const skinDragHandle = computed(() => `sc-dashboard-grid__drag-handle`);
const skinEditMode = computed(() => `sc-dashboard-grid--edit`);
</script>

<template>
  <div :class="[skinGrid, editMode ? skinEditMode : '']" :style="gridStyle">
    <template v-if="widgets.length">
      <div
        v-for="widget in widgets"
        :key="widget.id"
        :class="[skinWidget, 'sc-dashboard-widget']"
        :style="widgetStyle(widget)"
      >
        <div v-if="widget.title || editMode" :class="skinWidgetHeader">
          <LuText variant="section-title" class="text-sm">{{ widget.title }}</LuText>
          <span v-if="editMode" :class="skinDragHandle" aria-label="Drag to rearrange">
            <LuIcon name="grip-vertical" :size="14" />
          </span>
        </div>
        <slot :name="`widget-${widget.id}`" :widget="widget">
          <div class="rounded-xl border border-zinc-200/80 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <slot :widget="widget" />
          </div>
        </slot>
      </div>
    </template>
    <template v-else>
      <!-- Slot-based layout when no widget array supplied -->
      <slot />
    </template>
  </div>
</template>
