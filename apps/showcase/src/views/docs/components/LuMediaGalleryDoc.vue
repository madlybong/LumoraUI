<template>
  <LuPageHeader title="LuMediaGallery" description="Display pre-uploaded media in a gallery grid." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Display a list of images."
    :code="basicCode"
  >
    <template #preview>
      <LuMediaGallery :items="items" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuMediaGallery, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const items = [
  { id: '1', url: 'https://placehold.co/150x150', type: 'image' as const },
  { id: '2', url: 'https://placehold.co/150x150', type: 'image' as const },
  { id: '3', url: 'https://placehold.co/150x150', type: 'image' as const },
];

const basicCode = `<template>
  <LuMediaGallery :items="items" />
</template>
<script setup>
const items = [
  { id: '1', url: 'https://placehold.co/150x150', type: 'image' },
  { id: '2', url: 'https://placehold.co/150x150', type: 'image' },
];
<\/script>`;

const propsData = [
  { name: 'items', type: 'MediaItem[]', description: 'Array of media items to display.' },
  { name: 'sortable', type: 'boolean', default: 'false', description: 'Enable drag reorder.' },
];
</script>
