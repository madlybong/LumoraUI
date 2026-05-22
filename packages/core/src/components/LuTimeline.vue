<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

defineOptions({ name: "LuTimeline" });

const { resolveSkin } = useLumoraConfig();
const skinTimeline = computed(() => resolveSkin("LuTimeline"));
</script>

<template>
  <div :class="skinTimeline" role="list">
    <slot />
  </div>
</template>
