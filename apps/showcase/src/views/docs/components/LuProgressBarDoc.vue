<template>
  <LuPageHeader title="LuProgressBar" description="Displays an indicator showing the completion progress of a task." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="Pass a value between 0 and max (default 100)."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack direction="vertical" gap="6" class="w-full max-w-md">
        <LuStack direction="vertical" gap="2" class="w-full">
          <LuStack direction="horizontal" justify="between" class="w-full">
            <LuText as="span" variant="muted">Downloading...</LuText>
            <LuText as="span" variant="muted">40%</LuText>
          </LuStack>
          <LuProgressBar :value="40" variant="primary" />
        </LuStack>
        
        <LuStack direction="vertical" gap="2" class="w-full">
          <LuStack direction="horizontal" justify="between" class="w-full">
            <LuText as="span" variant="muted">Complete</LuText>
            <LuText as="span" variant="muted">100%</LuText>
          </LuStack>
          <LuProgressBar :value="100" variant="success" />
        </LuStack>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuProgressBar, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuStack direction="vertical" gap="6" class="w-full max-w-md">
  <LuStack direction="vertical" gap="2" class="w-full">
    <LuStack direction="horizontal" justify="between" class="w-full">
      <LuText as="span" variant="muted">Downloading...</LuText>
      <LuText as="span" variant="muted">40%</LuText>
    </LuStack>
    <LuProgressBar :value="40" variant="primary" />
  </LuStack>
  
  <LuStack direction="vertical" gap="2" class="w-full">
    <LuStack direction="horizontal" justify="between" class="w-full">
      <LuText as="span" variant="muted">Complete</LuText>
      <LuText as="span" variant="muted">100%</LuText>
    </LuStack>
    <LuProgressBar :value="100" variant="success" />
  </LuStack>
</LuStack>`;

const propsData = [
  { name: 'value', type: 'number', description: 'The progress value.' },
  { name: 'max', type: 'number', default: '100', description: 'The maximum value.' },
  { name: 'variant', type: 'string', description: 'Skin variant key. Injected into the fill track.' },
];
</script>
