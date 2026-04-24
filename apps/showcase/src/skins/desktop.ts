import type { SkinMap } from "@astrake/lumora-ui";

const lightSkin: SkinMap = {
  LuDesktopShell: { default: "flex flex-col h-screen w-screen overflow-hidden bg-white text-zinc-800 font-sans" },
  LuDesktopShellContentWrapper: { default: "flex flex-1 overflow-hidden min-h-0" },
  LuDesktopShellMainContent: { default: "flex flex-1 flex-col overflow-hidden relative" },

  LuDesktopTopBar: {
    "vscode-titlebar": "flex items-center h-9 bg-zinc-100 border-b border-zinc-200 px-3 shrink-0 select-none",
  },

  LuDesktopRailBar: {
    "activity-bar": "flex flex-col w-12 h-full bg-zinc-50 border-r border-zinc-200 shrink-0",
  },

  LuDesktopSidebar: {
    "explorer": "flex flex-col w-64 h-full bg-zinc-50 border-r border-zinc-200 shrink-0",
  },

  LuDesktopRailItem: {
    "activity-item": "flex items-center justify-center w-12 h-12 text-zinc-500 hover:text-zinc-800 cursor-pointer transition-colors relative",
    "activity-item-active": "flex items-center justify-center w-12 h-12 text-zinc-900 cursor-pointer relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-500",
  },
  
  LuDesktopRailItemIcon: {
    default: "flex-shrink-0 flex items-center justify-center w-6 h-6",
  },
  
  LuDesktopRailItemLabel: {
    default: "hidden",
  },

  LuDesktopStatusBar: {
    "vscode-statusbar": "flex items-center justify-between h-6 bg-indigo-600 text-white px-2 shrink-0 select-none text-xs",
  },

  LuStack: {
    default: "flex",
    vertical: "flex-col",
    horizontal: "flex-row",
    "titlebar-inner": "flex-1 items-center justify-between gap-4 h-full",
    "titlebar-menus": "items-center gap-1 ml-2 hidden md:flex",
    "titlebar-center": "flex-1 max-w-md mx-auto h-full flex items-center justify-center",
    "titlebar-right": "items-center gap-2",
    "search-box": "items-center gap-2 bg-white border border-zinc-300 rounded-md px-3 h-6 w-full max-w-sm mx-auto shadow-sm cursor-text",
    "activity-bar-top": "flex-1 items-center pt-2 gap-1",
    "activity-bar-bottom": "items-center pb-2 gap-1",
    "explorer-header": "items-center justify-between px-4 h-9 shrink-0",
    "breadcrumb-bar": "items-center px-4 h-6 shrink-0 bg-white border-b border-zinc-100",
    "ai-header": "items-center justify-between px-4 h-10 border-b border-zinc-200 shrink-0",
    "ai-chat-history": "p-4 gap-4",
    "ai-input-area": "p-4 border-t border-zinc-200 shrink-0 gap-3",
    "ai-suggestions": "gap-2 overflow-x-auto no-scrollbar",
    "statusbar-left": "items-center gap-4 h-full",
    "statusbar-right": "items-center gap-4 h-full",
    "statusbar-item": "items-center gap-1 cursor-pointer hover:bg-white/10 px-1.5 rounded h-full transition-colors",
    "statusbar-item-accent": "items-center gap-1 cursor-pointer bg-white/20 hover:bg-white/30 px-2 rounded h-full transition-colors font-medium",
  },

  LuFill: {
    default: "flex-1 min-h-0 min-w-0 overflow-hidden",
    "titlebar-center": "flex-1 flex justify-center",
    "editor-container": "flex-1 flex flex-col min-h-0 min-w-0",
    "editor-body": "flex-1 flex overflow-hidden bg-white",
  },

  LuScroll: {
    default: "overflow-y-auto h-full w-full",
    "explorer-scroll": "flex-1 overflow-y-auto overflow-x-hidden",
    "tab-scroll": "overflow-x-auto overflow-y-hidden no-scrollbar shrink-0",
    "code-scroll": "flex-1 overflow-auto no-scrollbar",
    "terminal-scroll": "h-full overflow-auto p-4 bg-white",
    "ai-chat-scroll": "flex-1 overflow-y-auto",
  },

  LuText: {
    "menu-item": "text-[13px] px-2 py-0.5 rounded cursor-pointer hover:bg-zinc-200/50 transition-colors",
    "search-text": "text-[13px] text-zinc-500",
    "explorer-title": "text-[11px] font-semibold tracking-wide text-zinc-600",
    "breadcrumb-item": "text-[13px] text-zinc-600 hover:text-zinc-900 cursor-pointer",
    "ai-title": "text-sm font-semibold text-zinc-800",
  },

  LuButton: {
    default: "inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:opacity-50",
    "titlebar-action": "w-7 h-7 rounded hover:bg-zinc-200/50 text-zinc-600 flex items-center justify-center transition-colors",
    "explorer-action": "w-6 h-6 rounded hover:bg-zinc-200/50 text-zinc-500 flex items-center justify-center transition-colors",
    "icon-action": "w-6 h-6 rounded hover:bg-zinc-100 text-zinc-500 flex items-center justify-center transition-colors",
    "ai-suggestion-chip": "px-3 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-full text-xs whitespace-nowrap border border-zinc-200",
    "ai-send-btn": "absolute right-1 top-1 w-7 h-7 bg-indigo-600 hover:bg-indigo-700 text-white rounded flex items-center justify-center transition-colors",
  },

  LuInput: {
    default: "w-full focus:outline-none",
    "ai-input": "w-full border border-zinc-300 rounded-md py-1.5 pl-3 pr-10 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm",
  },

  LuTabs: {
    "editor-tabs-group": "flex flex-col min-h-0 min-w-0 bg-white",
  },

  LuTabList: {
    "editor-tablist": "flex bg-zinc-100 border-b border-zinc-200 shrink-0",
  },

  LuTab: {
    "editor-tab": "flex items-center gap-2 h-9 px-3 border-r border-zinc-200 bg-zinc-50 text-[13px] text-zinc-500 hover:bg-zinc-100 min-w-[120px] max-w-[200px] cursor-pointer border-t-2 border-t-transparent",
    active: "!bg-white !text-zinc-900 !border-t-indigo-500",
  },

  LuTabPanel: {
    "editor-panel": "flex-1 min-h-0 min-w-0 flex bg-white",
  },

  LuCollapsible: {
    "explorer-section": "flex flex-col w-full",
    "explorer-folder": "flex flex-col w-full",
    "terminal-panel": "flex flex-col border-t border-zinc-200 bg-zinc-50 shrink-0 min-h-0",
  },

  LuCollapsibleTrigger: {
    "explorer-section": "flex items-center gap-1 px-1 h-6 w-full hover:bg-zinc-200/50 text-[11px] font-bold tracking-wide text-zinc-700 cursor-pointer select-none",
    "explorer-folder": "w-full",
    "terminal-panel": "flex items-center h-9 px-4 w-full cursor-pointer select-none border-b border-zinc-200",
  },

  LuCollapsibleContent: {
    "explorer-section": "flex flex-col py-1",
    "explorer-folder": "flex flex-col",
    "terminal-panel": "flex-1 h-48 min-h-0 flex flex-col",
  },

  LuTooltip: {
    default: "relative flex items-center justify-center",
  },

  LuTooltipContent: {
    right: "absolute left-full ml-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded whitespace-nowrap z-50 pointer-events-none shadow-md",
  },

  LuBadge: {
    "activity-badge": "absolute bottom-1 right-1 w-4 h-4 bg-indigo-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-zinc-50",
    "explorer-git-badge": "text-[10px] font-bold",
    "tab-modified-dot": "w-2 h-2 rounded-full bg-zinc-900 ml-auto mr-1.5",
    "problem-badge": "bg-zinc-200 text-zinc-700 px-1.5 py-0.5 rounded-full text-[10px] ml-1",
    "ai-model-badge": "bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-bold border border-indigo-200",
  },

  LuAvatar: {
    default: "relative shrink-0 flex items-center justify-center overflow-hidden",
    "app-icon": "w-5 h-5 rounded overflow-hidden",
    "user-avatar": "w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200",
    "ai-user-avatar": "w-8 h-8 rounded-full bg-zinc-200 text-zinc-600 text-xs font-bold shrink-0 shadow-sm",
    "ai-bot-avatar": "w-8 h-8 rounded bg-indigo-600 text-white text-xs font-bold shrink-0 shadow-sm",
  },

  LuAvatarImage: {
    default: "w-full h-full object-cover",
  },

  LuAvatarFallback: {
    default: "w-full h-full flex items-center justify-center text-[11px] font-bold",
  },

  LuFixed: {
    "ai-panel": "w-80 flex flex-col border-l border-zinc-200 bg-zinc-50 shrink-0 h-full",
  }
};

