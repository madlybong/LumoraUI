<template>
  <LuStack direction="vertical" class="gap-10">
    <LuPageHeader title="Getting Started" description="Lumora UI is a structural layout and component framework for Vue 3. It provides durable headless layout primitives and application shells. You can easily style it via CSS variables, or use Tailwind CSS v4 in your own app. Extending or overriding default styling is simple using the reactive Skin engine." />

    <LuStack direction="vertical" class="gap-5">
      <LuText as="h2" variant="section-title">1. Installation</LuText>
      <LuCodeBlock :code="installCode" lang="bash" />
      <LuText as="p" variant="body" class="text-sm text-zinc-500">
        Note: The framework itself is 100% Tailwind-free. You do not need Tailwind to use it, though you are free to use Tailwind in your own app.
      </LuText>
    </LuStack>

    <LuStack direction="vertical" class="gap-5">
      <LuText as="h2" variant="section-title">2. Setup the Vue Plugin</LuText>
      <LuText as="p" variant="body">
        Initialize the plugin in your main entry file. This is where you inject your skin overrides and pluggable icon library. Any skin classes you provide will automatically override the default CSS structure.
      </LuText>
      <LuCodeBlock :code="setupCode" lang="ts" />
    </LuStack>

    <LuStack direction="vertical" class="gap-5">
      <LuText as="h2" variant="section-title">3. Import and use</LuText>
      <LuText as="p" variant="body">
        Components are designed to be imported individually. They tree-shake perfectly.
      </LuText>
      <LuCodeBlock :code="usageCode" lang="vue" />
    </LuStack>

  </LuStack>
</template>

<script setup lang="ts">
import { LuStack, LuText, LuCodeBlock } from '@astrake/lumora-ui';

const installCode = `npm install @astrake/lumora-ui`;

const setupCode = `import { createApp } from 'vue'
import { createLumoraUI, type IconResolver, type SkinMap } from '@astrake/lumora-ui';
import * as LucideIcons from 'lucide-vue-next'
import App from './App.vue'

const app = createApp(App)

// 1. (Optional) Create your custom skin overrides. 
// These automatically replace default CSS classes or variables!
const mySkin: SkinMap = {
  LuButton: {
    primary: "my-custom-btn-class"
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
