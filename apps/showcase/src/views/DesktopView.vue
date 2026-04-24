<template>
  <LuDesktopShell>
    <template #topbar>
      <LuDesktopTopBar>
        <div class="font-semibold text-lg">LumoraUI Desktop</div>
        <div class="ml-auto">
          <LuButton variant="primary">Save</LuButton>
        </div>
      </LuDesktopTopBar>
    </template>
    
    <template #rail>
      <LuDesktopRailBar :expand-on-hover="true">
        <LuDesktopRailItem :active="true">
          <template #icon>
            <LuIcon class="w-5 h-5 bg-blue-500 rounded-sm" />
          </template>
          Dashboard
        </LuDesktopRailItem>
        <LuDesktopRailItem>
          <template #icon>
            <LuIcon class="w-5 h-5 bg-gray-400 rounded-sm" />
          </template>
          Settings
        </LuDesktopRailItem>
      </LuDesktopRailBar>
    </template>

    <template #sidebar>
      <LuDesktopSidebar class="w-64 p-4">
        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Projects</h3>
        <ul class="space-y-1">
          <li class="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Lumora Server</li>
          <li class="text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded cursor-pointer font-medium bg-gray-100">Lumora UI</li>
        </ul>
      </LuDesktopSidebar>
    </template>

    <template #content>
      <LuSplit direction="horizontal" class="h-full w-full">
        <LuSplitPane :default-size="300" class="border-r border-gray-200 bg-white p-4">
          <h2 class="text-lg font-medium mb-4">Files</h2>
          <LuInput placeholder="Search..." class="mb-4" />
          <LuStack direction="vertical" class="space-y-2">
            <div class="text-sm p-2 bg-blue-50 text-blue-700 rounded border border-blue-200">LuDesktopShell.vue</div>
            <div class="text-sm p-2 hover:bg-gray-50 rounded cursor-pointer">LuButton.vue</div>
          </LuStack>
        </LuSplitPane>
        <LuSplitResizer />
        <LuSplitPane class="bg-gray-50 p-8 overflow-y-auto">
          <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 class="text-2xl font-bold mb-4">Desktop View</h1>
            <p class="text-gray-600 mb-6">This demonstrates the desktop shell layout with a rail bar, sidebar, and a resizable split pane.</p>
            <LuStack direction="horizontal" class="gap-4">
              <LuButton variant="primary">Action</LuButton>
              <LuButton variant="secondary">Secondary</LuButton>
              <LuButton variant="danger">Delete</LuButton>
            </LuStack>
          </div>
        </LuSplitPane>
      </LuSplit>
    </template>

    <template #statusbar>
      <LuDesktopStatusBar>
        <span>Ready</span>
        <span class="ml-auto flex gap-4">
          <span>UTF-8</span>
          <span>Vue</span>
        </span>
      </LuDesktopStatusBar>
    </template>
  </LuDesktopShell>
</template>

<script setup lang="ts">
import { 
  LuDesktopShell, LuDesktopTopBar, LuDesktopRailBar, LuDesktopRailItem, 
  LuDesktopSidebar, LuDesktopStatusBar, LuSplit, LuSplitPane, LuSplitResizer,
  LuButton, LuInput, LuStack, LuIcon
} from '@astrake/lumora-ui';
</script>
