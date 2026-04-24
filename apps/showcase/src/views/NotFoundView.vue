<template>
  <div class="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6 text-center">
    <div class="max-w-md w-full">
      <div class="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <LuIcon class="w-8 h-8 text-zinc-400" />
      </div>
      <h1 class="text-4xl font-bold tracking-tight text-zinc-900 mb-4">Page not found</h1>
      <p class="text-lg text-zinc-500 mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <div class="flex justify-center">
        <router-link to="/docs" class="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800">
          Go to Documentation
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LuIcon } from '@astrake/lumora-ui';
</script>
