<template>
  <LuEmbeddedShell>
    <div class="flex flex-col h-full w-full">
      <div class="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center px-6 shrink-0">
        <div class="text-xl font-bold tracking-wider">MACHINE STATUS</div>
        <div class="ml-auto text-emerald-400 font-mono text-xl">IDLE</div>
      </div>
      
      <div class="flex-1 flex overflow-hidden">
        <div class="w-2/3 p-6 border-r border-zinc-800 flex flex-col">
          <div class="grid grid-cols-2 gap-4 flex-1">
            <div class="bg-zinc-900 rounded-lg border border-zinc-800 p-6 flex flex-col justify-center items-center">
              <div class="text-zinc-500 text-sm mb-2 uppercase">Temperature</div>
              <div class="text-5xl font-mono text-emerald-400">42.5°</div>
            </div>
            <div class="bg-zinc-900 rounded-lg border border-zinc-800 p-6 flex flex-col justify-center items-center">
              <div class="text-zinc-500 text-sm mb-2 uppercase">Pressure</div>
              <div class="text-5xl font-mono text-emerald-400">1.2k</div>
            </div>
          </div>
        </div>
        
        <div class="w-1/3 bg-zinc-950 flex flex-col">
          <div class="flex-1 p-6 flex flex-col justify-end gap-4">
            <button class="h-20 bg-emerald-600 active:bg-emerald-700 text-white text-2xl font-bold rounded-lg uppercase tracking-wider">
              Start
            </button>
            <button class="h-20 bg-rose-600 active:bg-rose-700 text-white text-2xl font-bold rounded-lg uppercase tracking-wider">
              E-Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  </LuEmbeddedShell>
</template>

<script setup lang="ts">
import { LuEmbeddedShell } from '@astrake/lumora-ui';
</script>
