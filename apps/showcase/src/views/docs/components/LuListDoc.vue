<template>
  <LuPageHeader title="LuList" description="Structured semantic lists. Incorporates dividers, subheaders, active/selected highlights, and icon slots." />

  <LuCodeBlock variant="preview" 
    title="Interactive List" 
    description="A semantic list displaying structured information, featuring leading icons and trailing actions."
    :code="listCode"
  >
    <template #preview>
      <div class="max-w-md w-full bg-zinc-50 dark:bg-zinc-950 p-4 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/80">
        <LuList>
          <LuListSubheader label="Workspace" />
          <LuListItem clickable @click="select('1')" :active="selectedId === '1'">
            <template #leading>
              <LuIcon name="folder" />
            </template>
            <LuText variant="body" class="font-semibold">Documents</LuText>
            <template #trailing>
              <LuBadge variant="primary" size="sm">24</LuBadge>
            </template>
          </LuListItem>
          
          <LuListItem clickable @click="select('2')" :active="selectedId === '2'">
            <template #leading>
              <LuIcon name="image" />
            </template>
            <LuText variant="body" class="font-semibold">Images</LuText>
            <template #trailing>
              <LuIcon name="chevron-right" />
            </template>
          </LuListItem>

          <LuListDivider />

          <LuListSubheader label="System" />
          <LuListItem clickable disabled>
            <template #leading>
              <LuIcon name="settings" />
            </template>
            <LuText variant="body" class="font-semibold">Preferences (Locked)</LuText>
          </LuListItem>
        </LuList>
      </div>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuList, LuListItem, LuListDivider, LuListSubheader, LuIcon, LuBadge, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const selectedId = ref('1');
const select = (id: string) => {
  selectedId.value = id;
};

const listCode = `<template>
  <LuList>
    <LuListSubheader label="Settings" />
    <LuListItem clickable active>
      <template #leading>
        <LuIcon name="user" />
      </template>
      Profile Settings
    </LuListItem>
    <LuListDivider />
    <LuListItem clickable>
      <template #leading>
        <LuIcon name="bell" />
      </template>
      Notifications
    </LuListItem>
  </LuList>
</template>`;

const propsData = [
  { name: 'as', type: 'string', default: "'ul' | 'li'", description: 'Overrides semantic HTML element mapping.' },
  { name: 'active', type: 'boolean', default: 'false', description: 'Sets list item active styling (LuListItem only).' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Locks click interactions and adds styling.' },
  { name: 'clickable', type: 'boolean', default: 'false', description: 'Enables click shadows and changes pointer cursor.' }
];
</script>
