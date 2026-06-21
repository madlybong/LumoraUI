<template>
  <LuStack direction="vertical" ref="searchContainer" class="relative" :pad="0">
    <LuInput 
      v-model="query"
      variant="default" 
      placeholder="Search documentation..."
      prepend-icon="search"
      @focus="isFocused = true"
      @keydown.escape="isFocused = false"
    />

    <!-- Dropdown Results -->
    <div
      v-if="isFocused && query.length > 0"
      class="absolute top-full left-0 right-0 mt-1.5 z-50 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
    >
      <!-- No results -->
      <div v-if="results.length === 0" class="px-4 py-3 text-sm text-zinc-500 dark:text-zinc-400">
        No results for "<span class="font-medium text-zinc-900 dark:text-zinc-100">{{ query }}</span>"
      </div>

      <!-- Result list -->
      <ul v-else class="max-h-72 overflow-y-auto p-1.5 flex flex-col gap-0.5">
        <li v-for="result in results" :key="result.item.path || result.item.label">
          <component
            :is="result.item.path && !result.item.external ? 'RouterLink' : 'a'"
            v-bind="result.item.external ? { href: result.item.path, target: '_blank' } : { to: result.item.path }"
            class="flex flex-col gap-0.5 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 group"
            @click="selectItem"
          >
            <span class="text-[11px] font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-400">
              {{ result.section }}
            </span>
            <span class="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 flex items-center gap-1">
              {{ result.item.label }}
              <LuIcon v-if="result.item.external" name="arrow-up-right" class="w-3 h-3 opacity-60" />
            </span>
          </component>
        </li>
      </ul>
    </div>
  </LuStack>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { LuInput, LuIcon, LuStack } from '@astrake/lumora-ui';
import { useNavTree } from '../composables/useNavTree';

const { navTree } = useNavTree();
const query = ref('');
const isFocused = ref(false);
const searchContainer = ref<{ $el: HTMLElement } | null>(null);

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
  if (searchContainer.value && !searchContainer.value.$el.contains(event.target as Node)) {
    isFocused.value = false;
  }
};

onMounted(() => { document.addEventListener('mousedown', handleClickOutside); });
onUnmounted(() => { document.removeEventListener('mousedown', handleClickOutside); });
</script>
