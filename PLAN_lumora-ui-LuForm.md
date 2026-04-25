# `@astrake/lumora-ui` — `LuForm` Addition Plan

**Repo:** `https://github.com/madlybong/LumoraUI`  
**Package root:** `packages/core/src/`  
**Target version bump:** `0.1.5` → `0.1.6`  
**Runtime:** Vue 3.5+ · TypeScript 5.9+ · Vite (library mode)

This plan is self-contained. Do not reference any consumer application.

---

## Source Map (read these files first)

| File | Purpose |
|---|---|
| `packages/core/src/components/index.ts` | Component exports — add `LuForm` here |
| `packages/core/src/components/LuInput.vue` | Existing input pattern — reference for how `name` should work |
| `packages/core/src/context.ts` | `useLumoraConfig()` / `LumoraUIConfigKey` — use in LuForm |
| `packages/core/src/types.ts` | `LumoraUIConfig`, `SkinMap` — reference only, no change |
| `packages/core/src/plugin.ts` | `createLumoraUI` — reference only, no change |
| `packages/core/src/index.ts` | Public exports — `LuForm` will be re-exported from here automatically via `components/index.ts` |

---

## What `LuForm` Is

`LuForm` is a **validation orchestrator and event wrapper** — not a form renderer.

The developer places any `Lu*` input components inside `LuForm`'s default slot and composes the layout however they like. `LuForm` does not render fields, does not dictate layout, does not know about field types. It only:

1. Provides a validation context that child inputs can opt into via their `name` attribute
2. Runs validation rules on submit (and optionally on blur)
3. Exposes reactive error state per field name
4. Emits `submit` (with form values), `reset`, and `error` events
5. Exposes named slots `#errors` and `#actions` for flexible UI composition

---

## `LuForm` — Full Specification

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `rules` | `LuFormRules` | `{}` | Validation rules keyed by field `name` |
| `validateOn` | `"submit" \| "blur" \| "both"` | `"submit"` | When validation triggers |
| `resetOnSubmit` | `boolean` | `false` | Clear values and errors after successful submit |
| `disabled` | `boolean` | `false` | Passes `disabled` context to all registered children |

### Emits

| Event | Payload | Description |
|---|---|---|
| `submit` | `Record<string, unknown>` | Fires when all validations pass; payload is `{ [name]: value }` |
| `reset` | — | Fires after form is reset |
| `error` | `LuFormErrors` | Fires when submit fails validation; payload is `{ [name]: string }` |

### Slots

| Slot | Scope | Description |
|---|---|---|
| `default` | — | Form content — the developer places all inputs here |
| `errors` | `{ errors: LuFormErrors, hasErrors: boolean }` | Optional global error display area |
| `actions` | `{ submit: () => void, reset: () => void, pending: boolean }` | Optional action buttons area |

### Exposed (via `defineExpose`)

| Name | Type | Description |
|---|---|---|
| `submit()` | `() => void` | Programmatically trigger submit |
| `reset()` | `() => void` | Programmatically trigger reset |
| `errors` | `Readonly<Ref<LuFormErrors>>` | Reactive error state |
| `values` | `Readonly<Ref<Record<string, unknown>>>` | Reactive field values |
| `pending` | `Readonly<Ref<boolean>>` | True while async submit handler is running |

---

## New Types

### File: `packages/core/src/components/LuForm.types.ts`

```ts
export type LuFormValidator = (value: unknown) => string | null | Promise<string | null>;

export type LuFormRules = Record<string, LuFormValidator | LuFormValidator[]>;

export type LuFormErrors = Record<string, string>;

export interface LuFormFieldRegistration {
  name: string;
  getValue: () => unknown;
  setValue: (v: unknown) => void;
  setError: (msg: string | null) => void;
}

export const LuFormContextKey = Symbol("LuFormContext") as InjectionKey<LuFormContext>;

export interface LuFormContext {
  register(field: LuFormFieldRegistration): void;
  unregister(name: string): void;
  getError(name: string): string | null;
  validateOn: Readonly<Ref<"submit" | "blur" | "both">>;
  disabled: Readonly<Ref<boolean>>;
}
```

> Note: `InjectionKey` and `Ref` must be imported from `vue`.

---

## New File: `packages/core/src/components/LuForm.vue`

```vue
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
  validateOn: readonly(ref(props.validateOn)) as any,
  disabled: readonly(ref(props.disabled)) as any,
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
```

---

## Updating Existing Input Components

Each existing input component (`LuInput`, `LuSelect`, `LuSwitch`) must be updated to:

