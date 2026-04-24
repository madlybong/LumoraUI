<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuFixed", props.variant));
</script>
