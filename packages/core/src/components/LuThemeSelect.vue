<template>
  <LuSelect
    :model-value="mode"
    variant="theme"
    :options="options"
    v-bind="$attrs"
    @update:model-value="onChange"
  />
</template>

<script setup lang="ts">
import LuSelect from "./LuSelect.vue";
import { useTheme, type ThemeMode } from "../composables/useTheme";

const { mode, setMode } = useTheme();

const options = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

const onChange = (val: string | number) => {
  setMode(val as ThemeMode);
};
</script>
