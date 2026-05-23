<script setup lang="ts">
import { computed, provide } from "vue";
import { useLumoraConfig } from "../context";

defineOptions({ name: "LuTimeline" });

const props = withDefaults(defineProps<{
  variant?: 'default' | 'compact' | 'numbered';
}>(), {
  variant: 'default',
});

// Provide the variant to all child LuTimelineItem components
provide("LuTimelineVariant", computed(() => props.variant));

const { resolveSkin } = useLumoraConfig();
const skinTimeline = computed(() => resolveSkin("LuTimeline", props.variant));
</script>

<template>
  <div :class="skinTimeline" role="list">
    <slot />
  </div>
</template>
