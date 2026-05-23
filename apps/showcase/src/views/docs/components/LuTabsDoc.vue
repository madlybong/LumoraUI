<template>
  <LuPageHeader title="LuTabs" description="A set of layered sections of content—known as tab panels—that are displayed one at a time." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="Combines LuTabs, LuTabList, LuTab, and LuTabPanel."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack   >
        <LuTabs v-model="activeTab" >
          <LuTabList >
            <LuTab value="account" >Account</LuTab>
            <LuTab value="password" >Password</LuTab>
            <LuTab value="settings" >Settings</LuTab>
          </LuTabList>
          
          <LuTabPanel value="account" >
            <LuText as="h3" variant="section-title" class="mb-2">Account Info</LuText>
            <LuText as="p" variant="body">Make changes to your account here.</LuText>
          </LuTabPanel>
          <LuTabPanel value="password" >
            <LuText as="h3" variant="section-title" class="mb-2">Password</LuText>
            <LuText as="p" variant="body">Change your password here.</LuText>
          </LuTabPanel>
          <LuTabPanel value="settings" >
            <LuText as="h3" variant="section-title" class="mb-2">Settings</LuText>
            <LuText as="p" variant="body">Manage your notification settings.</LuText>
          </LuTabPanel>
        </LuTabs>
      </LuStack>
    </template>
  </LuCodeBlock>

  <PropTable title="LuTabs" :props-list="tabsProps" />

  <PropTable title="LuTab & LuTabPanel" :props-list="itemProps" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuTabs, LuTabList, LuTab, LuTabPanel, LuCodeBlock, LuStack, LuText } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const activeTab = ref('account');

const exampleCode = `<template>
  <LuTabs v-model="activeTab">
    <LuTabList >
      <LuTab value="account" >Account</LuTab>
      <LuTab value="password" >Password</LuTab>
    </LuTabList>
    
    <LuTabPanel value="account" >
      Account panel content...
    </LuTabPanel>
    <LuTabPanel value="password" >
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
