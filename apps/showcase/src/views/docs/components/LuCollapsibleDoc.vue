<template>
  <LuPageHeader title="LuCollapsible" description="An interactive component which expands and collapses a panel." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="The trigger slot provides the current isOpen state for styling."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack   >
        <LuCollapsible >
          <template #trigger="{ isOpen }">
            <LuStack   >
              <LuText as="span" >Section Title</LuText>
              <LuIcon name="chevron-down" />
            </LuStack>
          </template>
          <template #content>
            <LuStack   >
              This is the collapsible content. It can contain any elements or components.
            </LuStack>
          </template>
        </LuCollapsible>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
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
