<template>
  <LuPageHeader
    title="Mobile Shell"
    description="Application shell for mobile PWAs and native webviews. Features a safe-area-aware header, scrollable content zone, and a sticky bottom navigation bar."
  />

  <!-- Example 1: Standard Mobile Layout -->
  <LuCodeBlock
    variant="preview"
    title="Standard Mobile Layout"
    description="Header at the top, scrollable content in the middle, and a sticky bottom navigation bar. The content zone fills all available space between them."
    :code="exampleCode"
  >
    <template #preview>
      <!-- 
        Mobile device frame: bounded height. Shell uses height: 100% to fit inside.
        The outer div simulates the phone viewport boundary.
      -->
      <div style="width: 375px; height: 600px; margin: 0 auto; position: relative; border: 12px solid color-mix(in srgb, currentColor 15%, #000); border-radius: 3rem; overflow: hidden; box-shadow: 0 24px 64px rgba(0,0,0,0.3);">
        <LuMobileShell>
          <template #header>
            <LuMobileHeader>
              <template #left>
                <LuAvatar variant="sm" fallback="U" />
              </template>
              <template #center>
                <LuText variant="section-title">Home</LuText>
              </template>
              <template #right>
                <LuButton variant="ghost" class="p-2 h-8 w-8">
                  <LuIcon name="bell" />
                </LuButton>
              </template>
            </LuMobileHeader>
          </template>

          <template #content>
            <LuFill class="overflow-y-auto p-4">
              <LuStack direction="vertical" gap="3">
                <LuCard>
                  <LuText variant="section-title">Mobile Feed</LuText>
                  <LuText variant="body" class="mt-2 text-sm opacity-60">
                    Scroll this area. The header stays pinned at the top and the nav bar stays pinned at the bottom.
                  </LuText>
                </LuCard>
                <LuCard v-for="i in 6" :key="i">
                  <LuStack direction="horizontal" align="center" gap="3">
                    <div style="width: 2rem; height: 2rem; border-radius: 50%; background: color-mix(in srgb, currentColor 8%, transparent);" />
                    <LuStack direction="vertical" gap="1">
                      <LuText variant="label">Post {{ i }}</LuText>
                      <LuText class="text-xs opacity-40">3 minutes ago</LuText>
                    </LuStack>
                  </LuStack>
                </LuCard>
              </LuStack>
            </LuFill>
          </template>

          <template #navbar>
            <LuMobileNavBar v-model="activeTab">
              <LuMobileNavBarItem value="home" label="Home">
                <template #icon><LuIcon name="home" /></template>
              </LuMobileNavBarItem>
              <LuMobileNavBarItem value="search" label="Search">
                <template #icon><LuIcon name="search" /></template>
              </LuMobileNavBarItem>
              <LuMobileNavBarItem value="add">
                <template #icon>
                  <div style="background: var(--lu-color-primary, #6366f1); border-radius: 50%; width: 2rem; height: 2rem; display:flex; align-items:center; justify-content:center;">
                    <LuIcon name="plus" style="color: white;" />
                  </div>
                </template>
              </LuMobileNavBarItem>
              <LuMobileNavBarItem value="messages" label="Messages">
                <template #icon><LuIcon name="message-square" /></template>
              </LuMobileNavBarItem>
              <LuMobileNavBarItem value="profile" label="Profile">
                <template #icon><LuIcon name="user" /></template>
              </LuMobileNavBarItem>
            </LuMobileNavBar>
          </template>
        </LuMobileShell>
      </div>
      <!-- Active tab display -->
      <div class="mt-3 text-center">
        <LuText class="text-xs opacity-50">Active tab: <strong>{{ activeTab }}</strong></LuText>
      </div>
    </template>
  </LuCodeBlock>

  <!-- API Reference -->
  <LuStack direction="vertical" gap="6" class="mt-10">
    <LuText as="h2" variant="default">API Reference</LuText>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuMobileShell</LuText>
      <PropTable :props-list="shellProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuMobileHeader</LuText>
      <PropTable :props-list="headerProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuMobileNavBar</LuText>
      <PropTable :props-list="navbarProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuMobileNavBarItem</LuText>
      <PropTable :props-list="navbarItemProps" />
    </div>
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  LuStack, LuText, LuButton, LuIcon, LuAvatar, LuCard, LuFill, LuCodeBlock,
  LuMobileShell, LuMobileHeader, LuMobileNavBar, LuMobileNavBarItem
} from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';

const activeTab = ref('home');

const exampleCode = `<script setup>
const activeTab = ref('home');
<\/script>

<div style="height: 100dvh;">
  <LuMobileShell>
    <template #header>
      <LuMobileHeader>
        <template #left>...</template>
        <template #center>
          <LuText variant="section-title">Home</LuText>
        </template>
        <template #right>...</template>
      </LuMobileHeader>
    </template>

    <template #content>
      <LuFill class="overflow-y-auto p-4">
        <!-- Scrollable page content -->
      </LuFill>
    </template>

    <template #navbar>
      <LuMobileNavBar v-model="activeTab">
        <LuMobileNavBarItem value="home" label="Home">
          <template #icon><LuIcon name="home" /></template>
        </LuMobileNavBarItem>
        <LuMobileNavBarItem value="search" label="Search">
          <template #icon><LuIcon name="search" /></template>
        </LuMobileNavBarItem>
        <LuMobileNavBarItem value="profile" label="Profile">
          <template #icon><LuIcon name="user" /></template>
        </LuMobileNavBarItem>
      </LuMobileNavBar>
    </template>
  </LuMobileShell>
</div>`;

const shellProps = [
  { name: 'variant', type: '"default" | "full"', default: '"default"', description: 'Visual style. "full" forces 100dvh for standalone page usage.' }
];

const headerProps = [
  { name: 'variant', type: '"default" | "transparent"', default: '"default"', description: 'Visual style variant.' },
  { name: 'ariaLabel', type: 'string', default: '"Header"', description: 'Accessible label for the header banner region.' }
];

const navbarProps = [
  { name: 'modelValue', type: 'string | number', default: 'undefined', description: 'The value of the currently active item. Bind with v-model.' },
  { name: 'variant', type: '"default"', default: '"default"', description: 'Visual style variant.' },
  { name: 'ariaLabel', type: 'string', default: '"Bottom navigation"', description: 'Accessible label for the nav region.' }
];

const navbarItemProps = [
  { name: 'value', type: 'string | number', default: 'Required', description: 'Unique identifier for this tab item.' },
  { name: 'label', type: 'string', default: 'undefined', description: 'Text label rendered below the icon.' },
  { name: 'to', type: 'any', default: 'undefined', description: 'Vue Router target. Renders as RouterLink when provided.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the item and prevents selection.' }
];
</script>
