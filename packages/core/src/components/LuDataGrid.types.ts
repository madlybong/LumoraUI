export interface ColumnDef {
  key: string;
  label: string;
  sortable?: boolean;
  frozen?: boolean;
  width?: string | number;
  editable?: boolean;
  hidden?: boolean;
  align?: "left" | "center" | "right";
  /** Custom render function returning a string or VNode label */
  renderHeader?: () => string;
}

export type Row = Record<string, unknown>;

export interface DataGridSortState {
  key: string;
  direction: "asc" | "desc";
}

export interface DataGridCellEditPayload {
  rowId: string;
  columnKey: string;
  value: unknown;
}

export interface DataGridPageChangePayload {
  page: number;
  pageSize: number;
}
