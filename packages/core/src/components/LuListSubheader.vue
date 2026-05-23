<template>
  <li :class="subheaderSkin">
    <slot>{{ label }}</slot>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  label?: string;
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const subheaderSkin = computed(() => resolveSkin("LuListSubheader", props.variant));
</script>
