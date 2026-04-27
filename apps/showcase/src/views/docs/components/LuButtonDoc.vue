<template>
  <LuPageHeader title="LuButton" description="A foundational interactive element. Renders a native HTML <code>&lt;button&gt;</code> element." />

  <LuCodeBlock variant="preview" 
    title="Variants" 
    description="The button component supports multiple semantic variants via the skin configuration."
    :code="variantsCode"
  >
    <template #preview>
      <LuStack   >
        <LuButton variant="default">Default</LuButton>
        <LuButton variant="primary">Primary</LuButton>
        <LuButton variant="secondary">Secondary</LuButton>
        <LuButton variant="ghost">Ghost</LuButton>
        <LuButton variant="danger">Danger</LuButton>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Disabled State" 
    description="Buttons can be disabled using the standard HTML disabled attribute."
    :code="disabledCode"
  >
    <template #preview>
      <LuStack   >
        <LuButton variant="default" disabled>Saving...</LuButton>
        <LuButton variant="default" disabled>Disabled</LuButton>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuButton, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const variantsCode = `<template>
  <LuButton variant="default">Default</LuButton>
  <LuButton variant="primary">Primary</LuButton>
  <LuButton variant="secondary">Secondary</LuButton>
  <LuButton variant="ghost">Ghost</LuButton>
  <LuButton variant="danger">Danger</LuButton>
</template>`;

const disabledCode = `<template>
  <LuButton variant="default" disabled>Saving...</LuButton>
  <LuButton variant="default" disabled>Disabled</LuButton>
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
  { name: 'type', type: '"button" | "submit" | "reset"', default: '"button"', description: 'The native HTML button type.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button and applies the disabled skin.' },
];
</script>
