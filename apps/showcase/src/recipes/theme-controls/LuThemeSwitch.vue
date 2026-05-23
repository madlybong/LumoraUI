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
import { LuSwitch } from '@astrake/lumora-ui';
import { useTheme } from '@astrake/lumora-ui/composables';

const { resolved, setMode } = useTheme();

const isDark = computed(() => resolved.value === "dark");

const onToggle = (val: boolean | null) => {
  setMode(val ? "dark" : "light");
};
</script>
