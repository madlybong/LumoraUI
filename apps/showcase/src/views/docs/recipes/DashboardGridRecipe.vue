<template>
  <LuPageHeader title="Dashboard Grid Recipe" description="Responsive, configurable widget grid for dashboard layouts." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A grid of widgets with configurable column spans and row spans."
    :code="basicCode"
  >
    <template #preview>
      <LuDashboardGrid :widgets="widgets" :columns="4">
        <template #widget="{ widget }">
          <LuCard class="p-4">
            <LuText variant="body" class="font-medium">{{ widget.title }}</LuText>
          </LuCard>
        </template>
      </LuDashboardGrid>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import LuDashboardGrid from '../../../recipes/dashboard-grid/LuDashboardGrid.vue';
import { LuCard, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const widgets = [
  { id: '1', title: 'Revenue', colSpan: 1, rowSpan: 1, col: 1, row: 1 },
  { id: '2', title: 'Active Users', colSpan: 2, rowSpan: 1, col: 2, row: 1 },
  { id: '3', title: 'Performance', colSpan: 1, rowSpan: 1, col: 4, row: 1 },
];

const basicCode = `<template>
  <LuDashboardGrid :widgets="widgets" :columns="4">
    <template #widget="{ widget }">
      <LuCard class="p-4">
        <LuText variant="body" class="font-medium">{{ widget.title }}</LuText>
      </LuCard>
    </template>
  </LuDashboardGrid>
</template>`;

const propsData = [
  { name: 'widgets', type: 'DashboardWidget[]', default: '[]', description: 'Array of widgets with id, title, col, row, colSpan, and rowSpan.' },
  { name: 'columns', type: 'number', default: '12', description: 'Number of grid columns.' },
  { name: 'gap', type: 'number', default: '4', description: 'Gap spacing multiplier (4px units).' },
  { name: 'editMode', type: 'boolean', default: 'false', description: 'Enable drag-to-reorder mode.' },
  { name: '#widget', type: 'scoped slot', description: 'Custom widget rendering. Scope: { widget }.' },
];
</script>
