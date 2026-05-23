<template>
  <LuPageHeader title="LuSelect" description="Displays a custom, skinnable select dropdown." />

  <LuStack direction="vertical" gap="8">
    <LuCodeBlock variant="preview" 
      title="Usage" 
      description="Pass an array of options with value/label pairs."
      :code="exampleCode"
    >
      <template #preview>
        <div class="flex items-center justify-center w-full min-h-[150px]">
          <LuSelect 
            v-model="selected" 
            :options="options" 
            class="w-64"
          />
        </div>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview" 
      title="Placeholder" 
      description="Shows a placeholder when no value is selected."
      :code="placeholderCode"
    >
      <template #preview>
        <div class="flex items-center justify-center w-full min-h-[150px]">
          <LuSelect 
            v-model="placeholderSelected" 
            :options="options" 
            placeholder="Select a fruit..."
            class="w-64"
          />
        </div>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview" 
      title="Searchable" 
      description="Enable searching within the dropdown options."
      :code="searchableCode"
    >
      <template #preview>
        <div class="flex items-center justify-center w-full min-h-[200px]">
          <LuSelect 
            v-model="searchSelected" 
            :options="longOptions" 
            searchable
            placeholder="Search fruits..."
            class="w-64"
          />
        </div>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview" 
      title="Error State" 
      description="Display select with error styling."
      :code="errorCode"
    >
      <template #preview>
        <div class="flex items-center justify-center w-full min-h-[150px]">
          <LuSelect 
            v-model="errorSelected" 
            :options="options" 
            error="Please select an option"
            class="w-64"
          />
        </div>
      </template>
    </LuCodeBlock>
  </LuStack>

  <PropTable :props-list="propsData" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuSelect, LuStack, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'orange', label: 'Orange', disabled: true }
];

const longOptions = [
  ...options,
  { value: 'grape', label: 'Grape' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'mango', label: 'Mango' },
  { value: 'peach', label: 'Peach' },
  { value: 'pear', label: 'Pear' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'watermelon', label: 'Watermelon' }
];

const selected = ref('apple');
const placeholderSelected = ref<string | undefined>(undefined);
const searchSelected = ref<string | undefined>(undefined);
const errorSelected = ref<string | undefined>(undefined);

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

const placeholderCode = `<template>
  <LuSelect 
    v-model="selected" 
    :options="options" 
    placeholder="Select a fruit..."
  />
</template>`;

const searchableCode = `<template>
  <LuSelect 
    v-model="selected" 
    :options="options" 
    searchable
    placeholder="Search fruits..."
  />
</template>`;

const errorCode = `<template>
  <LuSelect 
    v-model="selected" 
    :options="options" 
    error="Please select an option"
  />
</template>`;

const propsData = [
  { name: 'modelValue', type: 'string | number', description: 'The bound value.' },
  { name: 'options', type: 'Array<{ value, label, disabled?, icon? }>', description: 'Array of option objects.' },
  { name: 'placeholder', type: 'string', default: '"Select an option"', description: 'Placeholder text when no value is selected.' },
  { name: 'searchable', type: 'boolean', default: 'false', description: 'Enables the search input within the dropdown.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the select component.' },
  { name: 'error', type: 'string | null', description: 'Error message or state.' },
  { name: 'name', type: 'string', description: 'Name attribute for the hidden native select.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
