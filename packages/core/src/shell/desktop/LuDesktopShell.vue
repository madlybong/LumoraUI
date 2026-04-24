<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot name="topbar" />
    <div :class="contentWrapperSkin">
      <slot name="rail" />
      <slot name="sidebar" />
      <div :class="mainContentSkin">
        <slot name="content" />
      </div>
    </div>
    <slot name="statusbar" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../../context";

const props = defineProps<{ variant?: string }>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuDesktopShell", props.variant) || "flex flex-col h-screen w-screen overflow-hidden bg-white");
const contentWrapperSkin = computed(() => resolveSkin("LuDesktopShellContentWrapper") || "flex flex-1 overflow-hidden");
const mainContentSkin = computed(() => resolveSkin("LuDesktopShellMainContent") || "flex flex-1 flex-col overflow-hidden relative");
</script>
