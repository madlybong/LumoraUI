<template>
  <LuPageHeader title="LuSkeleton" description="Used to show a placeholder while content is loading." />

  <LuCodeBlock variant="preview"
    title="Basic Skeleton"
    description="Combine skeleton variants to mock your layout's final shape."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-md" variant="panel">
        <LuStack direction="horizontal" gap="4">
          <LuSkeleton variant="circle" class="shrink-0" />
          <LuStack direction="vertical" gap="2" class="w-full">
            <LuSkeleton variant="title" />
            <LuSkeleton variant="text" />
            <LuSkeleton variant="text" class="w-1/2" />
          </LuStack>
        </LuStack>
        
        <LuStack direction="vertical" class="mt-6">
          <LuSkeleton variant="block" />
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :propsList="propsList" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuCard, LuStack, LuText, LuSkeleton, LuCodeBlock } from '@astrake/lumora-ui';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';
import PropTable from '../../../components/PropTable.vue';

const code = `<template>
  <LuStack direction="horizontal" gap="4">
    <LuSkeleton variant="circle" class="w-12 h-12" />
    <LuStack direction="vertical" gap="2" class="w-full">
      <LuSkeleton variant="line" class="w-3/4" />
      <LuSkeleton variant="line" />
    </LuStack>
  </LuStack>
</template>`;

const propsList = [
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map (e.g., circle, line, block).' },
];
</script>
