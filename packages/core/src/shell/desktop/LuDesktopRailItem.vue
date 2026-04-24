<template>
  <div v-bind="$attrs" :class="[resolvedSkin, active ? activeSkin : '']">
    <div :class="iconSkin">
      <slot name="icon" />
    </div>
    <div v-if="$slots.default" :class="labelSkin">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../../context";

const props = defineProps<{ variant?: string; active?: boolean }>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuDesktopRailItem", props.variant));
const activeSkin = computed(() => resolveSkin("LuDesktopRailItem", "active"));
const iconSkin = computed(() => resolveSkin("LuDesktopRailItemIcon", props.variant) || "flex-shrink-0 flex items-center justify-center w-6 h-6");
const labelSkin = computed(() => resolveSkin("LuDesktopRailItemLabel", props.variant) || "overflow-hidden transition-all duration-200");
</script>
