<template>
  <LuPageHeader title="LuCollapsible" description="An interactive component which expands and collapses a panel." />

  <PreviewBlock 
    title="Usage" 
    description="The trigger slot provides the current isOpen state for styling."
    :code="exampleCode"
  >
    <template #preview>
      <div class="w-full max-w-md">
        <LuCollapsible class="border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden bg-white dark:bg-zinc-900">
          <template #trigger="{ isOpen }">
            <div class="flex items-center justify-between w-full p-4 font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <span>Section Title</span>
              <LuIcon class="w-5 h-5 text-zinc-500 transition-transform duration-200" :class="{ 'rotate-180': isOpen }">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </LuIcon>
            </div>
          </template>
          <template #content>
            <div class="p-4 border-t border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
              This is the collapsible content. It can contain any elements or components.
            </div>
          </template>
        </LuCollapsible>
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuCollapsible, LuIcon, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuCollapsible class="border rounded-md">
  <template #trigger="{ isOpen }">
    <div class="flex justify-between p-4">
      <span>Title</span>
      <LuIcon :class="{ 'rotate-180': isOpen }">
        <!-- SVG icon -->
      </LuIcon>
    </div>
  </template>
  
  <template #content>
    <div class="p-4 border-t">
      Content goes here...
    </div>
  </template>
</LuCollapsible>`;

const propsData = [
  { name: 'modelValue', type: 'boolean', description: 'Bound value for controlled state.' },
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Whether it is open by default (uncontrolled).' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
