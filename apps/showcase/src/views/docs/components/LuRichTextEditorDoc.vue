<template>
  <LuPageHeader title="LuRichTextEditor" description="Headless rich text editor with customizable toolbar. Requires @tiptap/vue-3 and @tiptap/starter-kit peer dependencies." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A rich text editor with toolbar buttons for formatting."
    :code="basicCode"
  >
    <template #preview>
      <LuRichTextEditor v-model="content" :toolbar="['bold', 'italic', 'underline', 'h2', 'bullet', 'ordered', 'undo', 'redo']" />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuRichTextEditor, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const content = ref('<p>Hello world! Try <strong>bold</strong> and <em>italic</em> formatting.</p>');

const basicCode = `<template>
  <LuRichTextEditor v-model="content" :toolbar="['bold', 'italic', 'underline', 'h2', 'bullet', 'ordered', 'undo', 'redo']" />
</template>
<script setup>
import { ref } from 'vue';
const content = ref('<p>Hello world!</p>');
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'string', default: '""', description: 'HTML content (v-model).' },
  { name: 'placeholder', type: 'string', default: '"Write something…"', description: 'Placeholder text when editor is empty.' },
  { name: 'readonly', type: 'boolean', default: 'false', description: 'Disable editing and hide the toolbar.' },
  { name: 'toolbar', type: 'string[]', description: 'List of toolbar actions: bold, italic, underline, strike, h1, h2, h3, bullet, ordered, blockquote, code, undo, redo.' },
  { name: 'minHeight', type: 'number', default: '120', description: 'Minimum editor content area height in pixels.' },
];
</script>
