<template>
  <LuSwitch
    :model-value="isDark"
    variant="theme"
    v-bind="$attrs"
    @update:model-value="onToggle"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import LuSwitch from "./LuSwitch.vue";
import { useTheme } from "../composables/useTheme";

const { resolved, setMode } = useTheme();

const isDark = computed(() => resolved.value === "dark");

const onToggle = (val: boolean) => {
  setMode(val ? "dark" : "light");
};
</script>
