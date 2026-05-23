import { ref, computed, watch, type Ref } from "vue";
import type { ColumnDef, Row, DataGridSortState, DataGridFilterState } from "../components/LuDataGrid.types";

export interface UseDataGridOptions {
  columns: Ref<ColumnDef[]>;
  data: Ref<Row[]>;
  groupBy?: Ref<string | undefined>;
  selectable?: Ref<boolean>;
  idKey?: Ref<string>;
  localSort?: Ref<boolean>;
  localSearch?: Ref<boolean>;
}

export function useDataGrid(opts: UseDataGridOptions) {
  const idKey = opts.idKey ?? ref("id");
  const localSort = opts.localSort ?? ref(true);
  const localSearch = opts.localSearch ?? ref(true);

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

  /** Locally sorted data (only when localSort=true and sortState is set) */
  const sortedData = computed((): Row[] => {
    const state = sortState.value;
    if (!localSort.value || !state) return opts.data.value;

    return [...opts.data.value].sort((a, b) => {
      const aVal = a[state.key];
      const bVal = b[state.key];
      let cmp = 0;
      if (typeof aVal === "number" && typeof bVal === "number") {
        cmp = aVal - bVal;
      } else if (aVal != null && bVal != null) {
        cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true, sensitivity: "base" });
      } else if (aVal == null && bVal != null) {
        cmp = 1;
      } else if (aVal != null && bVal == null) {
        cmp = -1;
      }
      return state.direction === "asc" ? cmp : -cmp;
    });
  });

  // ── Search state ──────────────────────────────────────────────────────────
  const searchQuery = ref("");

  const searchedData = computed((): Row[] => {
    if (!localSearch.value || !searchQuery.value.trim()) return sortedData.value;
    const q = searchQuery.value.trim().toLowerCase();
    return sortedData.value.filter(row =>
      Object.values(row).some(v => v != null && String(v).toLowerCase().includes(q))
    );
  });

  // ── Column filter state ───────────────────────────────────────────────────
  const columnFilters = ref<DataGridFilterState>({});

  function setColumnFilter(key: string, value: string | number | [number, number] | undefined) {
    if (value === undefined || value === "" || value === null) {
      const next = { ...columnFilters.value };
      delete next[key];
      columnFilters.value = next;
    } else {
      columnFilters.value = { ...columnFilters.value, [key]: value };
    }
  }

  function clearFilters() {
    columnFilters.value = {};
    searchQuery.value = "";
  }

  /** Data after applying all column filters on top of search results */
  const filteredData = computed((): Row[] => {
    const filters = columnFilters.value;
    const keys = Object.keys(filters);
    if (keys.length === 0) return searchedData.value;

    return searchedData.value.filter(row => {
      for (const key of keys) {
        const filterVal = filters[key];
        const cellVal = row[key];

        if (filterVal === undefined) continue;

        // number-range: [min, max]
        if (Array.isArray(filterVal)) {
          const [min, max] = filterVal;
          const num = Number(cellVal);
          if (isNaN(num)) return false;
          if (min !== undefined && num < min) return false;
          if (max !== undefined && num > max) return false;
        } else {
          // text or select
          const fStr = String(filterVal).toLowerCase().trim();
          if (!fStr) continue;
          if (cellVal == null || !String(cellVal).toLowerCase().includes(fStr)) return false;
        }
      }
      return true;
    });
  });

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
    for (const row of filteredData.value) {
      selectedIds.value.add(String(row[idKey.value]));
    }
    return Array.from(selectedIds.value);
  }

  function selectAllData() {
    for (const row of opts.data.value) {
      selectedIds.value.add(String(row[idKey.value]));
    }
    return Array.from(selectedIds.value);
  }

  function clearSelection() {
    selectedIds.value.clear();
    return [] as string[];
  }

  const allSelected = computed(() =>
    filteredData.value.length > 0 &&
    filteredData.value.every(r => selectedIds.value.has(String(r[idKey.value])))
  );

  const someSelected = computed(() =>
    filteredData.value.some(r => selectedIds.value.has(String(r[idKey.value]))) &&
    !allSelected.value
  );

  const selectionCount = computed(() => selectedIds.value.size);

  // ── Grouped rows ──────────────────────────────────────────────────────────
  type GroupedRow = { type: "group"; key: string; label: string } | { type: "row"; row: Row };

  const groupedRows = computed((): GroupedRow[] => {
    const key = opts.groupBy?.value;
    if (!key) return filteredData.value.map(row => ({ type: "row", row }));

    const groups: Record<string, Row[]> = {};
    for (const row of filteredData.value) {
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

  const hasColumnFilters = computed(() => opts.columns.value.some(c => c.filterable));

  return {
    visibleColumns,
    hiddenColumns,
    columnOrder,
    toggleColumn,
    resetColumnOrder,
    sortState,
    toggleSort,
    searchQuery,
    columnFilters,
    setColumnFilter,
    clearFilters,
    filteredData,
    selectedIds,
    isSelected,
    toggleRow,
    selectAll,
    selectAllData,
    clearSelection,
    allSelected,
    someSelected,
    selectionCount,
    groupedRows,
    hasColumnFilters,
  };
}
