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
  variant?: string;
  as?: string;
  padding?: string | number;
  width?: string;
  height?: string;
}>(), {
  as: "div"
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => cn(
  resolveSkin("LuCard", props.variant),
  resolveLayoutProps(props)
));
</script>
