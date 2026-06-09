<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuEmbeddedPOSLayout" });

const props = withDefaults(defineProps<{
  layout?: "2col" | "3col";
}>(), {
  layout: "2col",
});
const skinLayout = computed(() => `sc-pos-layout ${props.layout ? "sc-pos-layout--"+props.layout : ""}`.trim());
</script>

<template>
  <div :class="skinLayout">
    <template v-if="$slots.scanner || $slots.items || $slots.summary || $slots.payment || $slots.sidebar">
      <!-- 3col Sidebar -->
      <div v-if="layout === '3col'" class="flex flex-col h-full overflow-hidden border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shrink-0">
        <slot name="sidebar" />
      </div>
      <!-- Center/Main Column -->
      <div class="flex flex-col h-full overflow-hidden border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div v-if="$slots.scanner" class="p-4 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
          <slot name="scanner" />
        </div>
        <div class="flex-1 overflow-hidden relative">
          <slot name="items" />
        </div>
      </div>
      <!-- Right Summary Column -->
      <div class="flex flex-col h-full overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/30">
        <div class="flex-1 overflow-y-auto">
          <slot name="summary" />
        </div>
        <div v-if="$slots.payment" class="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shrink-0">
          <slot name="payment" />
        </div>
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>
