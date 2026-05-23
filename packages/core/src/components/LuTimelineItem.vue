<script setup lang="ts">
import { computed, inject } from "vue";
import { useLumoraConfig } from "../context";
import LuIcon from "./LuIcon.vue";

defineOptions({ name: "LuTimelineItem" });

const props = withDefaults(defineProps<{
  title?: string;
  date?: string;
  index?: number;
  status?: "default" | "success" | "warning" | "danger" | "info";
  last?: boolean;
}>(), {
  status: "default",
  last: false,
});

const { resolveSkin } = useLumoraConfig();

// Inject the parent's variant, defaulting to 'default'
const injectedVariant = inject("LuTimelineVariant", computed(() => "default"));

// Resolve skins dynamically based on the variant and status
const skinItem = computed(() => resolveSkin("LuTimelineItem", injectedVariant.value));
const skinDotWrapper = computed(() => resolveSkin("LuTimelineDotWrapper"));
const skinDot = computed(() => {
  const componentName = injectedVariant.value === "compact" ? "LuTimelineDotCompact" : "LuTimelineDot";
  return resolveSkin(componentName, props.status === "default" ? undefined : props.status);
});
const skinConnector = computed(() => resolveSkin("LuTimelineConnector"));
const skinContent = computed(() => resolveSkin("LuTimelineContent"));
const skinDate = computed(() => resolveSkin("LuTimelineDate"));
const skinTitle = computed(() => resolveSkin("LuTimelineTitle"));

const statusIcon: Record<string, string> = {
  success: "check",
  warning: "alert-triangle",
  danger: "x",
  info: "info",
  default: "circle",
};
</script>

<template>
  <div :class="skinItem">
    <!-- Left column: dot + connector line -->
    <div :class="skinDotWrapper">
      <div :class="skinDot">
        <slot name="icon">
          <template v-if="injectedVariant === 'numbered'">
            <span class="text-xs font-bold leading-none">{{ index }}</span>
          </template>
          <template v-else>
            <LuIcon :name="statusIcon[status]" :size="injectedVariant === 'compact' ? 10 : 14" />
          </template>
        </slot>
      </div>
      <div v-if="!last" :class="skinConnector" />
    </div>

    <!-- Right column: content -->
    <div :class="skinContent">
      <span v-if="date" :class="skinDate">{{ date }}</span>
      <div v-if="title" :class="skinTitle">{{ title }}</div>
      <slot />
    </div>
  </div>
</template>
