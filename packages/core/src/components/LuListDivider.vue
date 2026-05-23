<template>
  <li role="separator" :class="dividerSkin" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{
  variant?: string;
}>();

const { resolveSkin } = useLumoraConfig();
const dividerSkin = computed(() => resolveSkin("LuListDivider", props.variant));
</script>
