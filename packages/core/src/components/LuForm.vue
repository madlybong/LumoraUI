<template>
  <form @submit.prevent="handleSubmit" @reset.prevent="handleReset">
    <slot />
    <slot
      name="errors"
      :errors="errors"
      :has-errors="hasErrors"
    />
    <slot
      name="actions"
      :submit="handleSubmit"
      :reset="handleReset"
      :pending="pending"
    />
  </form>
</template>

<script setup lang="ts">
import { ref, computed, provide, readonly } from "vue";
import type { LuFormRules, LuFormErrors, LuFormFieldRegistration, LuFormContext } from "./LuForm.types";
import { LuFormContextKey } from "./LuForm.types";

const props = withDefaults(defineProps<{
  rules?: LuFormRules;
  validateOn?: "submit" | "blur" | "both";
  resetOnSubmit?: boolean;
  disabled?: boolean;
}>(), {
  rules: () => ({}),
  validateOn: "submit",
  resetOnSubmit: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: "submit", values: Record<string, unknown>): void;
  (e: "reset"): void;
  (e: "error", errors: LuFormErrors): void;
}>();

const fields = new Map<string, LuFormFieldRegistration>();
const errors = ref<LuFormErrors>({});
const pending = ref(false);
const hasErrors = computed(() => Object.keys(errors.value).length > 0);

async function validate(): Promise<boolean> {
  const nextErrors: LuFormErrors = {};

  for (const [name, field] of fields) {
    const rule = props.rules?.[name];
    if (!rule) continue;

    const validators = Array.isArray(rule) ? rule : [rule];
    const value = field.getValue();

    for (const validator of validators) {
      const result = await validator(value);
      if (result) {
        nextErrors[name] = result;
        field.setError(result);
        break;
      } else {
        field.setError(null);
      }
    }
  }

  errors.value = nextErrors;
  return Object.keys(nextErrors).length === 0;
}

async function handleSubmit() {
  pending.value = true;
  try {
    const valid = await validate();
    if (!valid) {
      emit("error", errors.value);
      return;
    }
    const values: Record<string, unknown> = {};
    for (const [name, field] of fields) {
      values[name] = field.getValue();
    }
    emit("submit", values);
    if (props.resetOnSubmit) handleReset();
  } finally {
    pending.value = false;
  }
}

function handleReset() {
  errors.value = {};
  for (const field of fields.values()) {
    field.setValue(undefined);
    field.setError(null);
  }
  emit("reset");
}

const context: LuFormContext = {
  register(field) { fields.set(field.name, field); },
  unregister(name) { fields.delete(name); },
  getError(name) { return errors.value[name] ?? null; },
  validateOn: computed(() => props.validateOn),
  disabled: computed(() => props.disabled),
};

provide(LuFormContextKey, context);

defineExpose({
  submit: handleSubmit,
  reset: handleReset,
  errors: readonly(errors),
  pending: readonly(pending),
  values: computed(() => {
    const v: Record<string, unknown> = {};
    for (const [name, field] of fields) v[name] = field.getValue();
    return v;
  }),
});
</script>
