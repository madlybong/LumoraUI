<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <slot name="header" />
    <div :class="contentSkin">
      <slot name="content" />
    </div>
    <slot name="navbar" />
    <slot name="drawer" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../../context";

const props = defineProps<{ variant?: string }>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuMobileShell", props.variant));
const contentSkin = computed(() => resolveSkin("LuMobileShellContent"));
</script>
