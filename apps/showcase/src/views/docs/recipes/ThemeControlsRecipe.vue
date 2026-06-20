<template>
  <LuPageHeader title="Theme Controls Recipe" description="Pre-wired components that integrate directly with the LumoraUI theme system to toggle between light and dark modes." />

  <LuCodeBlock variant="preview" 
    title="LuThemeSwitch" 
    description="A simple toggle switch that toggles the global theme."
    :code="switchCode"
  >
    <template #preview>
      <LuStack pad="0">
        <LuText as="span">Dark Mode</LuText>
        <LuThemeSwitch />
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="LuThemeSelect" 
    description="A dropdown select that allows choosing light, dark, or system preference."
    :code="selectCode"
  >
    <template #preview>
      <LuStack pad="0">
        <LuThemeSelect />
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuText as="p" variant="body">Both components accept a <code>variant</code> prop for skinning. They do not require a <code>v-model</code> as they manage state internally via the theme context.</LuText>
</template>

<script setup lang="ts">
import LuThemeSwitch from '../../../recipes/theme-controls/LuThemeSwitch.vue';
import LuThemeSelect from '../../../recipes/theme-controls/LuThemeSelect.vue';
import { LuCodeBlock, LuText, LuStack } from '@astrake/lumora-ui';

const switchCode = `<template>
  <LuStack pad="0">
    <LuText as="span">Dark Mode</LuText>
    <LuThemeSwitch />
  </LuStack>
</template>`;

const selectCode = `<template>
  <LuThemeSelect />
</template>`;
</script>
