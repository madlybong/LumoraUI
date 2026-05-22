<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../../context";
import LuText from "../../components/LuText.vue";
import LuIcon from "../../components/LuIcon.vue";

defineOptions({ name: "LuEmbeddedPOSItemList" });

export interface POSLineItem {
  id: string;
  sku?: string;
  name: string;
  price: number;
  qty: number;
  unit?: string;
  imageUrl?: string;
}

const props = withDefaults(defineProps<{
  items: POSLineItem[];
  formatCurrency?: (v: number) => string;
}>(), {
  formatCurrency: (v: number): string => `$${v.toFixed(2)}`,
});

const emit = defineEmits<{
  (e: "qty-change", itemId: string, qty: number): void;
  (e: "remove", itemId: string): void;
}>();

const { resolveSkin } = useLumoraConfig();

function changeQty(item: POSLineItem, delta: number) {
  const newQty = Math.max(1, item.qty + delta);
  emit("qty-change", item.id, newQty);
}

const skinList = computed(() => resolveSkin("LuEmbeddedPOSItemList"));
const skinRow = computed(() => resolveSkin("LuEmbeddedPOSItemListRow"));
const skinQty = computed(() => resolveSkin("LuEmbeddedPOSItemListQty"));
const skinQtyBtn = computed(() => resolveSkin("LuEmbeddedPOSItemListQtyBtn"));
const skinQtyValue = computed(() => resolveSkin("LuEmbeddedPOSItemListQtyValue"));
const skinRemove = computed(() => resolveSkin("LuEmbeddedPOSItemListRemove"));
</script>

<template>
  <div :class="skinList">
    <div
      v-for="item in items"
      :key="item.id"
      :class="skinRow"
    >
      <!-- Item image (optional) -->
      <img
        v-if="item.imageUrl"
        :src="item.imageUrl"
        :alt="item.name"
        class="w-10 h-10 rounded-lg object-cover shrink-0 bg-zinc-100 dark:bg-zinc-800"
      />

      <!-- Item info -->
      <div class="flex flex-col flex-1 min-w-0">
        <LuText variant="body" class="font-medium truncate">{{ item.name }}</LuText>
        <LuText variant="caption" v-if="item.sku">SKU: {{ item.sku }}</LuText>
      </div>

      <!-- Quantity controls -->
      <div :class="skinQty">
        <button
          type="button"
          :class="skinQtyBtn"
          :aria-label="`Decrease quantity of ${item.name}`"
          @click="changeQty(item, -1)"
        >
          <LuIcon name="minus" :size="12" />
        </button>
        <span :class="skinQtyValue">{{ item.qty }}</span>
        <button
          type="button"
          :class="skinQtyBtn"
          :aria-label="`Increase quantity of ${item.name}`"
          @click="changeQty(item, 1)"
        >
          <LuIcon name="plus" :size="12" />
        </button>
      </div>

      <!-- Line total -->
      <LuText variant="body" class="font-semibold tabular-nums w-20 text-right shrink-0">
        {{ formatCurrency(item.price * item.qty) }}
      </LuText>

      <!-- Remove button -->
      <button
        type="button"
        :class="skinRemove"
        :aria-label="`Remove ${item.name}`"
        @click="emit('remove', item.id)"
      >
        <LuIcon name="x" :size="14" />
      </button>
    </div>

    <!-- Empty state -->
    <div
      v-if="!items.length"
      class="flex flex-col items-center justify-center gap-2 py-12 text-center"
    >
      <LuIcon name="shopping-cart" :size="32" class="text-zinc-300 dark:text-zinc-600" />
      <LuText variant="muted">Cart is empty</LuText>
    </div>
  </div>
</template>
