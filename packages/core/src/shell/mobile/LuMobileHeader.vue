<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot name="left" />
    <slot />
    <slot name="right" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../../context";

const props = defineProps<{ variant?: string }>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuMobileHeader", props.variant));
</script>