1. Accept a `name` prop (`string | undefined`)
2. Accept an `error` prop (`string | null | undefined`) for external error display
3. On mount, register with `LuFormContext` if `name` is set and context is available
4. On unmount, call `context.unregister(name)`
5. On blur, call `context`'s validator if `validateOn` is `"blur"` or `"both"`

### Changes to `packages/core/src/components/LuInput.vue`

```vue
<template>
  <input
    v-bind="$attrs"
    :class="resolvedSkin"
    :value="modelValue"
    :name="name"
    :disabled="formContext?.disabled.value"
    @input="onInput"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from "vue";
import { useLumoraConfig } from "../context";
import { LuFormContextKey } from "./LuForm.types";

const props = defineProps<{
  modelValue?: string | number;
  variant?: string;
  name?: string;
  error?: string | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur"): void;
}>();

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => resolveSkin("LuInput", props.variant));

const formContext = inject(LuFormContextKey, null);
const internalValue = ref<string | number | undefined>(props.modelValue);

const onInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  internalValue.value = value;
  emit("update:modelValue", value);
};

const onBlur = () => {
  if (props.name && formContext && (formContext.validateOn.value === "blur" || formContext.validateOn.value === "both")) {
    // trigger single-field validation — handled by parent LuForm
  }
  emit("blur");
};

onMounted(() => {
  if (!props.name || !formContext) return;
  formContext.register({
    name: props.name,
    getValue: () => internalValue.value,
    setValue: (v) => { internalValue.value = v as string; },
    setError: (_msg) => { /* error display handled via formContext.getError in template if desired */ },
  });
});

onUnmounted(() => {
  if (props.name && formContext) formContext.unregister(props.name);
});
</script>
```

Apply equivalent changes (same pattern) to:
- `LuSelect.vue` — `getValue` returns the selected option value
- `LuSwitch.vue` — `getValue` returns the boolean checked state

---

## Export

In `packages/core/src/components/index.ts`, add:
```ts
export { default as LuForm } from "./LuForm.vue";
export type { LuFormRules, LuFormErrors, LuFormValidator, LuFormContext } from "./LuForm.types";
```

`LuFormContextKey` is internal — do **not** export it from the public API.

---

## Tests

File: `packages/core/src/components/__tests__/LuForm.test.ts`

Use `@vue/test-utils` + `vitest`.

### Test cases

**Basic submit**
- Mount `LuForm` with a `LuInput` (name="email") inside default slot
- Fill the input, call `wrapper.find("form").trigger("submit")`
- `submit` event emitted with `{ email: "..." }`

**Validation — rule fails**
- Rule: `(v) => !v ? "Required" : null`
- Submit with empty input → `error` event emitted; `errors.email === "Required"`; `submit` not emitted

**Validation — rule passes**
- Fill input → submit → `submit` emitted, `errors` is `{}`

**Multiple validators on one field**
- Rules: `[notEmpty, minLength(3)]`
- Value `"ab"` → first rule passes, second fails → error from second rule shown

**Reset**
- Fill input, trigger reset → `reset` event emitted; `values.email` is `undefined`

**`resetOnSubmit: true`**
- Fill and submit (valid) → after submit, values cleared

**`validateOn: "both"` with blur**
- Trigger blur on LuInput → validate called; errors update reactively

**Programmatic submit/reset via `defineExpose`**
- `wrapper.vm.submit()` triggers validation and emits `submit`
- `wrapper.vm.reset()` emits `reset`

**No `LuForm` parent**
- Mount `LuInput` standalone with `name="x"` → no error thrown; works as before

**`disabled` prop**
- `LuForm` with `disabled: true` → all registered inputs receive `disabled` from context

---

## Version & Export Checklist

1. Bump `packages/core/VERSION` from `0.1.5` to `0.1.6`
2. `LuForm.vue` created in `packages/core/src/components/`
3. `LuForm.types.ts` created in `packages/core/src/components/`
4. `LuInput.vue`, `LuSelect.vue`, `LuSwitch.vue` updated with `name`, `error`, form context registration
5. `packages/core/src/components/index.ts` exports `LuForm` and public types
6. Run `bun run check` (vue-tsc) — zero errors
7. Run `bun test` — all existing tests pass + new tests pass
8. Update `CHANGELOG.md` under `## [0.1.6]`

## Guardrails
- `LuForm` does **not** render any field UI — default slot only
- `LuForm` has no opinion on grid, columns, label placement, or field ordering
- `LuFormContextKey` is a `Symbol` — not exported publicly — to avoid misuse
- Existing behaviour of `LuInput`, `LuSelect`, `LuSwitch` when used **without** `LuForm` must be identical to current — the `inject` returns `null` and the `onMounted` guard exits early
- Do not add a `schema` prop or any field-description object to `LuForm` — rules are the only structured input
