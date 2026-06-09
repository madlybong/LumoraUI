<template>
  <li role="separator" :class="dividerSkin" />
</template>

<script setup lang="ts">
import { computed } from "vue";


const props = defineProps<{
  variant?: string;
}>();

const dividerSkin = computed(() => `lu-list-divider ${props.variant && props.variant !== 'default' ? 'lu-list-divider--'+props.variant : ''}`.trim());
</script>