const darkSkin: SkinMap = {
  ...lightSkin,
  LuDesktopShell: { default: "flex flex-col h-screen w-screen overflow-hidden bg-zinc-900 text-zinc-300 font-sans" },
  
  LuDesktopTopBar: {
    "vscode-titlebar": "flex items-center h-9 bg-zinc-950 border-b border-zinc-900 px-3 shrink-0 select-none",
  },

  LuDesktopRailBar: {
    "activity-bar": "flex flex-col w-12 h-full bg-zinc-950 border-r border-zinc-900 shrink-0",
  },

  LuDesktopSidebar: {
    "explorer": "flex flex-col w-64 h-full bg-zinc-950/50 border-r border-zinc-900 shrink-0",
  },

  LuDesktopRailItem: {
    "activity-item": "flex items-center justify-center w-12 h-12 text-zinc-500 hover:text-zinc-200 cursor-pointer transition-colors relative",
    "activity-item-active": "flex items-center justify-center w-12 h-12 text-zinc-100 cursor-pointer relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-indigo-500",
  },

  LuDesktopStatusBar: {
    "vscode-statusbar": "flex items-center justify-between h-6 bg-indigo-900 border-t border-indigo-950 text-indigo-100 px-2 shrink-0 select-none text-xs",
  },

  LuStack: {
    ...lightSkin.LuStack,
    "search-box": "items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-md px-3 h-6 w-full max-w-sm mx-auto shadow-sm cursor-text",
    "breadcrumb-bar": "items-center px-4 h-6 shrink-0 bg-zinc-900 border-b border-zinc-800",
    "ai-header": "items-center justify-between px-4 h-10 border-b border-zinc-800 shrink-0",
    "ai-input-area": "p-4 border-t border-zinc-800 shrink-0 gap-3",
    "statusbar-item": "items-center gap-1 cursor-pointer hover:bg-white/10 px-1.5 rounded h-full transition-colors",
    "statusbar-item-accent": "items-center gap-1 cursor-pointer bg-white/10 hover:bg-white/20 px-2 rounded h-full transition-colors font-medium text-white",
  },

  LuFill: {
    ...lightSkin.LuFill,
    "editor-body": "flex-1 flex overflow-hidden bg-zinc-900",
  },

  LuScroll: {
    ...lightSkin.LuScroll,
    "terminal-scroll": "h-full overflow-auto p-4 bg-zinc-900",
  },

  LuText: {
    ...lightSkin.LuText,
    "menu-item": "text-[13px] px-2 py-0.5 rounded cursor-pointer hover:bg-zinc-800 transition-colors text-zinc-300",
    "search-text": "text-[13px] text-zinc-400",
    "explorer-title": "text-[11px] font-semibold tracking-wide text-zinc-400",
    "breadcrumb-item": "text-[13px] text-zinc-400 hover:text-zinc-100 cursor-pointer",
    "ai-title": "text-sm font-semibold text-zinc-200",
  },

  LuButton: {
    ...lightSkin.LuButton,
    "titlebar-action": "w-7 h-7 rounded hover:bg-zinc-800 text-zinc-400 flex items-center justify-center transition-colors",
    "explorer-action": "w-6 h-6 rounded hover:bg-zinc-800 text-zinc-400 flex items-center justify-center transition-colors",
    "icon-action": "w-6 h-6 rounded hover:bg-zinc-800 text-zinc-400 flex items-center justify-center transition-colors",
    "ai-suggestion-chip": "px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-full text-xs whitespace-nowrap border border-zinc-700",
  },

  LuInput: {
    ...lightSkin.LuInput,
    "ai-input": "w-full border border-zinc-700 bg-zinc-900 text-zinc-200 rounded-md py-1.5 pl-3 pr-10 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm",
  },

  LuTabs: {
    "editor-tabs-group": "flex flex-col min-h-0 min-w-0 bg-zinc-900",
  },

  LuTabList: {
    "editor-tablist": "flex bg-zinc-950 border-b border-zinc-900 shrink-0",
  },

  LuTab: {
    "editor-tab": "flex items-center gap-2 h-9 px-3 border-r border-zinc-900 bg-zinc-950/50 text-[13px] text-zinc-400 hover:bg-zinc-900 min-w-[120px] max-w-[200px] cursor-pointer border-t-2 border-t-transparent",
    active: "!bg-zinc-900 !text-zinc-100 !border-t-indigo-500",
  },

  LuTabPanel: {
    "editor-panel": "flex-1 min-h-0 min-w-0 flex bg-zinc-900",
  },

  LuCollapsible: {
    ...lightSkin.LuCollapsible,
    "terminal-panel": "flex flex-col border-t border-zinc-800 bg-zinc-950/80 shrink-0 min-h-0",
  },

  LuCollapsibleTrigger: {
    ...lightSkin.LuCollapsibleTrigger,
    "explorer-section": "flex items-center gap-1 px-1 h-6 w-full hover:bg-zinc-800/50 text-[11px] font-bold tracking-wide text-zinc-300 cursor-pointer select-none",
    "terminal-panel": "flex items-center h-9 px-4 w-full cursor-pointer select-none border-b border-zinc-800",
  },

  LuTooltipContent: {
    right: "absolute left-full ml-2 px-2 py-1 bg-zinc-100 text-zinc-900 text-xs rounded whitespace-nowrap z-50 pointer-events-none shadow-md font-medium border border-zinc-200",
  },

  LuBadge: {
    ...lightSkin.LuBadge,
    "activity-badge": "absolute bottom-1 right-1 w-4 h-4 bg-indigo-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-zinc-950",
    "tab-modified-dot": "w-2 h-2 rounded-full bg-zinc-300 ml-auto mr-1.5",
    "problem-badge": "bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded-full text-[10px] ml-1",
    "ai-model-badge": "bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[10px] font-bold border border-indigo-500/30",
  },

  LuAvatar: {
    ...lightSkin.LuAvatar,
    "user-avatar": "w-6 h-6 rounded-full bg-indigo-900 text-indigo-200 border border-indigo-800",
    "ai-user-avatar": "w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 text-xs font-bold shrink-0 shadow-sm",
  },

  LuFixed: {
    "ai-panel": "w-80 flex flex-col border-l border-zinc-800 bg-zinc-950/50 shrink-0 h-full",
  }
};

export { lightSkin as desktopSkin, darkSkin as desktopDarkSkin };
