<template>
  <component :is="as" v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
import { resolveLayoutProps, cn } from "../utils";

const props = withDefaults(defineProps<{
  direction?: "vertical" | "horizontal";
  variant?: string;
  as?: string;
  gap?: string | number;
  padding?: string | number;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}>(), {
  as: 'div'
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => cn(
  resolveSkin("LuStack", props.direction ?? props.variant),
  resolveLayoutProps(props)
));
</script>
