<template>
  <LuPageHeader title="LuCommandPalette" description="Global keyboard-triggered search and command palette." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A command palette triggered via code or shortcut (Cmd+K/Ctrl+K)."
    :code="basicCode"
  >
    <template #preview>
      <LuButton @click="open = true">Open Command Palette</LuButton>
      <LuCommandPalette v-model="open" :items="items" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCommandPalette, LuButton, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const open = ref(false);

const items = [
  { id: '1', label: 'Create File', icon: 'file', action: () => {} },
  { id: '2', label: 'Settings', icon: 'settings', action: () => {} }
];

const basicCode = `<template>
  <LuButton @click="open = true">Open Command Palette</LuButton>
  <LuCommandPalette v-model="open" :items="items" />
</template>
<script setup>
import { ref } from 'vue';
const open = ref(false);
const items = [
  { id: '1', label: 'Create File', icon: 'file', action: () => {} },
  { id: '2', label: 'Settings', icon: 'settings', action: () => {} }
];
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'boolean', description: 'Controls open state (v-model).' },
  { name: 'groups', type: 'CommandGroup[]', description: 'Groups of command items.' },
  { name: 'showAIMode', type: 'boolean', default: 'false', description: 'Adds an AI input mode toggle.' },
];
</script>
