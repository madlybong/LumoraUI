<template>
  <div v-bind="$attrs" :class="[resolvedSkin, isExpanded ? expandedSkin : '']" @mouseenter="onHover(true)" @mouseleave="onHover(false)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { useLumoraConfig } from "../../context";

const props = defineProps<{ variant?: string; expanded?: boolean; expandOnHover?: boolean }>();

const hovered = ref(false);
const isExpanded = computed(() => props.expanded || (props.expandOnHover && hovered.value));

const onHover = (val: boolean) => {
  hovered.value = val;
};

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuDesktopRailBar", props.variant));
const expandedSkin = computed(() => resolveSkin("LuDesktopRailBar", "expanded"));
</script>
