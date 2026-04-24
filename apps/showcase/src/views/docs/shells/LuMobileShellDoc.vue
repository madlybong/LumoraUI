<template>
  <LuPageHeader title="Mobile Shell" description="An application shell tailored for mobile devices and PWAs, featuring top headers, bottom navigation bars, and safe-area insets." />

  <PreviewBlock 
    title="Anatomy" 
    description="The shell provides 4 named slots: header, content, navbar, and drawer."
    :code="exampleCode"
  >
    <template #preview>
      <PreviewFrame width="375px" height="812px" :scale="0.5">
        <div class="w-[375px] h-[812px] bg-white dark:bg-zinc-950 rounded-[2.5rem] border-[8px] border-zinc-900 overflow-hidden shadow-xl mx-auto">
          <iframe src="/demo/mobile" class="w-full h-full border-0 pointer-events-none"></iframe>
        </div>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <div class="mt-8 flex justify-center">
    <a href="/demo/mobile" target="_blank" class="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium text-sm hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
      Open Live Demo
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </a>
  </div>

  <div class="mt-16">
    <h2 class="text-xl font-semibold mb-6 dark:text-white">Components in this Shell</h2>
    <ul class="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
      <li><code>LuMobileShell</code> — The root container that handles safe-area padding</li>
      <li><code>LuMobileHeader</code> — The top app bar</li>
      <li><code>LuMobileNavBar</code> — The bottom tab navigation bar</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { LuPageHeader } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';

const exampleCode = `<LuMobileShell>
  <template #header>
    <LuMobileHeader>
      <span>App Title</span>
    </LuMobileHeader>
  </template>

  <template #content>
    <main>Scrollable main content goes here</main>
  </template>
  
  <template #navbar>
    <LuMobileNavBar>
      <!-- Bottom tab buttons -->
    </LuMobileNavBar>
  </template>
  
  <template #drawer>
    <!-- Slide-over drawer menu if needed -->
  </template>
</LuMobileShell>`;
</script>
