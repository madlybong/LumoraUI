<template>
  <LuPageHeader title="LuEntityCard" description="Rich summary cards for displaying entity detail information." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Display entity info with stats and actions."
    :code="basicCode"
  >
    <template #preview>
      <LuEntityCard 
        :stats="[{ label: 'Orders', value: 12 }]" 
        :actions="[{ label: 'Edit', action: 'edit' }]" 
      >
        <template #header>
          <div>Entity Name</div>
        </template>
      </LuEntityCard>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuEntityCard, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const basicCode = `<template>
  <LuEntityCard 
    :stats="[{ label: 'Orders', value: 12 }]" 
    :actions="[{ label: 'Edit', action: 'edit' }]" 
  >
    <template #header>
      <div>Entity Name</div>
    </template>
  </LuEntityCard>
</template>`;

const propsData = [
  { name: 'stats', type: 'Array<{label, value, icon?}>', description: 'Entity statistics.' },
  { name: 'actions', type: 'Array<{label, icon, action}>', description: 'Quick action buttons.' },
];
</script>
