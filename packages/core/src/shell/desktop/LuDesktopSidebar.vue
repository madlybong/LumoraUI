<template>
  <div v-bind="$attrs" :class="resolvedSkin">
    <!-- Named slot layout: sticky header + scrollable content + sticky footer -->
    <template v-if="hasHeader || hasContent || hasFooter">
      <div v-if="hasHeader" :class="headerSkin">
        <slot name="header" />
      </div>
      <div :class="contentSkin">
        <slot name="content" />
      </div>
      <div v-if="hasFooter" :class="footerSkin">
        <slot name="footer" />
      </div>
    </template>
    <!-- Fallback: legacy default slot (no layout enforcement) -->
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import { useLumoraConfig } from "../../context";

const props = defineProps<{ variant?: string }>();

const slots = useSlots();
const hasHeader = computed(() => !!slots.header);
const hasContent = computed(() => !!slots.content);
const hasFooter = computed(() => !!slots.footer);

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuDesktopSidebar", props.variant));
const headerSkin = computed(() => resolveSkin("LuDesktopSidebarHeader", props.variant));
const contentSkin = computed(() => resolveSkin("LuDesktopSidebarContent", props.variant));
const footerSkin = computed(() => resolveSkin("LuDesktopSidebarFooter", props.variant));
</script>
