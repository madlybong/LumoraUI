<template>
  <LuPageHeader title="LuBottomSheet" description="Bottom sheet overlay that slides up from screen bottom. Optimized for mobile, touch screens, and gestural drag-to-dismiss." />

  <LuCodeBlock variant="preview" 
    title="Draggable Bottom Sheet" 
    description="Drag handle downwards to dismiss or click backdrop to close."
    :code="sheetCode"
  >
    <template #preview>
      <LuStack direction="horizontal" class="gap-4">
        <LuButton @click="isOpen = true" variant="primary">Open Bottom Sheet</LuButton>
      </LuStack>

      <LuBottomSheet v-model="isOpen">
        <LuStack direction="vertical" class="gap-4 py-4">
          <LuText variant="body" class="font-bold text-center">Select Workspace</LuText>
          <LuText variant="caption" class="text-center">Choose the workspace where you want to apply edits.</LuText>
          
          <LuStack direction="vertical" class="gap-2 mt-4">
            <LuButton variant="ghost" class="justify-start gap-3 w-full" @click="isOpen = false">
              Personal Workspace
            </LuButton>
            <LuButton variant="ghost" class="justify-start gap-3 w-full" @click="isOpen = false">
              Astrake Inc. Enterprise
            </LuButton>
          </LuStack>
        </LuStack>
      </LuBottomSheet>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuBottomSheet, LuButton, LuStack, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const isOpen = ref(false);

const sheetCode = `<template>
  <LuButton @click="isOpen = true">Open Bottom Sheet</LuButton>

  <LuBottomSheet v-model="isOpen" :draggable="true">
    <h3>Workspaces</h3>
    <p>Choose your workspace.</p>
  </LuBottomSheet>
</template>

<script setup>
import { ref } from 'vue';
import { LuBottomSheet, LuButton } from '@astrake/lumora-ui';

const isOpen = ref(false);
<\/script>`;

const propsData = [
  { name: 'modelValue (v-model)', type: 'boolean', default: 'false', description: 'Controls open/closed state of the bottom sheet.' },
  { name: 'draggable', type: 'boolean', default: 'true', description: 'Enables swipe/drag downwards gestures on handle to dismiss sheet.' }
];
</script>
