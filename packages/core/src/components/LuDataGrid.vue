<script setup lang="ts">
import { computed, ref, toRef } from "vue";
import { useLumoraConfig } from "../context";
import { useDataGrid } from "../composables/useDataGrid";
import LuText from "./LuText.vue";
import LuIcon from "./LuIcon.vue";
import LuCheckbox from "./LuCheckbox.vue";
import LuButton from "./LuButton.vue";
import LuPagination from "./LuPagination.vue";
import LuSpinner from "./LuSpinner.vue";
import LuSkeleton from "./LuSkeleton.vue";
import type { ColumnDef, Row, DataGridSortState, DataGridCellEditPayload, DataGridPageChangePayload } from "./LuDataGrid.types";

defineOptions({ name: "LuDataGrid" });

const props = withDefaults(defineProps<{
  columns: ColumnDef[];
  data: Row[];
  loading?: boolean;
  total?: number;
  page?: number;
  pageSize?: number;
  sortable?: boolean;
  groupBy?: string;
  selectable?: boolean;
  freezeColumns?: number;
  inlineEdit?: boolean;
  idKey?: string;
  emptyText?: string;
}>(), {
  loading: false,
  page: 1,
  pageSize: 20,
  sortable: false,
  selectable: false,
  freezeColumns: 0,
  inlineEdit: false,
  idKey: "id",
  emptyText: "No data",
});

const emit = defineEmits<{
  (e: "sort", state: DataGridSortState | null): void;
  (e: "page-change", payload: DataGridPageChangePayload): void;
  (e: "selection-change", selectedIds: string[]): void;
  (e: "cell-edit", payload: DataGridCellEditPayload): void;
  (e: "export", payload: { format: "csv" | "excel" }): void;
}>();

const { resolveSkin } = useLumoraConfig();

const {
  visibleColumns, hiddenColumns, toggleColumn,
  sortState, toggleSort,
  selectedIds, isSelected, toggleRow, selectAll, clearSelection, allSelected, someSelected,
  groupedRows,
} = useDataGrid({
  columns: computed(() => props.columns),
  data: computed(() => props.data),
  groupBy: computed(() => props.groupBy),
  selectable: computed(() => props.selectable),
  idKey: computed(() => props.idKey),
});

// ── Editing ──────────────────────────────────────────────────────────────────
const editingCell = ref<{ rowId: string; columnKey: string } | null>(null);
const editingValue = ref<unknown>(null);

function startEdit(row: Row, col: ColumnDef) {
  if (!props.inlineEdit || !col.editable) return;
  editingCell.value = { rowId: String(row[props.idKey]), columnKey: col.key };
  editingValue.value = row[col.key];
}

function commitEdit(row: Row, col: ColumnDef) {
  if (!editingCell.value) return;
  emit("cell-edit", {
    rowId: String(row[props.idKey]),
    columnKey: col.key,
    value: editingValue.value,
  });
  editingCell.value = null;
}

function isEditing(row: Row, col: ColumnDef): boolean {
  return editingCell.value?.rowId === String(row[props.idKey]) &&
    editingCell.value?.columnKey === col.key;
}

// ── Sort ─────────────────────────────────────────────────────────────────────
function handleSort(key: string, colSortable?: boolean) {
  if (!props.sortable || !colSortable) return;
  const newState = toggleSort(key);
  emit("sort", newState);
}

// ── Selection ─────────────────────────────────────────────────────────────────
function handleToggleAll() {
  if (allSelected.value) {
    const ids = clearSelection();
    emit("selection-change", ids);
  } else {
    const ids = selectAll();
    emit("selection-change", ids);
  }
}

function handleToggleRow(row: Row) {
  const ids = toggleRow(row);
  emit("selection-change", ids);
}

// ── Pagination ────────────────────────────────────────────────────────────────

