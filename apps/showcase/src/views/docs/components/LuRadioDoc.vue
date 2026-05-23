<template>
  <LuPageHeader title="LuRadioGroup (LuRadio)" description="A set of checkable buttons, known as radio buttons, where no more than one of the buttons can be checked at a time." />

  <LuStack direction="vertical" gap="8">
    <LuCodeBlock variant="preview"
      title="Basic List"
      description="Standard vertical list of radio buttons."
      :code="basicCode"
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

    <LuCodeBlock variant="preview"
      title="Card Variant"
      description="Renders each option as a clickable card tile."
      :code="cardCode"
    >
      <template #preview>
        <div class="w-full">
          <LuStack direction="vertical" gap="4">
            <LuText variant="label">Select your plan</LuText>
            <LuRadioGroup v-model="planVal" name="plans" variant="card">
              <LuRadio value="starter">
                <LuText class="font-semibold text-zinc-900 dark:text-zinc-50">Starter</LuText>
                <LuText variant="muted">$9 / month</LuText>
              </LuRadio>
              <LuRadio value="pro">
                <LuText class="font-semibold text-zinc-900 dark:text-zinc-50">Pro</LuText>
                <LuText variant="muted">$29 / month</LuText>
              </LuRadio>
              <LuRadio value="enterprise">
                <LuText class="font-semibold text-zinc-900 dark:text-zinc-50">Enterprise</LuText>
                <LuText variant="muted">Contact us</LuText>
              </LuRadio>
            </LuRadioGroup>
          </LuStack>
        </div>
      </template>
    </LuCodeBlock>
  </LuStack>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCard, LuStack, LuText, LuRadioGroup, LuRadio, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const val = ref('all');
const planVal = ref('pro');

const basicCode = `<script setup>
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

const cardCode = `<template>
  <LuRadioGroup v-model="planVal" name="plans" variant="card">
    <LuRadio value="starter">
      <LuText class="font-semibold text-zinc-900 dark:text-zinc-50">Starter</LuText>
      <LuText variant="muted">$9 / month</LuText>
    </LuRadio>
    <LuRadio value="pro">
      <LuText class="font-semibold text-zinc-900 dark:text-zinc-50">Pro</LuText>
      <LuText variant="muted">$29 / month</LuText>
    </LuRadio>
  </LuRadioGroup>
</template>`;

const propsList = [
  { name: 'modelValue', type: 'string | number', description: 'The value of the checked radio button (on LuRadioGroup).' },
  { name: 'name', type: 'string', description: 'The name of the radio group. Required.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'When present, disables all radio buttons in the group.' },
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map (e.g., "card").' },
];
</script>
