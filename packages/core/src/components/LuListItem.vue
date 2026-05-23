<template>
  <component 
    :is="as" 
    :class="[
      itemSkin,
      active && activeSkin,
      disabled && disabledSkin,
      (clickable && !disabled) && 'cursor-pointer'
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
import { useLumoraConfig } from "../context";

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

const { resolveSkin } = useLumoraConfig();

const itemSkin = computed(() => resolveSkin("LuListItem", props.variant));
const activeSkin = computed(() => resolveSkin("LuListItem.active", props.variant));
const disabledSkin = computed(() => resolveSkin("LuListItem.disabled", props.variant));
const leadingSkin = computed(() => resolveSkin("LuListItemLeading", props.variant));
const contentSkin = computed(() => resolveSkin("LuListItemContent", props.variant));
const trailingSkin = computed(() => resolveSkin("LuListItemTrailing", props.variant));
</script>
