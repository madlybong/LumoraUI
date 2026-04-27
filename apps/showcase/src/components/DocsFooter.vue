<template>
  <LuStack direction="vertical" gap="8">
    <LuDivider />
    <LuCard as="footer" variant="footer">
      <LuGrid variant="responsive-3" gap="8">
        <LuStack direction="vertical" gap="2">
          <LuStack direction="horizontal" align="center" gap="2">
            <LuIcon name="layout-grid" class="h-5 w-5" />
            <LuText variant="label">Lumora UI</LuText>
          </LuStack>
          <LuText as="p" variant="muted" class="text-sm">A headless, zero-CSS framework for building ambitious web interfaces.</LuText>
        </LuStack>
        
        <LuStack direction="vertical" gap="2">
          <LuText variant="label">Resources</LuText>
          <LuLink href="https://github.com/madlybong/lumora-ui" target="_blank" variant="nav" class="flex items-center gap-2">
            <LuIcon name="github" class="h-4 w-4" /> Source Code
          </LuLink>
          <LuLink href="#" variant="nav" class="flex items-center gap-2">
            <LuIcon name="bug" class="h-4 w-4" /> Report an Issue
          </LuLink>
        </LuStack>

        <LuStack direction="vertical" gap="2">
          <LuText variant="label">Legal</LuText>
          <LuText variant="muted" class="text-sm">© 2025 Astrake · MIT License</LuText>
          <LuStack direction="horizontal" align="center" gap="2">
            <LuText variant="muted" class="text-sm">Version</LuText> <LuBadge variant="default">{{ version }}</LuBadge>
          </LuStack>
        </LuStack>
      </LuGrid>
    </LuCard>
  </LuStack>
</template>

<script setup lang="ts">
import { LuIcon, LuBadge, LuCard, LuStack, LuText, LuLink, LuGrid, LuDivider } from '@astrake/lumora-ui';

// @ts-ignore
const version = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.1.0';
</script>
