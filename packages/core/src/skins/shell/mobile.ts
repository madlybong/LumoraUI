import type { SkinMap } from "../../types";

export const mobileSkin: SkinMap = {
  LuMobileShell: {
    default: "flex flex-col h-full w-full overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100",
  },
  LuMobileShellContent: {
    default: "flex flex-1 flex-col overflow-hidden relative",
  },
  LuMobileNavBar: {
    default: "flex items-center justify-around w-full h-[60px] border-t border-zinc-100 bg-white/95 backdrop-blur-sm shrink-0 pb-safe dark:bg-zinc-950/95 dark:border-zinc-900",
  },
  LuMobileHeader: {
    default: "flex items-center justify-between w-full h-14 border-b border-zinc-100 bg-white/95 backdrop-blur-sm px-4 shrink-0 pt-safe dark:bg-zinc-950/95 dark:border-zinc-900",
  },
};
