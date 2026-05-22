<template>
  <LuPageHeader title="LuKanban" description="Drag-and-drop Kanban board for workflow visualization." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A simple Kanban board with columns and items."
    :code="basicCode"
  >
    <template #preview>
      <LuKanban :columns="columns" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuKanban, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const columns = [
  { 
    id: 'todo', 
    title: 'To Do', 
    cards: [
      { id: '1', title: 'Task 1' }
    ] 
  },
  { 
    id: 'in-progress', 
    title: 'In Progress', 
    cards: [
      { id: '2', title: 'Task 2' }
    ] 
  },
  { 
    id: 'done', 
    title: 'Done', 
    cards: [
      { id: '3', title: 'Task 3' }
    ] 
  },
];

const basicCode = `<template>
  <LuKanban :columns="columns" />
</template>`;

const propsData = [
  { name: 'columns', type: 'Column[]', description: 'Array of column definitions.' },
  { name: 'items', type: 'Row[]', description: 'Items to display on the board.' },
  { name: 'columnKey', type: 'string', description: 'The property key on items mapping them to columns.' },
  { name: 'draggable', type: 'boolean', default: 'false', description: 'Enable drag-and-drop.' },
];
</script>
