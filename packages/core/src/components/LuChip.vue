<template>
  <div
    :class="[
      chipSkin,
      isChipSelected && selectedSkin,
      disabled && disabledSkin
    ]"
    role="button"
    :tabindex="disabled ? -1 : 0"
    :aria-pressed="isChipSelected"
    :aria-disabled="disabled"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <span v-if="$slots.leading" class="shrink-0 flex items-center justify-center">
      <slot name="leading" />
    </span>
    <span class="flex-1 min-w-0">
      <slot>{{ label }}</slot>
    </span>
    <button
      v-if="closable"
      :class="closeSkin"
      type="button"
      aria-label="Remove"
      @click.stop="handleClose"
    >
      <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, type ComputedRef } from "vue";
import { useLumoraConfig } from "../context";

const props = withDefaults(defineProps<{
  label?: string;
  value?: any;
  closable?: boolean;
  selected?: boolean;
  disabled?: boolean;
  variant?: string;
}>(), {
  closable: false,
  selected: false,
  disabled: false
});

const emit = defineEmits<{
  (e: "click", event: Event): void;
  (e: "close", event: Event): void;
}>();

const groupContext = inject<{
  isSelected: (val: any) => ComputedRef<boolean>;
  toggleValue: (val: any) => void;
} | null>("lu-chip-group-selection", null);

const isChipSelected = computed(() => {
  if (groupContext && props.value !== undefined) {
    return groupContext.isSelected(props.value).value;
  }
  return props.selected;
});

const handleClick = (event: Event) => {
  if (props.disabled) return;
  if (groupContext && props.value !== undefined) {
    groupContext.toggleValue(props.value);
  }
  emit("click", event);
};

const handleClose = (event: Event) => {
  if (props.disabled) return;
  emit("close", event);
};

const { resolveSkin } = useLumoraConfig();

const chipSkin = computed(() => resolveSkin("LuChip", props.variant));
const selectedSkin = computed(() => resolveSkin("LuChip.selected", props.variant));
const disabledSkin = computed(() => resolveSkin("LuChip.disabled", props.variant));
const closeSkin = computed(() => resolveSkin("LuChipClose", props.variant));

defineExpose({ isChipSelected });
</script>
