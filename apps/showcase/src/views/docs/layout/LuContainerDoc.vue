<template>
  <LuPageHeader title="LuContainer" description="A responsive layout primitive for wrapping page content. Use it to restrict maximum width and provide consistent gutters." />

  <LuStack direction="vertical" gap="12">
    <!-- Sizes -->
    <section>
      <div class="mb-4">
        <LuText as="h3" variant="h3">Container Sizes</LuText>
        <LuText variant="body" class="mt-1">
          <code class="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono text-rose-500">LuContainer</code>
          comes in several max-width presets. You can also use <code class="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono text-rose-500">fluid</code> for edge-to-edge layouts that still preserve the side gutters.
        </LuText>
      </div>

      <LuStack direction="vertical" gap="6">
        <div class="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-zinc-50 dark:bg-zinc-900 overflow-hidden relative">
          <LuStack direction="vertical" gap="4">
            <LuContainer size="sm" class="bg-indigo-100 border border-indigo-200 dark:bg-indigo-900/40 dark:border-indigo-800 p-2 text-center rounded">
              <LuText variant="caption" class="text-indigo-800 dark:text-indigo-200 font-medium">sm (640px)</LuText>
            </LuContainer>
            
            <LuContainer size="md" class="bg-violet-100 border border-violet-200 dark:bg-violet-900/40 dark:border-violet-800 p-2 text-center rounded">
              <LuText variant="caption" class="text-violet-800 dark:text-violet-200 font-medium">md (896px)</LuText>
            </LuContainer>
            
            <LuContainer size="lg" class="bg-fuchsia-100 border border-fuchsia-200 dark:bg-fuchsia-900/40 dark:border-fuchsia-800 p-2 text-center rounded">
              <LuText variant="caption" class="text-fuchsia-800 dark:text-fuchsia-200 font-medium">lg (1152px) [Default]</LuText>
            </LuContainer>
            
            <LuContainer size="xl" class="bg-pink-100 border border-pink-200 dark:bg-pink-900/40 dark:border-pink-800 p-2 text-center rounded">
              <LuText variant="caption" class="text-pink-800 dark:text-pink-200 font-medium">xl (1408px)</LuText>
            </LuContainer>
            
            <LuContainer size="fluid" class="bg-rose-100 border border-rose-200 dark:bg-rose-900/40 dark:border-rose-800 p-2 text-center rounded">
              <LuText variant="caption" class="text-rose-800 dark:text-rose-200 font-medium">fluid (100%)</LuText>
            </LuContainer>
          </LuStack>
        </div>
      </LuStack>
    </section>

    <!-- Custom Width -->
    <section>
      <div class="mb-4">
        <LuText as="h3" variant="h3">Custom Width</LuText>
        <LuText variant="body" class="mt-1">
          Override the default max-widths by passing a valid CSS value to the <code class="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono text-rose-500">maxWidth</code> prop.
        </LuText>
      </div>

      <div class="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-zinc-50 dark:bg-zinc-900">
        <LuContainer maxWidth="300px" class="bg-blue-100 border border-blue-200 dark:bg-blue-900/40 dark:border-blue-800 p-2 text-center rounded">
          <LuText variant="caption" class="text-blue-800 dark:text-blue-200 font-medium">maxWidth="300px"</LuText>
        </LuContainer>
      </div>
    </section>
  </LuStack>
</template>

<script setup lang="ts">
import { LuContainer, LuStack, LuText } from '@astrake/lumora-ui';
</script>
