<template>
  <div v-bind="$attrs" :class="[resolvedSkin, isCollapsed ? collapsedSkin : '']" :aria-expanded="!isCollapsed">
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

defineOptions({ name: "LuDesktopSidebar" });

const props = defineProps<{ 
  variant?: "default" | "narrow" | "bordered";
  collapsible?: boolean;
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const isOpen = computed({
  get: () => props.modelValue ?? true,
  set: (val) => emit("update:modelValue", val)
});

const isCollapsed = computed(() => props.collapsible && !isOpen.value);

const slots = useSlots();
const hasHeader = computed(() => !!slots.header);
const hasContent = computed(() => !!slots.content);
const hasFooter = computed(() => !!slots.footer);
const resolvedSkin = computed(() => `lu-desktop-sidebar ${props.variant && props.variant !== "default" ? "lu-desktop-sidebar--"+props.variant : ""}`.trim());
const collapsedSkin = computed(() => `lu-desktop-sidebar--collapsed`);
const headerSkin = computed(() => `lu-desktop-sidebar-header ${props.variant && props.variant !== "default" ? "lu-desktop-sidebar-header--"+props.variant : ""}`.trim());
const contentSkin = computed(() => `lu-desktop-sidebar-content ${props.variant && props.variant !== "default" ? "lu-desktop-sidebar-content--"+props.variant : ""}`.trim());
const footerSkin = computed(() => `lu-desktop-sidebar-footer ${props.variant && props.variant !== "default" ? "lu-desktop-sidebar-footer--"+props.variant : ""}`.trim());
</script>
