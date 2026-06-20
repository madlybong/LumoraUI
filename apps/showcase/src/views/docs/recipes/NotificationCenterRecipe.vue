<template>
  <LuPageHeader title="Notification Center Recipe" description="In-app notification bell with dropdown panel." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Display notifications in a dropdown panel triggered by a bell icon."
    :code="basicCode"
  >
    <template #preview>
      <LuStack direction="horizontal" class="justify-end w-full" pad="0">
        <LuNotificationCenter :notifications="notifications" :unreadCount="1" />
      </LuStack>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import LuNotificationCenter from '../../../recipes/notification-center/LuNotificationCenter.vue';
import { LuStack, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const notifications = [
  { id: '1', title: 'New Message', message: 'You have a new message.', type: 'info', read: false, createdAt: new Date().toISOString() }
];

const basicCode = `<template>
  <LuStack direction="horizontal" class="justify-end w-full" pad="0">
    <LuNotificationCenter :notifications="notifications" :unreadCount="1" />
  </LuStack>
</template>`;

const propsData = [
  { name: 'notifications', type: 'Notification[]', description: 'Array of notification objects with id, title, message, type, read, and createdAt.' },
  { name: 'unreadCount', type: 'number', description: 'Number to display on the notification badge.' },
];
</script>
