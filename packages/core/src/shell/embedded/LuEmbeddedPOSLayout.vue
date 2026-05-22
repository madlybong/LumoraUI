<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../../context";

defineOptions({ name: "LuEmbeddedPOSLayout" });

const props = withDefaults(defineProps<{
  layout?: "2col" | "3col";
}>(), {
  layout: "2col",
});

const { resolveSkin } = useLumoraConfig();
const skinLayout = computed(() => resolveSkin("LuEmbeddedPOSLayout", props.layout));
</script>

<template>
  <div :class="skinLayout">
    <slot />
  </div>
</template>
