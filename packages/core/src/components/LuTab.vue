<template>
  <button v-bind="$attrs" :class="['lu-tab', variant && `lu-tab--${variant}`, isActive && 'lu-tab--active']" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";

/**
 * A single tab trigger button.
 */
interface LuTabProps {
  /** Visual variant. Resolves to BEM modifier `lu-tab--{variant}`. */
  variant?: string;
  /** Unique value identifying this tab. Must match a `LuTabPanel` value. */
  value: string | number;
}

const props = defineProps<LuTabProps>();

const activeTab = inject<Ref<string | number | undefined>>("lu-tabs-active");

const isActive = computed(() => activeTab?.value === props.value);

const onClick = () => {
  if (activeTab) {
    activeTab.value = props.value;
  }
};

</script>
