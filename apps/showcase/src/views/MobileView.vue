<template>
  <LuMobileShell>
    <template #header>
      <div class="font-semibold text-lg text-center w-full">Messages</div>
    </template>

    <template #content>
      <div class="p-4">
        <LuInput placeholder="Search messages..." class="mb-4" />
        <LuStack direction="vertical" class="divide-y divide-gray-100">
          <div v-for="i in 10" :key="i" class="py-3 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0"></div>
            <div class="flex-1 min-w-0">
              <div class="font-medium text-sm truncate">Alice Smith</div>
              <div class="text-xs text-gray-500 truncate">Hey, are we still on for the UI sync?</div>
            </div>
            <div class="text-xs text-gray-400 whitespace-nowrap">2m</div>
          </div>
        </LuStack>
      </div>
    </template>

    <template #navbar>
      <div class="flex justify-around items-center h-14 border-t border-gray-200 bg-white pb-safe shrink-0">
        <div class="flex flex-col items-center justify-center text-blue-600">
          <LuIcon class="w-6 h-6 bg-blue-600 rounded-sm mb-1" />
          <span class="text-[10px] font-medium">Chats</span>
        </div>
        <div class="flex flex-col items-center justify-center text-gray-400">
          <LuIcon class="w-6 h-6 bg-gray-400 rounded-sm mb-1" />
          <span class="text-[10px] font-medium">Calls</span>
        </div>
        <div class="flex flex-col items-center justify-center text-gray-400">
          <LuIcon class="w-6 h-6 bg-gray-400 rounded-sm mb-1" />
          <span class="text-[10px] font-medium">Settings</span>
        </div>
      </div>
    </template>
  </LuMobileShell>
</template>

<script setup lang="ts">
import { LuMobileShell, LuStack, LuInput, LuIcon } from '@astrake/lumora-ui';
</script>
