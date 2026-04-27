<template>
  <LuPageHeader title="LuForm" description="Validation orchestrator component with field registration and slot-based API." />
  
  <LuCodeBlock variant="preview" 
    title="Basic Validation" 
    description="LuForm orchestrates validation for registered fields like LuInput, LuSelect, and LuSwitch."
    :code="formCode"
  >
    <template #preview>
      <LuCard variant="default">
        <LuForm :rules="rules" @submit="onSubmit" reset-on-submit>
          <LuStack direction="vertical">
            <LuInput name="username" placeholder="Username" />
            <LuSelect name="role" :options="[{value: 'admin', label: 'Admin'}, {value: 'user', label: 'User'}]" placeholder="Select Role" />
            <LuSwitch name="accept" />
            
            <template #errors="{ hasErrors }">
              <LuText v-if="hasErrors" variant="default" style="color: red">Please fix the errors above.</LuText>
            </template>
            
            <template #actions="{ submit, reset, pending }">
              <LuStack direction="horizontal">
                <LuButton variant="primary" @click="submit" :disabled="pending">Submit</LuButton>
                <LuButton variant="ghost" @click="reset">Reset</LuButton>
              </LuStack>
            </template>
          </LuStack>
        </LuForm>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
    
    <LuText as="h2" variant="section-title">Emits</LuText>
    <PropTable :props-list="emitsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuForm, LuInput, LuSelect, LuSwitch, LuButton, LuCard , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const rules = {
  username: [(v: any) => !v ? 'Username is required' : null],
  role: [(v: any) => !v ? 'Role is required' : null],
  accept: [(v: any) => v !== true ? 'Must accept' : null]
};

const onSubmit = (values: any) => {
  console.log('Submitted:', values);
};

const formCode = `<template>
  <LuForm :rules="rules" @submit="onSubmit" reset-on-submit>
    <LuStack direction="vertical">
      <LuInput name="username" placeholder="Username" />
      <LuSelect name="role" :options="[{value: 'admin', label: 'Admin'}, {value: 'user', label: 'User'}]" placeholder="Select Role" />
      <LuSwitch name="accept" />
      
      <template #errors="{ hasErrors }">
        <LuText v-if="hasErrors" variant="default" style="color: red">Please fix the errors above.</LuText>
      </template>
      
      <template #actions="{ submit, reset, pending }">
        <LuStack direction="horizontal">
          <LuButton variant="primary" @click="submit" :disabled="pending">Submit</LuButton>
          <LuButton variant="ghost" @click="reset">Reset</LuButton>
        </LuStack>
      </template>
    </LuStack>
  </LuForm>
</template>

<script setup lang="ts">
const rules = {
  username: [(v: any) => !v ? 'Username is required' : null],
  role: [(v: any) => !v ? 'Role is required' : null],
  accept: [(v: any) => v !== true ? 'Must accept' : null]
};

const onSubmit = (values: any) => console.log('Submitted:', values);
<\/script>`;

const propsData = [
  { name: 'rules', type: 'LuFormRules', default: '{}', description: 'Validation rules map.' },
  { name: 'validateOn', type: '"submit" | "blur" | "both"', default: '"submit"', description: 'When to trigger validation.' },
  { name: 'resetOnSubmit', type: 'boolean', default: 'false', description: 'Auto-reset form after successful submit.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables all registered fields.' },
];

const emitsData = [
  { name: 'submit', type: '(values: Record<string, unknown>) => void', description: 'Emitted on successful validation.' },
  { name: 'reset', type: '() => void', description: 'Emitted when form is reset.' },
  { name: 'error', type: '(errors: LuFormErrors) => void', description: 'Emitted when validation fails.' },
];
</script>
