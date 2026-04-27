<template>
  <LuStack direction="vertical" ref="searchContainer">
    <LuInput 
      v-model="query"
      variant="default" 
      placeholder="Search documentation..." 
      @focus="isFocused = true"
    >
      <template #prepend>
        <LuIcon name="search" class="w-4 h-4" />
      </template>
    </LuInput>

    <!-- Dropdown Results -->
    <LuCard 
      v-if="isFocused && query.length > 0" 
      variant="default"
    >
      <LuStack direction="horizontal" v-if="results.length === 0" >
        No results found for "<LuText as="span" >{{ query }}</LuText>"
      </LuStack>
      <LuStack v-else direction="vertical" >
        <template v-for="result in results" :key="result.item.path || result.item.label">
          <LuLink 
            v-if="!result.item.external && result.item.path"
            :to="result.item.path"
            
            @click="selectItem"
          >
            <LuText variant="default">{{ result.section }}</LuText>
            <LuText variant="default">{{ result.item.label }}</LuText>
          </LuLink>
          <LuLink 
            v-else-if="result.item.external && result.item.path"
            :href="result.item.path"
            target="_blank"
            
            @click="selectItem"
          >
            <LuText variant="default">{{ result.section }} <LuIcon name="arrow-up-right"  /></LuText>
            <LuText variant="default">{{ result.item.label }}</LuText>
          </LuLink>
        </template>
      </LuStack>
    </LuCard>
  </LuStack>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { LuInput, LuIcon, LuStack, LuCard, LuLink, LuText } from '@astrake/lumora-ui';
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

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>
