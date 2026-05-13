import type { SkinMap } from "../types";

export const layoutSkin: SkinMap = {
  LuStack: {
    default: "flex",
    vertical: "flex flex-col",
    horizontal: "flex flex-row",
    container: "flex flex-col w-full max-w-3xl mx-auto min-h-full gap-10 px-8 py-10",
  },
  LuDock: {
    default: "flex flex-col h-full w-full overflow-hidden",
    vertical: "flex flex-col h-full w-full overflow-hidden",
    horizontal: "flex flex-row h-full w-full overflow-hidden",
  },
  LuDockItem: {
    default: "shrink-0",
    top: "shrink-0",
    bottom: "shrink-0",
    left: "shrink-0 h-full",
    right: "shrink-0 h-full",
    fill: "flex-1 min-h-0 min-w-0 overflow-hidden",
  },
  LuFixed: {
    default: "shrink-0",
  },
  LuFill: {
    default: "flex-1 min-h-0 min-w-0 overflow-hidden",
  },
  LuScroll: {
    default: "overflow-y-auto h-full",
    horizontal: "overflow-x-auto w-full",
  },
  LuOverlay: {
    default: "absolute inset-0 z-50",
  },
  LuGrid: {
    default: "grid",
    "responsive-3": "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8",
  },
  LuSplit: {
    default: "flex w-full h-full overflow-hidden",
    horizontal: "flex flex-row w-full h-full overflow-hidden",
    vertical: "flex flex-col w-full h-full overflow-hidden",
  },
  LuSplitPane: {
    default: "relative overflow-hidden",
  },
  LuSplitResizer: {
    default: "bg-zinc-200 hover:bg-rose-400 transition-colors z-10 dark:bg-zinc-800 dark:hover:bg-rose-600",
    horizontal: "w-1 cursor-col-resize",
    vertical: "h-1 cursor-row-resize",
  },
};
