<template>
  <span :class="resolvedSkin">
    <slot />
    <LuButton
      v-if="closable"
      variant="icon"
      :class="resolvedCloseButtonSkin"
      @click.stop="emit('close')"
      aria-label="Remove"
    >
      <LuIcon name="x" :class="resolvedIconSkin" />
    </LuButton>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
import LuIcon from "./LuIcon.vue";
import LuButton from "./LuButton.vue";

const props = defineProps<{
  variant?: string;
  closable?: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => resolveSkin("LuTag", props.variant));
const resolvedCloseButtonSkin = computed(() => resolveSkin("LuTagCloseButton", props.variant));
const resolvedIconSkin = computed(() => resolveSkin("LuTagIcon", props.variant));
</script>
