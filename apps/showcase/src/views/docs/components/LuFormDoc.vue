<template>
  <LuPageHeader title="LuForm" description="Validation orchestrator component with field registration and slot-based API." />
  
  <LuCodeBlock variant="preview" 
    title="Basic Validation" 
    description="LuForm orchestrates validation for registered fields. Shows inline errors on blur and success message on submit."
    :code="basicCode"
  >
    <template #preview>
      <LuCard variant="panel" class="w-full max-w-md">
        <LuForm ref="form1" :rules="rules1" validateOn="blur" @submit="onBasicSubmit" reset-on-submit>
          <LuStack direction="vertical" class="gap-4">
            <LuFormField label="Username" :error="form1?.errors.username" required>
              <LuInput name="username" placeholder="johndoe" />
            </LuFormField>
            
            <LuFormField label="Role" :error="form1?.errors.role" required>
              <LuSelect name="role" :options="[{value: 'admin', label: 'Admin'}, {value: 'user', label: 'User'}]" placeholder="Select Role" />
            </LuFormField>
            
            <LuFormField :error="form1?.errors.accept">
              <LuSwitch name="accept" />
              <LuText variant="caption" class="ml-2">I accept the terms and conditions</LuText>
            </LuFormField>
            
            <LuAlert v-if="successMsg1" variant="success" class="mt-2">{{ successMsg1 }}</LuAlert>
            
            <template #actions="{ submit, reset, pending }">
              <LuStack direction="horizontal" class="mt-2">
                <LuButton variant="primary" @click="submit" :disabled="pending">Submit</LuButton>
                <LuButton variant="ghost" @click="reset">Reset</LuButton>
              </LuStack>
            </template>
          </LuStack>
        </LuForm>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Disabled Form" 
    description="Disabling the LuForm cascades the disabled state down to all registered child fields."
    :code="disabledCode"
    class="mt-8"
  >
    <template #preview>
      <LuCard variant="panel" class="w-full max-w-md">
        <LuForm disabled>
          <LuStack direction="vertical" class="gap-4">
            <LuFormField label="Email address">
              <LuInput name="email" value="alex@example.com" />
            </LuFormField>
            <LuFormField label="Account Type">
              <LuSelect name="type" :options="[{value: 'pro', label: 'Pro'}]" modelValue="pro" />
            </LuFormField>
            <LuFormField>
              <LuSwitch name="notifications" checked />
              <LuText variant="caption" class="ml-2">Enable notifications</LuText>
            </LuFormField>
            <LuButton variant="primary" disabled>Update Settings</LuButton>
          </LuStack>
        </LuForm>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
    
    <LuText as="h2" variant="section-title">Emits</LuText>
    <PropTable :props-list="emitsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuStack, LuText, LuForm, LuFormField, LuInput, LuSelect, LuSwitch, LuButton, LuCard, LuAlert, LuCodeBlock } from '@astrake/lumora-ui';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';
import PropTable from '../../../components/PropTable.vue';

const form1 = ref<InstanceType<typeof LuForm> | null>(null);
const successMsg1 = ref('');

const rules1 = {
  username: [
    (v: any) => !!v || 'Username is required',
    (v: any) => (v && v.length >= 3) || 'Must be at least 3 chars',
  ],
  role: [(v: any) => !v ? 'Role is required' : null],
  accept: [(v: any) => v !== true ? 'You must accept the terms' : null]
};

const onBasicSubmit = (values: Record<string, unknown>) => {
  successMsg1.value = `Success! Welcome ${values.username}.`;
  setTimeout(() => successMsg1.value = '', 3000);
};

const basicCode = `<template>
  <LuForm ref="formRef" :rules="rules" validateOn="blur" @submit="onSubmit">
    <LuFormField label="Username" :error="formRef?.errors.username" required>
      <LuInput name="username" />
    </LuFormField>
    
    <LuFormField label="Role" :error="formRef?.errors.role" required>
      <LuSelect name="role" :options="roleOptions" />
    </LuFormField>
    
    <LuFormField :error="formRef?.errors.accept">
      <LuSwitch name="accept" />
    </LuFormField>
    
    <template #actions="{ submit, pending }">
      <LuButton variant="primary" @click="submit" :disabled="pending">Submit</LuButton>
    </template>
  </LuForm>
</template>

<script setup>
import { ref } from 'vue';

const formRef = ref(null);
const rules = {
  username: [(v) => !v ? 'Required' : null],
  role: [(v) => !v ? 'Required' : null],
  accept: [(v) => !v ? 'Must accept' : null]
};
const onSubmit = (values) => console.log(values);
<\/script>`;

const disabledCode = `<template>
  <LuForm disabled>
    <LuFormField label="Email address">
      <LuInput name="email" value="alex@example.com" />
    </LuFormField>
    <LuFormField>
      <LuSwitch name="notifications" checked />
    </LuFormField>
  </LuForm>
</template>`;

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
