<template>
  <LuStack direction="vertical" class="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-200">
    <!-- Header -->
    <LuCard as="header" class="border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md z-50 transition-colors duration-200">
      <LuStack direction="horizontal" class="max-w-7xl mx-auto px-6 h-16 w-full items-center justify-between">
        <LuStack direction="horizontal" class="items-center gap-2.5 font-bold text-lg tracking-tight text-zinc-900 dark:text-white">
          <LuIcon name="layout-grid" class="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          Lumora UI
        </LuStack>
        <LuStack as="nav" direction="horizontal" class="items-center gap-6 text-sm font-medium">
          <LuLink to="/docs" class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Documentation</LuLink>
          
          <ThemeToggle />
          
          <LuLink href="https://github.com/madlybong/lumora-ui" class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <LuIcon name="github" class="w-5 h-5" />
          </LuLink>
        </LuStack>
      </LuStack>
    </LuCard>

    <!-- Hero -->
    <LuStack as="main" direction="vertical" class="max-w-7xl w-full mx-auto px-6 pt-24 pb-32">
      <LuStack direction="vertical" class="text-center max-w-3xl mx-auto mb-20">
        <LuText as="h1" variant="hero-title">
          Structural. Headless.<br>
          <LuText as="span" variant="hero-gradient">
            Enterprise-Grade.
          </LuText>
        </LuText>
        <LuText as="p" variant="hero-subtitle">
          A Vue 3 layout framework bringing WPF-style durability to the web. Zero CSS. Three targets. Total control.
        </LuText>
        <LuStack direction="horizontal" class="items-center justify-center gap-4">
          <LuLink to="/docs" variant="hero-cta-primary">
            Get Started <LuIcon name="arrow-right" class="w-4 h-4" />
          </LuLink>
          <LuLink href="https://github.com/madlybong/lumora-ui" target="_blank" variant="hero-cta-secondary">
            <LuIcon name="github" class="w-4 h-4" /> GitHub
          </LuLink>
        </LuStack>
      </LuStack>

      <!-- Feature Grid -->
      <LuCard class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <LuCard variant="feature-card">
          <LuStack direction="horizontal" class="w-10 h-10 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl mb-6 items-center justify-center text-indigo-600 dark:text-indigo-400">
            <LuIcon name="code-2" class="w-5 h-5" />
          </LuStack>
          <LuText as="h3" variant="feature-title">Zero CSS</LuText>
          <LuText as="p" variant="feature-body">Components ship with pure HTML and Vue behavior. No styles, no vendor lock-in. Bring your own Tailwind or CSS.</LuText>
        </LuCard>
        <LuCard variant="feature-card" class="delay-75">
          <LuStack direction="horizontal" class="w-10 h-10 bg-violet-50 dark:bg-violet-500/10 rounded-xl mb-6 items-center justify-center text-violet-600 dark:text-violet-400">
            <LuIcon name="layout-template" class="w-5 h-5" />
          </LuStack>
          <LuText as="h3" variant="feature-title">WPF-Style Layouts</LuText>
          <LuText as="p" variant="feature-body">DockPanels, StackPanels, Grids, and SplitContainers. Real enterprise layout primitives translated for the web.</LuText>
        </LuCard>
        <LuCard variant="feature-card" class="delay-150">
          <LuStack direction="horizontal" class="w-10 h-10 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl mb-6 items-center justify-center text-emerald-600 dark:text-emerald-400">
            <LuIcon name="monitor-smartphone" class="w-5 h-5" />
          </LuStack>
          <LuText as="h3" variant="feature-title">Three Targets</LuText>
          <LuText as="p" variant="feature-body">Pre-built application shells for Desktop, Mobile, and Embedded kiosks. Ready for production out of the box.</LuText>
        </LuCard>
      </LuCard>

      <!-- Previews -->
      <LuStack direction="vertical" class="text-center mb-16">
        <LuText as="h2" class="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">See it in action</LuText>
        <LuText as="p" class="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Live iframes rendering the actual framework components.</LuText>
      </LuStack>

      <LuCard class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Desktop -->
        <LuCard variant="shell-preview-card">
          <LuStack direction="horizontal" class="items-center justify-between mb-4 px-2">
            <LuText as="h3" class="font-semibold text-zinc-900 dark:text-zinc-100">Desktop Shell</LuText>
            <LuLink to="/demo/desktop" target="_blank" class="text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Open full <LuIcon name="arrow-up-right" class="w-3.5 h-3.5" />
            </LuLink>
          </LuStack>
          <LuCard class="relative bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm aspect-[4/3] group-hover:border-indigo-500/50 transition-colors">
            <iframe src="/demo/desktop" class="absolute top-0 left-0 w-[1280px] h-[960px] origin-top-left border-0 pointer-events-none" style="transform: scale(0.333)"></iframe>
          </LuCard>
        </LuCard>

        <!-- Mobile -->
        <LuCard variant="shell-preview-card">
          <LuStack direction="horizontal" class="items-center justify-between mb-4 px-2">
            <LuText as="h3" class="font-semibold text-zinc-900 dark:text-zinc-100">Mobile Shell</LuText>
            <LuLink to="/demo/mobile" target="_blank" class="text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Open full <LuIcon name="arrow-up-right" class="w-3.5 h-3.5" />
            </LuLink>
          </LuStack>
          <LuCard class="relative bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm aspect-[4/3] flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
            <LuCard class="w-[375px] h-[812px] bg-white dark:bg-zinc-950 rounded-[2.5rem] border-[8px] border-zinc-900 overflow-hidden shadow-xl transform scale-[0.45] origin-center relative">
              <iframe src="/demo/mobile" class="w-full h-full border-0 pointer-events-none"></iframe>
            </LuCard>
          </LuCard>
        </LuCard>

        <!-- Embedded -->
        <LuCard variant="shell-preview-card">
          <LuStack direction="horizontal" class="items-center justify-between mb-4 px-2">
            <LuText as="h3" class="font-semibold text-zinc-900 dark:text-zinc-100">Embedded Shell</LuText>
            <LuLink to="/demo/embedded" target="_blank" class="text-sm font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Open full <LuIcon name="arrow-up-right" class="w-3.5 h-3.5" />
            </LuLink>
          </LuStack>
          <LuCard class="relative rounded-xl overflow-hidden shadow-sm aspect-[4/3] flex items-center justify-center bg-zinc-950 border border-zinc-200 dark:border-zinc-800 group-hover:border-indigo-500/50 transition-colors">
             <LuCard class="w-[800px] h-[480px] overflow-hidden transform scale-[0.5] origin-center relative border border-zinc-800 rounded-xl shadow-2xl">
              <iframe src="/demo/embedded" class="w-full h-full border-0 pointer-events-none"></iframe>
            </LuCard>
          </LuCard>
        </LuCard>
      </LuCard>
    </LuStack>

    <LuCard class="max-w-7xl mx-auto px-6">
      <DocsFooter />
    </LuCard>
  </LuStack>
</template>

<script setup lang="ts">
import { LuIcon, LuStack, LuCard, LuText, LuLink } from '@astrake/lumora-ui';
import ThemeToggle from '../components/ThemeToggle.vue';
import DocsFooter from '../components/DocsFooter.vue';
</script>
