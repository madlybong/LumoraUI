<template>
  <LuPageHeader title="LuOverlay" description="A container that absolutely positions itself to fill its closest relative parent. Useful for modals, dialogs, or loading states." />

  <LuCodeBlock variant="preview" 
    title="Loading Overlay" 
    description="Placing an overlay over a relative container."
    :code="exampleCode"
  >
    <template #preview>
      <PreviewFrame width="400px" height="200px" >
        <LuStack   >
          <LuText as="p" variant="body">This is the underlying content. It is obscured by the overlay.</LuText>
          
          <LuOverlay >
            <LuStack   >
              Loading...
            </LuStack>
          </LuOverlay>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuOverlay, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuStack   >
  <p>Content goes here</p>
  
  <LuOverlay >
    <LuStack   >
      Loading...
    </LuStack>
  </LuOverlay>
</LuStack>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
