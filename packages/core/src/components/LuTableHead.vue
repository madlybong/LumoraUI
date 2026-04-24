<template>
  <thead v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </thead>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string }>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuTableHead", props.variant));
</script>
