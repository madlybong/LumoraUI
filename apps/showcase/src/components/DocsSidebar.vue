<template>
  <LuDesktopSidebar>
    <!-- Sticky header: search input -->
    <template #header>
      <DocsSearch />
    </template>

    <!-- Scrollable nav content -->
    <template #content>
      <LuStack direction="vertical" gap="4">
        <LuCollapsible 
          v-for="section in navTree" 
          :key="section.title" 
          v-model="openStates[section.title]"
          
        >
          <template #trigger="{ isOpen }">
            <LuStack direction="horizontal" align="center" justify="between" width="full" padding="2">
              <LuText 
                variant="label" class="uppercase text-xs tracking-wider">
                {{ section.title }}
              </LuText>
              <LuIcon 
                name="chevron-down"
              />
            </LuStack>
          </template>
          <template #content>
            <LuStack direction="vertical" gap="2" padding="2">
              <template v-for="item in section.items" :key="item.label">
                <LuLink 
                  v-if="item.external" 
                  :href="item.path" 
                  target="_blank"
                  
                >
                  {{ item.label }}
                  <LuIcon name="arrow-up-right" />
                </LuLink>
                <LuLink 
                  v-else 
                  :to="item.path!" 
                  :variant="route.path === item.path ? 'nav-active' : 'nav'"
                >
                  {{ item.label }}
                </LuLink>
              </template>
            </LuStack>
          </template>
        </LuCollapsible>
      </LuStack>
    </template>

    <!-- Sticky footer: version badge + GitHub link -->
    <template #footer>
      <LuStack direction="horizontal" align="center" justify="between">
        <LuStack direction="horizontal" align="center" gap="2">
          <LuIcon name="layout-grid" />
          <LuText as="span" variant="default">LumoraUI</LuText>
          <LuBadge variant="default">v{{ version }}</LuBadge>
        </LuStack>
        <LuLink href="https://github.com/madlybong/lumora-ui" target="_blank" variant="brand">
          <LuIcon name="github" />
        </LuLink>
      </LuStack>
    </template>
  </LuDesktopSidebar>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { LuDesktopSidebar, LuCollapsible, LuIcon, LuText, LuBadge, LuStack, LuLink } from '@astrake/lumora-ui';
import { useRoute } from 'vue-router';
import { navTree } from '../composables/useNavTree';
import DocsSearch from './DocsSearch.vue';

const route = useRoute();

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.1.0';

const openStates = ref<Record<string, boolean>>({});

navTree.forEach(section => {
  openStates.value[section.title] = true;
});

watchEffect(() => {
  navTree.forEach(section => {
    if (section.items.some(item => item.path === route.path)) {
      openStates.value[section.title] = true;
    }
  });
});
</script>
