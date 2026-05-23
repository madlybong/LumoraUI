<template>
  <LuPageHeader title="LuFormWizard" description="Multi-step form wizard with per-step validation." />

  <LuCodeBlock variant="preview" 
    title="Registration Flow" 
    description="A multi-step registration form featuring dynamic validation."
    :code="basicCode"
  >
    <template #preview>
      <LuCard class="w-full max-w-2xl mx-auto p-0 overflow-hidden border-zinc-200/80 dark:border-zinc-800 shadow-sm">
        <LuFormWizard :steps="steps" @complete="onComplete">
          
          <template #step-1>
            <div class="flex flex-col gap-6 px-8 py-6">
              <LuText variant="section-title">Create Account</LuText>
              <div class="flex flex-col gap-4">
                <LuFormField label="Email Address">
                  <LuInput v-model="formData.email" placeholder="jane@example.com" />
                </LuFormField>
                <LuFormField label="Password">
                  <LuInput v-model="formData.password" type="password" placeholder="••••••••" />
                </LuFormField>
              </div>
            </div>
          </template>

          <template #step-2>
            <div class="flex flex-col gap-6 px-8 py-6">
              <LuText variant="section-title">Personal Details</LuText>
              <div class="flex flex-col gap-4">
                <div class="grid grid-cols-2 gap-4">
                  <LuFormField label="First Name">
                    <LuInput v-model="formData.firstName" placeholder="Jane" />
                  </LuFormField>
                  <LuFormField label="Last Name">
                    <LuInput v-model="formData.lastName" placeholder="Doe" />
                  </LuFormField>
                </div>
                <LuFormField label="Job Title">
                  <LuInput v-model="formData.jobTitle" placeholder="Software Engineer" />
                </LuFormField>
              </div>
            </div>
          </template>

          <template #step-3>
            <div class="flex flex-col gap-6 px-8 py-6">
              <LuText variant="section-title">Review & Confirm</LuText>
              <div class="flex flex-col gap-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 p-4 border border-zinc-100 dark:border-zinc-800">
                <div class="flex justify-between items-center py-2 border-b border-zinc-200/50 dark:border-zinc-800">
                  <LuText variant="muted">Account</LuText>
                  <LuText variant="body" class="font-medium">{{ formData.email || '—' }}</LuText>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-zinc-200/50 dark:border-zinc-800">
                  <LuText variant="muted">Name</LuText>
                  <LuText variant="body" class="font-medium">{{ formData.firstName }} {{ formData.lastName }}</LuText>
                </div>
                <div class="flex items-center gap-3 pt-2">
                  <LuSwitch v-model="formData.agree" />
                  <LuText variant="body">I agree to the terms and conditions</LuText>
                </div>
              </div>
            </div>
          </template>

        </LuFormWizard>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { 
  LuFormWizard, LuCodeBlock, LuCard, LuText, LuFormField, LuInput, LuSwitch, type LuFormWizardStep } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const formData = ref({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  jobTitle: '',
  agree: false
});

const steps: LuFormWizardStep[] = [
  { 
    id: '1', 
    label: 'Account',
    validateFn: async () => {
      if (!formData.value.email || !formData.value.password) {
        return "Email and password are required.";
      }
      return true;
    }
  },
  { 
    id: '2', 
    label: 'Profile',
    validateFn: async () => {
      if (!formData.value.firstName || !formData.value.lastName) {
        return "First and last name are required.";
      }
      return true;
    }
  },
  { 
    id: '3', 
    label: 'Confirm',
    validateFn: async () => {
      if (!formData.value.agree) {
        return "You must agree to the terms.";
      }
      return true;
    }
  }
];

const onComplete = () => {
  alert('Registration complete for ' + formData.value.email);
};

const basicCode = `<template>
  <LuCard class="w-full max-w-2xl mx-auto p-0 overflow-hidden">
    <LuFormWizard :steps="steps" @complete="onComplete">
      <template #step-1>...</template>
      <template #step-2>...</template>
      <template #step-3>...</template>
    </LuFormWizard>
  </LuCard>
</template>`;

const propsData = [
  { name: 'steps', type: 'LuFormWizardStep[]', description: 'Array of step definitions with IDs, labels, and async validation.' },
  { name: 'modelValue', type: 'number', description: 'Zero-based index of current step.' },
  { name: 'allowSkip', type: 'boolean', description: 'If true, users can click future steps without validating current.' }
];
</script>
