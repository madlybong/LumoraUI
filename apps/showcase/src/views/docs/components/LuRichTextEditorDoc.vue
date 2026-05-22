<template>
  <LuPageHeader title="LuRichTextEditor" description="Headless rich text editor with customizable toolbar." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A rich text editor."
    :code="basicCode"
  >
    <template #preview>
      <LuRichTextEditor v-model="content" :toolbar="['bold', 'italic', 'h1']" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuRichTextEditor, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const content = ref('<p>Hello world!</p>');

const basicCode = `<template>
  <LuRichTextEditor v-model="content" :toolbar="['bold', 'italic', 'h1']" />
</template>
<script setup>
import { ref } from 'vue';
const content = ref('<p>Hello world!</p>');
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'string', description: 'HTML content v-model.' },
  { name: 'toolbar', type: 'string[]', description: 'List of tools to show in the toolbar.' },
  { name: 'readOnly', type: 'boolean', default: 'false', description: 'Disable editing.' },
  { name: 'maxLength', type: 'number', description: 'Enforce character limit.' },
];
</script>
