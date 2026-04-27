<template>
  <LuStack direction="vertical" gap="8">
    <LuPageHeader title="Getting Started" description="Lumora UI is a structural layout and component framework for Vue 3. It provides durable layout primitives and application shells that use standard Tailwind CSS v4 out of the box. You can easily extend or override the default styling using the reactive Skin engine." />

    <LuStack direction="vertical" gap="4">
      <LuText as="h2" variant="section-title">1. Installation</LuText>
      <LuCodeBlock :code="installCode" lang="bash" />
    </LuStack>

    <LuStack direction="vertical" gap="4">
      <LuText as="h2" variant="section-title">2. Setup the Vue Plugin</LuText>
      <LuText as="p" variant="body">
        Initialize the plugin in your main entry file. This is where you inject your skin overrides and pluggable icon library. Any skin classes you provide will automatically merge with the default Tailwind v4 structure using <LuText as="code" variant="code">tailwind-merge</LuText>.
      </LuText>
      <LuCodeBlock :code="setupCode" lang="ts" />
    </LuStack>

    <LuStack direction="vertical" gap="4">
      <LuText as="h2" variant="section-title">3. Import and use</LuText>
      <LuText as="p" variant="body">
        Components are designed to be imported individually. They tree-shake perfectly.
      </LuText>
      <LuCodeBlock :code="usageCode" lang="vue" />
    </LuStack>

  </LuStack>
</template>

<script setup lang="ts">
import { LuStack, LuText, LuCard, LuPageHeader , LuCodeBlock } from '@astrake/lumora-ui';

const installCode = `npm install @astrake/lumora-ui tailwindcss@^4.0.0`;

const setupCode = `import { createApp } from 'vue'
import { createLumoraUI, type IconResolver, type SkinMap } from '@astrake/lumora-ui';
import * as LucideIcons from 'lucide-vue-next'
import App from './App.vue'

const app = createApp(App)

// 1. (Optional) Create your custom skin overrides. 
// These automatically merge with the Tailwind v4 base skin!
const mySkin: SkinMap = {
  LuButton: {
    primary: "bg-purple-600  "
  }
};

// 2. Setup your icon resolver (optional but recommended)
const iconResolver: IconResolver = (name, size = 18) => {
  const pascal = name.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());
  return (LucideIcons as Record<string, any>)[pascal] ?? null;
};

// 3. Inject the UI plugin
app.use(createLumoraUI({ skin: mySkin, icons: iconResolver }))

app.mount('#app')`;

const usageCode = `<template>
  <LuStack direction="vertical" >
    <LuInput v-model="name" placeholder="Enter name" />
    <LuButton variant="default" @click="save">Save</LuButton>
  </LuStack>
</template>

<script setup>
import { ref } from 'vue'
import { LuStack, LuInput, LuButton, LuIcon } from '@astrake/lumora-ui'

const name = ref('')
const save = () => console.log(name.value)
<\/script>`;
</script>
