<template>
  <LuPageHeader title="LuGrid" description="A primitive that maps to CSS Grid. It provides a structural foundation for 2D layouts." />

  <LuCodeBlock variant="preview" 
    title="CSS Grid Layout" 
    description="Combine LuGrid with Tailwind's grid-template-columns utilities."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack class="w-full">
        <LuGrid class="grid-cols-3 gap-4 w-full max-w-lg mx-auto">
          <LuStack v-for="i in 6" :key="i" class="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900 items-center justify-center shadow-sm">
            Cell {{ i }}
          </LuStack>
        </LuGrid>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuGrid, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuGrid class="grid-cols-3 gap-4">
  <LuStack v-for="i in 6" :key="i" class="p-6 border rounded-xl items-center justify-center bg-gray-50">
    Cell {{ i }}
  </LuStack>
</LuGrid>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
