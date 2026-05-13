<template>
  <LuDesktopShell>
    <template #topbar>
      <DocsTopBar />
    </template>
    
    <template #sidebar>
      <DocsSidebar />
    </template>

    <template #content>
      <LuScroll>
        <LuStack as="main" variant="container">
          <div class="flex flex-col gap-8 flex-1">
            <router-view />
          </div>
          <DocsPrevNext />
          <DocsFooter />
        </LuStack>
      </LuScroll>
    </template>
  </LuDesktopShell>
</template>

<script setup lang="ts">
import { LuDesktopShell, LuScroll, LuStack } from '@astrake/lumora-ui';
import DocsTopBar from '../components/DocsTopBar.vue';
import DocsSidebar from '../components/DocsSidebar.vue';
import DocsPrevNext from '../components/DocsPrevNext.vue';
import DocsFooter from '../components/DocsFooter.vue';
</script>
