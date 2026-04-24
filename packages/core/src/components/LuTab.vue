<template>
  <button v-bind="$attrs" :class="[resolvedSkin, isActive ? activeSkin : '']" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string; value: string | number }>();

const activeTab = inject<Ref<string | number | undefined>>("lu-tabs-active");

const isActive = computed(() => activeTab?.value === props.value);

const onClick = () => {
  if (activeTab) {
    activeTab.value = props.value;
  }
};

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuTab", props.variant));
const activeSkin = computed(() => resolveSkin("LuTab", "active"));
</script>
