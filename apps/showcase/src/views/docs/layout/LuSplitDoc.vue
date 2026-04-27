<template>
  <LuPageHeader title="LuSplit" description="A resizable split container. Equivalent to Windows Forms' SplitContainer." />

  <LuCodeBlock variant="preview" 
    title="Horizontal Split" 
    description="Divides space horizontally. The left pane has a default size, and the right pane flexes to fill."
    :code="splitCode"
  >
    <template #preview>
      <PreviewFrame width="500px" height="250px" >
        <LuSplit direction="horizontal" >
          <LuSplitPane :default-size="150" >
            Fixed Pane (150px)
          </LuSplitPane>
          <LuSplitResizer />
          <LuSplitPane >
            Flexible Pane (Fill)
          </LuSplitPane>
        </LuSplit>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuStack   >
    <h2 >Props API</h2>
    
    <h3 >LuSplit</h3>
    <PropTable :props-list="splitProps"  />
    
    <h3 >LuSplitPane</h3>
    <PropTable :props-list="paneProps" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuSplit, LuSplitPane, LuSplitResizer, LuPageHeader, LuStack , LuCodeBlock } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const splitCode = `<LuSplit direction="horizontal" >
  <LuSplitPane :default-size="150" >
    Fixed Pane (150px)
  </LuSplitPane>
  
  <LuSplitResizer />
  
  <LuSplitPane >
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
