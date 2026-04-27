<template>
  <LuPageHeader title="Mobile Shell" description="An application shell tailored for mobile devices and PWAs, featuring top headers, bottom navigation bars, and safe-area insets." />

  <LuCodeBlock variant="preview" 
    title="Mobile Shell Structure" 
    description="The standard layout for mobile applications."
    :code="exampleCode"
  >
    <template #preview>
      <div class="h-[400px] w-[300px] border border-gray-300 dark:border-gray-700 rounded-3xl overflow-hidden mx-auto shadow-xl flex bg-white dark:bg-gray-950">
        <LuMobileShell variant="default">
          <template #header>
            <LuMobileHeader variant="default">
              <template #left><LuButton variant="ghost" class="p-2"><LuIcon name="menu" /></LuButton></template>
              <LuText variant="section-title">Home</LuText>
              <template #right><LuButton variant="ghost" class="p-2"><LuIcon name="bell" /></LuButton></template>
            </LuMobileHeader>
          </template>

          <template #content>
            <LuFill class="bg-gray-50 p-4 dark:bg-gray-900 overflow-y-auto">
              <LuStack direction="vertical">
                <LuCard variant="default"><LuText>Content area</LuText></LuCard>
                <LuCard variant="default"><LuText>More content</LuText></LuCard>
              </LuStack>
            </LuFill>
          </template>
          
          <template #navbar>
            <LuMobileNavBar variant="default">
              <LuButton variant="ghost" class="flex-col h-auto py-1"><LuIcon name="home" /><LuText class="text-[10px]">Home</LuText></LuButton>
              <LuButton variant="ghost" class="flex-col h-auto py-1"><LuIcon name="search" /><LuText class="text-[10px]">Search</LuText></LuButton>
              <LuButton variant="ghost" class="flex-col h-auto py-1"><LuIcon name="user" /><LuText class="text-[10px]">Profile</LuText></LuButton>
            </LuMobileNavBar>
          </template>
        </LuMobileShell>
      </div>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8">
    <LuText as="h2" variant="section-title">Components in this Shell</LuText>
    <LuStack as="ul" direction="vertical">
      <LuText as="li" variant="body"><code>LuMobileShell</code> — The root container that handles safe-area padding</LuText>
      <LuText as="li" variant="body"><code>LuMobileHeader</code> — The top app bar</LuText>
      <LuText as="li" variant="body"><code>LuMobileNavBar</code> — The bottom tab navigation bar</LuText>
    </LuStack>
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuMobileShell, LuMobileHeader, LuMobileNavBar, LuButton, LuIcon, LuFill, LuCard , LuCodeBlock } from '@astrake/lumora-ui';

const exampleCode = `<LuMobileShell>
  <template #header>
    <LuMobileHeader>
      <template #left><LuButton variant="ghost"><LuIcon name="menu" /></LuButton></template>
      <LuText variant="section-title">Home</LuText>
      <template #right><LuButton variant="ghost"><LuIcon name="bell" /></LuButton></template>
    </LuMobileHeader>
  </template>

  <template #content>
    <LuFill>
      <LuStack direction="vertical">
        <LuCard>Content area</LuCard>
      </LuStack>
    </LuFill>
  </template>
  
  <template #navbar>
    <LuMobileNavBar>
      <LuButton variant="ghost">Home</LuButton>
      <LuButton variant="ghost">Search</LuButton>
      <LuButton variant="ghost">Profile</LuButton>
    </LuMobileNavBar>
  </template>
</LuMobileShell>`;
</script>
