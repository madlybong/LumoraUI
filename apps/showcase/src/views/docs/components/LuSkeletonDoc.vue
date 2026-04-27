<template>
  <LuCodeBlock variant="preview"
    title="Skeleton"
    description="Used to show a placeholder while content is loading."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-md" variant="panel">
        <LuStack direction="horizontal" gap="4">
          <LuSkeleton variant="circle" class="w-12 h-12 shrink-0" />
          <LuStack direction="vertical" gap="2" class="w-full">
            <LuSkeleton variant="line" class="w-3/4" />
            <LuSkeleton variant="line" />
            <LuSkeleton variant="line" class="w-1/2" />
          </LuStack>
        </LuStack>
        
        <LuStack direction="vertical" class="mt-6">
          <LuSkeleton variant="block" />
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { LuCard, LuStack, LuSkeleton , LuCodeBlock } from '@astrake/lumora-ui';
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
