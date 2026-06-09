<template>
  <LuPageHeader title="LuMenu" description="Displays a menu to the user—such as a set of actions or functions—triggered by a button." />
  <LuCodeBlock variant="preview"
    title="Basic Menu"
    description="A dropdown menu with standard items and disabled states."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm p-4 text-center">
        <LuMenu>
          <LuMenuItem>Edit Profile</LuMenuItem>
          <LuMenuItem>Settings</LuMenuItem>
          <LuMenuItem disabled>Keyboard shortcuts</LuMenuItem>
          <LuMenuItem class="text-red-600 dark:text-red-500">Log out</LuMenuItem>
        </LuMenu>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :propsList="propsList" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuCard, LuStack, LuText, LuMenu, LuMenuItem, LuCodeBlock } from '@astrake/lumora-ui';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';
import PropTable from '../../../components/PropTable.vue';

const code = `<script setup>
import { LuMenu, LuMenuItem } from '@astrake/lumora-ui';
<\/script>

<template>
  <LuMenu>
    <LuMenuItem>Edit Profile</LuMenuItem>
    <LuMenuItem>Settings</LuMenuItem>
    <LuMenuItem disabled>Keyboard shortcuts</LuMenuItem>
    <LuMenuItem>Log out</LuMenuItem>
  </LuMenu>
</template>`;

const propsList = [
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map.' },
  { name: 'align', type: '"left" | "right"', default: '"left"', description: 'Aligns the Menu menu to the left or right of the trigger.' },
];
</script>
