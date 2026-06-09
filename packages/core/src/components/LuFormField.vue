<script setup lang="ts">
import { computed } from "vue";
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


</script>

<template>
  <div :class="['lu-form-field']">
    <label v-if="label" :for="props.for" :class="['lu-form-field__label']">
      {{ label }}<span v-if="required" class="lu-form-field__error-icon">*</span>
    </label>
    <slot />
    <LuText v-if="error" :class="['lu-form-field__error']" role="alert">{{ error }}</LuText>
    <LuText v-else-if="hint" :class="['lu-form-field__hint']">{{ hint }}</LuText>
  </div>
</template>
