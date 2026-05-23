<template>
  <LuPageHeader title="LuDataGrid" description="An advanced data table for high-density data views." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A simple data grid with columns and data."
    :code="basicCode"
  >
    <template #preview>
      <LuDataGrid :columns="columns" :data="data" />
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Selectable and Sortable" 
    description="Enable row selection and column sorting."
    :code="selectableCode"
  >
    <template #preview>
      <LuDataGrid :columns="columns" :data="data" selectable sortable />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuDataGrid, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'age', label: 'Age', sortable: true },
  { key: 'role', label: 'Role' },
];

const data = [
  { id: '1', name: 'Alice', age: 30, role: 'Developer' },
  { id: '2', name: 'Bob', age: 25, role: 'Designer' },
  { id: '3', name: 'Carol', age: 35, role: 'Manager' },
];

const basicCode = `<template>
  <LuDataGrid :columns="columns" :data="data" />
</template>`;

const selectableCode = `<template>
  <LuDataGrid :columns="columns" :data="data" selectable sortable />
</template>`;

const propsData = [
  { name: 'columns', type: 'ColumnDef[]', description: 'Array of column definitions.' },
  { name: 'data', type: 'Row[]', description: 'Reactive row data.' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Shows skeleton overlay.' },
  { name: 'selectable', type: 'boolean', default: 'false', description: 'Enables checkbox column.' },
  { name: 'sortable', type: 'boolean', default: 'false', description: 'Enables global sortable state.' },
];
</script>
