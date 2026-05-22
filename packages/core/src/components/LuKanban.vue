<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
import LuText from "./LuText.vue";
import LuBadge from "./LuBadge.vue";
import LuIcon from "./LuIcon.vue";
import type { KanbanColumn, KanbanCard, KanbanMovePayload } from "./LuKanban.types";

defineOptions({ name: "LuKanban" });

const props = withDefaults(defineProps<{
  columns: KanbanColumn[];
  draggable?: boolean;
}>(), {
  draggable: false,
});

const emit = defineEmits<{
  (e: "card-click", card: KanbanCard, column: KanbanColumn): void;
  (e: "card-move", payload: KanbanMovePayload): void;
  (e: "add-card", columnId: string): void;
}>();

const { resolveSkin } = useLumoraConfig();

// Priority badge variants
const priorityVariant: Record<string, string> = {
  low: "success",
  medium: "warning",
  high: "danger",
  critical: "danger",
};

// Drag state (simplified — consumer installs vue-draggable-plus for production DnD)
let dragCard: { card: KanbanCard; fromColumnId: string } | null = null;

function onDragStart(card: KanbanCard, column: KanbanColumn) {
  dragCard = { card, fromColumnId: column.id };
}

function onDrop(toColumn: KanbanColumn, toIndex: number) {
  if (!dragCard) return;
  if (dragCard.fromColumnId === toColumn.id) return;
  emit("card-move", {
    cardId: dragCard.card.id,
    fromColumnId: dragCard.fromColumnId,
    toColumnId: toColumn.id,
    newIndex: toIndex,
  });
  dragCard = null;
}

const skinBoard = computed(() => resolveSkin("LuKanbanBoard"));
const skinCol = computed(() => resolveSkin("LuKanbanColumn"));
const skinColHeader = computed(() => resolveSkin("LuKanbanColumnHeader"));
const skinColDot = computed(() => resolveSkin("LuKanbanColumnHeaderDot"));
const skinColTitle = computed(() => resolveSkin("LuKanbanColumnHeaderTitle"));
const skinColCount = computed(() => resolveSkin("LuKanbanColumnHeaderCount"));
const skinColBody = computed(() => resolveSkin("LuKanbanColumnBody"));
const skinCard = computed(() => resolveSkin("LuKanbanCard"));
</script>

<template>
  <div :class="resolveSkin('LuKanban')">
    <div :class="skinBoard">
      <div
        v-for="column in columns"
        :key="column.id"
        :class="skinCol"
        @dragover.prevent
        @drop="onDrop(column, column.cards.length)"
      >
        <!-- Column header -->
        <div :class="skinColHeader">
          <span
            :class="skinColDot"
            :style="column.color ? { backgroundColor: column.color } : undefined"
          />
          <LuText :class="skinColTitle">{{ column.title }}</LuText>
          <LuText :class="skinColCount">{{ column.cards.length }}{{ column.limit ? ` / ${column.limit}` : '' }}</LuText>

          <button
            type="button"
            class="flex items-center justify-center w-6 h-6 rounded text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:text-zinc-500 dark:hover:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            :aria-label="`Add card to ${column.title}`"
            @click="emit('add-card', column.id)"
          >
            <LuIcon name="plus" :size="14" />
          </button>
        </div>

        <!-- Cards -->
        <div :class="skinColBody">
          <div
            v-for="card in column.cards"
            :key="card.id"
            :class="skinCard"
            :draggable="draggable"
            :aria-label="card.title"
            tabindex="0"
            @click="emit('card-click', card, column)"
            @keydown.enter="emit('card-click', card, column)"
            @dragstart="onDragStart(card, column)"
          >
            <slot name="card" :card="card" :column="column">
              <!-- Default card body -->
              <div class="flex flex-col gap-2">
                <LuText variant="body" class="font-medium text-zinc-800 dark:text-zinc-200 line-clamp-2">
                  {{ card.title }}
                </LuText>

                <LuText v-if="card.description" variant="caption" class="line-clamp-2">
                  {{ card.description }}
                </LuText>

                <div v-if="card.priority || card.dueDate || card.tags?.length" class="flex flex-wrap items-center gap-1.5 mt-1">
                  <LuBadge v-if="card.priority" :variant="priorityVariant[card.priority]">
                    {{ card.priority }}
                  </LuBadge>
                  <LuBadge v-for="tag in card.tags" :key="tag" variant="secondary">{{ tag }}</LuBadge>
                  <LuText v-if="card.dueDate" variant="caption" class="ml-auto flex items-center gap-1">
                    <LuIcon name="calendar" :size="11" />
                    {{ card.dueDate }}
                  </LuText>
                </div>
              </div>
            </slot>
          </div>

          <!-- Drop zone hint when empty -->
          <div
            v-if="!column.cards.length"
            class="flex items-center justify-center h-20 text-xs text-zinc-400 dark:text-zinc-600 border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-lg"
          >
            Empty
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
