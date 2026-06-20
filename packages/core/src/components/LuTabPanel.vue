<template>
  <div v-show="isActive" v-bind="$attrs" :class="['lu-tab-panel', variant && `lu-tab-panel--${variant}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";

/**
 * Content panel associated with a specific tab.
 */
interface LuTabPanelProps {
  /** Visual variant. Resolves to BEM modifier `lu-tab-panel--{variant}`. */
  variant?: string;
  /** Unique value identifying this panel. Must match a `LuTab` value. */
  value: string | number;
}

const props = defineProps<LuTabPanelProps>();

const activeTab = inject<Ref<string | number | undefined>>("lu-tabs-active");

const isActive = computed(() => activeTab?.value === props.value);

</script>
