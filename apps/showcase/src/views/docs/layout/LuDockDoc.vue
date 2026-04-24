<template>
  <LuPageHeader title="LuDock & LuDockItem" description="A layout primitive that docks child elements to the edges of the container. 
      The final item (which should not be a LuDockItem) fills the remaining center space.
      Equivalent to WPF's DockPanel." />

  <PreviewBlock 
    title="Basic Docking" 
    description="Items are docked to the edges in the order they appear in the DOM."
    :code="dockCode"
  >
    <template #preview>
      <PreviewFrame width="400px" height="300px" class="bg-white border border-zinc-200">
        <LuDock>
          <LuDockItem dock="top" class="bg-zinc-800 text-white p-2 text-center">Top Dock</LuDockItem>
          <LuDockItem dock="bottom" class="bg-zinc-800 text-white p-2 text-center">Bottom Dock</LuDockItem>
          <LuDockItem dock="left" class="bg-zinc-200 p-2 w-24">Left</LuDockItem>
          <LuDockItem dock="right" class="bg-zinc-200 p-2 w-24">Right</LuDockItem>
          <div class="bg-indigo-50 p-4 h-full flex items-center justify-center text-indigo-800 font-medium border-4 border-indigo-200 border-dashed">
            Fill (Remaining Space)
          </div>
        </LuDock>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <div class="mt-16">
    <h2 class="text-xl font-semibold mb-6">Props API</h2>
    <h3 class="text-lg font-medium mb-4">LuDockItem</h3>
    <PropTable :props-list="propsData" />
  </div>
</template>

<script setup lang="ts">
import { LuDock, LuDockItem, LuPageHeader } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const dockCode = `<LuDock>
  <LuDockItem dock="top" class="bg-zinc-800 p-2">Top</LuDockItem>
  <LuDockItem dock="bottom" class="bg-zinc-800 p-2">Bottom</LuDockItem>
  <LuDockItem dock="left" class="bg-zinc-200 p-2 w-24">Left</LuDockItem>
  <LuDockItem dock="right" class="bg-zinc-200 p-2 w-24">Right</LuDockItem>
  
  <!-- Content not wrapped in a LuDockItem fills the center -->
  <div class="bg-indigo-50 p-4 h-full">Fill</div>
</LuDock>`;

const propsData = [
  { name: 'dock', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'The edge to dock to.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
