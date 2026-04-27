<template>
  <LuToggleGroup v-model="themeStore.mode">
    <LuToggleButton
      v-for="mode in modes"
      :key="mode.value"
      :value="mode.value"
      :aria-label="mode.label"
    >
      <LuIcon :name="mode.icon" />
    </LuToggleButton>
  </LuToggleGroup>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LuIcon, LuToggleGroup, LuToggleButton } from '@astrake/lumora-ui';
import { useThemeStore } from '../stores/useThemeStore';

const themeStore = useThemeStore();

const modes = [
  { value: 'light', label: 'Light Theme', icon: 'sun' },
  { value: 'system', label: 'System Theme', icon: 'monitor' },
  { value: 'dark', label: 'Dark Theme', icon: 'moon' }
] as const;

</script>
