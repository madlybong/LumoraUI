<template>
  <!-- Rendered inside LuStack variant="container" — inherits px-8 padding from parent -->
  <div>
    <LuDivider variant="horizontal" />

    <LuGrid class="grid-cols-1 sm:grid-cols-3 gap-8 pt-10 pb-6">

      <!-- Brand -->
      <LuStack direction="vertical" gap="3">
        <LuStack direction="horizontal" align="center" gap="2">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-600 text-white">
            <LuIcon name="layout-grid" class="h-3.5 w-3.5" />
          </div>
          <LuText as="span" variant="brand-label">Lumora UI</LuText>
        </LuStack>
        <LuText as="p" variant="body" class="max-w-[220px] leading-relaxed">
          A headless, skin-driven component framework for Vue 3.
        </LuText>
      </LuStack>

      <!-- Resources -->
      <LuStack direction="vertical" gap="3">
        <LuText variant="label">Resources</LuText>
        <LuLink
          href="https://github.com/madlybong/lumora-ui"
          target="_blank"
          variant="footer-link"
        >
          <LuIcon name="github" class="h-4 w-4 shrink-0" />
          Source Code
        </LuLink>
        <LuLink href="#" variant="footer-link">
          <LuIcon name="bug" class="h-4 w-4 shrink-0" />
          Report an Issue
        </LuLink>
        <LuLink href="#" variant="footer-link">
          <LuIcon name="book-open" class="h-4 w-4 shrink-0" />
          Changelog
        </LuLink>
      </LuStack>

      <!-- Legal -->
      <LuStack direction="vertical" gap="3">
        <LuText variant="label">Legal</LuText>
        <LuText as="p" variant="body">MIT License</LuText>
        <LuText as="p" variant="body">© 2025 Astrake</LuText>
      </LuStack>

    </LuGrid>

    <LuDivider variant="horizontal" />

    <LuStack direction="horizontal" align="center" justify="between" class="pt-5 pb-2">
      <LuText variant="muted">Built with Lumora UI · Tailwind v4</LuText>
      <LuBadge variant="default">v{{ version }}</LuBadge>
    </LuStack>
  </div>
</template>

<script setup lang="ts">
import { LuIcon, LuBadge, LuStack, LuText, LuLink, LuGrid, LuDivider } from '@astrake/lumora-ui';

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.1.0';
</script>
