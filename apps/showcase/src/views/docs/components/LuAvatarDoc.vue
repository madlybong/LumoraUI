<template>
  <LuPageHeader title="LuAvatar" description="A visual representation of a user or entity. Supports images and text fallbacks." />

  <PreviewBlock 
    title="Usage" 
    description="If the src fails to load, it automatically shows the fallback."
    :code="exampleCode"
  >
    <template #preview>
      <div class="flex items-center gap-6">
        <LuAvatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" class="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800" />
        <LuAvatar src="invalid-url.jpg" fallback="JD" class="w-12 h-12 rounded-full overflow-hidden bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold" />
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuAvatar, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<div class="flex gap-6">
  <!-- Successful image -->
  <LuAvatar 
    src="https://i.pravatar.cc/150" 
    class="w-12 h-12 rounded-full" 
  />
  
  <!-- Fallback (invalid src) -->
  <LuAvatar 
    src="invalid.jpg" 
    fallback="JD" 
    class="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center" 
  />
</div>`;

const propsData = [
  { name: 'src', type: 'string', description: 'The image source URL.' },
  { name: 'fallback', type: 'string', description: 'Text to display if the image fails to load.' },
  { name: 'alt', type: 'string', description: 'Alternative text for the image.' },
  { name: 'size', type: 'string', description: 'Optional size marker passed as data-size.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
