<template>
  <div v-bind="$attrs" :class="['lu-divider', `lu-divider--${orientation}`, variant && `lu-divider--${variant}`]"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

/**
 * Visual divider line.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ NEVER use `<hr>` tags directly.
 * - Supports `horizontal` (default) and `vertical` orientations.
 */
const props = withDefaults(defineProps<{
  variant?: string;
  orientation?: "horizontal" | "vertical";
}>(), {
  orientation: "horizontal"
});
</script>
