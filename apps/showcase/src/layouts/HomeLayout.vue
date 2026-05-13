<template>
  <LuDesktopShell>
    <template #topbar>
      <DocsTopBar />
    </template>
    <template #content>
      <LuScroll>
        <router-view />
      </LuScroll>
    </template>
  </LuDesktopShell>
</template>

<script setup lang="ts">
import { LuDesktopShell, LuScroll } from '@astrake/lumora-ui';
import DocsTopBar from '../components/DocsTopBar.vue';
</script>
