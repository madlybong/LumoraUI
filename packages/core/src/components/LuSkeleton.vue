<template>
  <div :class="resolvedSkin" aria-hidden="true" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuSkeleton", props.variant));
</script>
