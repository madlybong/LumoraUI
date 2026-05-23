<template>
  <component :is="as" :class="listSkin">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = withDefaults(defineProps<{
  as?: string;
  variant?: string;
}>(), {
  as: "ul"
});

const { resolveSkin } = useLumoraConfig();
const listSkin = computed(() => resolveSkin("LuList", props.variant));
</script>
