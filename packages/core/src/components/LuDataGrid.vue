<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useDataGrid } from "../composables/useDataGrid";
import LuText from "./LuText.vue";
import LuIcon from "./LuIcon.vue";
import LuCheckbox from "./LuCheckbox.vue";
import LuButton from "./LuButton.vue";
import LuPagination from "./LuPagination.vue";
import LuSpinner from "./LuSpinner.vue";
import type {
  ColumnDef, Row, DataGridSortState,
  DataGridCellEditPayload, DataGridPageChangePayload,
  DataGridFilterState, DataGridSearchPayload,
} from "./LuDataGrid.types";

defineOptions({ name: "LuDataGrid" });

const props = withDefaults(defineProps<{
  columns: ColumnDef[];
  data: Row[];
  loading?: boolean;
  total?: number;
  page?: number;
  pageSize?: number;
  sortable?: boolean;
  localSort?: boolean;
  groupBy?: string;
  selectable?: boolean;
  freezeColumns?: number;
  inlineEdit?: boolean;
  idKey?: string;
  emptyText?: string;
  /** Show a search input in the toolbar */
  searchable?: boolean;
  /** 'local' filters data client-side; 'remote' emits a search event */
  searchMode?: "local" | "remote";
  /** Debounce ms for remote search emit */
  searchDebounce?: number;
  searchPlaceholder?: string;
}>(), {
  loading: false,
  page: 1,
  pageSize: 20,
  sortable: false,
  localSort: true,
  selectable: false,
  freezeColumns: 0,
  inlineEdit: false,
  idKey: "id",
  emptyText: "No data",
  searchable: false,
  searchMode: "local",
  searchDebounce: 300,
  searchPlaceholder: "Search…",
});

const emit = defineEmits<{
  (e: "sort", state: DataGridSortState | null): void;
  (e: "page-change", payload: DataGridPageChangePayload): void;
  (e: "selection-change", selectedIds: string[]): void;
  (e: "cell-edit", payload: DataGridCellEditPayload): void;
  (e: "export", payload: { format: "csv" | "excel" }): void;
  (e: "search", payload: DataGridSearchPayload): void;
  (e: "filter-change", payload: DataGridFilterState): void;
}>();


const {
  visibleColumns, hiddenColumns, toggleColumn,
  sortState, toggleSort,
  searchQuery, columnFilters, setColumnFilter, clearFilters,
  filteredData,
  selectedIds, isSelected, toggleRow, selectAll, selectAllData, clearSelection, allSelected, someSelected, selectionCount,
  groupedRows, hasColumnFilters,
} = useDataGrid({
  columns: computed(() => props.columns),
  data: computed(() => props.data),
  groupBy: computed(() => props.groupBy),
  selectable: computed(() => props.selectable),
  idKey: computed(() => props.idKey),
  localSort: computed(() => props.localSort && props.sortable),
  localSearch: computed(() => props.searchMode === "local"),
});

// ── Search debounce ───────────────────────────────────────────────────────────
let searchTimer: ReturnType<typeof setTimeout> | null = null;
function handleSearch(e: Event) {
  const q = (e.target as HTMLInputElement).value;
  searchQuery.value = q;
  if (props.searchMode === "remote") {
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(() => emit("search", { query: q }), props.searchDebounce);
  }
}

// ── Column filter ─────────────────────────────────────────────────────────────
function handleColumnFilter(key: string, value: string) {
  setColumnFilter(key, value || undefined);
  emit("filter-change", columnFilters.value);
}

// ── Editing ───────────────────────────────────────────────────────────────────
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

// ── Sort ──────────────────────────────────────────────────────────────────────
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

function handleSelectAllData() {
  const ids = selectAllData();
  emit("selection-change", ids);
}

function handleClearSelection() {
  const ids = clearSelection();
  emit("selection-change", ids);
}

// ── Pagination ────────────────────────────────────────────────────────────────
function handlePageChange(p: number) {
  emit("page-change", { page: p, pageSize: props.pageSize });
}

// ── Skin ──────────────────────────────────────────────────────────────────────
const skinContainer = "lu-data-grid__container";
const skinToolbar = "lu-data-grid__toolbar";
const skinScrollArea = "lu-data-grid__scroll-area";
const skinTable = "lu-data-grid__table";
const skinHead = "lu-data-grid__head";
const skinHeaderCell = "lu-data-grid__header-cell";
const skinHeaderCellSortable = "lu-data-grid__header-cell lu-data-grid__header-cell--sortable";
const skinBody = "lu-data-grid__body";
const skinRow = "lu-data-grid__row";
const skinCell = "lu-data-grid__cell";
const skinCellEditing = "lu-data-grid__cell lu-data-grid__cell--editing";
const skinCheckboxCell = "lu-data-grid__checkbox-cell";
const skinGroupRow = "lu-data-grid__group-row";
const skinGroupCell = "lu-data-grid__group-cell";
const skinEmpty = "lu-data-grid__empty";
const skinErrorInput = "lu-data-grid__error-input";
const skinEmptyIcon = "lu-data-grid__empty-icon";
const skinFooter = "lu-data-grid__footer";
const skinSortIcon = "lu-data-grid__sort-icon";
const skinSortIconAsc = "lu-data-grid__sort-icon lu-data-grid__sort-icon--asc";
const skinSortIconDesc = "lu-data-grid__sort-icon lu-data-grid__sort-icon--desc";
const skinSearchInput = "lu-data-grid__search-input";
const skinSelectionBar = "lu-data-grid__selection-bar";
const skinSelectionBarCount = "lu-data-grid__selection-bar-count";
const skinSelectionBarAction = "lu-data-grid__selection-bar-action";
const skinFilterRow = "lu-data-grid__filter-row";
const skinFilterCell = "lu-data-grid__filter-cell";
const skinFilterInput = "lu-data-grid__filter-input";
const skinFilterSelect = "lu-data-grid__filter-select";

