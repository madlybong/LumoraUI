<template>
  <LuPageHeader title="LuTree" description="Hierarchical tree with expand/collapse, click targets, and recursive depth support." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Render a simple data-driven tree structure with selectable and default-expanded options."
    :code="basicCode"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm p-4">
        <LuTree :nodes="nodes" selectable default-expanded />
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Custom Slots" 
    description="The #label slot is forwarded recursively to all children."
    :code="slotsCode"
    class="mt-8"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm p-4">
        <LuTree :nodes="nodes" default-expanded>
          <template #label="{ node, expanded }">
            <span class="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <span class="font-medium">{{ node.label }}</span>
              <span class="text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800" v-if="node.children?.length">
                {{ expanded ? 'Open' : 'Closed' }}
              </span>
            </span>
          </template>
        </LuTree>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Static Mode" 
    description="Use LuTreeItem components imperatively inside a LuTree for static trees."
    :code="staticCode"
    class="mt-8"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm p-4">
        <LuTree>
          <LuTreeItem id="settings" label="Settings" icon="settings">
            <LuTreeItem id="settings-general" label="General" />
            <LuTreeItem id="settings-security" label="Security" />
          </LuTreeItem>
          <LuTreeItem id="profile" label="Profile" icon="user" />
          <LuTreeItem id="notifications" label="Notifications" icon="bell">
            <LuTreeItem id="notif-email" label="Email Alerts" />
            <LuTreeItem id="notif-push" label="Push Notifications" />
          </LuTreeItem>
        </LuTree>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Nested Depth" 
    description="The padding adjusts automatically based on the nesting depth."
    :code="depthCode"
    class="mt-8"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm p-4">
        <LuTree :nodes="nestedNodes" default-expanded />
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuTree, LuTreeItem, LuCodeBlock, LuCard, LuStack, LuText } from '@astrake/lumora-ui';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';
import PropTable from '../../../components/PropTable.vue';

const nodes = [
  {
    id: '1',
    label: 'Documents',
    icon: 'folder',
    children: [
      { id: '1-1', label: 'Work', icon: 'folder' },
      { id: '1-2', label: 'Personal', icon: 'folder' },
    ]
  },
  {
    id: '2',
    label: 'Downloads',
    icon: 'download'
  }
];

const nestedNodes = [
  {
    id: 'l1',
    label: 'Level 1',
    children: [
      {
        id: 'l2',
        label: 'Level 2',
        children: [
          {
            id: 'l3',
            label: 'Level 3',
            children: [
              { id: 'l4', label: 'Level 4' }
            ]
          }
        ]
      }
    ]
  }
];

const basicCode = `<template>
  <LuTree :nodes="nodes" selectable default-expanded />
</template>`;

const slotsCode = `<template>
  <LuTree :nodes="nodes">
    <template #label="{ node, expanded }">
      <span>{{ node.label }} {{ expanded ? 'Open' : 'Closed' }}</span>
    </template>
  </LuTree>
</template>`;

const staticCode = `<template>
  <LuTree>
    <LuTreeItem id="settings" label="Settings" icon="settings">
      <LuTreeItem id="settings-general" label="General" />
      <LuTreeItem id="settings-security" label="Security" />
    </LuTreeItem>
    <LuTreeItem id="profile" label="Profile" icon="user" />
  </LuTree>
</template>`;

const depthCode = `<template>
  <!-- Deeply nested arrays will indent automatically based on depth. -->
  <LuTree :nodes="nestedNodes" default-expanded />
</template>`;

const propsData = [
  { name: 'nodes', type: 'TreeNodeData[]', description: 'Tree nodes.' },
  { name: 'selectable', type: 'boolean', default: 'false', description: 'Enable selection tracking.' },
  { name: 'checkable', type: 'boolean', default: 'false', description: 'Enable checkboxes.' },
  { name: 'defaultExpanded', type: 'boolean', default: 'false', description: 'Expand all nodes initially.' },
];
</script>
