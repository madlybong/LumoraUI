<template>
  <LuPageHeader title="Embedded Shell" description="An application shell built for embedded screens, kiosks, and vehicle HMIs. Prevents text selection, touch-action, and enforces a fixed dark-mode layout." />

  <PreviewBlock 
    title="Anatomy" 
    description="The shell provides 3 named slots: topbar, content, and bottombar."
    :code="exampleCode"
  >
    <template #preview>
      <PreviewFrame width="800px" height="480px" :scale="0.6">
        <div class="w-full h-full border-[12px] border-zinc-900 rounded-xl overflow-hidden shadow-2xl mx-auto bg-black">
          <iframe src="/demo/embedded" class="w-full h-full border-0 pointer-events-none"></iframe>
        </div>
      </PreviewFrame>
    </template>
  </PreviewBlock>

  <div class="mt-8 flex justify-center">
    <a href="/demo/embedded" target="_blank" class="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium text-sm hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
      Open Live Demo
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
    </a>
  </div>

  <div class="mt-16">
    <h2 class="text-xl font-semibold mb-6 dark:text-white">Components in this Shell</h2>
    <ul class="list-disc pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
      <li><code>LuEmbeddedShell</code> — The root container. By default, its skin applies <code>touch-none select-none</code> to prevent native browser behaviors on embedded touchscreens.</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { LuPageHeader } from '@astrake/lumora-ui';
import PreviewBlock from '../../../components/PreviewBlock.vue';
import PreviewFrame from '../../../components/PreviewFrame.vue';

const exampleCode = `<LuEmbeddedShell>
  <template #topbar>
    <header class="h-16 bg-zinc-900 border-b border-zinc-800">
      <!-- Status icons, time, etc -->
    </header>
  </template>

  <template #content>
    <main class="bg-black">
      <!-- Dashboard panels -->
    </main>
  </template>
  
  <template #bottombar>
    <footer class="h-20 bg-zinc-900 border-t border-zinc-800">
      <!-- Media controls, HVAC, etc -->
    </footer>
  </template>
</LuEmbeddedShell>`;
</script>
