<template>
  <LuPageHeader title="LuFileUpload" description="File selection component with optional drag-and-drop." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Select files via a click or drag-and-drop zone."
    :code="basicCode"
  >
    <template #preview>
      <LuFileUpload @files-selected="onFilesSelected" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuFileUpload, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const onFilesSelected = (files: File[]) => {
  console.log('Selected files:', files);
};

const basicCode = `<template>
  <LuFileUpload @files-selected="onFilesSelected" />
</template>`;

const propsData = [
  { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow multiple file selection.' },
  { name: 'accept', type: 'string', description: 'MIME types allowed.' },
  { name: 'maxSize', type: 'number', description: 'Maximum file size in bytes.' },
  { name: 'existingFiles', type: 'any[]', description: 'Pre-existing files to display.' },
];
</script>
