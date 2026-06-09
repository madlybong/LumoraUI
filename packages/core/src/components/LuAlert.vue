<template>
  <div :class="resolvedSkin" role="alert">
    <div v-if="$slots.icon || icon" :class="resolvedIconWrapperSkin">
      <slot name="icon">
        <LuIcon v-if="icon" :name="icon" />
      </slot>
    </div>
    <div :class="resolvedContentSkin">
      <slot />
    </div>
    <div v-if="$slots.action" :class="resolvedActionSkin">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import LuIcon from "./LuIcon.vue";

const props = defineProps<{
  variant?: string;
  icon?: string;
}>();


const resolvedSkin = computed(() => `lu-alert ${props.variant && props.variant !== 'default' ? 'lu-alert--'+props.variant : ''}`.trim());
const resolvedIconWrapperSkin = computed(() => `lu-alert__icon-wrapper ${props.variant && props.variant !== 'default' ? 'lu-alert__icon-wrapper--'+props.variant : ''}`.trim());
const resolvedContentSkin = computed(() => `lu-alert__content ${props.variant && props.variant !== 'default' ? 'lu-alert__content--'+props.variant : ''}`.trim());
const resolvedActionSkin = computed(() => `lu-alert__action ${props.variant && props.variant !== 'default' ? 'lu-alert__action--'+props.variant : ''}`.trim());
</script>
