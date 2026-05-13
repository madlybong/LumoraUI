import type { SkinMap } from "../../types";

export const desktopSkin: SkinMap = {
  LuDesktopRailBar: {
    default: "flex flex-col w-12 h-full border-r border-zinc-100 bg-white transition-all duration-200 overflow-hidden shrink-0 dark:bg-zinc-950 dark:border-zinc-900",
    expanded: "w-56",
  },
  LuDesktopRailItem: {
    default: "flex items-center gap-3 px-3 py-2 text-zinc-500 cursor-pointer hover:bg-zinc-100 hover:text-zinc-700 whitespace-nowrap transition-colors dark:text-zinc-500 dark:hover:bg-zinc-800/80 dark:hover:text-zinc-300",
    active: "bg-rose-50 text-rose-700 font-medium dark:bg-rose-950/30 dark:text-rose-300",
  },
  LuDesktopTopBar: {
    default: "flex items-center justify-between w-full h-14 border-b border-zinc-100 bg-white/95 backdrop-blur-sm px-4 shrink-0 dark:bg-zinc-950/95 dark:border-zinc-900",
  },
  LuDesktopSidebar: {
    default: "flex flex-col w-[248px] shrink-0 border-r border-zinc-100 bg-zinc-50 h-full dark:bg-zinc-900 dark:border-zinc-800/60",
  },
  LuDesktopSidebarHeader: {
    default: "px-3 pt-3 pb-2 shrink-0",
  },
  LuDesktopSidebarContent: {
    default: "flex-1 overflow-y-auto px-3 py-2",
  },
  LuDesktopSidebarFooter: {
    default: "px-3 pb-3 pt-2 shrink-0 border-t border-zinc-100 dark:border-zinc-800/60",
  },
  LuDesktopStatusBar: {
    default: "flex items-center justify-between w-full h-7 border-t border-zinc-100 bg-zinc-50/80 px-4 text-[11px] text-zinc-400 shrink-0 dark:bg-zinc-900 dark:border-zinc-800/60 dark:text-zinc-600",
  },
  LuDesktopShell: {
    default: "flex flex-col h-screen w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100",
  },
  LuDesktopShellContentWrapper: {
    default: "flex flex-1 w-full overflow-hidden",
  },
  LuDesktopShellMainContent: {
    default: "flex flex-1 flex-col overflow-hidden relative",
  },
};
