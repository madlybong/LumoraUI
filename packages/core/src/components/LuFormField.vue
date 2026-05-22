<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
import LuText from "./LuText.vue";

defineOptions({ name: "LuFormField" });

const props = withDefaults(defineProps<{
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  for?: string;
}>(), {
  required: false,
});

const { resolveSkin } = useLumoraConfig();

const skinField = computed(() => resolveSkin("LuFormField"));
const skinLabel = computed(() => resolveSkin("LuFormFieldLabel"));
const skinHint = computed(() => resolveSkin("LuFormFieldHint"));
const skinError = computed(() => resolveSkin("LuFormFieldError"));
</script>

<template>
  <div :class="skinField">
    <label v-if="label" :for="props.for" :class="skinLabel">
      {{ label }}<span v-if="required" class="text-rose-500 ml-0.5">*</span>
    </label>
    <slot />
    <LuText v-if="error" :class="skinError" role="alert">{{ error }}</LuText>
    <LuText v-else-if="hint" :class="skinHint">{{ hint }}</LuText>
  </div>
</template>
