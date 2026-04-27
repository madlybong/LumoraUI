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
        <LuStack as="main" variant="container" padding="8">
          <LuFill>
            <router-view />
          </LuFill>
          <DocsPrevNext />
          <DocsFooter />
        </LuStack>
      </LuScroll>
    </template>
  </LuDesktopShell>
</template>

<script setup lang="ts">
import { LuDesktopShell, LuScroll, LuStack, LuFill } from '@astrake/lumora-ui';
import DocsTopBar from '../components/DocsTopBar.vue';
import DocsSidebar from '../components/DocsSidebar.vue';
import DocsPrevNext from '../components/DocsPrevNext.vue';
import DocsFooter from '../components/DocsFooter.vue';
</script>
