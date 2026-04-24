<template>
  <LuPageHeader title="Desktop Shell" description="A comprehensive application shell designed for desktop web applications, featuring topbars, rails, sidebars, and status bars." />

  <PreviewBlock 
    title="Anatomy" 
    description="The shell provides 5 named slots: topbar, rail, sidebar, content, and statusbar."
    :code="exampleCode"
  >
    <template #preview>
      <PreviewFrame width="800px" height="600px" :scale="0.6">
        <div class="w-full h-full border-4 border-zinc-200 dark:border-zinc-800 rounded overflow-hidden shadow-xl">
          <iframe src="/demo/desktop" class="w-full h-full border-0 pointer-events-none"></iframe>
        </div>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <div class="mt-8 flex justify-center">
    <a href="/demo/desktop" target="_blank" class="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium text-sm hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
      Open Live Demo
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </a>
  </div>

  <div class="mt-16">
    <h2 class="text-xl font-semibold mb-6 dark:text-white">Components in this Shell</h2>
    <ul class="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
      <li><code>LuDesktopShell</code> — The root container defining the CSS Grid/Flex layout</li>
      <li><code>LuDesktopTopBar</code> — The horizontal header</li>
      <li><code>LuDesktopRailBar</code> — The collapsible mini-sidebar for primary navigation</li>
      <li><code>LuDesktopRailItem</code> — Items within the rail bar</li>
      <li><code>LuDesktopSidebar</code> — The secondary navigation/context sidebar</li>
      <li><code>LuDesktopStatusBar</code> — The bottom footer area</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { LuPageHeader } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';

const exampleCode = `<LuDesktopShell>
  <template #topbar>
    <LuDesktopTopBar>...</LuDesktopTopBar>
  </template>
  
  <template #rail>
    <LuDesktopRailBar>
      <LuDesktopRailItem>...</LuDesktopRailItem>
    </LuDesktopRailBar>
  </template>

  <template #sidebar>
    <LuDesktopSidebar>...</LuDesktopSidebar>
  </template>

  <template #content>
    <main>Main application content goes here</main>
  </template>
  
  <template #statusbar>
    <LuDesktopStatusBar>...</LuDesktopStatusBar>
  </template>
</LuDesktopShell>`;
</script>
