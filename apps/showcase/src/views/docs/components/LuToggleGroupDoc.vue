<template>
  <LuPageHeader title="LuToggleGroup" description="A set of two-state buttons that can be toggled on or off." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="Use LuToggleGroup to wrap multiple LuToggleButtons. It manages the selected state."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack direction="horizontal" gap="4">
        <LuToggleGroup v-model="selected">
          <LuToggleButton value="bold" aria-label="Bold">
            <LuIcon name="bold" class="h-4 w-4" />
          </LuToggleButton>
          <LuToggleButton value="italic" aria-label="Italic">
            <LuIcon name="italic" class="h-4 w-4" />
          </LuToggleButton>
          <LuToggleButton value="underline" aria-label="Underline">
            <LuIcon name="underline" class="h-4 w-4" />
          </LuToggleButton>
        </LuToggleGroup>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" gap="4" class="mt-8">
    <LuText as="h2" variant="section-title">Props API</LuText>
    
    <LuText as="h3" variant="section-title" class="mt-4">LuToggleGroup</LuText>
    <PropTable :props-list="groupPropsData" />
    
    <LuText as="h3" variant="section-title" class="mt-4">LuToggleButton</LuText>
    <PropTable :props-list="buttonPropsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuToggleGroup, LuToggleButton, LuPageHeader, LuStack, LuText, LuIcon , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const selected = ref('bold');

const exampleCode = `<script setup>
import { ref } from 'vue';
import { LuToggleGroup, LuToggleButton, LuIcon } from '@astrake/lumora-ui';

const selected = ref('bold');
<\/script>

<template>
  <LuToggleGroup v-model="selected">
    <LuToggleButton value="bold" aria-label="Bold">
      <LuIcon name="bold" />
    </LuToggleButton>
    <LuToggleButton value="italic" aria-label="Italic">
      <LuIcon name="italic" />
    </LuToggleButton>
    <LuToggleButton value="underline" aria-label="Underline">
      <LuIcon name="underline" />
    </LuToggleButton>
  </LuToggleGroup>
</template>`;

const groupPropsData = [
  { name: 'modelValue', type: 'string | number', description: 'The bound selected value.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];

const buttonPropsData = [
  { name: 'value', type: 'string | number', description: 'The value represented by this button.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the toggle button.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
