<template>
  <LuPageHeader title="LuInput" description="A foundational input element. Renders a native HTML <code>&lt;input&gt;</code> element that supports <code>v-model</code>." />

  <PreviewBlock 
    title="Basic Usage" 
    description="Standard text input."
    :code="basicCode"
  >
    <template #preview>
      <div class="w-full max-w-sm">
        <LuInput v-model="val" placeholder="Enter your email..." />
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
import { LuInput, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const val = ref('');

const basicCode = `<template>
  <LuInput v-model="val" placeholder="Enter your email..." />
</template>

<script setup>
import { ref } from 'vue';
const val = ref('');
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'string | number', description: 'The value bound via v-model.' },
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
];
</script>
