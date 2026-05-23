<template>
  <LuPageHeader title="LuCommandPalette" description="Global keyboard-triggered search and command palette." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A command palette triggered via button click. Supports keyboard navigation with ↑↓, Enter, and Escape."
    :code="basicCode"
  >
    <template #preview>
      <LuButton @click="open = true">Open Command Palette</LuButton>
      <LuCommandPalette :open="open" @update:open="open = $event" :items="items" @select="onSelect" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCommandPalette, LuButton, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const open = ref(false);

const items = [
  { id: '1', label: 'Create File', icon: 'file', group: 'Files', action: () => { open.value = false; } },
  { id: '2', label: 'Settings', icon: 'settings', group: 'System', shortcut: ['⌘', ','], action: () => { open.value = false; } },
  { id: '3', label: 'Toggle Theme', icon: 'moon', group: 'System', action: () => { open.value = false; } },
];

const onSelect = () => {};

const basicCode = `<template>
  <LuButton @click="open = true">Open Command Palette</LuButton>
  <LuCommandPalette :open="open" @update:open="open = $event" :items="items" />
</template>
<script setup>
import { ref } from 'vue';
const open = ref(false);
const items = [
  { id: '1', label: 'Create File', icon: 'file', group: 'Files', action: () => {} },
  { id: '2', label: 'Settings', icon: 'settings', group: 'System', shortcut: ['⌘', ','], action: () => {} },
];
<\/script>`;

const propsData = [
  { name: 'items', type: 'CommandItem[]', description: 'Array of command items with id, label, icon, group, shortcut, description, and action.' },
  { name: 'open', type: 'boolean', default: 'false', description: 'Controls the open/closed state of the palette.' },
  { name: 'placeholder', type: 'string', default: '"Type a command or search…"', description: 'Search input placeholder text.' },
];
</script>
