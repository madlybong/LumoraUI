<template>
  <component :is="as ?? 'span'" v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
  as?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuText", props.variant));
</script>
