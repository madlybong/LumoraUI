export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  assignee?: string;
  priority?: "low" | "medium" | "high" | "critical";
  dueDate?: string;
  /** Any consumer-specific payload */
  data?: unknown;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color?: string;
  limit?: number;
  cards: KanbanCard[];
}

export interface KanbanMovePayload {
  cardId: string;
  fromColumnId: string;
  toColumnId: string;
  newIndex: number;
}
