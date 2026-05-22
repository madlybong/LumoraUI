<template>
  <LuPageHeader title="LuFormWizard" description="Multi-step form wizard with per-step validation." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="A simple 2-step form wizard."
    :code="basicCode"
  >
    <template #preview>
      <LuFormWizard :steps="steps" @complete="onComplete">
        <template #step-1>
          <div>Step 1 Content</div>
        </template>
        <template #step-2>
          <div>Step 2 Content</div>
        </template>
      </LuFormWizard>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuFormWizard, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const steps = [
  { id: '1', label: 'Personal Info' },
  { id: '2', label: 'Confirmation' },
];

const onComplete = () => {
  console.log('Complete');
};

const basicCode = `<template>
  <LuFormWizard :steps="steps" @complete="onComplete">
    <template #step-1>
      <div>Step 1 Content</div>
    </template>
    <template #step-2>
      <div>Step 2 Content</div>
    </template>
  </LuFormWizard>
</template>`;

const propsData = [
  { name: 'steps', type: 'Step[]', description: 'Array of step definitions.' },
  { name: 'validateStep', type: '(stepId: string) => Promise<boolean>', description: 'Validation function per step.' },
];
</script>
