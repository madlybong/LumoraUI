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

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuInput, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
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
