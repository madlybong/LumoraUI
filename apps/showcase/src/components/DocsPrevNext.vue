<template>
  <LuStack direction="horizontal" justify="between" gap="4">
    <!-- Previous -->
    <LuButton
      v-if="prev"
      variant="secondary"
      :to="prev.path!"
      class="flex-1 h-auto py-3 px-4 flex flex-col items-start gap-0.5 whitespace-normal text-left"
    >
      <LuStack direction="horizontal" align="center" gap="1" class="text-xs opacity-60 font-normal">
        <LuIcon name="arrow-left" class="h-3.5 w-3.5" />
        Previous
      </LuStack>
      <span class="text-sm font-semibold">{{ prev.label }}</span>
    </LuButton>
    <div v-else class="flex-1" />

    <!-- Next -->
    <LuButton
      v-if="next"
      variant="secondary"
      :to="next.path!"
      class="flex-1 h-auto py-3 px-4 flex flex-col items-end gap-0.5 whitespace-normal text-right"
    >
      <LuStack direction="horizontal" align="center" gap="1" class="text-xs opacity-60 font-normal">
        Next
        <LuIcon name="arrow-right" class="h-3.5 w-3.5" />
      </LuStack>
      <span class="text-sm font-semibold">{{ next.label }}</span>
    </LuButton>
    <div v-else class="flex-1" />
  </LuStack>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { LuIcon, LuStack, LuButton } from '@astrake/lumora-ui';
import { useNavTree } from '../composables/useNavTree';

const route = useRoute();
const { getPrevNext } = useNavTree();

const neighbors = computed(() => getPrevNext(route.path));
const prev = computed(() => neighbors.value.prev);
const next = computed(() => neighbors.value.next);
</script>
