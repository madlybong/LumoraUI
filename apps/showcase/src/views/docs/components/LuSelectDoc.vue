<template>
  <LuPageHeader title="LuSelect" description="Displays a native HTML select dropdown." />

  <PreviewBlock 
    title="Usage" 
    description="Pass an array of options with value/label pairs."
    :code="exampleCode"
  >
    <template #preview>
      <div class="w-full max-w-xs">
        <LuSelect 
          v-model="selected" 
          :options="[
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'blueberry', label: 'Blueberry' }
          ]" 
        />
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
import { LuSelect, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const selected = ref('apple');

const exampleCode = `<template>
  <LuSelect 
    v-model="selected" 
    :options="options" 
  />
</template>

<script setup>
import { ref } from 'vue';
const selected = ref('apple');
const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' }
];
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'string | number', description: 'The bound value.' },
  { name: 'options', type: 'Array<{ value, label }>', description: 'Array of option objects.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
