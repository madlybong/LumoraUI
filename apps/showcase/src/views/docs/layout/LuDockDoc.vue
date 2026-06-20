<template>
  <LuPageHeader title="LuDock & LuDockItem" description="A layout primitive that docks child elements to the edges of the container. The final item fills the remaining center space. Equivalent to WPF's DockPanel." />

  <LuCodeBlock variant="preview" 
    title="Full App Chrome Layout" 
    description="Docks a top navbar, left sidebar, bottom statusbar, and fills the center space with scrolling cards."
    :code="appChromeCode"
  >
    <template #preview>
      <PreviewFrame width="100%" height="400px" >
        <LuDock class="sc-layout-demo" style="width: 100%; height: 100%;">
          <!-- Top navbar -->
          <LuDockItem dock="top" class="sc-layout-demo-top">
            <LuStack direction="horizontal" gap="4" align="center" justify="between" style="width: 100%;">
              <LuStack direction="horizontal" gap="2" align="center">
                <LuBadge variant="primary">App</LuBadge>
                <LuText style="font-weight: 600;">Console UI</LuText>
              </LuStack>
              <LuStack direction="horizontal" gap="2">
                <LuButton variant="ghost" size="sm">Docs</LuButton>
                <LuButton variant="ghost" size="sm">Settings</LuButton>
              </LuStack>
            </LuStack>
          </LuDockItem>
          
          <!-- Left sidebar nav -->
          <LuDockItem dock="left" class="sc-layout-demo-nav" style="width: 160px;">
            <LuStack direction="vertical" gap="1" style="width: 100%;">
              <LuButton variant="ghost" style="justify-content: flex-start;">Dashboard</LuButton>
              <LuButton variant="ghost" style="justify-content: flex-start;">Analytics</LuButton>
              <LuButton variant="ghost" style="justify-content: flex-start;">Users</LuButton>
              <LuButton variant="ghost" style="justify-content: flex-start;">Settings</LuButton>
            </LuStack>
          </LuDockItem>
          
          <!-- Bottom statusbar -->
          <LuDockItem dock="bottom" class="sc-layout-demo-bottom">
            <LuStack direction="horizontal" gap="2" justify="between" style="width: 100%;">
              <LuText variant="muted" style="font-size: var(--lu-text-xs);">Status: Ready</LuText>
              <LuText variant="muted" style="font-size: var(--lu-text-xs);">v0.8.0</LuText>
            </LuStack>
          </LuDockItem>
          
          <!-- Fill area with Scroll and Content -->
          <LuStack style="padding: var(--lu-space-4); height: 100%; width: 100%;">
            <LuScroll>
              <LuStack direction="vertical" gap="3" style="width: 100%;">
                <LuCard v-for="i in 6" :key="i">
                  <LuStack direction="vertical" gap="2">
                    <LuStack direction="horizontal" justify="between" align="center">
                      <LuText style="font-weight: 600;">System Report #{{ i }}</LuText>
                      <LuBadge variant="outline">Active</LuBadge>
                    </LuStack>
                    <LuText variant="muted">This is a dummy log line or report summary indicating that the dock layout successfully nests scrolling content inside its main fill panel.</LuText>
                  </LuStack>
                </LuCard>
              </LuStack>
            </LuScroll>
          </LuStack>
        </LuDock>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Toolbar & Content Layout" 
    description="A simple vertical docking arrangement featuring a fixed top toolbar and a fill scroll area."
    :code="toolbarCode"
  >
    <template #preview>
      <PreviewFrame width="100%" height="300px" >
        <LuDock class="sc-layout-demo" style="width: 100%; height: 250px;">
          <!-- Top Toolbar -->
          <LuDockItem dock="top" class="sc-layout-demo-top">
            <LuStack direction="horizontal" gap="4" align="center" justify="between" style="width: 100%;">
              <LuText style="font-weight: 600;">Toolbar Title</LuText>
              <LuButton variant="primary" size="sm">Create Item</LuButton>
            </LuStack>
          </LuDockItem>
          
          <!-- Fill Area -->
          <LuStack style="padding: var(--lu-space-4); height: 100%; width: 100%;">
            <LuScroll>
              <LuStack direction="vertical" gap="3" style="width: 100%;">
                <LuCard v-for="i in 3" :key="i">
                  <LuText>Basic item scroll preview line {{ i }}</LuText>
                </LuCard>
              </LuStack>
            </LuScroll>
          </LuStack>
        </LuDock>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <PropTable title="LuDockItem Props" :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuDock, LuDockItem, LuCodeBlock, LuStack, LuText, LuCard, LuBadge, LuButton, LuScroll } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const appChromeCode = `<LuDock>
  <!-- Top navbar -->
  <LuDockItem dock="top">
    <LuStack direction="horizontal" gap="4" align="center" justify="between">
      <LuStack direction="horizontal" gap="2" align="center">
        <LuBadge variant="primary">App</LuBadge>
        <LuText style="font-weight: 600;">Console UI</LuText>
      </LuStack>
      <LuStack direction="horizontal" gap="2">
        <LuButton variant="ghost" size="sm">Docs</LuButton>
        <LuButton variant="ghost" size="sm">Settings</LuButton>
      </LuStack>
    </LuStack>
  </LuDockItem>
  
  <!-- Left sidebar nav -->
  <LuDockItem dock="left" style="width: 160px;">
    <LuStack direction="vertical" gap="1">
      <LuButton variant="ghost" style="justify-content: flex-start;">Dashboard</LuButton>
      <LuButton variant="ghost" style="justify-content: flex-start;">Analytics</LuButton>
      <LuButton variant="ghost" style="justify-content: flex-start;">Users</LuButton>
      <LuButton variant="ghost" style="justify-content: flex-start;">Settings</LuButton>
    </LuStack>
  </LuDockItem>
  
  <!-- Bottom statusbar -->
  <LuDockItem dock="bottom">
    <LuStack direction="horizontal" gap="2" justify="between">
      <LuText variant="muted" style="font-size: var(--lu-text-xs);">Status: Ready</LuText>
      <LuText variant="muted" style="font-size: var(--lu-text-xs);">v0.8.0</LuText>
    </LuStack>
  </LuDockItem>
  
  <!-- Fill area -->
  <LuStack style="padding: var(--lu-space-4); height: 100%;">
    <LuScroll>
      <LuStack direction="vertical" gap="3">
        <LuCard v-for="i in 6" :key="i">
          <!-- Content -->
        </LuCard>
      </LuStack>
    </LuScroll>
  </LuStack>
</LuDock>`;

const toolbarCode = `<LuDock>
  <!-- Top Toolbar -->
  <LuDockItem dock="top">
    <LuStack direction="horizontal" gap="4" align="center" justify="between">
      <LuText style="font-weight: 600;">Toolbar Title</LuText>
      <LuButton variant="primary" size="sm">Create Item</LuButton>
    </LuStack>
  </LuDockItem>
  
  <!-- Fill Area -->
  <LuStack style="padding: var(--lu-space-4); height: 100%;">
    <LuScroll>
      <LuStack direction="vertical" gap="3">
        <LuCard v-for="i in 3" :key="i">
          <LuText>Basic item scroll preview line {{ i }}</LuText>
        </LuCard>
      </LuStack>
    </LuScroll>
  </LuStack>
</LuDock>`;

const propsData = [
  { name: 'dock', type: '"top" | "bottom" | "left" | "right" | "fill"', default: '"left"', description: 'The edge to dock to. When "fill" is used or if the item is not wrapped in LuDockItem, it fills the remaining center space.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
