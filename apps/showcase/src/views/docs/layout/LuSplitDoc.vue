<template>
  <LuPageHeader title="LuSplit" description="A resizable split container. Equivalent to Windows Forms' SplitContainer." />

  <LuCodeBlock variant="preview" 
    title="Horizontal Split (Explorer Layout)" 
    description="Divides space horizontally. The left pane has a default size, and the right pane flexes to fill. Includes a drag resizer."
    :code="horizontalSplitCode"
  >
    <template #preview>
      <PreviewFrame width="100%" height="300px" >
        <LuSplit direction="horizontal" class="sc-layout-demo" style="width: 100%; height: 100%;">
          <LuSplitPane :default-size="220" style="border-right: 1px solid var(--lu-color-border);">
            <LuList style="padding-top: var(--lu-space-2);">
              <LuText style="font-weight: 600; padding: var(--lu-space-2) var(--lu-space-4);">Explorer</LuText>
              <LuListItem clickable>index.ts</LuListItem>
              <LuListItem clickable>LuSplit.vue</LuListItem>
              <LuListItem clickable>LuSplitPane.vue</LuListItem>
              <LuListItem clickable>LuSplitResizer.vue</LuListItem>
              <LuListItem clickable>styles.css</LuListItem>
            </LuList>
          </LuSplitPane>
          
          <LuSplitResizer />
          
          <LuSplitPane style="padding: var(--lu-space-4); height: 100%;">
            <LuScroll>
              <LuStack direction="vertical" gap="3" pad="0" style="width: 100%;">
                <LuCard v-for="i in 3" :key="i">
                  <LuStack direction="vertical" gap="2" pad="0">
                    <LuText style="font-weight: 600;">Code File Documentation Part {{ i }}</LuText>
                    <LuText variant="muted">This panel demonstrates a resizable flexible pane filling up the remaining area. You can hover and drag the resizer line to change dimensions.</LuText>
                  </LuStack>
                </LuCard>
              </LuStack>
            </LuScroll>
          </LuSplitPane>
        </LuSplit>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Vertical Split (Master-Detail)" 
    description="Divides space vertically. The top pane displays high-level stats, and the bottom pane shows a scrolling list of details."
    :code="verticalSplitCode"
  >
    <template #preview>
      <PreviewFrame width="100%" height="400px" >
        <LuSplit direction="vertical" class="sc-layout-demo" style="width: 100%; height: 100%;">
          <LuSplitPane :default-size="120" style="padding: var(--lu-space-4); border-bottom: 1px solid var(--lu-color-border); overflow: hidden;">
            <LuCard style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; padding: var(--lu-space-3);">
              <LuStack direction="vertical" gap="1" pad="0">
                <LuText style="font-weight: 600;">System Overview</LuText>
                <LuText variant="muted" style="font-size: var(--lu-text-xs);">Total health score: 98%</LuText>
              </LuStack>
              <LuBadge variant="success">All Systems Nominal</LuBadge>
            </LuCard>
          </LuSplitPane>
          <LuSplitResizer />
          <LuSplitPane style="padding: var(--lu-space-4); height: 100%;">
            <LuScroll>
              <LuStack direction="vertical" gap="3" pad="0" style="width: 100%;">
                <LuCard v-for="i in 5" :key="i">
                  <LuStack direction="horizontal" justify="between" align="center" pad="0" style="width: 100%;">
                    <LuText>Job Detail Log #{{ i }}</LuText>
                    <LuBadge variant="outline">Completed</LuBadge>
                  </LuStack>
                </LuCard>
              </LuStack>
            </LuScroll>
          </LuSplitPane>
        </LuSplit>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <PropTable title="LuSplit Props" :props-list="splitProps" />
  <PropTable title="LuSplitPane Props" :props-list="paneProps" />
  <PropTable title="LuSplitResizer Props" :props-list="resizerProps" />
</template>

<script setup lang="ts">
import { LuSplit, LuSplitPane, LuSplitResizer, LuStack, LuCodeBlock, LuText, LuButton, LuScroll, LuCard, LuBadge, LuList, LuListItem } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const horizontalSplitCode = `<LuSplit direction="horizontal">
  <LuSplitPane :default-size="220">
    <LuList style="padding-top: var(--lu-space-2);">
      <LuText style="font-weight: 600; padding: var(--lu-space-2) var(--lu-space-4);">Explorer</LuText>
      <LuListItem clickable>index.ts</LuListItem>
      <!-- ... -->
    </LuList>
  </LuSplitPane>
  
  <LuSplitResizer />
  
  <LuSplitPane style="padding: var(--lu-space-4);">
    <LuScroll>
      <LuStack direction="vertical" gap="3" pad="0">
        <LuCard v-for="i in 3" :key="i">
          <LuText style="font-weight: 600;">Code File Part {{ i }}</LuText>
        </LuCard>
      </LuStack>
    </LuScroll>
  </LuSplitPane>
</LuSplit>`;

const verticalSplitCode = `<LuSplit direction="vertical">
  <LuSplitPane :default-size="120" style="padding: var(--lu-space-4);">
    <LuCard>
      <LuStack direction="vertical" gap="1" pad="0">
        <LuText style="font-weight: 600;">System Overview</LuText>
      </LuStack>
    </LuCard>
  </LuSplitPane>
  
  <LuSplitResizer />
  
  <LuSplitPane style="padding: var(--lu-space-4);">
    <LuScroll>
      <LuStack direction="vertical" gap="3" pad="0">
        <LuCard v-for="i in 5" :key="i">
          <!-- Content -->
        </LuCard>
      </LuStack>
    </LuScroll>
  </LuSplitPane>
</LuSplit>`;

const splitProps = [
  { name: 'direction', type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'The split direction.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];

const paneProps = [
  { name: 'defaultSize', type: 'number', description: 'The initial fixed size of the pane in pixels. If omitted, the pane flexes to fill available space.' },
  { name: 'minSize', type: 'number', description: 'Minimum size limit for resizing.' },
  { name: 'maxSize', type: 'number', description: 'Maximum size limit for resizing.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];

const resizerProps = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' }
];
</script>
