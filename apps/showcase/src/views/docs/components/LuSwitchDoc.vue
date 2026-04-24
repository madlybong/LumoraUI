<template>
  <LuPageHeader title="LuSwitch" description="A control that allows the user to toggle between checked and not checked." />

  <PreviewBlock 
    title="Usage" 
    description="The switch requires styling for both the track and the thumb."
    :code="exampleCode"
  >
    <template #preview>
      <div class="flex flex-col gap-6">
        <div class="flex items-center justify-between w-48">
          <span class="text-sm font-medium text-zinc-900 dark:text-zinc-100">Notifications</span>
          <LuSwitch v-model="isOn" />
        </div>
        <div class="flex items-center justify-between w-48">
          <span class="text-sm font-medium text-zinc-400">Disabled</span>
          <LuSwitch v-model="isOn" disabled />
        </div>
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuSwitch, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const isOn = ref(true);

const exampleCode = `<template>
  <div class="flex items-center justify-between w-48">
    <span>Notifications</span>
    <LuSwitch v-model="isOn" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isOn = ref(true);
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'boolean', description: 'The bound checked state.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
