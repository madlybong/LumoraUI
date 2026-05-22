<template>
  <LuPageHeader title="LuNotificationCenter" description="In-app notification bell with dropdown panel." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Display notifications in a dropdown panel."
    :code="basicCode"
  >
    <template #preview>
      <div style="display: flex; justify-content: flex-end; width: 100%;">
        <LuNotificationCenter :notifications="notifications" :unreadCount="1" />
      </div>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuNotificationCenter, LuPageHeader, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const notifications = [
  { id: '1', title: 'New Message', message: 'You have a new message.', type: 'info', read: false, createdAt: new Date().toISOString() }
];

const basicCode = `<template>
  <div style="display: flex; justify-content: flex-end; width: 100%;">
    <LuNotificationCenter :notifications="notifications" :unreadCount="1" />
  </div>
</template>`;

const propsData = [
  { name: 'notifications', type: 'Notification[]', description: 'Array of notifications.' },
  { name: 'unreadCount', type: 'number', description: 'Number to display on badge.' },
];
</script>
