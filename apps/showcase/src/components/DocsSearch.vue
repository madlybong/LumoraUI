<template>
  <div class="relative w-full" ref="searchContainer">
    <LuStack direction="horizontal" class="relative items-center">
      <LuIcon name="search" class="absolute left-2.5 w-4 h-4 text-zinc-400" />
      <LuInput 
        v-model="query"
        variant="docs-search" 
        placeholder="Search documentation..." 
        @focus="isFocused = true"
      />
    </LuStack>

    <!-- Dropdown Results -->
    <LuCard 
      v-if="isFocused && query.length > 0" 
      variant="search-results"
    >
      <div v-if="results.length === 0" class="px-4 py-6 text-center text-sm text-zinc-500">
        No results found for "<LuText as="span" class="text-zinc-900 dark:text-zinc-100 font-medium">{{ query }}</LuText>"
      </div>
      <LuStack v-else direction="vertical" class="py-2">
        <template v-for="result in results" :key="result.item.path || result.item.label">
          <LuLink 
            v-if="!result.item.external && result.item.path"
            :to="result.item.path"
            class="flex flex-col px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
            @click="selectItem"
          >
            <LuText variant="search-section">{{ result.section }}</LuText>
            <LuText variant="search-label">{{ result.item.label }}</LuText>
          </LuLink>
          <LuLink 
            v-else-if="result.item.external && result.item.path"
            :href="result.item.path"
            target="_blank"
            class="flex flex-col px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer"
            @click="selectItem"
          >
            <LuText variant="search-section">{{ result.section }} <LuIcon name="arrow-up-right" class="inline w-3 h-3" /></LuText>
            <LuText variant="search-label">{{ result.item.label }}</LuText>
          </LuLink>
        </template>
      </LuStack>
    </LuCard>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { LuInput, LuIcon, LuStack, LuCard, LuLink, LuText } from '@astrake/lumora-ui';
import { useNavTree } from '../composables/useNavTree';

const { navTree } = useNavTree();
const query = ref('');
const isFocused = ref(false);
const searchContainer = ref<HTMLElement | null>(null);

// Flatten the tree for searching
const searchableItems = computed(() => {
  const items: Array<{ section: string; item: any }> = [];
  navTree.forEach(section => {
    section.items.forEach(item => {
      items.push({ section: section.title, item });
    });
  });
  return items;
});

const results = computed(() => {
  if (!query.value.trim()) return [];
  const q = query.value.toLowerCase();
  
  return searchableItems.value.filter(entry => 
    entry.item.label.toLowerCase().includes(q) || 
    entry.section.toLowerCase().includes(q)
  );
});

const selectItem = () => {
  query.value = '';
  isFocused.value = false;
};

// Handle clicking outside to close
const handleClickOutside = (event: MouseEvent) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target as Node)) {
    isFocused.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>
