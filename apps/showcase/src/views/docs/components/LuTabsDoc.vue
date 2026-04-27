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
            <h3 >Account Info</h3>
            <p >Make changes to your account here.</p>
          </LuTabPanel>
          <LuTabPanel value="password" >
            <h3 >Password</h3>
            <p >Change your password here.</p>
          </LuTabPanel>
          <LuTabPanel value="settings" >
            <h3 >Settings</h3>
            <p >Manage your notification settings.</p>
          </LuTabPanel>
        </LuTabs>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack   >
    <h2 >Props API</h2>
    
    <h3 >LuTabs</h3>
    <PropTable :props-list="tabsProps"  />
    
    <h3 >LuTab & LuTabPanel</h3>
    <PropTable :props-list="itemProps" />
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuTabs, LuTabList, LuTab, LuTabPanel, LuPageHeader, LuCodeBlock, LuStack } from '@astrake/lumora-ui';
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
