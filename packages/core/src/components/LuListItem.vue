<template>
  <component 
    :is="as" 
    :class="[
      itemSkin,
      active && activeSkin,
      disabled && disabledSkin,
      (clickable && !disabled) && 'lu-list-item--clickable'
    ]"
    :tabindex="(clickable && !disabled) ? 0 : undefined"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <div v-if="$slots.leading" :class="leadingSkin">
      <slot name="leading" />
    </div>
    <div :class="contentSkin">
      <slot />
    </div>
    <div v-if="$slots.trailing" :class="trailingSkin">
      <slot name="trailing" />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * List item component for use inside `<LuList>` or standalone.
 *
 * 🤖 **AI Agent Usage Notes (Zero-Raw-HTML Adherence)**:
 * - ⛔ Do NOT add raw Tailwind classes for padding/margins.
 * - Use `leading` and `trailing` slots for icons and actions.
 */
const props = withDefaults(defineProps<{
  as?: string;
  active?: boolean;
  disabled?: boolean;
  clickable?: boolean;
  variant?: string;
}>(), {
  as: "li",
  active: false,
  disabled: false,
  clickable: false
});

const emit = defineEmits<{
  (e: "click", event: Event): void;
}>();

const handleClick = (event: Event) => {
  if (props.disabled) return;
  emit("click", event);
};

const itemSkin = computed(() => `lu-list-item ${props.variant && props.variant !== 'default' ? 'lu-list-item--'+props.variant : ''}`.trim());
const activeSkin = computed(() => `lu-list-item--active`);
const disabledSkin = computed(() => `lu-list-item--disabled`);
const leadingSkin = computed(() => `lu-list-item__leading ${props.variant && props.variant !== 'default' ? 'lu-list-item__leading--'+props.variant : ''}`.trim());
const contentSkin = computed(() => `lu-list-item__content ${props.variant && props.variant !== 'default' ? 'lu-list-item__content--'+props.variant : ''}`.trim());
const trailingSkin = computed(() => `lu-list-item__trailing ${props.variant && props.variant !== 'default' ? 'lu-list-item__trailing--'+props.variant : ''}`.trim());
</script>
