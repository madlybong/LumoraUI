<template>
  <LuPageHeader title="LuButton" description="A foundational interactive element. Renders a native HTML <code>&lt;button&gt;</code> element." />

  <LuCodeBlock variant="preview" 
    title="Variants" 
    description="The button component supports multiple semantic variants via the skin configuration."
    :code="variantsCode"
  >
    <template #preview>
      <LuStack :gap="4">
        <LuButton variant="default">Default</LuButton>
        <LuButton variant="primary">Primary</LuButton>
        <LuButton variant="secondary">Secondary</LuButton>
        <LuButton variant="ghost">Ghost</LuButton>
        <LuButton variant="danger">Danger</LuButton>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="With Icons" 
    description="Buttons can include leading and trailing icons using the #icon and #trailingIcon slots."
    :code="iconsCode"
  >
    <template #preview>
      <LuStack direction="horizontal" align="center" :gap="4">
        <LuButton variant="primary">
          <template #icon><LuIcon name="mail" :size="16" /></template>
          Send Email
        </LuButton>
        <LuButton variant="secondary">
          Settings
          <template #trailingIcon><LuIcon name="settings" :size="16" /></template>
        </LuButton>
        <LuButton variant="default">
          <template #icon><LuIcon name="search" :size="16" /></template>
        </LuButton>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Disabled State" 
    description="Buttons can be disabled using the standard HTML disabled attribute."
    :code="disabledCode"
  >
    <template #preview>
      <LuStack :gap="4">
        <LuButton variant="default" disabled>Saving...</LuButton>
        <LuButton variant="default" disabled>Disabled</LuButton>
      </LuStack>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuButton, LuStack, LuText, LuCodeBlock, LuIcon } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const variantsCode = `<template>
  <LuButton variant="default">Default</LuButton>
  <LuButton variant="primary">Primary</LuButton>
  <LuButton variant="secondary">Secondary</LuButton>
  <LuButton variant="ghost">Ghost</LuButton>
  <LuButton variant="danger">Danger</LuButton>
</template>`;

const iconsCode = `<template>
  <LuButton variant="primary">
    <template #icon><LuIcon name="mail" :size="16" /></template>
    Send Email
  </LuButton>
  
  <LuButton variant="secondary">
    Settings
    <template #trailingIcon><LuIcon name="settings" :size="16" /></template>
  </LuButton>

  <!-- Icon Only -->
  <LuButton variant="default">
    <template #icon><LuIcon name="search" :size="16" /></template>
  </LuButton>
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
