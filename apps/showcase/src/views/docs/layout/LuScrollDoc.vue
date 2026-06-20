<template>
  <LuPageHeader title="LuScroll" description="A container that handles overflow by providing a scrollable area." />

  <LuCodeBlock variant="preview" 
    title="Vertical Scroll" 
    description="The default variant provides vertical scrolling for lists of content."
    :code="verticalCode"
  >
    <template #preview>
      <PreviewFrame width="350px" height="250px" >
        <LuScroll style="width: 100%; height: 100%; padding: var(--lu-space-4);">
          <LuStack direction="vertical" gap="3" style="width: 100%;">
            <LuCard v-for="i in 6" :key="i">
              <LuStack direction="horizontal" justify="between" align="center" pad="0">
                <LuText style="font-weight: 600;">Message {{ i }}</LuText>
                <LuBadge variant="primary">New</LuBadge>
              </LuStack>
              <LuText variant="muted" style="margin-top: var(--lu-space-1);">Detailed info card inside a vertical scroll container.</LuText>
            </LuCard>
          </LuStack>
        </LuScroll>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Horizontal Scroll" 
    description="Use variant='horizontal' for horizontal scrolling of card carousels."
    :code="horizontalCode"
  >
    <template #preview>
      <PreviewFrame width="400px" height="200px" >
        <LuScroll variant="horizontal" style="width: 100%; height: 100%; padding: var(--lu-space-4);">
          <LuStack direction="horizontal" gap="4" pad="0">
            <LuCard v-for="i in 6" :key="i" style="width: 180px; flex-shrink: 0;">
              <LuText style="font-weight: 600;">Section {{ i }}</LuText>
              <LuText variant="muted" style="font-size: var(--lu-text-xs); margin-top: var(--lu-space-2);">Scrollable horizontally.</LuText>
            </LuCard>
          </LuStack>
        </LuScroll>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Bounded Scroll inside a Layout Container" 
    description="A canonical real-world pattern where a LuScroll fills a bounded layout container like a LuDock panel."
    :code="boundedCode"
  >
    <template #preview>
      <PreviewFrame width="100%" height="300px" >
        <LuDock class="sc-layout-demo" style="width: 100%; height: 100%;">
          <LuDockItem dock="top" class="sc-layout-demo-top">
            <LuStack direction="horizontal" align="center" justify="between" style="width: 100%;" pad="0">
              <LuText style="font-weight: 600;">Workspace Files</LuText>
              <LuBadge variant="outline">Project A</LuBadge>
            </LuStack>
          </LuDockItem>
          
          <LuScroll style="padding: var(--lu-space-4);">
            <LuStack direction="vertical" gap="3" style="width: 100%;" pad="0">
              <LuCard v-for="i in 5" :key="i">
                <LuText style="font-weight: 600;">Document_{{ i }}.pdf</LuText>
                <LuText variant="muted" style="font-size: var(--lu-text-xs);">Last updated 2 hours ago</LuText>
              </LuCard>
            </LuStack>
          </LuScroll>
        </LuDock>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuScroll, LuStack, LuText, LuCodeBlock, LuCard, LuBadge, LuDock, LuDockItem } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const verticalCode = `<LuScroll>
  <LuStack direction="vertical" gap="3">
    <LuCard v-for="i in 6" :key="i">
      <LuStack direction="horizontal" justify="between" align="center" pad="0">
        <LuText style="font-weight: 600;">Message {{ i }}</LuText>
        <LuBadge variant="primary">New</LuBadge>
      </LuStack>
      <LuText variant="muted" style="margin-top: var(--lu-space-1);">Detailed info card inside a vertical scroll container.</LuText>
    </LuCard>
  </LuStack>
</LuScroll>`;

const horizontalCode = `<LuScroll variant="horizontal">
  <LuStack direction="horizontal" gap="4" pad="0">
    <LuCard v-for="i in 6" :key="i" style="width: 180px; flex-shrink: 0;">
      <LuText style="font-weight: 600;">Section {{ i }}</LuText>
      <LuText variant="muted" style="font-size: var(--lu-text-xs); margin-top: var(--lu-space-2);">Scrollable horizontally.</LuText>
    </LuCard>
  </LuStack>
</LuScroll>`;

const boundedCode = `<LuDock class="sc-layout-demo" style="width: 100%; height: 100%;">
  <LuDockItem dock="top" class="sc-layout-demo-top">
    <LuStack direction="horizontal" align="center" justify="between" style="width: 100%;" pad="0">
      <LuText style="font-weight: 600;">Workspace Files</LuText>
      <LuBadge variant="outline">Project A</LuBadge>
    </LuStack>
  </LuDockItem>
  
  <LuScroll style="padding: var(--lu-space-4);">
    <LuStack direction="vertical" gap="3" style="width: 100%;" pad="0">
      <LuCard v-for="i in 5" :key="i">
        <LuText style="font-weight: 600;">Document_{{ i }}.pdf</LuText>
        <LuText variant="muted" style="font-size: var(--lu-text-xs);">Last updated 2 hours ago</LuText>
      </LuCard>
    </LuStack>
  </LuScroll>
</LuDock>`;

const propsData = [
  { name: 'variant', type: '"default" | "horizontal"', default: '"default"', description: 'The scroll direction variant. "horizontal" sets overflow-x: auto and overflow-y: hidden.' },
];
</script>
