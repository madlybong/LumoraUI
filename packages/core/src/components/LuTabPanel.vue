<template>
  <div v-show="isActive" v-bind="$attrs" :class="resolvedSkin">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string; value: string | number }>();

const activeTab = inject<Ref<string | number | undefined>>("lu-tabs-active");

const isActive = computed(() => activeTab?.value === props.value);

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuTabPanel", props.variant));
</script>
