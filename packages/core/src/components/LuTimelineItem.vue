<script setup lang="ts">
import { computed, inject } from "vue";

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



// Inject the parent's variant, defaulting to 'default'
const injectedVariant = inject("LuTimelineVariant", computed(() => "default"));

const skinItem = computed(() => `lu-timeline-item ${injectedVariant.value && injectedVariant.value !== 'default' ? 'lu-timeline-item--'+injectedVariant.value : ''}`.trim());
const skinDotWrapper = computed(() => `lu-timeline-item__dot-wrapper`);
const skinDot = computed(() => {
  const componentName = injectedVariant.value === "compact" ? "lu-timeline-item__dot-compact" : "lu-timeline-item__dot";
  return `${componentName} ${props.status && props.status !== 'default' ? componentName + '--' + props.status : ''}`.trim();
});
const skinConnector = computed(() => `lu-timeline-item__connector`);
const skinContent = computed(() => `lu-timeline-item__content`);
const skinDate = computed(() => `lu-timeline-item__date`);
const skinTitle = computed(() => `lu-timeline-item__title`);

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
            <span class="lu-timeline-item__counter">{{ index }}</span>
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
