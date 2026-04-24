<template>
  <LuStack direction="horizontal" class="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 items-center justify-between gap-4">
    <LuLink 
      v-if="prev" 
      :to="prev.path!" 
      class="flex flex-col items-start w-full sm:w-1/2 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 hover:bg-violet-50/30 dark:hover:bg-violet-500/5 transition-all group"
    >
      <LuText as="span" class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
        <LuIcon name="arrow-left" class="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
        Previous
      </LuText>
      <LuText as="span" class="font-medium text-violet-700 dark:text-violet-400">{{ prev.label }}</LuText>
    </LuLink>
    <LuFill v-else class="hidden sm:block sm:w-1/2" />

    <LuLink 
      v-if="next" 
      :to="next.path!" 
      class="flex flex-col items-end text-right w-full sm:w-1/2 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 hover:bg-violet-50/30 dark:hover:bg-violet-500/5 transition-all group"
    >
      <LuText as="span" class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1 flex items-center gap-1.5 uppercase tracking-wider">
        Next
        <LuIcon name="arrow-right" class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </LuText>
      <LuText as="span" class="font-medium text-violet-700 dark:text-violet-400">{{ next.label }}</LuText>
    </LuLink>
    <LuFill v-else class="hidden sm:block sm:w-1/2" />
  </LuStack>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { LuIcon, LuStack, LuLink, LuText, LuFill } from '@astrake/lumora-ui';
import { useNavTree } from '../composables/useNavTree';

const route = useRoute();
const { getPrevNext } = useNavTree();

const neighbors = computed(() => getPrevNext(route.path));
const prev = computed(() => neighbors.value.prev);
const next = computed(() => neighbors.value.next);
</script>
