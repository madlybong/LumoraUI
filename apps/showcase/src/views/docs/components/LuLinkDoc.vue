<template>
  <LuPageHeader title="LuLink" description="An anchor component for navigation." />

  <LuCodeBlock variant="preview" 
    title="Links" 
    description="Links can handle both internal routing and external navigation."
    :code="linkCode"
  >
    <template #preview>
      <LuStack direction="horizontal">
        <LuLink href="https://example.com" target="_blank" variant="default">External Link</LuLink>
        <LuLink to="/" variant="default">Internal Link</LuLink>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuLink , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const linkCode = `<template>
  <LuLink href="https://example.com" target="_blank" variant="default">External Link</LuLink>
  <LuLink to="/" variant="default">Internal Link</LuLink>
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
  { name: 'to', type: 'RouteLocationRaw', description: 'Vue Router target location.' },
  { name: 'href', type: 'string', description: 'Native anchor href.' },
];
</script>
