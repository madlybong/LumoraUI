<template>
  <LuStack direction="vertical" class="mb-12">
    <LuStack direction="vertical" v-if="title" class="mb-4">
      <LuText as="h3" variant="preview-title">{{ title }}</LuText>
      <LuText v-if="description" as="p" variant="preview-description">{{ description }}</LuText>
    </LuStack>

    <LuCard variant="preview-card">
      
      <LuStack direction="horizontal" class="items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-4 bg-zinc-50/50 dark:bg-zinc-900/50 h-12">
        <LuTabs v-model="activeTab" variant="preview-tabs" class="h-full !rounded-none !bg-transparent">
          <LuTabList variant="preview-tablist" class="h-full !border-0 !bg-transparent !px-0">
            <LuTab value="preview" variant="preview-tab" class="!h-full">Preview</LuTab>
            <LuTab value="code" variant="preview-tab" class="!h-full">Code</LuTab>
          </LuTabList>
        </LuTabs>

        <LuStack direction="horizontal" class="items-center gap-3">
          <LuText class="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            {{ isSkinEnabled ? 'Styled' : 'Naked' }}
          </LuText>
          <LuDivider v-if="activeTab === 'code'" orientation="vertical" class="!h-4" />
          <LuButton v-if="activeTab === 'code'" variant="docs-icon-btn" @click="copyCode" class="!w-7 !h-7" aria-label="Copy code">
            <LuIcon :name="copied ? 'check' : 'copy'" class="w-4 h-4" :class="copied ? 'text-emerald-500' : 'text-zinc-500'" />
          </LuButton>
        </LuStack>
      </LuStack>

      <LuFill v-if="activeTab === 'preview'" class="p-6 md:p-8 flex items-center justify-center min-h-[200px] overflow-auto rounded-b-lg relative">
        <!-- Checkerboard background pattern -->
        <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style="background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 16px 16px;"></div>
        <LuStack direction="horizontal" class="relative z-10 w-full justify-center">
          <slot name="preview" />
        </LuStack>
      </LuFill>
      
      <LuCard v-if="activeTab === 'code'" class="relative">
        <LuBadge variant="docs-lang" class="z-10 absolute top-4 right-4">vue</LuBadge>
        <CodeBlock :code="code" lang="vue" />
      </LuCard>
    </LuCard>
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuTabs, LuTabList, LuTab, LuButton, LuIcon, LuBadge, LuStack, LuText, LuCard, LuDivider, LuFill } from '@astrake/lumora-ui';
import CodeBlock from './CodeBlock.vue';
import { useSkinToggle } from '../composables/useSkinToggle';

const props = defineProps<{
  title?: string;
  description?: string;
  code: string;
}>();

const activeTab = ref<'preview' | 'code'>('preview');
const copied = ref(false);
const { isSkinEnabled } = useSkinToggle();

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => copied.value = false, 2000);
  } catch (err) {
    console.error('Failed to copy', err);
  }
};
</script>
