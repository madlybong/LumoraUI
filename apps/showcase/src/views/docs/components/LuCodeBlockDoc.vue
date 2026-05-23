<template>
  <LuPageHeader title="LuCodeBlock" description="A component for showcasing code snippets and live interactive component previews with built-in Shiki syntax highlighting." />

  <LuStack direction="vertical" gap="8">
    <LuCodeBlock variant="preview"
      title="Basic Code-only Block"
      description="Standard code block for displaying snippets with syntax highlighting and a quick copy button."
      :code="codeOnlySnippet"
    >
      <template #preview>
        <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
          This is a static code block below showing a simple Vue script.
        </LuText>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      layout="tabbed"
      title="Tabbed Preview Layout"
      description="A dual-tab layout featuring a live interactive 'Preview' panel and a static 'Code' panel."
      :code="tabbedSnippet"
    >
      <template #preview>
        <LuStack>
          <LuButton variant="primary">Primary Button</LuButton>
          <LuButton variant="secondary">Secondary Button</LuButton>
        </LuStack>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      layout="split"
      title="Split Preview Layout"
      description="A side-by-side split layout displaying both the live interactive component and its code source at the same time."
      :code="splitSnippet"
    >
      <template #preview>
        <LuStack direction="vertical" gap="2" class="items-center">
          <LuText variant="lead">Interactive UI</LuText>
          <LuButton variant="danger">Delete Action</LuButton>
        </LuStack>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      title="Custom Language Syntax"
      description="Supports syntax highlighting for multiple programming languages. Here is a TypeScript type definition."
      lang="typescript"
      :code="typescriptSnippet"
    >
      <template #preview>
        <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
          TypeScript interface definition highlighted with the One Dark Pro theme.
        </LuText>
      </template>
    </LuCodeBlock>
  </LuStack>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { LuCodeBlock, LuStack, LuButton, LuText, LuCard } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const codeOnlySnippet = `<script setup>
import { ref } from 'vue';

const count = ref(0);
<\/script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>`;

const tabbedSnippet = `<template>
  <LuStack>
    <LuButton variant="primary">Primary Button</LuButton>
    <LuButton variant="secondary">Secondary Button</LuButton>
  </LuStack>
</template>`;

const splitSnippet = `<template>
  <LuStack direction="vertical" gap="2" class="items-center">
    <LuText variant="lead">Interactive UI</LuText>
    <LuButton variant="danger">Delete Action</LuButton>
  </LuStack>
</template>`;

const typescriptSnippet = `interface User {
  id: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
}`;

const propsList = [
  { name: 'code', type: 'string', required: true, description: 'The raw code string to render and highlight.' },
  { name: 'lang', type: 'string', default: "'vue'", description: 'The language syntax to highlight (e.g. vue, typescript, javascript, html, css, json).' },
  { name: 'variant', type: "'default' | 'preview'", default: "'default'", description: 'The visual variation of the code block card. Renders without preview tabs/split-screen when set to default.' },
  { name: 'layout', type: "'tabbed' | 'split'", default: "'tabbed'", description: 'The layout behavior when variant is set to preview.' },
  { name: 'title', type: 'string', description: 'Optional header title displayed above the card.' },
  { name: 'description', type: 'string', description: 'Optional helper description text displayed under the title.' }
];
</script>
