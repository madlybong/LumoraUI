<template>
  <LuCodeBlock variant="preview"
    title="Textarea"
    description="Displays a form textarea or a component that looks like a textarea."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm" variant="panel">
        <LuStack direction="vertical" gap="4">
          <LuTextarea placeholder="Type your message here." />
          <LuTextarea placeholder="Disabled" disabled />
          <LuTextarea placeholder="Error state" variant="error" />
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { LuCard, LuStack, LuTextarea , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const code = `<template>
  <LuTextarea placeholder="Type your message here." />
</template>`;

const propsList = [
  { name: 'modelValue', type: 'string | number', description: 'The value of the textarea.' },
  { name: 'name', type: 'string', description: 'The name of the textarea. Useful for form submission.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the textarea should be disabled.' },
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map.' },
];
</script>
