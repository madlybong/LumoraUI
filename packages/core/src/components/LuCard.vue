<template>
  <component :is="as" v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = withDefaults(defineProps<{
  variant?: string;
  as?: string;
}>(), {
  as: "div"
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuCard", props.variant));
</script>
