import type { InjectionKey, Ref, ComputedRef } from "vue";

export interface TreeNodeData {
  id: string;
  label: string;
  icon?: string;
  children?: TreeNodeData[];
  disabled?: boolean;
  /** Any consumer-specific payload */
  data?: unknown;
}

export interface LuTreeContext {
  selected: ComputedRef<string[]>;
  expanded: Ref<string[]>;
  selectable: ComputedRef<boolean>;
  checkable: ComputedRef<boolean>;
  handleSelect: (id: string) => void;
  handleExpand: (id: string) => void;
  handleCheck: (id: string, checked: boolean) => void;
}
export const LuTreeContextKey: InjectionKey<LuTreeContext> = Symbol("LuTreeContext");
