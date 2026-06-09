<template>
  <LuPageHeader title="LuTabs" description="A set of layered sections of content—known as tab panels—that are displayed one at a time." />

  <LuCodeBlock variant="preview" 
    title="Default Tabs" 
    description="Combines LuTabs, LuTabList, LuTab, and LuTabPanel with default styling."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack class="w-full max-w-lg">
        <LuCard variant="panel">
          <LuTabs v-model="activeTab">
            <LuTabList variant="default">
              <LuTab value="account">Account</LuTab>
              <LuTab value="password">Password</LuTab>
              <LuTab value="settings">Settings</LuTab>
            </LuTabList>
            
            <LuTabPanel value="account">
              <LuText as="h3" variant="section-title" class="mb-2">Account Info</LuText>
              <LuText as="p" variant="body">Make changes to your account here.</LuText>
            </LuTabPanel>
            <LuTabPanel value="password">
              <LuText as="h3" variant="section-title" class="mb-2">Password</LuText>
              <LuText as="p" variant="body">Change your password here.</LuText>
            </LuTabPanel>
            <LuTabPanel value="settings">
              <LuText as="h3" variant="section-title" class="mb-2">Settings</LuText>
              <LuText as="p" variant="body">Manage your notification settings.</LuText>
            </LuTabPanel>
          </LuTabs>
        </LuCard>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Underline Variant" 
    description="Pass variant='underline' to LuTabList for a clean, underlined style."
    :code="underlineCode"
    class="mt-8"
  >
    <template #preview>
      <LuStack class="w-full max-w-lg">
        <LuTabs v-model="activeTab2">
          <LuTabList variant="underline">
            <LuTab value="overview">Overview</LuTab>
            <LuTab value="integrations">Integrations</LuTab>
            <LuTab value="billing">Billing</LuTab>
          </LuTabList>
          
          <LuTabPanel value="overview">
            <LuText as="p" variant="body">Project overview metrics.</LuText>
          </LuTabPanel>
          <LuTabPanel value="integrations">
            <LuText as="p" variant="body">Third party integrations.</LuText>
          </LuTabPanel>
          <LuTabPanel value="billing">
            <LuText as="p" variant="body">Billing history and invoices.</LuText>
          </LuTabPanel>
        </LuTabs>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8">
    <PropTable title="LuTabs" :props-list="tabsProps" />
    <PropTable title="LuTab & LuTabPanel" :props-list="itemProps" />
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuTabs, LuTabList, LuTab, LuTabPanel, LuCodeBlock, LuStack, LuText, LuCard } from '@astrake/lumora-ui';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';
import PropTable from '../../../components/PropTable.vue';

const activeTab = ref('account');
const activeTab2 = ref('overview');

const exampleCode = `<template>
  <LuTabs v-model="activeTab">
    <LuTabList variant="default">
      <LuTab value="account">Account</LuTab>
      <LuTab value="password">Password</LuTab>
    </LuTabList>
    
    <LuTabPanel value="account">
      Account panel content...
    </LuTabPanel>
    <LuTabPanel value="password">
      Password panel content...
    </LuTabPanel>
  </LuTabs>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('account');
<\/script>`;

const underlineCode = `<template>
  <LuTabs v-model="activeTab">
    <LuTabList variant="underline">
      <LuTab value="overview">Overview</LuTab>
      <LuTab value="integrations">Integrations</LuTab>
    </LuTabList>
    
    <LuTabPanel value="overview">...</LuTabPanel>
  </LuTabs>
</template>`;

const tabsProps = [
  { name: 'modelValue', type: 'string | number', description: 'The bound active tab value.' },
];

const itemProps = [
  { name: 'value', type: 'string | number', description: 'The unique identifier for this tab/panel.' },
  { name: 'variant', type: 'string', description: 'Skin variant key (only needed on LuTabList).' },
];
</script>
