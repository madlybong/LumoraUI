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
import { useLumoraConfig } from "../context";
import LuIcon from "./LuIcon.vue";

const props = defineProps<{
  variant?: string;
  icon?: string;
}>();

const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => resolveSkin("LuAlert", props.variant));
const resolvedIconWrapperSkin = computed(() => resolveSkin("LuAlertIcon", props.variant));
const resolvedContentSkin = computed(() => resolveSkin("LuAlertContent", props.variant));
const resolvedActionSkin = computed(() => resolveSkin("LuAlertAction", props.variant));
</script>