function sortIconVariant(key: string) {
  if (sortState.value?.key !== key) return skinSortIcon;
  return sortState.value.direction === "asc" ? skinSortIconAsc : skinSortIconDesc;
}

function sortIconName(key: string): string {
  if (sortState.value?.key !== key) return "chevrons-up-down";
  return sortState.value.direction === "asc" ? "chevron-up" : "chevron-down";
}

const isFrozen = (index: number) => index < props.freezeColumns;
const frozenLeft = (index: number) => {
  return isFrozen(index) ? `${index * 150}px` : undefined;
};

const hasData = computed(() => groupedRows.value.length > 0);
const totalPages = computed(() => Math.ceil((props.total ?? props.data.length) / props.pageSize));
const totalCount = computed(() => props.total ?? filteredData.value.length);
</script>

<template>
  <div :class="skinContainer">
    <!-- Toolbar -->
    <div :class="skinToolbar">
      <div class="flex items-center gap-3">
        <!-- Search input (left) -->
        <input
          v-if="searchable"
          :class="skinSearchInput"
          :placeholder="searchPlaceholder"
          :value="searchQuery"
          type="text"
          @input="handleSearch"
        />

        <!-- Selection bar or custom toolbar-start slot -->
        <template v-if="selectable && selectionCount > 0">
          <div :class="skinSelectionBar">
            <span :class="skinSelectionBarCount">{{ selectionCount }}</span>
            <span>selected</span>
            <span :class="skinSelectionBarAction" @click="handleSelectAllData">
              Select all {{ data.length }}
            </span>
            <span :class="skinSelectionBarAction" @click="handleClearSelection">Clear</span>
          </div>
        </template>
        <template v-else>
          <slot name="toolbar-start" />
        </template>
      </div>

      <div class="flex items-center gap-2">
        <slot name="toolbar-end">
          <LuButton variant="ghost" size="sm" @click="emit('export', { format: 'csv' })">
            <LuIcon name="download" :size="14" />
            <LuText variant="caption">Export</LuText>
          </LuButton>
        </slot>
      </div>
    </div>

    <!-- Loading overlay -->
    <div v-if="loading" class="flex items-center gap-3">
      <LuSpinner variant="primary" />
      <LuText variant="muted">Loading…</LuText>
    </div>

    <template v-else>
      <!-- Scroll area (table view) -->
      <div :class="skinScrollArea">
        <table :class="skinTable">
          <thead :class="skinHead">
            <!-- Column header row -->
            <tr>
              <!-- Checkbox column header -->
              <th v-if="selectable" :class="skinCheckboxCell">
                <LuCheckbox
                  :model-value="allSelected"
                  :indeterminate="someSelected"
                  @update:model-value="handleToggleAll"
                />
              </th>
              <!-- Data column headers -->
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

            <!-- Per-column filter row -->
            <tr v-if="hasColumnFilters" :class="skinFilterRow">
              <th v-if="selectable" :class="skinFilterCell" />
              <th
                v-for="col in visibleColumns"
                :key="col.key"
                :class="skinFilterCell"
              >
                <!-- Text filter -->
                <input
                  v-if="col.filterable && col.filterType !== 'select'"
                  :class="skinFilterInput"
                  :placeholder="`Filter…`"
                  type="text"
                  :value="columnFilters[col.key] ?? ''"
                  @input="handleColumnFilter(col.key, ($event.target as HTMLInputElement).value)"
                />
                <!-- Select filter -->
                <select
                  v-else-if="col.filterable && col.filterType === 'select'"
                  :class="skinFilterSelect"
                  :value="columnFilters[col.key] ?? ''"
                  @change="handleColumnFilter(col.key, ($event.target as HTMLSelectElement).value)"
                >
                  <option value="">All</option>
                  <option
                    v-for="opt in col.filterOptions"
                    :key="opt.value"
                    :value="opt.value"
                  >{{ opt.label }}</option>
                </select>
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
                    <input
                      v-if="isEditing(item.row, col)"
                      v-model="editingValue"
                      :class="['w-full h-8 px-2 text-sm rounded border focus:outline-none', skinErrorInput]"
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
                  <LuIcon name="inbox" :size="32" :class="skinEmptyIcon" />
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
          {{ selectionCount > 0 ? `${selectionCount} selected · ` : '' }}{{ totalCount }} total
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
