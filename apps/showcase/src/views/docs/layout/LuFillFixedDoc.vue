<template>
  <LuPageHeader title="LuFill & LuFixed" description="Layout modifiers that dictate how elements consume space within a Flex or Grid container.
      <code>LuFill</code> expands to consume available space. <code>LuFixed</code> prevents an element from shrinking." />

  <PreviewBlock 
    title="Usage in a Stack" 
    description="A common pattern is a fixed sidebar and a filling content area."
    :code="exampleCode"
  >
    <template #preview>
      <PreviewFrame width="500px" height="200px" class="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
        <LuStack class="h-full w-full gap-4 p-4">
          <LuFixed class="w-32 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center font-medium text-indigo-700 dark:text-indigo-400 rounded">
            Fixed (128px)
          </LuFixed>
          <LuFill class="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 rounded">
            Fill (Remaining)
          </LuFill>
        </LuStack>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuStack, LuFill, LuFixed, LuPageHeader, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuStack class="h-full w-full gap-4 p-4">
  <LuFixed class="w-32 bg-indigo-50">
    Fixed (128px)
  </LuFixed>
  <LuFill class="bg-zinc-50">
    Fill (Remaining)
  </LuFill>
</LuStack>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
