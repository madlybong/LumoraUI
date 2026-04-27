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
          <p >This is the underlying content. It is obscured by the overlay.</p>
          
          <LuOverlay >
            <LuStack   >
              Loading...
            </LuStack>
          </LuOverlay>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
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
