<template>
  <LuPageHeader title="Desktop Shell" description="A comprehensive application shell designed for desktop web applications, featuring topbars, rails, sidebars, and status bars." />

  <LuCodeBlock variant="preview" 
    title="Desktop Shell Structure" 
    description="The standard layout for desktop applications."
    :code="exampleCode"
  >
    <template #preview>
      <div class="h-[400px] w-full border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden mx-auto shadow-xl flex bg-white dark:bg-gray-950">
        <LuDesktopShell>
          <template #topbar>
            <LuDesktopTopBar>
              <LuStack direction="horizontal" align="center" gap="4">
                <LuIcon name="layout" />
                <LuText variant="section-title">My App</LuText>
              </LuStack>
              <LuStack direction="horizontal" align="center" gap="4">
                <LuButton variant="ghost" class="p-2"><LuIcon name="bell" /></LuButton>
                <LuAvatar variant="sm" fallback="U" />
              </LuStack>
            </LuDesktopTopBar>
          </template>
          
          <template #rail>
            <LuDesktopRailBar>
              <LuDesktopRailItem active>
                <template #icon><LuIcon name="home" /></template>
                Home
              </LuDesktopRailItem>
              <LuDesktopRailItem>
                <template #icon><LuIcon name="users" /></template>
                Users
              </LuDesktopRailItem>
              <LuDesktopRailItem>
                <template #icon><LuIcon name="settings" /></template>
                Settings
              </LuDesktopRailItem>
            </LuDesktopRailBar>
          </template>

          <template #sidebar>
            <LuDesktopSidebar>
              <LuStack direction="vertical" gap="2" class="p-4">
                <LuText variant="label">Navigation</LuText>
                <LuButton variant="ghost" class="justify-start">Dashboard</LuButton>
                <LuButton variant="ghost" class="justify-start">Analytics</LuButton>
                <LuButton variant="ghost" class="justify-start">Reports</LuButton>
              </LuStack>
            </LuDesktopSidebar>
          </template>

          <template #content>
            <LuFill class="bg-gray-50 p-6 dark:bg-gray-900 overflow-y-auto">
              <LuStack direction="vertical" gap="4">
                <LuCard>
                  <LuText variant="section-title">Main Content Area</LuText>
                  <LuText variant="body" class="mt-2">This is where the primary application content is rendered.</LuText>
                </LuCard>
              </LuStack>
            </LuFill>
          </template>
          
          <template #statusbar>
            <LuDesktopStatusBar>
              <LuText variant="muted">System Status: Online</LuText>
              <LuText variant="muted">v1.0.0</LuText>
            </LuDesktopStatusBar>
          </template>
        </LuDesktopShell>
      </div>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" gap="4" class="mt-8">
    <LuText as="h2" variant="default">Components in this Shell</LuText>
    <LuStack as="ul" direction="vertical" gap="2">
      <LuText as="li" variant="default"><code>LuDesktopShell</code> — The root container defining the CSS Grid/Flex layout</LuText>
      <LuText as="li" variant="default"><code>LuDesktopTopBar</code> — The horizontal header</LuText>
      <LuText as="li" variant="default"><code>LuDesktopRailBar</code> — The collapsible mini-sidebar for primary navigation</LuText>
      <LuText as="li" variant="default"><code>LuDesktopRailItem</code> — Items within the rail bar</LuText>
      <LuText as="li" variant="default"><code>LuDesktopSidebar</code> — The secondary navigation/context sidebar</LuText>
      <LuText as="li" variant="default"><code>LuDesktopStatusBar</code> — The bottom footer area</LuText>
    </LuStack>
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuDesktopShell, LuDesktopTopBar, LuDesktopRailBar, LuDesktopRailItem, LuDesktopSidebar, LuDesktopStatusBar, LuButton, LuIcon, LuAvatar, LuCard, LuFill , LuCodeBlock } from '@astrake/lumora-ui';

const exampleCode = `<LuDesktopShell>
  <template #topbar>
    <LuDesktopTopBar>...</LuDesktopTopBar>
  </template>
  
  <template #rail>
    <LuDesktopRailBar>
      <LuDesktopRailItem>...</LuDesktopRailItem>
    </LuDesktopRailBar>
  </template>

  <template #sidebar>
    <LuDesktopSidebar>...</LuDesktopSidebar>
  </template>

  <template #content>
    <LuStack as="main" direction="vertical">Main application content goes here</LuStack>
  </template>
  
  <template #statusbar>
    <LuDesktopStatusBar>...</LuDesktopStatusBar>
  </template>
</LuDesktopShell>`;
</script>
