<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
import LuText from "./LuText.vue";
import LuIcon from "./LuIcon.vue";

defineOptions({ name: "LuTimelineItem" });

const props = withDefaults(defineProps<{
  date?: string;
  status?: "default" | "success" | "warning" | "danger" | "info";
  last?: boolean;
}>(), {
  status: "default",
  last: false,
});

const { resolveSkin } = useLumoraConfig();

const skinItem = computed(() => resolveSkin("LuTimelineItem"));
const skinDotWrapper = computed(() => resolveSkin("LuTimelineDotWrapper"));
const skinDot = computed(() => resolveSkin("LuTimelineDot", props.status === "default" ? undefined : props.status));
const skinConnector = computed(() => resolveSkin("LuTimelineConnector"));
const skinContent = computed(() => resolveSkin("LuTimelineContent"));
const skinDate = computed(() => resolveSkin("LuTimelineDate"));

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
          <LuIcon :name="statusIcon[status]" :size="14" />
        </slot>
      </div>
      <div v-if="!last" :class="skinConnector" />
    </div>

    <!-- Right column: content -->
    <div :class="skinContent">
      <LuText v-if="date" :class="skinDate">{{ date }}</LuText>
      <slot />
    </div>
  </div>
</template>
