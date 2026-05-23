<template>
  <!-- Root: full-viewport hero, dark-first, rose accent -->
  <div class="relative min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center overflow-hidden px-6 py-24 bg-white dark:bg-zinc-950">

    <!-- Ambient glow layers -->
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(244,63,94,0.10),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(244,63,94,0.12),transparent)]" />
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_110%,rgba(161,161,170,0.05),transparent)]" />

    <!-- Hero content -->
    <div class="relative z-10 flex flex-col items-center text-center gap-5 max-w-2xl w-full">

      <!-- Brand mark -->
      <div class="flex items-center gap-2.5 mb-2">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-600 shadow-lg shadow-rose-500/25 dark:shadow-rose-500/20">
          <LuIcon name="layout-grid" class="h-4.5 w-4.5 text-white" />
        </div>
        <LuText as="span" variant="brand-label" class="text-base">Lumora UI</LuText>
        <LuBadge variant="default">v{{ version }}</LuBadge>
      </div>

      <!-- Headline -->
      <LuText as="h1" variant="page-title" class="text-center leading-tight text-balance">
        Build Vue 3 interfaces<br />
        <span class="text-rose-500 dark:text-rose-400">that actually scale.</span>
      </LuText>

      <!-- Subtitle -->
      <LuText as="p" variant="page-subtitle" class="text-center max-w-xl">
        A structural layout and component framework for Vue 3. Skin-driven architecture,
        composition-first primitives, and dark-mode ready out of the box.
      </LuText>

      <!-- CTA row -->
      <div class="flex items-center gap-3 pt-3">
        <LuButton variant="primary" class="gap-2 px-5 py-2.5" @click="router.push('/docs/getting-started')">
          Get Started
          <LuIcon name="arrow-right" class="w-4 h-4" />
        </LuButton>
        <LuButton variant="secondary" class="gap-2 px-5 py-2.5" @click="openGithub">
          <LuIcon name="github" class="w-4 h-4" />
          GitHub
        </LuButton>
      </div>
    </div>

    <!-- Stats row -->
    <div class="relative z-10 mt-20 w-full max-w-sm mx-auto">
      <LuDivider variant="horizontal" class="mb-8" />
      <LuGrid variant="responsive-3" class="!gap-0">
        <div class="flex flex-col items-center gap-1 px-4">
          <LuText as="span" class="text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">30+</LuText>
          <LuText as="span" variant="muted">Components</LuText>
        </div>
        <div class="flex flex-col items-center gap-1 px-4 border-x border-zinc-100 dark:border-zinc-800">
          <LuText as="span" class="text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">3</LuText>
          <LuText as="span" variant="muted">Shell types</LuText>
        </div>
        <div class="flex flex-col items-center gap-1 px-4">
          <LuText as="span" class="text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">∞</LuText>
          <LuText as="span" variant="muted">Skin themes</LuText>
        </div>
      </LuGrid>
    </div>

    <!-- Feature cards -->
    <div class="relative z-10 mt-16 w-full max-w-3xl mx-auto">
      <LuGrid class="grid-cols-1 sm:grid-cols-3 gap-4">
        <LuCard v-for="feature in features" :key="feature.title" variant="panel" class="flex flex-col gap-4 text-left">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 dark:bg-rose-950/40">
            <LuIcon :name="feature.icon" class="h-4 w-4 text-rose-600 dark:text-rose-400" />
          </div>
          <div class="flex flex-col gap-1.5">
            <LuText as="h3" variant="section-title" class="text-base leading-snug">{{ feature.title }}</LuText>
            <LuText as="p" variant="body">{{ feature.description }}</LuText>
          </div>
        </LuCard>
      </LuGrid>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { LuIcon, LuText, LuBadge, LuButton, LuCard, LuGrid, LuDivider } from '@astrake/lumora-ui';

const router = useRouter();

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '?.?.?';

function openGithub() {
  window.open('https://github.com/madlybong/lumora-ui', '_blank');
}

const features = [
  {
    icon: 'layers',
    title: 'Layout Primitives',
    description: 'Composable LuDock, LuStack, LuSplit, LuScroll — structural building blocks that work at every scale.',
  },
  {
    icon: 'paintbrush',
    title: 'Skin Engine',
    description: 'Override any component\'s appearance via a reactive skin map. Zero CSS specificity battles.',
  },
  {
    icon: 'sun-moon',
    title: 'Dark Mode First',
    description: 'Every component ships with dark mode tokens. No configuration required.',
  },
];
</script>
