<template>
  <component
    :is="componentType"
    v-bind="$attrs"
    :to="to"
    :href="href"
    :type="componentType === 'button' ? type : undefined"
    :disabled="componentType === 'button' ? isDisabled : undefined"
    :aria-disabled="isDisabled ? 'true' : undefined"
    :aria-busy="loading ? 'true' : undefined"
    :class="[
      'lu-button',
      variant && `lu-button--${variant}`,
      size && size !== 'md' && `lu-button--${size}`,
      align && align !== 'center' && `lu-button--align-${align}`,
      { 'lu-button--full': full },
      { 'lu-button--loading': loading },
      { 'pointer-events-none': isDisabled && componentType !== 'button' }
    ]"
    @click="emit('click', $event)"
  >
    <span class="lu-button__content"><slot /></span>
    <span v-if="loading" class="lu-button__spinner">
      <slot name="loading">
        <LuSpinner class="lu-spinner--md" />
      </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from "vue";
import LuSpinner from "./LuSpinner.vue";

defineOptions({ inheritAttrs: false });

/**
 * Action button. Renders as `<button>`, `<a>`, or `<RouterLink>` depending on props.
 *
 * ⛔ Do NOT add a `class` prop with Tailwind utilities — visual theming is done
 * exclusively via `--lu-*` CSS custom properties in your consumer stylesheet.
 *
 * @example
 * <LuButton variant="primary" @click="save">Save</LuButton>
 * <LuButton :to="{ name: 'home' }">Go Home</LuButton>
 */
interface LuButtonProps {
  /**
   * Native button type attribute. Only applies when rendering as `<button>`.
   * @default 'button'
   */
  type?: "button" | "submit" | "reset";
  /** Disables pointer events. Sets `aria-disabled` on non-`<button>` elements. */
  disabled?: boolean;
  /** Shows an inline `<LuSpinner>`, disables clicks, sets `aria-busy="true"`. */
  loading?: boolean;
  /**
   * Visual intent. Resolves to BEM modifier `lu-button--{variant}`.
   * Leave unset for the default neutral/ghost appearance.
   */
  variant?: string;
  /**
   * Size tier. `'md'` is the implicit default — no BEM modifier is emitted for it.
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";
  /** Override the rendered element tag. Rarely needed. */
  as?: string;
  /** Renders as `<RouterLink :to="...">`. Vue Router must be installed. */
  to?: any;
  /** Renders as `<a :href="...">`. */
  href?: string;
  /**
   * Horizontal alignment of button content.
   * @default 'center'
   */
  align?: "left" | "center" | "right";
  /** Makes the button stretch to 100% of its container (`lu-button--full`). */
  full?: boolean;
}

const props = defineProps<LuButtonProps>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const isDisabled = computed(() => props.disabled || props.loading);

const componentType = computed(() => {
  if (props.as) return props.as;
  if (props.to) {
    const routerLink = resolveComponent("RouterLink");
    return typeof routerLink === 'string' ? 'a' : routerLink;
  }
  if (props.href) return "a";
  return "button";
});
</script>
