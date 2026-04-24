<template>
  <LuPageHeader title="LuTabs" description="A set of layered sections of content—known as tab panels—that are displayed one at a time." />

  <PreviewBlock 
    title="Usage" 
    description="Combines LuTabs, LuTabList, LuTab, and LuTabPanel."
    :code="exampleCode"
  >
    <template #preview>
      <div class="w-full max-w-md">
        <LuTabs v-model="activeTab" class="w-full">
          <LuTabList class="flex w-full bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-md mb-4">
            <LuTab value="account" class="flex-1 py-1.5 text-sm font-medium rounded transition-colors text-zinc-600 dark:text-zinc-400">Account</LuTab>
            <LuTab value="password" class="flex-1 py-1.5 text-sm font-medium rounded transition-colors text-zinc-600 dark:text-zinc-400">Password</LuTab>
            <LuTab value="settings" class="flex-1 py-1.5 text-sm font-medium rounded transition-colors text-zinc-600 dark:text-zinc-400">Settings</LuTab>
          </LuTabList>
          
          <LuTabPanel value="account" class="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h3 class="font-medium mb-1">Account Info</h3>
            <p class="text-sm text-zinc-500">Make changes to your account here.</p>
          </LuTabPanel>
          <LuTabPanel value="password" class="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h3 class="font-medium mb-1">Password</h3>
            <p class="text-sm text-zinc-500">Change your password here.</p>
          </LuTabPanel>
          <LuTabPanel value="settings" class="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h3 class="font-medium mb-1">Settings</h3>
            <p class="text-sm text-zinc-500">Manage your notification settings.</p>
          </LuTabPanel>
        </LuTabs>
      </div>
    </template>
  </PreviewBlock>

  <div class="mt-16">
    <h2 class="text-xl font-semibold mb-6 dark:text-white">Props API</h2>
    
    <h3 class="text-lg font-medium mb-4 dark:text-zinc-200">LuTabs</h3>
    <PropTable :props-list="tabsProps" class="mb-8" />
    
    <h3 class="text-lg font-medium mb-4 dark:text-zinc-200">LuTab & LuTabPanel</h3>
    <PropTable :props-list="itemProps" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuTabs, LuTabList, LuTab, LuTabPanel, LuPageHeader } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PropTable from '../../../components/PropTable.vue';

const activeTab = ref('account');

const exampleCode = `<template>
  <LuTabs v-model="activeTab">
    <LuTabList class="flex p-1 bg-zinc-100 rounded-md mb-4">
      <LuTab value="account" class="flex-1 rounded">Account</LuTab>
      <LuTab value="password" class="flex-1 rounded">Password</LuTab>
    </LuTabList>
    
    <LuTabPanel value="account" class="p-4 border rounded">
      Account panel content...
    </LuTabPanel>
    <LuTabPanel value="password" class="p-4 border rounded">
      Password panel content...
    </LuTabPanel>
  </LuTabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('account');
<\/script>`;

const tabsProps = [
  { name: 'modelValue', type: 'string | number', description: 'The bound active tab value.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];

const itemProps = [
  { name: 'value', type: 'string | number', description: 'The unique identifier for this tab/panel.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
