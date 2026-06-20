<template>
  <div :class="rootSkin">
    <!-- Prepend Zone -->
    <div v-if="hasPrepend" class="lu-input__prepend">
      <slot name="prepend">
        <LuIcon v-if="prependIcon" :name="prependIcon" :size="16" class="lu-input__icon" />
      </slot>
    </div>

    <!-- Native Input -->
    <input
      ref="inputRef"
      v-bind="$attrs"
      :class="resolvedSkin"
      :type="resolvedType"
      :value="modelValue"
      :name="name"
      :disabled="formContext?.disabled.value"
      @input="onInput"
      @blur="onBlur"
    />

    <!-- Append Zone -->
    <div v-if="hasAppend" class="lu-input__append">
      <button
        v-if="isPasswordType"
        type="button"
        class="lu-input__reveal-button"
        :aria-label="showPassword ? 'Hide password' : 'Show password'"
        @click.stop="showPassword = !showPassword"
      >
        <LuIcon :name="showPassword ? 'eye-off' : 'eye'" :size="16" class="lu-input__icon" />
      </button>
      <slot v-else name="append">
        <LuIcon v-if="appendIcon" :name="appendIcon" :size="16" class="lu-input__icon" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, useSlots } from "vue";
import { LuFormContextKey } from "./LuForm.types";
import LuIcon from "./LuIcon.vue";

defineOptions({ name: "LuInput" });

/**
 * Text input component with prepend/append slot support and optional input masking.
 *
 * ⛔ Do NOT add a `class` prop with Tailwind utilities — visual theming is done
 * exclusively via `--lu-*` CSS custom properties.
 *
 * @example
 * <LuInput v-model="email" type="email" prependIcon="mail" />
 */
interface LuInputProps {
  /** The value of the input. Use `v-model` to bind. */
  modelValue?: string | number;
  /** Visual variant. Resolves to BEM modifier `lu-input--{variant}`. */
  variant?: string;
  /** Field name, used for form registration if inside a `<LuForm>`. */
  name?: string;
  /** Error message. Applies `lu-input--error` state if truthy. */
  error?: string | null;
  /** Native input type (e.g. 'text', 'password', 'email'). @default 'text' */
  type?: string;
  /** Name of the icon to render in the prepend zone. */
  prependIcon?: string;
  /** Name of the icon to render in the append zone. */
  appendIcon?: string;
  /** Maska pattern for input masking (e.g. '(###) ###-####'). */
  mask?: string | string[];
  /** Additional options for Maska. */
  maskOptions?: Record<string, unknown>;
}

const props = defineProps<LuInputProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur"): void;
}>();

const slots = useSlots();
const inputRef = ref<HTMLInputElement | null>(null);
const formContext = inject(LuFormContextKey, null);
const internalValue = ref<string | number | undefined>(props.modelValue);

// Type handling (password reveal)
const isPasswordType = computed(() => props.type === "password");
const showPassword = ref(false);
const resolvedType = computed(() =>
  isPasswordType.value ? (showPassword.value ? "text" : "password") : (props.type ?? "text")
);

// Zone presence
const hasPrepend = computed(() => !!props.prependIcon || !!slots.prepend);
const hasAppend = computed(() => !!props.appendIcon || !!slots.append || isPasswordType.value);

// BEM classes
const rootSkin = computed(() => [
  "lu-input__root",
  props.error && "lu-input__root--error",
  formContext?.disabled.value && "lu-input__root--disabled"
].filter(Boolean).join(" "));

const resolvedSkin = computed(() => [
  "lu-input",
  props.variant && props.variant !== "default" && `lu-input--${props.variant}`,
  isPasswordType.value && "lu-input--password"
].filter(Boolean).join(" "));

// Maska Integration
onMounted(async () => {
  if (!props.mask || !inputRef.value) return;
  try {
    const { MaskInput } = await import("maska");
    new MaskInput(inputRef.value, {
      mask: props.mask as string | string[],
      ...props.maskOptions,
      onMaska: (detail: any) => {
        internalValue.value = detail.unmasked;
        emit("update:modelValue", detail.unmasked);
      }
    });
  } catch {
    // maska not installed, ignore
  }
});

const onInput = (event: Event) => {
  // If maska is active, let it handle the emit.
  // Otherwise, handle it here.
  if (props.mask) return; 

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
    setError: (_msg) => {},
  });
});

onUnmounted(() => {
  if (props.name && formContext) formContext.unregister(props.name);
});
</script>
