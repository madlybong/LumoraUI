<template>
  <LuDesktopSidebar>
    <!-- Sticky header: search input -->
    <template #header>
      <DocsSearch />
    </template>

    <!-- Scrollable nav content -->
    <template #content>
      <LuStack direction="vertical" class="space-y-4">
        <LuCollapsible 
          v-for="section in navTree" 
          :key="section.title" 
          v-model="openStates[section.title]"
          class="w-full"
        >
          <template #trigger="{ isOpen }">
            <LuStack direction="horizontal" class="items-center justify-between w-full mb-1 px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-md cursor-pointer transition-colors group">
              <LuText 
                variant="section-header"
                :class="{ '!text-indigo-600 dark:!text-indigo-400': section.items.some(i => i.path === route.path) }"
              >
                {{ section.title }}
              </LuText>
              <LuIcon 
                name="chevron-down"
                class="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 transition-transform duration-200 group-hover:text-zinc-600 dark:group-hover:text-zinc-300" 
                :class="{ '-rotate-90': !isOpen }"
              />
            </LuStack>
          </template>
          <template #content>
            <LuStack direction="vertical" class="mt-0.5 border-l ml-3 border-zinc-200 dark:border-zinc-800 space-y-0.5">
              <template v-for="item in section.items" :key="item.label">
                <LuLink 
                  v-if="item.external" 
                  :href="item.path" 
                  target="_blank"
                  class="flex items-center gap-1.5 -ml-px pl-3 pr-2 py-1.5 border-l-2 border-transparent text-[13px] font-medium text-zinc-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  {{ item.label }}
                  <LuIcon name="arrow-up-right" class="w-3 h-3 opacity-60" />
                </LuLink>
                <LuLink 
                  v-else 
                  :to="item.path!" 
                  class="block -ml-px pl-3 py-1.5 border-l-2 text-[13px] font-medium transition-colors duration-150"
                  :class="[
                    route.path === item.path 
                      ? 'border-violet-500 bg-violet-50/60 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400' 
                      : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30'
                  ]"
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
      <LuStack direction="horizontal" class="items-center justify-between">
        <LuStack direction="horizontal" class="items-center gap-2">
          <LuIcon name="layout-grid" class="w-4 h-4 text-indigo-500" />
          <LuText as="span" class="text-xs font-semibold text-zinc-700 dark:text-zinc-300">LumoraUI</LuText>
          <LuBadge variant="docs-version">v{{ version }}</LuBadge>
        </LuStack>
        <LuLink href="https://github.com/madlybong/lumora-ui" target="_blank" class="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors">
          <LuIcon name="github" class="w-4 h-4" />
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
