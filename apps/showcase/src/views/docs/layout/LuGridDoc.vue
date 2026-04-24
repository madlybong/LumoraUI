<template>
  <LuPageHeader title="LuGrid" description="A primitive that maps to CSS Grid. It provides a structural foundation for 2D layouts." />

  <PreviewBlock 
    title="CSS Grid Layout" 
    description="Combine LuGrid with Tailwind's grid-template-columns utilities."
    :code="exampleCode"
  >
    <template #preview>
      <div class="w-full">
        <LuGrid class="grid-cols-3 gap-4">
          <div v-for="i in 6" :key="i" class="h-24 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center font-medium text-zinc-500">
            Cell {{ i }}
          </div>
        </LuGrid>
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuGrid, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuGrid class="grid-cols-3 gap-4">
  <div v-for="i in 6" :key="i" class="h-24 bg-zinc-100">
    Cell {{ i }}
  </div>
</LuGrid>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
