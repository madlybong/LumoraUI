<template>
  <LuPageHeader title="LuDrawer" description="Sliding panel that overlays or pushes screen content. Supports left, right, top, and bottom positions." />

  <LuCodeBlock variant="preview" 
    title="Basic Drawer" 
    description="Toggle overlay panel sliding in from the right."
    :code="drawerCode"
  >
    <template #preview>
      <LuStack direction="horizontal" class="gap-4">
        <LuButton @click="isOpen = true" variant="primary">Open Drawer</LuButton>
      </LuStack>

      <LuDrawer v-model="isOpen" position="right">
        <template #header>
          <div class="flex items-center justify-between w-full">
            <LuText variant="body" class="font-bold">Settings Panel</LuText>
            <LuButton @click="isOpen = false" size="sm" variant="ghost">Close</LuButton>
          </div>
        </template>
        
        <LuStack direction="vertical" class="gap-4">
          <LuText variant="body">Configure your drawer options and manage workspace settings here.</LuText>
        </LuStack>

        <template #footer>
          <LuStack direction="horizontal" class="justify-end gap-2 w-full">
            <LuButton @click="isOpen = false" variant="ghost">Cancel</LuButton>
            <LuButton @click="isOpen = false" variant="primary">Save</LuButton>
          </LuStack>
        </template>
      </LuDrawer>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuDrawer, LuButton, LuStack, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const isOpen = ref(false);

const drawerCode = `<template>
  <LuButton @click="isOpen = true">Open Drawer</LuButton>

  <LuDrawer v-model="isOpen" position="right">
    <template #header>
      <h3>Settings</h3>
    </template>
    
    <p>Drawer Content</p>

    <template #footer>
      <LuButton @click="isOpen = false">Close</LuButton>
    </template>
  </LuDrawer>
</template>

<script setup>
import { ref } from 'vue';
import { LuDrawer, LuButton } from '@astrake/lumora-ui';

const isOpen = ref(false);
<\/script>`;

const propsData = [
  { name: 'modelValue (v-model)', type: 'boolean', default: 'false', description: 'Controls open/closed state of the drawer.' },
  { name: 'position', type: "'left' | 'right' | 'top' | 'bottom'", default: "'right'", description: 'Direction the drawer slides in from.' },
  { name: 'mode', type: "'overlay' | 'push'", default: "'overlay'", description: 'Transition mode for rendering.' },
  { name: 'closeOnOutsideClick', type: 'boolean', default: 'true', description: 'Closes drawer when clicking the backdrop overlay.' }
];
</script>
