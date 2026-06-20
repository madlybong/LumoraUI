<template>
  <LuPageHeader title="LuOverlay" description="A container that absolutely positions itself to fill its closest relative parent. Useful for modals, dialogs, or loading states." />

  <LuCodeBlock variant="preview" 
    title="Interactive Loading State" 
    description="Display a loading spinner overlay over a card. The parent container must have relative positioning."
    :code="loadingCode"
  >
    <template #preview>
      <LuStack direction="vertical" gap="4" align="start" style="width: 100%;">
        <LuButton variant="outline" @click="isLoading = !isLoading">
          Toggle Loading State ({{ isLoading ? 'Active' : 'Inactive' }})
        </LuButton>
        <PreviewFrame width="350px" height="200px" >
          <!-- The card itself has relative position so the overlay fills it -->
          <LuCard style="position: relative; width: 100%; height: 100%; padding: var(--lu-space-4);">
            <LuStack direction="vertical" gap="2" style="width: 100%;">
              <LuText style="font-weight: 600;">System Dashboard</LuText>
              <LuText variant="muted">This is some simulated dashboard data that will be locked and obscured while the loading state overlay is active.</LuText>
              <LuText variant="muted">Toggle the button above to test the interactive state.</LuText>
            </LuStack>
            
            <LuOverlay v-if="isLoading" style="background: color-mix(in srgb, var(--lu-color-surface) 90%, transparent); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center;">
              <LuStack direction="vertical" gap="2" align="center" justify="center">
                <LuSpinner variant="primary" />
                <LuText style="font-weight: 500;">Loading Data...</LuText>
              </LuStack>
            </LuOverlay>
          </LuCard>
        </PreviewFrame>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Confirmation Guard" 
    description="Overlay a confirmation action block over a resource list to prevent accidental deletions."
    :code="confirmationCode"
  >
    <template #preview>
      <PreviewFrame width="350px" height="250px" >
        <LuCard style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: var(--lu-space-4);">
          <LuStack direction="vertical" gap="2" style="width: 100%;">
            <LuText style="font-weight: 600;">System Files</LuText>
            <LuList>
              <LuListItem>file_01.dat (12MB)</LuListItem>
              <LuListItem>file_02.dat (80MB)</LuListItem>
              <LuListItem>file_03.dat (5MB)</LuListItem>
            </LuList>
          </LuStack>
          <LuButton variant="danger" style="width: 100%; margin-top: var(--lu-space-3);" @click="showConfirm = true">
            Clear All Files
          </LuButton>
          
          <LuOverlay v-if="showConfirm" style="background: color-mix(in srgb, var(--lu-color-surface) 90%, transparent); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; padding: var(--lu-space-4);">
            <LuCard style="width: 100%; padding: var(--lu-space-4); display: flex; flex-direction: column; gap: var(--lu-space-3); border: 1px solid var(--lu-color-border);">
              <LuText style="font-weight: 600;">Are you sure?</LuText>
              <LuText variant="muted" style="font-size: var(--lu-text-xs);">This action will permanently delete all listed files.</LuText>
              <LuStack direction="horizontal" gap="2" justify="end">
                <LuButton variant="ghost" size="sm" @click="showConfirm = false">Cancel</LuButton>
                <LuButton variant="danger" size="sm" @click="showConfirm = false">Delete</LuButton>
              </LuStack>
            </LuCard>
          </LuOverlay>
        </LuCard>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <PropTable title="LuOverlay Props" :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuOverlay, LuStack, LuText, LuCodeBlock, LuButton, LuSpinner, LuCard, LuList, LuListItem } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const isLoading = ref(false);
const showConfirm = ref(false);

const loadingCode = `<LuButton variant="outline" @click="isLoading = !isLoading">Toggle Loading State</LuButton>

<!-- Parent must have style="position: relative;" -->
<LuCard style="position: relative; width: 100%; height: 200px;">
  <LuStack direction="vertical" gap="2">
    <LuText style="font-weight: 600;">System Dashboard</LuText>
    <LuText variant="muted">Dashboard data goes here...</LuText>
  </LuStack>
  
  <LuOverlay v-if="isLoading" style="background: color-mix(in srgb, var(--lu-color-surface) 90%, transparent); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center;">
    <LuStack direction="vertical" gap="2" align="center" justify="center">
      <LuSpinner variant="primary" />
      <LuText style="font-weight: 500;">Loading Data...</LuText>
    </LuStack>
  </LuOverlay>
</LuCard>`;

const confirmationCode = `<!-- Parent must have style="position: relative;" -->
<LuCard style="position: relative; width: 100%; height: 250px;">
  <LuStack direction="vertical" gap="2">
    <LuText style="font-weight: 600;">System Files</LuText>
    <LuList>
      <LuListItem>file_01.dat (12MB)</LuListItem>
      <LuListItem>file_02.dat (80MB)</LuListItem>
    </LuList>
  </LuStack>
  <LuButton variant="danger" @click="showConfirm = true">Clear All Files</LuButton>
  
  <LuOverlay v-if="showConfirm" style="background: color-mix(in srgb, var(--lu-color-surface) 90%, transparent); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; padding: var(--lu-space-4);">
    <LuCard style="width: 100%; padding: var(--lu-space-4); display: flex; flex-direction: column; gap: var(--lu-space-3); border: 1px solid var(--lu-color-border);">
      <LuText style="font-weight: 600;">Are you sure?</LuText>
      <LuText variant="muted" style="font-size: var(--lu-text-xs);">This action will permanently delete all listed files.</LuText>
      <LuStack direction="horizontal" gap="2" justify="end">
        <LuButton variant="ghost" size="sm" @click="showConfirm = false">Cancel</LuButton>
        <LuButton variant="danger" size="sm" @click="showConfirm = false">Delete</LuButton>
      </LuStack>
    </LuCard>
  </LuOverlay>
</LuCard>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
  { name: '⚠️ Warning', type: 'note', description: 'Parent container MUST have style="position: relative;" (or position: relative class) for the overlay to bound correctly.' }
];
</script>
