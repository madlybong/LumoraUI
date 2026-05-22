import { ref, computed, type Ref } from "vue";
import type { ColumnDef, Row, DataGridSortState } from "../components/LuDataGrid.types";

export interface UseDataGridOptions {
  columns: Ref<ColumnDef[]>;
  data: Ref<Row[]>;
  groupBy?: Ref<string | undefined>;
  selectable?: Ref<boolean>;
  idKey?: Ref<string>;
}

export function useDataGrid(opts: UseDataGridOptions) {
  const idKey = opts.idKey ?? ref("id");

  // ── Column state ──────────────────────────────────────────────────────────
  const hiddenColumns = ref<Set<string>>(new Set());
  const columnOrder = ref<string[]>([]);

  const visibleColumns = computed(() => {
    const base = opts.columns.value.filter(c => !c.hidden && !hiddenColumns.value.has(c.key));
    if (columnOrder.value.length) {
      return [...base].sort((a, b) => {
        const ai = columnOrder.value.indexOf(a.key);
        const bi = columnOrder.value.indexOf(b.key);
        if (ai === -1 && bi === -1) return 0;
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      });
    }
    return base;
  });

  function toggleColumn(key: string) {
    if (hiddenColumns.value.has(key)) {
      hiddenColumns.value.delete(key);
    } else {
      hiddenColumns.value.add(key);
    }
  }

  function resetColumnOrder() {
    columnOrder.value = [];
  }

  // ── Sort state ────────────────────────────────────────────────────────────
  const sortState = ref<DataGridSortState | null>(null);

  function toggleSort(key: string) {
    if (sortState.value?.key === key) {
      sortState.value = sortState.value.direction === "asc"
        ? { key, direction: "desc" }
        : null;
    } else {
      sortState.value = { key, direction: "asc" };
    }
    return sortState.value;
  }

  // ── Selection state ───────────────────────────────────────────────────────
  const selectedIds = ref<Set<string>>(new Set());

  function isSelected(row: Row): boolean {
    return selectedIds.value.has(String(row[idKey.value]));
  }

  function toggleRow(row: Row) {
    const id = String(row[idKey.value]);
    if (selectedIds.value.has(id)) {
      selectedIds.value.delete(id);
    } else {
      selectedIds.value.add(id);
    }
    return Array.from(selectedIds.value);
  }

  function selectAll() {
    for (const row of opts.data.value) {
      selectedIds.value.add(String(row[idKey.value]));
    }
    return Array.from(selectedIds.value);
  }

  function clearSelection() {
    selectedIds.value.clear();
    return [];
  }

  const allSelected = computed(() =>
    opts.data.value.length > 0 &&
    opts.data.value.every(r => selectedIds.value.has(String(r[idKey.value])))
  );

  const someSelected = computed(() =>
    opts.data.value.some(r => selectedIds.value.has(String(r[idKey.value]))) &&
    !allSelected.value
  );

  // ── Grouped rows ──────────────────────────────────────────────────────────
  type GroupedRow = { type: "group"; key: string; label: string } | { type: "row"; row: Row };

  const groupedRows = computed((): GroupedRow[] => {
    const key = opts.groupBy?.value;
    if (!key) return opts.data.value.map(row => ({ type: "row", row }));

    const groups: Record<string, Row[]> = {};
    for (const row of opts.data.value) {
      const groupKey = String(row[key] ?? "—");
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(row);
    }

    const result: GroupedRow[] = [];
    for (const [label, rows] of Object.entries(groups)) {
      result.push({ type: "group", key: label, label });
      for (const row of rows) result.push({ type: "row", row });
    }
    return result;
  });

  return {
    visibleColumns,
    hiddenColumns,
    columnOrder,
    toggleColumn,
    resetColumnOrder,
    sortState,
    toggleSort,
    selectedIds,
    isSelected,
    toggleRow,
    selectAll,
    clearSelection,
    allSelected,
    someSelected,
    groupedRows,
  };
}
