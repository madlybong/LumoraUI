<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot name="topbar" />
    <div :class="contentSkin">
      <slot name="content" />
    </div>
    <slot name="bottombar" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../../context";

const props = defineProps<{ variant?: string }>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuEmbeddedShell", props.variant) || "flex flex-col h-screen w-screen overflow-hidden bg-black text-white touch-none select-none");
const contentSkin = computed(() => resolveSkin("LuEmbeddedShellContent", props.variant) || "flex-1 min-h-0 min-w-0 flex flex-col relative overflow-hidden");
</script>
