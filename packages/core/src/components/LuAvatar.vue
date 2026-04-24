<template>
  <div v-bind="$attrs" :class="containerSkin" :data-size="size">
    <img v-if="src && !hasError" :src="src" :alt="alt" :class="imageSkin" @error="hasError = true" />
    <div v-else :class="fallbackSkin">
      <slot>{{ fallback }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from "../context";

const props = defineProps<{ variant?: string; src?: string; fallback?: string; alt?: string; size?: string }>();

const hasError = ref(false);

const { resolveSkin } = useLumoraConfig();
const containerSkin = computed(() => resolveSkin("LuAvatar", props.variant));
const imageSkin = computed(() => resolveSkin("LuAvatarImage", props.variant));
const fallbackSkin = computed(() => resolveSkin("LuAvatarFallback", props.variant));
</script>
