import type { SkinMap } from "../../types";

export const embeddedSkin: SkinMap = {
  LuEmbeddedShell: {
    default: "flex flex-col h-full w-full bg-white text-zinc-900 border border-zinc-200 rounded-lg overflow-hidden dark:bg-zinc-950 dark:text-zinc-100 dark:border-zinc-800",
  },
  LuEmbeddedShellContent: {
    default: "flex flex-1 flex-col overflow-hidden relative",
  },
  LuEmbeddedStatusBar: {
    default: "flex items-center justify-between w-full h-8 border-t border-zinc-200 bg-zinc-50 px-4 text-xs text-zinc-500 shrink-0 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400",
  },
  LuEmbeddedToolbar: {
    default: "flex items-center gap-2 p-2 border-b border-zinc-200 bg-zinc-50 shrink-0 dark:bg-zinc-900 dark:border-zinc-800",
  },
};
