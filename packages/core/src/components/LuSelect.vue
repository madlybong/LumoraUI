<template>
  <div class="lu-select__root" ref="containerRef">
    <button
      type="button"
      :class="[resolvedSkin, error ? errorSkin : '']"
      :disabled="isDisabled"
      :aria-haspopup="true"
      :aria-expanded="isOpen"
      @click="toggle"
      @keydown.down.prevent="open"
      @keydown.up.prevent="open"
      @keydown.esc.prevent="close"
      @blur="onBlur"
    >
      <span v-if="selectedOption" class="truncate">
        {{ selectedOption.label }}
      </span>
      <span v-else :class="placeholderSkin">{{ placeholder }}</span>

      <slot name="trigger-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :class="[iconSkin, isOpen ? iconOpenSkin : '']"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </slot>
    </button>

    <select
      hidden
      :name="name"
      :value="modelValue"
      :disabled="isDisabled"
    >
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>

    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="panelRef"
        :class="panelSkin"
        :style="{
          top: `${y}px`,
          left: `${x}px`,
          minWidth: `${triggerWidth}px`
        }"
      >
        <input
          v-if="searchable"
          ref="searchInputRef"
          v-model="searchQuery"
          type="text"
          :class="searchSkin"
          placeholder="Search..."
          @keydown.down.prevent="navigate(1)"
          @keydown.up.prevent="navigate(-1)"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.esc.prevent="close"
        />

        <div :class="listSkin" @keydown.esc.prevent="close">
          <div v-if="filteredOptions.length === 0" :class="emptySkin">
            No options found
          </div>
          <div
            v-for="(opt, index) in filteredOptions"
            :key="opt.value"
            :class="[
              optionSkin,
              index === activeIndex ? activeSkin : '',
              modelValue === opt.value ? selectedSkin : '',
              opt.disabled ? disabledSkin : ''
            ]"
            @click="selectOption(opt)"
            @mouseenter="activeIndex = index"
          >
            <slot name="option" :option="opt" :selected="modelValue === opt.value">
              <span class="truncate">{{ opt.label }}</span>
            </slot>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref, watch, nextTick } from "vue";

import { LuFormContextKey } from "./LuForm.types";
import { useFloating } from "../composables/useFloating";

/**
 * Custom styled select dropdown with search filtering support.
 *
 * ⛔ Do NOT add a `class` prop with Tailwind utilities.
 *
 * @example
 * <LuSelect v-model="status" :options="[{label: 'Active', value: 'active'}]" />
 */
interface LuSelectProps {
  /** The selected value. Use `v-model` to bind. */
  modelValue?: string | number;
  /** Visual variant. Resolves to BEM modifier `lu-select--{variant}`. */
  variant?: string;
  /** Array of option objects to render in the dropdown. */
  options: Array<{ value: string | number; label: string; disabled?: boolean; icon?: string }>;
  /** Field name for form registration. */
  name?: string;
  /** Error state message. */
  error?: string | null;
  /** Placeholder text shown when no option is selected. @default 'Select an option' */
  placeholder?: string;
  /** Enables an internal search input to filter options. @default false */
  searchable?: boolean;
  /** Disables the entire select component. */
  disabled?: boolean;
}

const props = withDefaults(defineProps<LuSelectProps>(), {
  placeholder: "Select an option",
  searchable: false,
  disabled: false
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
  (e: "blur"): void;
  (e: "open"): void;
  (e: "close"): void;
}>();



const resolvedSkin = computed(() => `lu-select ${props.variant && props.variant !== 'default' ? 'lu-select--'+props.variant : ''}`.trim());
const errorSkin = computed(() => `lu-select--error`);
const iconSkin = computed(() => `lu-select__icon ${props.variant && props.variant !== 'default' ? 'lu-select__icon--'+props.variant : ''}`.trim());
const iconOpenSkin = computed(() => `lu-select__icon--open`);
const panelSkin = computed(() => `lu-select__panel ${props.variant && props.variant !== 'default' ? 'lu-select__panel--'+props.variant : ''}`.trim());
const searchSkin = computed(() => `lu-select__search ${props.variant && props.variant !== 'default' ? 'lu-select__search--'+props.variant : ''}`.trim());
const listSkin = computed(() => `lu-select__option-list ${props.variant && props.variant !== 'default' ? 'lu-select__option-list--'+props.variant : ''}`.trim());
const optionSkin = computed(() => `lu-select__option ${props.variant && props.variant !== 'default' ? 'lu-select__option--'+props.variant : ''}`.trim());
const activeSkin = computed(() => `lu-select__option--active`);
const selectedSkin = computed(() => `lu-select__option--selected`);
const disabledSkin = computed(() => `lu-select__option--disabled`);
const emptySkin = computed(() => `lu-select__empty ${props.variant && props.variant !== 'default' ? 'lu-select__empty--'+props.variant : ''}`.trim());
const placeholderSkin = computed(() => `lu-select__placeholder ${props.variant && props.variant !== 'default' ? 'lu-select__placeholder--'+props.variant : ''}`.trim());

const formContext = inject(LuFormContextKey, null);
const internalValue = ref<string | number | undefined>(props.modelValue);
const isDisabled = computed(() => props.disabled || formContext?.disabled.value);

const isOpen = ref(false);
const searchQuery = ref("");
const activeIndex = ref(-1);
const containerRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);
const triggerWidth = ref(0);

