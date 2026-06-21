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
        <LuContainer as="main">
          <div class="sc-docs-content-wrapper">
            <router-view />
          </div>
          <DocsPrevNext />
          <DocsFooter />
        </LuContainer>
      </LuScroll>
    </template>
  </LuDesktopShell>
</template>

<script setup lang="ts">
import { LuDesktopShell, LuScroll, LuContainer } from '@astrake/lumora-ui';
import DocsTopBar from '../components/DocsTopBar.vue';
import DocsSidebar from '../components/DocsSidebar.vue';
import DocsPrevNext from '../components/DocsPrevNext.vue';
import DocsFooter from '../components/DocsFooter.vue';
</script>
