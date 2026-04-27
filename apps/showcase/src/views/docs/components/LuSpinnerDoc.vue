<template>
  <LuCodeBlock variant="preview"
    title="Spinner"
    description="Indicates an indeterminate loading state."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm" variant="panel">
        <LuStack direction="horizontal" gap="6" align="center" justify="center">
          <LuSpinner variant="sm" />
          <LuSpinner />
          <LuSpinner variant="lg" />
          <LuSpinner variant="primary" />
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { LuCard, LuStack, LuSpinner , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const code = `<template>
  <LuSpinner variant="primary" />
</template>`;

const propsList = [
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map (e.g., sm, md, lg, primary).' },
];
</script>
