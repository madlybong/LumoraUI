<template>
  <LuCodeBlock variant="preview"
    title="Radio Group"
    description="A set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm" variant="panel">
        <LuStack direction="vertical" gap="4">
          <LuText variant="label">Notify me about...</LuText>
          <LuRadioGroup v-model="val" name="notifications">
            <LuRadio value="all" label="All new messages" />
            <LuRadio value="mentions" label="Direct messages and mentions" />
            <LuRadio value="nothing" label="Nothing" />
          </LuRadioGroup>
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCard, LuStack, LuText, LuRadioGroup, LuRadio , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const val = ref('all');

const code = `<script setup>
import { ref } from 'vue';
import { LuRadioGroup, LuRadio } from '@astrake/lumora-ui';

const notification = ref('all');
<\/script>

<template>
  <LuRadioGroup v-model="notification" name="notifications">
    <LuRadio value="all" label="All new messages" />
    <LuRadio value="mentions" label="Direct messages and mentions" />
    <LuRadio value="nothing" label="Nothing" />
  </LuRadioGroup>
</template>`;

const propsList = [
  { name: 'modelValue', type: 'string | number', description: 'The value of the checked radio button.' },
  { name: 'name', type: 'string', description: 'The name of the radio group. Required.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, disables all radio buttons in the group.' },
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map.' },
];
</script>
