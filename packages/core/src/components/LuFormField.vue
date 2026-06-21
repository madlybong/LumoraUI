<script setup lang="ts">
import { computed } from "vue";
import LuText from "./LuText.vue";

defineOptions({ name: "LuFormField" });

/**
 * Form field wrapper that handles label, required indicator, hint, and error text.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ NEVER manually construct labels and error messages with raw HTML in forms.
 * - Always wrap inputs (`LuInput`, `LuSelect`, etc) in `<LuFormField>`.
 */
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
