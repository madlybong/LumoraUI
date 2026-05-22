<template>
  <LuPageHeader title="LuDashboardGrid" description="Responsive, configurable widget grid." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A grid of widgets that can be configured for dashboard displays."
    :code="basicCode"
  >
    <template #preview>
      <LuDashboardGrid :widgets="widgets" :columns="4">
        <template #widget="{ widget }">
          <div style="padding: 1rem; border: 1px solid var(--lu-color-border);">
            {{ widget.title }}
          </div>
        </template>
      </LuDashboardGrid>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuDashboardGrid, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const widgets = [
  { id: '1', title: 'Widget A', colSpan: 1, rowSpan: 1, col: 1, row: 1 },
  { id: '2', title: 'Widget B', colSpan: 2, rowSpan: 1, col: 2, row: 1 },
];

const basicCode = `<template>
  <LuDashboardGrid :widgets="widgets" :columns="4">
    <template #widget="{ widget }">
      <div style="padding: 1rem; border: 1px solid var(--lu-color-border);">
        {{ widget.title }}
      </div>
    </template>
  </LuDashboardGrid>
</template>`;

const propsData = [
  { name: 'widgets', type: 'DashboardWidget[]', description: 'Array of widgets with size and position.' },
  { name: 'columns', type: 'number', description: 'Column count.' },
  { name: 'editMode', type: 'boolean', default: 'false', description: 'Enable drag reorder.' },
];
</script>
