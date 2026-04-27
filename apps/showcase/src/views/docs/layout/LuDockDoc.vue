<template>
  <LuPageHeader title="LuDock & LuDockItem" description="A layout primitive that docks child elements to the edges of the container. 
      The final item (which should not be a LuDockItem) fills the remaining center space.
      Equivalent to WPF's DockPanel." />

  <LuCodeBlock variant="preview" 
    title="Basic Docking" 
    description="Items are docked to the edges in the order they appear in the DOM."
    :code="dockCode"
  >
    <template #preview>
      <PreviewFrame width="400px" height="300px" >
        <LuDock>
          <LuDockItem dock="top" >Top Dock</LuDockItem>
          <LuDockItem dock="bottom" >Bottom Dock</LuDockItem>
          <LuDockItem dock="left" >Left</LuDockItem>
          <LuDockItem dock="right" >Right</LuDockItem>
          <LuStack   >
            Fill (Remaining Space)
          </LuStack>
        </LuDock>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuStack   >
    <h2 >Props API</h2>
    <h3 >LuDockItem</h3>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuDock, LuDockItem, LuPageHeader, LuCodeBlock, LuStack } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const dockCode = `<LuDock>
  <LuDockItem dock="top" >Top</LuDockItem>
  <LuDockItem dock="bottom" >Bottom</LuDockItem>
  <LuDockItem dock="left" >Left</LuDockItem>
  <LuDockItem dock="right" >Right</LuDockItem>
  
  <!-- Content not wrapped in a LuDockItem fills the center -->
  <LuStack   >Fill</LuStack>
</LuDock>`;

const propsData = [
  { name: 'dock', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'The edge to dock to.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
