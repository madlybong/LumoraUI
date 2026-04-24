<template>
  <tr v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string }>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuTableRow", props.variant));
</script>
