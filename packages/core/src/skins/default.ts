import type { SkinMap } from "../types";

export const defaultSkin: SkinMap = {
  LuButton: {
    default:
      "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    ghost: "hover:bg-gray-100 text-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  },
  LuIcon: {
    default: "inline-flex items-center justify-center shrink-0",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  },
  LuInput: {
    default:
      "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50",
  },
  LuDesktopRailBar: {
    default: "flex flex-col w-12 h-full border-r border-gray-200 bg-white transition-all duration-200 overflow-hidden",
    expanded: "w-56",
  },
  LuDesktopRailItem: {
    default: "flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer whitespace-nowrap",
    active: "bg-blue-50 text-blue-700 font-medium",
  },
  LuDesktopTopBar: {
    default: "flex items-center h-14 border-b border-gray-200 bg-white px-4 shrink-0",
  },
  LuDesktopSidebar: {
    default: "flex flex-col border-r border-gray-200 bg-gray-50 overflow-y-auto h-full",
  },
  LuDesktopStatusBar: {
    default: "flex items-center h-8 border-t border-gray-200 bg-gray-50 px-4 text-xs text-gray-500 shrink-0",
  },
  LuSplitPane: {
    default: "relative overflow-hidden",
  },
  LuSplitResizer: {
    default: "bg-gray-200 hover:bg-blue-400 transition-colors z-10",
    horizontal: "w-1 cursor-col-resize",
    vertical: "h-1 cursor-row-resize",
  },
  LuMobileNavBar: {
    default: "flex items-center justify-around h-14 border-t border-gray-200 bg-white shrink-0 pb-safe",
  },
  LuMobileHeader: {
    default: "flex items-center h-14 border-b border-gray-200 bg-white px-4 shrink-0 pt-safe",
  },
  LuStack: {
    default: "flex",
    vertical: "flex-col",
    horizontal: "flex-row",
  },
  LuDock: {
    default: "flex flex-col h-full w-full overflow-hidden",
    vertical: "flex flex-col h-full w-full overflow-hidden",
    horizontal: "flex flex-row h-full w-full overflow-hidden",
  },
  LuDockContent: {
    default: "flex flex-1 overflow-hidden",
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
  LuDockItem: {
    default: "shrink-0",
    top: "shrink-0",
    bottom: "shrink-0",
    left: "shrink-0 h-full",
    right: "shrink-0 h-full",
    fill: "flex-1 min-h-0 min-w-0 overflow-hidden",
  },
  LuGrid: {
    default: "grid",
  },
  LuMobileShellContent: {
    default: "flex flex-1 flex-col overflow-hidden relative",
  },
};
