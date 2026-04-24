<template>
  <LuStack direction="vertical" class="prose prose-zinc dark:prose-invert max-w-none">
    <LuText as="h1" variant="page-title" class="mb-6">Getting Started</LuText>
    
    <LuText as="p" variant="body" class="mb-8">
      Lumora UI is a structural layout and component framework for Vue 3. It ships with absolutely zero CSS,
      providing durable layout primitives and application shells that you can skin with Tailwind CSS or your own custom stylesheets.
    </LuText>

    <LuText as="h2" variant="section-title" class="mt-12 mb-4">1. Installation</LuText>
    <LuCard class="relative group mb-8">
      <CodeBlock :code="installCode" lang="bash" class="rounded-lg shadow-sm" />
    </LuCard>

    <LuText as="h2" variant="section-title" class="mt-12 mb-4">2. Setup the Vue Plugin</LuText>
    <LuText as="p" variant="body" class="mb-8">
      Initialize the plugin in your main entry file. This is where you inject your skin mapping and pluggable icon library.
    </LuText>
    <LuCard class="relative group mb-8">
      <CodeBlock :code="setupCode" lang="ts" class="rounded-lg shadow-sm" />
    </LuCard>

    <LuText as="h2" variant="section-title" class="mt-12 mb-4">3. Import and use</LuText>
    <LuText as="p" variant="body" class="mb-8">
      Components are designed to be imported individually. They tree-shake perfectly.
    </LuText>
    <LuCard class="relative group mb-8">
      <CodeBlock :code="usageCode" lang="vue" class="rounded-lg shadow-sm" />
    </LuCard>

  </LuStack>
</template>

<script setup lang="ts">
import CodeBlock from '../../components/CodeBlock.vue';
import { LuStack, LuText, LuCard } from '@astrake/lumora-ui';

const installCode = `npm install @astrake/lumora-ui`;

const setupCode = `import { createApp } from 'vue'
import { createLumoraUI, type IconResolver } from '@astrake/lumora-ui';
import { defaultSkin } from '@astrake/lumora-ui/skins'
import * as LucideIcons from 'lucide-vue-next'
import App from './App.vue'

const app = createApp(App)

// 1. Setup your icon resolver (optional but recommended)
const iconResolver: IconResolver = (name, size = 18) => {
  const pascal = name.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());
  return (LucideIcons as Record<string, any>)[pascal] ?? null;
};

// 2. Inject the default Tailwind skin and your icons
app.use(createLumoraUI({ skin: defaultSkin, icons: iconResolver }))

app.mount('#app')`;

const usageCode = `<template>
  <LuStack direction="vertical" class="gap-4 p-6">
    <LuInput v-model="name" placeholder="Enter name" />
    <LuButton variant="primary" @click="save">Save</LuButton>
  </LuStack>
</template>

<script setup>
import { ref } from 'vue'
import { LuStack, LuInput, LuButton, LuIcon } from '@astrake/lumora-ui'

const name = ref('')
const save = () => console.log(name.value)
<\/script>`;
</script>
