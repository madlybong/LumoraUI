<template>
  <LuCodeBlock variant="preview"
    title="Menu"
    description="Displays a menu to the user—such as a set of actions or functions—triggered by a button."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm" variant="panel">
        <LuStack direction="horizontal" gap="4">
          <LuMenu>
            <LuMenuItem>Edit Profile</LuMenuItem>
            <LuMenuItem>Settings</LuMenuItem>
            <LuMenuItem disabled>Keyboard shortcuts</LuMenuItem>
            <LuMenuItem class="text-red-600 dark:text-red-500">Log out</LuMenuItem>
          </LuMenu>
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { LuCard, LuStack, LuMenu, LuMenuItem , LuCodeBlock } from '@astrake/lumora-ui';
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
