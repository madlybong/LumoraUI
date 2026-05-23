<template>
  <LuPageHeader title="LuToast" description="A premium portal-rendered stack of transient toast notifications, supporting automated timeouts and semantic status variations." />

  <LuCodeBlock variant="preview" 
    title="Toast Notification Center" 
    description="Trigger beautiful, responsive toast alerts with varying levels of severity and custom duration timeouts."
    :code="toastCode"
  >
    <template #preview>
      <div class="flex flex-wrap gap-3">
        <LuButton variant="success" @click="showToast('success')">Success Toast</LuButton>
        <LuButton variant="info" @click="showToast('info')">Info Toast</LuButton>
        <LuButton variant="warning" @click="showToast('warning')">Warning Toast</LuButton>
        <LuButton variant="danger" @click="showToast('error')">Error Toast</LuButton>
        <LuButton variant="secondary" @click="clearAllToasts">Dismiss All</LuButton>
      </div>
      <!-- Global Toast mount point -->
      <LuToast />
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuToast, LuButton, useLuToast, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const { toast, dismissAll } = useLuToast();

const showToast = (variant: 'success' | 'error' | 'warning' | 'info') => {
  const titles = {
    success: 'Action Successful',
    info: 'System Update',
    warning: 'Low Disk Space',
    error: 'Execution Failed'
  };

  const descriptions = {
    success: 'The changes have been saved to your workspace.',
    info: 'A new patch release has been successfully downloaded.',
    warning: 'Your workspace allocation has reached 90% capacity.',
    error: 'Connection to endpoint terminated prematurely. Retrying...'
  };

  toast({
    title: titles[variant],
    description: descriptions[variant],
    variant,
    duration: 4000
  });
};

const clearAllToasts = () => {
  dismissAll();
};

const toastCode = `<template>
  <LuButton @click="notify">Show Notification</LuButton>
  
  <!-- Global mount point needed once in App root -->
  <LuToast />
</template>

<script setup lang="ts">
import { LuToast, LuButton, useLuToast } from '@astrake/lumora-ui';

const { toast } = useLuToast();

const notify = () => {
  toast({
    title: 'Deployment Started',
    description: 'Verifying container builds...',
    variant: 'info',
    duration: 4000
  });
};
<\/script>`;

const propsData = [
  { name: 'variant', type: 'string', default: 'undefined', description: 'Sets default global variant color configuration.' }
];
</script>