// ── Skin ─────────────────────────────────────────────────────────────────────
const skinContainer = computed(() => resolveSkin("LuDataGridContainer"));
const skinToolbar = computed(() => resolveSkin("LuDataGridToolbar"));
const skinScrollArea = computed(() => resolveSkin("LuDataGridScrollArea"));
const skinTable = computed(() => resolveSkin("LuDataGridTable"));
const skinHead = computed(() => resolveSkin("LuDataGridHead"));
const skinHeaderCell = computed(() => resolveSkin("LuDataGridHeaderCell"));
const skinHeaderCellSortable = computed(() => resolveSkin("LuDataGridHeaderCell", "sortable"));
const skinBody = computed(() => resolveSkin("LuDataGridBody"));
const skinRow = computed(() => resolveSkin("LuDataGridRow"));
const skinCell = computed(() => resolveSkin("LuDataGridCell"));
const skinCellEditing = computed(() => resolveSkin("LuDataGridCell", "editing"));
const skinCheckboxCell = computed(() => resolveSkin("LuDataGridCheckboxCell"));
const skinGroupRow = computed(() => resolveSkin("LuDataGridGroupRow"));
const skinGroupCell = computed(() => resolveSkin("LuDataGridGroupCell"));
const skinEmpty = computed(() => resolveSkin("LuDataGridEmpty"));
const skinFooter = computed(() => resolveSkin("LuDataGridFooter"));
const skinSortIcon = computed(() => resolveSkin("LuDataGridSortIcon"));
const skinSortIconAsc = computed(() => resolveSkin("LuDataGridSortIcon", "asc"));
const skinSortIconDesc = computed(() => resolveSkin("LuDataGridSortIcon", "desc"));

function sortIconVariant(key: string) {
  if (sortState.value?.key !== key) return skinSortIcon.value;
  return sortState.value.direction === "asc" ? skinSortIconAsc.value : skinSortIconDesc.value;
}

function sortIconName(key: string): string {
  if (sortState.value?.key !== key) return "chevrons-up-down";
  return sortState.value.direction === "asc" ? "chevron-up" : "chevron-down";
}

const isFrozen = (index: number) => index < props.freezeColumns;
const frozenLeft = (index: number) => {
  // approximate: each frozen column is 150px wide (simplified)
  return isFrozen(index) ? `${index * 150}px` : undefined;
};

const hasData = computed(() => props.data.length > 0);
const totalPages = computed(() => Math.ceil((props.total ?? props.data.length) / props.pageSize));

function handlePageChange(p: number) {
  emit("page-change", { page: p, pageSize: props.pageSize });
}
</script>

