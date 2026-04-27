<template>
  <LuCodeBlock variant="preview"
    title="Checkbox"
    description="A control that allows the user to toggle between checked and not checked."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm" variant="panel">
        <LuStack direction="vertical" gap="6">
          <LuCheckbox v-model="val1" label="Accept terms and conditions" name="terms" />
          <LuCheckbox v-model="val2" label="Subscribe to newsletter (disabled)" disabled />
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCard, LuStack, LuCheckbox , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const val1 = ref(false);
const val2 = ref(true);

const code = `<script setup>
import { ref } from 'vue';
import { LuCheckbox } from '@astrake/lumora-ui';

const terms = ref(false);
<\/script>

<template>
  <LuCheckbox v-model="terms" label="Accept terms and conditions" />
</template>`;

const propsList = [
  { name: 'modelValue', type: 'boolean', description: 'The controlled checked state of the checkbox.' },
  { name: 'label', type: 'string', description: 'The text label for the checkbox.' },
  { name: 'name', type: 'string', description: 'The name of the checkbox. Useful for form submission.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, it specifies that the checkbox should be disabled.' },
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map.' },
];
</script>
