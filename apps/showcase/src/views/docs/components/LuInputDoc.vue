<template>
  <LuPageHeader title="LuInput" description="A foundational input element. Renders a native HTML <code>&lt;input&gt;</code> element that supports <code>v-model</code>." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Standard text input."
    :code="basicCode"
  >
    <template #preview>
      <LuStack   >
        <LuInput v-model="val" placeholder="Enter your email..." />
      </LuStack>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuInput, LuStack, LuText, LuCodeBlock } from '@astrake/lumora-ui';
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
