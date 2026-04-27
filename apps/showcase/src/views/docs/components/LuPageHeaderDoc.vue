<template>
  <LuPageHeader title="LuPageHeader" description="A standard header for documentation and content pages." />

  <LuCodeBlock variant="preview" 
    title="Page Header" 
    description="The page header component standardizes the title and description layout."
    :code="headerCode"
  >
    <template #preview>
      <LuCard variant="default" class="w-full">
        <LuPageHeader title="Settings" description="Manage your account settings and preferences." />
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuCard , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const headerCode = `<template>
  <LuPageHeader title="Settings" description="Manage your account settings and preferences." />
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
  { name: 'title', type: 'string', description: 'The main page title.' },
  { name: 'description', type: 'string', description: 'The optional subtitle or description.' },
];
</script>
