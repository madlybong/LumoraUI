<template>
  <LuPageHeader title="Theme Controls" description="Pre-wired components that integrate directly with the LumoraUI theme system to toggle between light and dark modes." />

  <LuCodeBlock variant="preview" 
    title="LuThemeSwitch" 
    description="A simple toggle switch that toggles the global theme."
    :code="switchCode"
  >
    <template #preview>
      <LuStack   >
        <LuText as="span" >Dark Mode</LuText>
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
      <LuStack   >
        <LuThemeSelect />
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack   >
    <h2 >Props API</h2>
    <p >Both components accept a <code>variant</code> prop for skinning. They do not require a <code>v-model</code> as they manage state internally via the theme context.</p>
  </LuStack>
</template>

<script setup lang="ts">
import { LuThemeSwitch, LuThemeSelect, LuPageHeader, LuCodeBlock, LuText, LuStack } from '@astrake/lumora-ui';

const switchCode = `<template>
  <LuStack   >
    <LuText as="span" >Dark Mode</LuText>
    <LuThemeSwitch />
  </LuStack>
</template>`;

const selectCode = `<template>
  <LuThemeSelect />
</template>`;
</script>
