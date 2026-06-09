<script setup lang="ts">
import { computed, provide } from "vue";


defineOptions({ name: "LuTimeline" });

const props = withDefaults(defineProps<{
  variant?: 'default' | 'compact' | 'numbered';
}>(), {
  variant: 'default',
});

// Provide the variant to all child LuTimelineItem components
provide("LuTimelineVariant", computed(() => props.variant));

const skinTimeline = computed(() => `lu-timeline ${props.variant && props.variant !== 'default' ? 'lu-timeline--'+props.variant : ''}`.trim());
</script>

<template>
  <div :class="skinTimeline" role="list">
    <slot />
  </div>
</template>
