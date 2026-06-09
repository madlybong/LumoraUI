<template>
  <nav aria-label="Pagination" :class="resolvedSkin">
    <LuButton
      variant="ghost"
      :disabled="modelValue <= 1"
      @click="prevPage"
      :class="resolvedButtonSkin"
      aria-label="Previous page"
    >
      <LuIcon name="chevron-left" class="lu-pagination__icon" />
    </LuButton>

    <div :class="resolvedPagesSkin">
      <template v-for="page in pages" :key="page">
        <span v-if="page === '...'" :class="resolvedEllipsisSkin">...</span>
        <LuButton
          v-else
          :variant="page === modelValue ? 'primary' : 'ghost'"
          @click="goToPage(page as number)"
          :class="resolvedPageButtonSkin"
          :aria-current="page === modelValue ? 'page' : undefined"
        >
          {{ page }}
        </LuButton>
      </template>
    </div>

    <LuButton
      variant="ghost"
      :disabled="modelValue >= totalPages"
      @click="nextPage"
      :class="resolvedButtonSkin"
      aria-label="Next page"
    >
      <LuIcon name="chevron-right" class="lu-pagination__icon" />
    </LuButton>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";

import LuButton from "./LuButton.vue";
import LuIcon from "./LuIcon.vue";

const props = withDefaults(defineProps<{
  modelValue: number;
  total: number;
  pageSize?: number;
  siblingCount?: number;
  variant?: string;
}>(), {
  pageSize: 10,
  siblingCount: 1,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
  (e: "change", value: number): void;
}>();

const totalPages = computed(() => Math.ceil(props.total / props.pageSize));

const pages = computed(() => {
  const current = props.modelValue;
  const total = totalPages.value;
  const siblings = props.siblingCount;

  if (total <= 1) return [1];

  const leftSiblingIndex = Math.max(current - siblings, 1);
  const rightSiblingIndex = Math.min(current + siblings, total);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < total - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + 2 * siblings;
    const leftRange = Array.from({ length: Math.min(leftItemCount, total) }, (_, i) => i + 1);
    return [...leftRange, '...', total];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + 2 * siblings;
    const rightRange = Array.from({ length: Math.min(rightItemCount, total) }, (_, i) => total - rightItemCount + i + 1);
    return [1, '...', ...rightRange];
  }

  if (showLeftEllipsis && showRightEllipsis) {
    const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
    return [1, '...', ...middleRange, '...', total];
  }

  return Array.from({ length: total }, (_, i) => i + 1);
});

const resolvedSkin = computed(() => `lu-pagination ${props.variant && props.variant !== 'default' ? 'lu-pagination--'+props.variant : ''}`.trim());
const resolvedButtonSkin = computed(() => `lu-pagination__button ${props.variant && props.variant !== 'default' ? 'lu-pagination__button--'+props.variant : ''}`.trim());
const resolvedPagesSkin = computed(() => `lu-pagination__pages ${props.variant && props.variant !== 'default' ? 'lu-pagination__pages--'+props.variant : ''}`.trim());
const resolvedPageButtonSkin = computed(() => `lu-pagination__page-button ${props.variant && props.variant !== 'default' ? 'lu-pagination__page-button--'+props.variant : ''}`.trim());
const resolvedEllipsisSkin = computed(() => `lu-pagination__ellipsis ${props.variant && props.variant !== 'default' ? 'lu-pagination__ellipsis--'+props.variant : ''}`.trim());

const goToPage = (page: number) => {
  if (page === props.modelValue) return;
  emit("update:modelValue", page);
  emit("change", page);
};

const prevPage = () => {
  if (props.modelValue > 1) goToPage(props.modelValue - 1);
};

const nextPage = () => {
  if (props.modelValue < totalPages.value) goToPage(props.modelValue + 1);
};
</script>
