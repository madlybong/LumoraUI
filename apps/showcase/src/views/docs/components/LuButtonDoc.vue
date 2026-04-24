<template>
  <LuPageHeader title="LuButton" description="A foundational interactive element. Renders a native HTML <code>&lt;button&gt;</code> element." />

  <PreviewBlock 
    title="Variants" 
    description="The button component supports multiple semantic variants via the skin configuration."
    :code="variantsCode"
  >
    <template #preview>
      <div class="flex items-center gap-4 flex-wrap">
        <LuButton variant="default">Default</LuButton>
        <LuButton variant="primary">Primary</LuButton>
        <LuButton variant="secondary">Secondary</LuButton>
        <LuButton variant="ghost">Ghost</LuButton>
        <LuButton variant="danger">Danger</LuButton>
      </div>
    </template>
  </PreviewBlock>

  <PreviewBlock 
    title="Disabled State" 
    description="Buttons can be disabled using the standard HTML disabled attribute."
    :code="disabledCode"
  >
    <template #preview>
      <div class="flex items-center gap-4">
        <LuButton variant="primary" disabled>Saving...</LuButton>
        <LuButton variant="default" disabled>Disabled</LuButton>
      </div>
    </template>
  </PreviewBlock>

  <LuStack direction="vertical" class="mt-16">
    <LuText as="h2" variant="section-title" class="mb-6">Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuButton, LuPageHeader, LuStack, LuText } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const variantsCode = `<template>
  <LuButton variant="default">Default</LuButton>
  <LuButton variant="primary">Primary</LuButton>
  <LuButton variant="secondary">Secondary</LuButton>
  <LuButton variant="ghost">Ghost</LuButton>
  <LuButton variant="danger">Danger</LuButton>
</template>`;

const disabledCode = `<template>
  <LuButton variant="primary" disabled>Saving...</LuButton>
  <LuButton variant="default" disabled>Disabled</LuButton>
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
  { name: 'type', type: '"button" | "submit" | "reset"', default: '"button"', description: 'The native HTML button type.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button and applies the disabled skin.' },
];
</script>
