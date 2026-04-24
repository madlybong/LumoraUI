<template>
  <LuDesktopShell>
    <template #topbar>
      <DocsTopBar />
    </template>
    
    <template #sidebar>
      <DocsSidebar />
    </template>

    <template #content>
      <LuScroll class="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-200">
        <main class="max-w-4xl mx-auto w-full p-8 md:p-12 lg:p-16 min-h-full flex flex-col">
          <div class="flex-1">
            <router-view />
          </div>
          <DocsPrevNext />
          <DocsFooter />
        </main>
      </LuScroll>
    </template>
  </LuDesktopShell>
</template>

<script setup lang="ts">
import { LuDesktopShell, LuScroll } from '@astrake/lumora-ui';
import DocsTopBar from '../components/DocsTopBar.vue';
import DocsSidebar from '../components/DocsSidebar.vue';
import DocsPrevNext from '../components/DocsPrevNext.vue';
import DocsFooter from '../components/DocsFooter.vue';
</script>
