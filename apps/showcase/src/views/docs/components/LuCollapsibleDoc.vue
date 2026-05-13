<template>
  <LuPageHeader title="LuCollapsible" description="An interactive component which expands and collapses a panel." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="The trigger slot provides the current isOpen state for styling."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack class="w-full max-w-sm">
        <LuCollapsible>
          <template #trigger="{ isOpen }">
            <span>Section Title</span>
            <LuIcon name="chevron-down" class="w-4 h-4 ml-auto transition-transform duration-200" :class="{ 'rotate-180': isOpen }" />
          </template>
          <template #content>
            <LuStack class="px-2 py-3 text-sm text-zinc-500 dark:text-zinc-400">
              This is the collapsible content. It can contain any elements or components.
            </LuStack>
          </template>
        </LuCollapsible>
      </LuStack>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuCollapsible, LuIcon, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuCollapsible >
  <template #trigger="{ isOpen }">
    <LuStack   >
      <LuText as="span" >Title</LuText>
      <LuIcon name="chevron-down" />
    </LuStack>
  </template>
  
  <template #content>
    <LuStack   >
      Content goes here...
    </LuStack>
  </template>
</LuCollapsible>`;

const propsData = [
  { name: 'modelValue', type: 'boolean', description: 'Bound value for controlled state.' },
  { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Whether it is open by default (uncontrolled).' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
