<template>
  <LuPageHeader title="LuProgressBar" description="Displays an indicator showing the completion progress of a task." />

  <PreviewBlock 
    title="Usage" 
    description="Pass a value between 0 and max (default 100)."
    :code="exampleCode"
  >
    <template #preview>
      <div class="w-full max-w-sm space-y-6">
        <div>
          <div class="flex justify-between mb-1 text-xs text-zinc-500">
            <span>Downloading...</span>
            <span>40%</span>
          </div>
          <LuProgressBar :value="40" class="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden" variant="primary" />
        </div>
        
        <div>
          <div class="flex justify-between mb-1 text-xs text-zinc-500">
            <span>Complete</span>
            <span>100%</span>
          </div>
          <LuProgressBar :value="100" class="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden" variant="success" />
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
import { LuProgressBar, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<div class="space-y-6">
  <LuProgressBar 
    :value="40" 
    class="h-2 rounded-full overflow-hidden bg-zinc-100" 
    variant="primary" 
  />
  
  <LuProgressBar 
    :value="100" 
    class="h-2 rounded-full overflow-hidden bg-zinc-100" 
    variant="success" 
  />
</div>`;

const propsData = [
  { name: 'value', type: 'number', description: 'The progress value.' },
  { name: 'max', type: 'number', default: '100', description: 'The maximum value.' },
  { name: 'variant', type: 'string', description: 'Skin variant key. Injected into the fill track.' },
];
</script>
