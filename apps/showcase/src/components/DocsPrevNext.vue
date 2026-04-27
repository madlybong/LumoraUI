<template>
  <LuStack direction="horizontal" justify="between" gap="4">
    <LuCard v-if="prev" as="div" variant="panel" class="flex-1 flex">
      <LuLink :to="prev.path!" variant="nav" class="flex flex-col items-start gap-1 p-4 w-full h-full">
        <LuText as="span" variant="muted" class="flex items-center gap-1 text-sm">
          <LuIcon name="arrow-left" class="h-4 w-4" />
          Previous
        </LuText>
        <LuText as="span" variant="default" class="font-medium">{{ prev.label }}</LuText>
      </LuLink>
    </LuCard>
    <div v-else class="flex-1"></div>

    <LuCard v-if="next" as="div" variant="panel" class="flex-1 flex text-right">
      <LuLink :to="next.path!" variant="nav" class="flex flex-col items-end gap-1 p-4 w-full h-full">
        <LuText as="span" variant="muted" class="flex items-center justify-end gap-1 text-sm">
          Next
          <LuIcon name="arrow-right" class="h-4 w-4" />
        </LuText>
        <LuText as="span" variant="default" class="font-medium">{{ next.label }}</LuText>
      </LuLink>
    </LuCard>
    <div v-else class="flex-1"></div>
  </LuStack>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { LuIcon, LuStack, LuLink, LuText, LuCard } from '@astrake/lumora-ui';
import { useNavTree } from '../composables/useNavTree';

const route = useRoute();
const { getPrevNext } = useNavTree();

const neighbors = computed(() => getPrevNext(route.path));
const prev = computed(() => neighbors.value.prev);
const next = computed(() => neighbors.value.next);
</script>
