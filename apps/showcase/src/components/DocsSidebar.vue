<template>
  <LuDesktopSidebar>
    <!-- Sticky header: search input -->
    <template #header>
      <DocsSearch />
    </template>

    <!-- Scrollable nav content -->
    <template #content>
      <LuAccordion variant="ghost" multiple v-model="openSections">
        <LuCollapsible 
          v-for="section in navTree" 
          :key="section.title" 
          :value="section.title"
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
            <LuList class="pb-2">
              <template v-for="item in section.items" :key="item.label">
                <LuListItem
                  v-if="item.external"
                  as="a"
                  :href="item.path"
                  target="_blank"
                  clickable
                  variant="nav"
                >
                  <template v-if="item.icon" #leading>
                    <LuIcon :name="item.icon" class="w-3.5 h-3.5" />
                  </template>
                  {{ item.label }}
                  <template #trailing>
                    <LuIcon name="arrow-up-right" class="w-3.5 h-3.5" />
                  </template>
                </LuListItem>
                <LuListItem
                  v-else
                  as="router-link"
                  :to="item.path!"
                  :active="route.path === item.path"
                  clickable
                  variant="nav"
                >
                  <template v-if="item.icon" #leading>
                    <LuIcon :name="item.icon" class="w-3.5 h-3.5 opacity-60" />
                  </template>
                  {{ item.label }}
                </LuListItem>
              </template>
            </LuList>
          </template>
        </LuCollapsible>
      </LuAccordion>
    </template>

    <!-- Sticky footer: version badge + GitHub link -->
    <template #footer>
      <LuStack direction="horizontal" align="center" justify="between" pad="0">
        <LuStack direction="horizontal" align="center" gap="2" pad="0">
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
import { LuDesktopSidebar, LuAccordion, LuCollapsible, LuList, LuListItem, LuIcon, LuText, LuBadge, LuStack, LuLink } from '@astrake/lumora-ui';
import { useRoute } from 'vue-router';
import { navTree } from '../composables/useNavTree';
import DocsSearch from './DocsSearch.vue';

const route = useRoute();

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '?.?.?';

const openSections = ref<string[]>([]);

navTree.forEach(section => {
  openSections.value.push(section.title);
});

watchEffect(() => {
  navTree.forEach(section => {
    if (section.items.some(item => item.path === route.path)) {
      if (!openSections.value.includes(section.title)) {
        openSections.value.push(section.title);
      }
    }
  });
});
</script>
