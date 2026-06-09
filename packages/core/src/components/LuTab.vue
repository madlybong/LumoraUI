<template>
  <button v-bind="$attrs" :class="['lu-tab', variant && `lu-tab--${variant}`, isActive && 'lu-tab--active']" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";

const props = defineProps<{ variant?: string; value: string | number }>();

const activeTab = inject<Ref<string | number | undefined>>("lu-tabs-active");

const isActive = computed(() => activeTab?.value === props.value);

const onClick = () => {
  if (activeTab) {
    activeTab.value = props.value;
  }
};

</script>
