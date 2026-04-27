<template>
  <LuPageHeader title="Embedded Shell" description="An application shell built for embedded screens, kiosks, and vehicle HMIs. Prevents text selection, touch-action, and enforces a fixed layout." />

  <LuCodeBlock variant="preview" 
    title="Embedded Shell Structure" 
    description="The standard layout for embedded HMI and kiosk applications."
    :code="exampleCode"
  >
    <template #preview>
      <div class="h-[400px] w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden mx-auto shadow-xl flex bg-black">
        <LuEmbeddedShell variant="default" class="bg-gray-950 text-white w-full h-full">
          <template #topbar>
            <LuEmbeddedTopBar variant="default">
              <template #left>
                <LuStack direction="horizontal" class="items-center"><LuIcon name="car" /><LuText>Model 3</LuText></LuStack>
              </template>
              <LuText class="font-semibold tracking-widest text-gray-400">P R N D</LuText>
              <template #right>
                <LuStack direction="horizontal" class="items-center"><LuText>72°</LuText><LuIcon name="battery-full" /></LuStack>
              </template>
            </LuEmbeddedTopBar>
          </template>

          <template #content>
            <LuFill class="p-6">
              <LuStack direction="horizontal" class="h-full w-full justify-center items-center">
                <LuText class="text-4xl font-light text-gray-500">Visualization Map</LuText>
              </LuStack>
            </LuFill>
          </template>
          
          <template #bottombar>
            <LuEmbeddedStatusBar variant="default">
              <template #left>
                <LuStack direction="horizontal" class="items-center w-full justify-between px-10">
                  <LuIcon name="fan" class="text-gray-400 cursor-pointer hover:text-white" />
                  <LuIcon name="music" class="text-gray-400 cursor-pointer hover:text-white" />
                  <LuIcon name="phone" class="text-gray-400 cursor-pointer hover:text-white" />
                  <LuIcon name="camera" class="text-gray-400 cursor-pointer hover:text-white" />
                </LuStack>
              </template>
            </LuEmbeddedStatusBar>
          </template>
        </LuEmbeddedShell>
      </div>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8">
    <LuText as="h2" variant="section-title">Components in this Shell</LuText>
    <LuStack as="ul" direction="vertical">
      <LuText as="li" variant="body"><code>LuEmbeddedShell</code> — The root container.</LuText>
      <LuText as="li" variant="body"><code>LuEmbeddedTopBar</code> — The top status/HVAC/gear bar.</LuText>
      <LuText as="li" variant="body"><code>LuEmbeddedStatusBar</code> — The bottom app launcher / media control bar.</LuText>
    </LuStack>
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuEmbeddedShell, LuEmbeddedTopBar, LuEmbeddedStatusBar, LuIcon, LuFill , LuCodeBlock } from '@astrake/lumora-ui';

const exampleCode = `<LuEmbeddedShell>
  <template #topbar>
    <LuEmbeddedTopBar>
      <template #left>
        <LuIcon name="car" /> Model 3
      </template>
      P R N D
      <template #right>
        72° <LuIcon name="battery-full" />
      </template>
    </LuEmbeddedTopBar>
  </template>

  <template #content>
    <LuFill>
      <!-- Visualization Map -->
    </LuFill>
  </template>
  
  <template #bottombar>
    <LuEmbeddedStatusBar>
      <template #left>
        <LuIcon name="fan" />
        <LuIcon name="music" />
        <LuIcon name="phone" />
        <LuIcon name="camera" />
      </template>
    </LuEmbeddedStatusBar>
  </template>
</LuEmbeddedShell>`;
</script>
