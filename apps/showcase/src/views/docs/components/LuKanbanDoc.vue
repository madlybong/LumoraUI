<template>
  <LuPageHeader title="LuKanban" description="Drag-and-drop Kanban board for workflow visualization." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A Kanban board with columns containing cards with priority, tags, and due dates."
    :code="basicCode"
  >
    <template #preview>
      <LuKanban :columns="columns" :draggable="true" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuKanban, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const columns = [
  { 
    id: 'todo', 
    title: 'To Do',
    color: '#3b82f6',
    cards: [
      { id: '1', title: 'Design system audit', description: 'Review all component tokens.', priority: 'high' as const, tags: ['design'] },
      { id: '4', title: 'Write documentation', priority: 'medium' as const },
    ] 
  },
  { 
    id: 'in-progress', 
    title: 'In Progress',
    color: '#f59e0b',
    cards: [
      { id: '2', title: 'Implement dark mode', description: 'Add dark theme support.', priority: 'medium' as const, dueDate: '2026-06-01' }
    ] 
  },
  { 
    id: 'done', 
    title: 'Done',
    color: '#10b981',
    cards: [
      { id: '3', title: 'Setup CI pipeline', priority: 'low' as const, tags: ['devops'] }
    ] 
  },
];

const basicCode = `<template>
  <LuKanban :columns="columns" :draggable="true" />
</template>`;

const propsData = [
  { name: 'columns', type: 'KanbanColumn[]', description: 'Array of column definitions. Each column has id, title, color?, limit?, and cards[].' },
  { name: 'draggable', type: 'boolean', default: 'false', description: 'Enable drag-and-drop between columns.' },
  { name: '@card-click', type: 'event', description: 'Emitted when a card is clicked. Payload: (card, column).' },
  { name: '@card-move', type: 'event', description: 'Emitted when a card is moved. Payload: { cardId, fromColumnId, toColumnId, newIndex }.' },
  { name: '@add-card', type: 'event', description: 'Emitted when the + button is clicked. Payload: columnId.' },
  { name: '#card', type: 'scoped slot', description: 'Custom card rendering. Scope: { card, column }.' },
];
</script>
