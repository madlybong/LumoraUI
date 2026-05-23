<template>
  <LuPageHeader title="LuPopover" description="Anchored popover overlay for rich dropdown content. Features intelligent floating-ui positioning and viewport auto-flipping." />

  <LuCodeBlock variant="preview" 
    title="Rich Popover" 
    description="Clicking trigger opens custom content anchored to trigger with click-outside listener to close."
    :code="popoverCode"
  >
    <template #preview>
      <LuStack direction="horizontal" class="gap-4">
        <LuPopover position="bottom">
          <template #trigger>
            <LuButton variant="primary">User Profile</LuButton>
          </template>
          <template #content>
            <LuStack direction="vertical" class="gap-3 w-56">
              <LuText variant="body" class="font-bold">Anuvab Chakraborty</LuText>
              <LuText variant="caption">Lead Engineer</LuText>
              <hr class="border-zinc-100 dark:border-zinc-800" />
              <LuButton size="sm" variant="ghost" class="justify-start">Account Settings</LuButton>
              <LuButton size="sm" variant="ghost" class="justify-start text-rose-500">Sign Out</LuButton>
            </LuStack>
          </template>
        </LuPopover>
      </LuStack>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuPopover, LuButton, LuStack, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const popoverCode = `<template>
  <LuPopover position="bottom">
    <template #trigger>
      <LuButton>Options</LuButton>
    </template>
    <template #content>
      <div>
        <h4>Settings</h4>
        <p>Manage your account.</p>
      </div>
    </template>
  </LuPopover>
</template>`;

const propsData = [
  { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", default: "'bottom'", description: 'Preferred side of the trigger element to position popover.' },
  { name: 'trigger', type: "'click' | 'hover'", default: "'click'", description: 'Action that toggles popover visibility.' },
  { name: 'closeOnOutsideClick', type: 'boolean', default: 'true', description: 'Closes popover when clicking anywhere outside of popover container.' }
];
</script>
