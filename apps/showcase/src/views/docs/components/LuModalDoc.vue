<template>
  <LuCodeBlock variant="preview"
    title="Modal"
    description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-sm" variant="panel">
        <LuButton @click="isOpen = true">Open Modal</LuButton>

        <LuModal v-model="isOpen" title="Edit profile">
          <LuText variant="muted" class="mb-4">Make changes to your profile here. Click save when you're done.</LuText>
          <div class="space-y-4 py-4">
            <LuInput placeholder="Name" />
            <LuInput placeholder="Username" />
          </div>
          <template #footer>
            <LuButton variant="primary" @click="isOpen = false">Save changes</LuButton>
          </template>
        </LuModal>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCard, LuButton, LuModal, LuText, LuInput , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const isOpen = ref(false);

const code = `<script setup>
import { ref } from 'vue';
import { LuButton, LuModal, LuText, LuInput } from '@astrake/lumora-ui';

const isOpen = ref(false);
<\/script>

<template>
  <LuButton @click="isOpen = true">Open Modal</LuButton>

  <LuModal v-model="isOpen" title="Edit profile">
    <LuText variant="muted" class="mb-4">Make changes here.</LuText>
    <LuInput placeholder="Name" />
    
    <template #footer>
      <LuButton @click="isOpen = false">Save</LuButton>
    </template>
  </LuModal>
</template>`;

const propsList = [
  { name: 'modelValue', type: 'boolean', description: 'The controlled open state of the modal.' },
  { name: 'title', type: 'string', description: 'The title of the modal. Alternatively, use the #header slot.' },
  { name: 'closable', type: 'boolean', default: 'true', description: 'Whether to show the close button.' },
  { name: 'closeOnOverlayClick', type: 'boolean', default: 'true', description: 'Whether clicking the overlay closes the modal.' },
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map.' },
];
</script>
