<script setup lang="ts">
import { computed } from "vue";
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


</script>

<template>
  <div :class="['lu-kanban']">
    <div :class="['lu-kanban__board']">
      <div
        v-for="column in columns"
        :key="column.id"
        :class="['lu-kanban__column']"
        @dragover.prevent
        @drop="onDrop(column, column.cards.length)"
      >
        <!-- Column header -->
        <div :class="['lu-kanban__column-header']">
          <span
            :class="['lu-kanban__column-dot']"
            :style="column.color ? { backgroundColor: column.color } : undefined"
          />
          <LuText :class="['lu-kanban__column-title']">{{ column.title }}</LuText>
          <LuText :class="['lu-kanban__column-count']">{{ column.cards.length }}{{ column.limit ? ` / ${column.limit}` : '' }}</LuText>

          <button
            type="button"
            :class="['lu-kanban__add-button']"
            :aria-label="`Add card to ${column.title}`"
            @click="emit('add-card', column.id)"
          >
            <LuIcon name="plus" :size="14" />
          </button>
        </div>

        <!-- Cards -->
        <div :class="['lu-kanban__column-body']">
          <div
            v-for="card in column.cards"
            :key="card.id"
            :class="['lu-kanban__card']"
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
                <LuText variant="body" :class="['lu-kanban__card-title']">
                  {{ card.title }}
                </LuText>

                <LuText v-if="card.description" variant="caption" class="line-clamp-2">
                  {{ card.description }}
                </LuText>

                <div v-if="card.priority || card.dueDate || card.tags?.length" class="flex">
                  <LuBadge v-if="card.priority" :variant="priorityVariant[card.priority]">
                    {{ card.priority }}
                  </LuBadge>
                  <LuBadge v-for="tag in card.tags" :key="tag" variant="secondary">{{ tag }}</LuBadge>
                  <LuText v-if="card.dueDate" variant="caption" class="ml-auto flex gap-1">
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
            :class="['lu-kanban__empty-column']"
          >
            Empty
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
