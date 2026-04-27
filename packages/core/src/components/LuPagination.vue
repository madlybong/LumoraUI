<template>
  <nav aria-label="Pagination" :class="resolvedSkin">
    <LuButton
      variant="ghost"
      :disabled="modelValue <= 1"
      @click="prevPage"
      :class="resolvedButtonSkin"
      aria-label="Previous page"
    >
      <LuIcon name="chevron-left" class="h-4 w-4" />
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
      <LuIcon name="chevron-right" class="h-4 w-4" />
    </LuButton>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
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

const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => resolveSkin("LuPagination", props.variant));
const resolvedButtonSkin = computed(() => resolveSkin("LuPaginationButton", props.variant));
const resolvedPagesSkin = computed(() => resolveSkin("LuPaginationPages", props.variant));
const resolvedPageButtonSkin = computed(() => resolveSkin("LuPaginationPageButton", props.variant));
const resolvedEllipsisSkin = computed(() => resolveSkin("LuPaginationEllipsis", props.variant));

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
