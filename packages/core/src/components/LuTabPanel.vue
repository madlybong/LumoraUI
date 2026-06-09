<template>
  <div v-show="isActive" v-bind="$attrs" :class="['lu-tab-panel', variant && `lu-tab-panel--${variant}`]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";

const props = defineProps<{ variant?: string; value: string | number }>();

const activeTab = inject<Ref<string | number | undefined>>("lu-tabs-active");

const isActive = computed(() => activeTab?.value === props.value);

</script>