<template>
  <div :class="skinContainer">
    <!-- Toolbar -->
    <div :class="skinToolbar">
      <div class="flex items-center gap-2">
        <slot name="toolbar-start" />
      </div>
      <div class="flex items-center gap-2">
        <slot name="toolbar-end">
          <!-- Column visibility toggle -->
          <LuButton variant="ghost" size="sm" @click="emit('export', { format: 'csv' })">
            <LuIcon name="download" :size="14" />
            <LuText variant="caption">Export</LuText>
          </LuButton>
        </slot>
      </div>
    </div>

    <!-- Loading overlay -->
    <div v-if="loading" class="flex items-center justify-center py-16 gap-3">
      <LuSpinner variant="primary" />
      <LuText variant="muted">Loading…</LuText>
    </div>

    <template v-else>
      <!-- Scroll area (table view) -->
      <div :class="skinScrollArea">
        <table :class="skinTable">
          <thead :class="skinHead">
            <tr>
              <!-- Checkbox column -->
              <th v-if="selectable" :class="skinCheckboxCell">
                <LuCheckbox
                  :model-value="allSelected"
                  :indeterminate="someSelected"
                  @update:model-value="handleToggleAll"
                />
              </th>
              <!-- Data columns -->
              <th
                v-for="(col, colIdx) in visibleColumns"
                :key="col.key"
                :class="[
                  sortable && col.sortable ? skinHeaderCellSortable : skinHeaderCell,
                  isFrozen(colIdx) ? 'lu-data-grid-header-cell--frozen bg-white dark:bg-zinc-900' : '',
                ]"
                :style="isFrozen(colIdx) ? { left: frozenLeft(colIdx) } : undefined"
                @click="handleSort(col.key, col.sortable)"
              >
                <div class="flex items-center gap-1">
                  <LuText variant="grid-header">{{ col.label }}</LuText>
                  <span v-if="sortable && col.sortable" :class="sortIconVariant(col.key)">
                    <LuIcon :name="sortIconName(col.key)" :size="12" />
                  </span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody :class="skinBody">
            <template v-if="hasData">
              <template v-for="item in groupedRows" :key="item.type === 'row' ? String(item.row[idKey]) : item.key">
                <!-- Group row -->
                <tr v-if="item.type === 'group'" :class="skinGroupRow">
                  <td
                    :class="skinGroupCell"
                    :colspan="visibleColumns.length + (selectable ? 1 : 0)"
                  >
                    <slot name="group-row" :label="item.label">
                      <LuText variant="overline">{{ item.label }}</LuText>
                    </slot>
                  </td>
                </tr>

                <!-- Data row -->
                <tr
                  v-else-if="item.type === 'row'"
                  :class="skinRow"
                  :data-selected="selectable ? isSelected(item.row) : undefined"
                >
                  <!-- Checkbox -->
                  <td v-if="selectable" :class="skinCheckboxCell">
                    <LuCheckbox
                      :model-value="isSelected(item.row)"
                      @update:model-value="handleToggleRow(item.row)"
                    />
                  </td>
                  <!-- Cells -->
                  <td
                    v-for="(col, colIdx) in visibleColumns"
                    :key="col.key"
                    :class="[
                      isEditing(item.row, col) ? skinCellEditing : skinCell,
                      isFrozen(colIdx) ? 'lu-data-grid-cell--frozen bg-white dark:bg-zinc-900' : '',
                    ]"
                    :style="isFrozen(colIdx) ? { left: frozenLeft(colIdx) } : undefined"
                    @dblclick="startEdit(item.row, col)"
                  >
                    <!-- Inline edit input -->
                    <input
                      v-if="isEditing(item.row, col)"
                      v-model="editingValue"
                      class="w-full h-8 px-2 text-sm rounded border border-rose-500 bg-rose-50/30 focus:outline-none dark:bg-rose-950/10 dark:border-rose-400"
                      @blur="commitEdit(item.row, col)"
                      @keydown.enter="commitEdit(item.row, col)"
                      @keydown.escape="editingCell = null"
                    />
                    <!-- Slot or default value -->
                    <slot v-else :name="`cell-${col.key}`" :row="item.row" :value="item.row[col.key]">
                      <LuText variant="body">{{ item.row[col.key] != null ? String(item.row[col.key]) : '—' }}</LuText>
                    </slot>
                  </td>
                </tr>
              </template>
            </template>

            <!-- Empty state -->
            <tr v-else>
              <td
                :colspan="visibleColumns.length + (selectable ? 1 : 0)"
                :class="skinEmpty"
              >
                <slot name="empty">
                  <LuIcon name="inbox" :size="32" class="text-zinc-300 dark:text-zinc-600" />
                  <LuText variant="muted">{{ emptyText }}</LuText>
                </slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Footer / Pagination -->
      <div v-if="total != null && totalPages > 1" :class="skinFooter">
        <LuText variant="caption">
          {{ selectedIds.size > 0 ? `${selectedIds.size} selected · ` : '' }}{{ total }} total
        </LuText>
        <LuPagination
          :model-value="page"
          :total="total ?? data.length"
          :page-size="pageSize"
          @update:model-value="handlePageChange"
        />
      </div>
    </template>
  </div>
</template>
