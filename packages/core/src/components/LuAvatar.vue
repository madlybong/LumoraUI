<template>
  <div v-bind="$attrs" :class="['lu-avatar', size && `lu-avatar--${size}`, variant && `lu-avatar--${variant}`]" :data-size="size">
    <img v-if="src && !hasError" :src="src" :alt="alt" class="lu-avatar__image" @error="hasError = true" />
    <div v-else class="lu-avatar__fallback">
      <slot>{{ fallback }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string; src?: string; fallback?: string; alt?: string; size?: string }>();

const hasError = ref(false);
</script>
