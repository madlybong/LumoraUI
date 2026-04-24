<template>
  <LuPageHeader title="LuSplit" description="A resizable split container. Equivalent to Windows Forms' SplitContainer." />

  <PreviewBlock 
    title="Horizontal Split" 
    description="Divides space horizontally. The left pane has a default size, and the right pane flexes to fill."
    :code="splitCode"
  >
    <template #preview>
      <PreviewFrame width="500px" height="250px" class="bg-white border border-zinc-200">
        <LuSplit direction="horizontal" class="h-full w-full">
          <LuSplitPane :default-size="150" class="bg-indigo-50 p-4 border-r border-indigo-200">
            Fixed Pane (150px)
          </LuSplitPane>
          <LuSplitResizer />
          <LuSplitPane class="bg-zinc-50 p-4">
            Flexible Pane (Fill)
          </LuSplitPane>
        </LuSplit>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <div class="mt-16">
    <h2 class="text-xl font-semibold mb-6">Props API</h2>
    
    <h3 class="text-lg font-medium mb-4">LuSplit</h3>
    <PropTable :props-list="splitProps" class="mb-8" />
    
    <h3 class="text-lg font-medium mb-4">LuSplitPane</h3>
    <PropTable :props-list="paneProps" />
  </div>
</template>

<script setup lang="ts">
import { LuSplit, LuSplitPane, LuSplitResizer, LuPageHeader } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const splitCode = `<LuSplit direction="horizontal" class="h-full w-full">
  <LuSplitPane :default-size="150" class="bg-indigo-50">
    Fixed Pane (150px)
  </LuSplitPane>
  
  <LuSplitResizer />
  
  <LuSplitPane class="bg-zinc-50">
    Flexible Pane (Fill)
  </LuSplitPane>
</LuSplit>`;

const splitProps = [
  { name: 'direction', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The split direction.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];

const paneProps = [
  { name: 'defaultSize', type: 'number', description: 'The initial fixed size of the pane in pixels. If omitted, the pane flexes to fill available space.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
