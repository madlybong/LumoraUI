<template>
  <LuPageHeader title="LuTree" description="Hierarchical tree with expand/collapse." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Render a simple tree structure."
    :code="basicCode"
  >
    <template #preview>
      <LuTree :nodes="nodes" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuTree, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const nodes = [
  {
    id: '1',
    label: 'Root Node',
    children: [
      { id: '1-1', label: 'Child 1' },
      { id: '1-2', label: 'Child 2' },
    ]
  }
];

const basicCode = `<template>
  <LuTree :nodes="nodes" />
</template>`;

const propsData = [
  { name: 'nodes', type: 'TreeNodeData[]', description: 'Tree nodes.' },
  { name: 'draggable', type: 'boolean', default: 'false', description: 'Enable drag and drop.' },
  { name: 'showCheckbox', type: 'boolean', default: 'false', description: 'Enable multi-select.' },
];
</script>
