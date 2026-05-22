export interface TreeNodeData {
  id: string;
  label: string;
  icon?: string;
  children?: TreeNodeData[];
  disabled?: boolean;
  /** Any consumer-specific payload */
  data?: unknown;
}
