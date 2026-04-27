<template>
  <LuCodeBlock variant="preview"
    title="Tag"
    description="A compact element to display labels, categories, or keywords."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm" variant="panel">
        <LuStack direction="horizontal" gap="2" wrap="wrap">
          <LuTag>Framework</LuTag>
          <LuTag>Vue 3</LuTag>
          <LuTag closable @close="handleClose">Closable Tag</LuTag>
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { LuCard, LuStack, LuTag , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const handleClose = () => {
  console.log('Tag closed');
};

const code = `<template>
  <LuTag>Framework</LuTag>
  <LuTag closable @close="onClose">Removable</LuTag>
</template>`;

const propsList = [
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map.' },
  { name: 'closable', type: 'boolean', default: 'false', description: 'If true, shows a close button that emits a close event.' },
];
</script>