const { x, y, update } = useFloating(containerRef, panelRef, { placement: 'bottom-start', offset: 4 });

const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) return props.options;
  const q = searchQuery.value.toLowerCase();
  return props.options.filter(o => o.label.toLowerCase().includes(q));
});

const selectedOption = computed(() => {
  const val = props.modelValue !== undefined ? props.modelValue : internalValue.value;
  return props.options.find(o => o.value === val);
});

const toggle = () => {
  if (isDisabled.value) return;
  if (isOpen.value) close();
  else open();
};

const open = async () => {
  if (isDisabled.value) return;
  isOpen.value = true;
  searchQuery.value = "";
  if (containerRef.value) {
    triggerWidth.value = containerRef.value.getBoundingClientRect().width;
  }
  emit("open");
  
  await nextTick();
  update();
  
  if (props.searchable && searchInputRef.value) {
    searchInputRef.value.focus();
  }
  
  // Highlight currently selected option
  const selectedIndex = filteredOptions.value.findIndex(o => o.value === (props.modelValue ?? internalValue.value));
  activeIndex.value = selectedIndex >= 0 ? selectedIndex : 0;
};

const close = () => {
  isOpen.value = false;
  activeIndex.value = -1;
  emit("close");
  if (containerRef.value) {
    (containerRef.value.firstElementChild as HTMLElement)?.focus();
  }
};

const selectOption = (opt: typeof props.options[0]) => {
  if (opt.disabled) return;
  internalValue.value = opt.value;
  emit("update:modelValue", opt.value);
  close();
  
  if (props.name && formContext && (formContext.validateOn.value === "blur" || formContext.validateOn.value === "both")) {
    // validation is handled by parent
  }
};

const navigate = (dir: number) => {
  const max = filteredOptions.value.length - 1;
  if (max < 0) return;
  
  let newIndex = activeIndex.value + dir;
  if (newIndex < 0) newIndex = max;
  if (newIndex > max) newIndex = 0;
  
  // skip disabled
  let attempts = 0;
  while (filteredOptions.value[newIndex].disabled && attempts <= max) {
    newIndex += dir;
    if (newIndex < 0) newIndex = max;
    if (newIndex > max) newIndex = 0;
    attempts++;
  }
  
  activeIndex.value = newIndex;
};

const selectHighlighted = () => {
  if (activeIndex.value >= 0 && activeIndex.value < filteredOptions.value.length) {
    selectOption(filteredOptions.value[activeIndex.value]);
  }
};

const onBlur = (e: FocusEvent) => {
  if (props.name && formContext && (formContext.validateOn.value === "blur" || formContext.validateOn.value === "both")) {
    // validation is handled by parent
  }
  emit("blur");
};

// Handle outside click to close
const handleOutsideClick = (e: MouseEvent) => {
  if (!isOpen.value) return;
  const target = e.target as Node;
  if (containerRef.value?.contains(target) || panelRef.value?.contains(target)) return;
  close();
};

watch(() => props.modelValue, (newVal) => {
  internalValue.value = newVal;
});

onMounted(() => {
  document.addEventListener('mousedown', handleOutsideClick);
  if (!props.name || !formContext) return;
  formContext.register({
    name: props.name,
    getValue: () => internalValue.value,
    setValue: (v) => { internalValue.value = v as string | number; },
    setError: (_msg) => {},
  });
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleOutsideClick);
  if (props.name && formContext) formContext.unregister(props.name);
});
</script>
