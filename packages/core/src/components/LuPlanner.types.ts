export interface LuPlannerEvent {
  id: string | number;
  title: string;
  date: string; // ISO format "YYYY-MM-DD"
  startTime: string; // "HH:MM" format (e.g. "09:00", "14:30")
  endTime: string; // "HH:MM" format (e.g. "10:30", "15:45")
  color?: string; // Hex color or Tailwind color class (e.g. "#ef4444")
  description?: string;
}

export type LuPlannerView = "week" | "day";

export interface LuPlannerSlotClickPayload {
  date: string;
  time: string;
}
