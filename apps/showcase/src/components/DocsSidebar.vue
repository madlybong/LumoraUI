<template>
  <LuDesktopSidebar>
    <!-- Sticky header: search input -->
    <template #header>
      <DocsSearch />
    </template>

    <!-- Scrollable nav content -->
    <template #content>
      <LuStack direction="vertical" class="gap-1">
        <LuCollapsible 
          v-for="section in navTree" 
          :key="section.title" 
          v-model="openStates[section.title]"
        >
          <template #trigger="{ isOpen }">
            <LuIcon v-if="section.icon" :name="section.icon" class="w-3 h-3 text-zinc-400 dark:text-zinc-500 shrink-0" />
            <LuText variant="label">{{ section.title }}</LuText>
            <LuIcon
              name="chevron-down"
              class="w-3.5 h-3.5 ml-auto text-zinc-400 transition-transform duration-200"
              :class="{ 'rotate-180': isOpen }"
            />
          </template>
          <template #content>
            <LuStack direction="vertical" class="gap-0.5 pb-2">
              <template v-for="item in section.items" :key="item.label">
                <LuLink
                  v-if="item.external"
                  :href="item.path"
                  target="_blank"
                  variant="nav"
                >
                  <LuIcon v-if="item.icon" :name="item.icon" class="w-3.5 h-3.5 shrink-0" />
                  {{ item.label }}
                  <LuIcon name="arrow-up-right" />
                </LuLink>
                <LuLink
                  v-else
                  :to="item.path!"
                  :variant="route.path === item.path ? 'nav-active' : 'nav'"
                >
                  <LuIcon v-if="item.icon" :name="item.icon" class="w-3.5 h-3.5 shrink-0 opacity-60" />
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
