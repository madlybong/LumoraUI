import type { SkinMap } from '@astrake/lumora-ui';

export const docsSkin: SkinMap = {
  LuDesktopShell: {
    default: "flex flex-col h-screen w-screen overflow-hidden bg-white dark:bg-zinc-950 font-sans transition-colors duration-200"
  },
  LuDesktopTopBar: {
    default: "h-[56px] flex items-center justify-between px-4 lg:px-8 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shrink-0 transition-colors duration-200"
  },
  LuDesktopSidebar: {
    default: "w-64 flex flex-col border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-200 h-full overflow-hidden"
  },
  LuDesktopSidebarHeader: {
    default: "shrink-0 px-4 pt-5 pb-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900"
  },
  LuDesktopSidebarContent: {
    default: "flex-1 overflow-y-auto custom-scrollbar py-4 px-3"
  },
  LuDesktopSidebarFooter: {
    default: "shrink-0 px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm"
  },
  LuInput: {
    "docs-search": "w-full h-8 px-3 py-1.5 pl-8 text-sm rounded-md bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition-colors",
    default: "flex h-10 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 text-zinc-900 dark:text-zinc-100 transition-colors"
  },
  LuButton: {
    "docs-action": "h-8 px-3 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 shadow-sm",
    "docs-icon-btn": "w-8 h-8 rounded-md flex items-center justify-center transition-colors text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    "docs-nav-btn": "w-full flex items-center justify-center h-10 px-4 rounded-lg text-sm font-medium transition-colors border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 shadow-sm",
    default: "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800",
    primary: "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    secondary: "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700",
    ghost: "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300",
    danger: "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-red-600 text-white hover:bg-red-700 shadow-sm"
  },
  LuText: {
    "section-header": "text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500",
    "sidebar-link": "text-[13px] font-medium text-zinc-600 dark:text-zinc-400 transition-colors",
    "hero-title": "text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]",
    "hero-gradient": "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-400 dark:to-violet-400",
    "hero-subtitle": "text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto",
    "page-title": "text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100",
    "section-title": "text-xl font-semibold text-zinc-900 dark:text-zinc-100",
    "page-subtitle": "text-lg text-zinc-600 dark:text-zinc-400",
    "body": "text-zinc-600 dark:text-zinc-400",
    "preview-title": "text-xl font-semibold text-zinc-900 dark:text-zinc-100",
    "preview-description": "text-zinc-600 dark:text-zinc-400 mt-2",
    "search-section": "text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-0.5",
    "search-label": "text-sm text-zinc-900 dark:text-zinc-100 font-medium",
    "feature-title": "text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3",
    "feature-body": "text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed",
  },
  LuBadge: {
    "docs-lang": "absolute right-3 top-3 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700",
    "docs-version": "px-2 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
  },
  LuTabs: {
    "preview-tabs": "flex flex-col bg-white dark:bg-zinc-900 w-full rounded-t-lg overflow-hidden"
  },
  LuTabList: {
    "preview-tablist": "flex bg-zinc-50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800 px-4"
  },
  LuTab: {
    "preview-tab": "flex items-center h-10 px-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 border-b-2 border-transparent transition-colors cursor-pointer",
    active: "!text-indigo-600 dark:!text-indigo-400 !border-indigo-600 dark:!border-indigo-400"
  },
  LuTabPanel: {
    "preview-panel": "flex-1 min-h-[200px]"
  },
  LuIcon: {
    default: "inline-flex items-center justify-center shrink-0 [&>svg]:w-full [&>svg]:h-full"
  },
  LuScroll: {
    default: "overflow-y-auto h-full w-full custom-scrollbar",
    horizontal: "overflow-x-auto w-full custom-scrollbar"
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
  LuSplitPane: {
    default: "relative overflow-hidden",
  },
  LuSplitResizer: {
    default: "bg-zinc-200 dark:bg-zinc-800 hover:bg-indigo-400 transition-colors z-10",
    horizontal: "w-1 cursor-col-resize",
    vertical: "h-1 cursor-row-resize",
  },
  LuGrid: {
    default: "grid",
  },
  LuSelect: {
    default: "flex h-10 w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 text-zinc-900 dark:text-zinc-100 transition-colors"
  },
  LuSwitch: {
    default: "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-200 dark:bg-zinc-800 data-[state=checked]:bg-indigo-600 dark:data-[state=checked]:bg-indigo-500"
  },
  LuProgressBar: {
    default: "h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden",
    primary: "bg-indigo-600 dark:bg-indigo-500",
    success: "bg-emerald-500 dark:bg-emerald-400"
  },
  LuOverlay: {
    default: "absolute inset-0 z-50",
  },
  LuCollapsible: {
    default: "w-full",
  },
  LuCollapsibleTrigger: {
    default: "w-full text-left focus:outline-none",
  },
  LuCollapsibleContent: {
    default: "overflow-hidden",
  },
  LuLink: {
    "docs-nav": "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors",
    "docs-external": "flex items-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors",
    "footer-link": "hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-2",
    "hero-cta-primary": "px-6 py-3 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-full font-medium transition-colors flex items-center gap-2 shadow-sm",
    "hero-cta-secondary": "px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full font-medium transition-colors shadow-sm flex items-center gap-2",
  },
  LuDivider: {
    vertical: "w-px h-5 bg-zinc-200 dark:bg-zinc-800",
    horizontal: "h-px w-full bg-zinc-200 dark:bg-zinc-800",
  },
  LuCard: {
    "feature-card": "p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform hover:-translate-y-1 duration-300",
    "preview-card": "border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 shadow-sm flex flex-col",
    "demo-box": "bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-medium p-2 rounded-lg text-center text-sm shadow-sm flex-1",
    "search-results": "absolute top-full left-0 w-full mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl overflow-hidden z-50 max-h-80 overflow-y-auto custom-scrollbar",
    "shell-preview-card": "flex flex-col group",
    "prop-table-card": "overflow-x-auto my-8 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 shadow-sm",
    "skin-toggle": "flex items-center gap-1.5 p-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg"
  },
  LuPageHeader: {
    default: "mb-12",
  },
  LuTable: {
    default: "w-full text-left border-collapse text-sm",
  },
  LuTableHead: {
    default: "bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0",
  },
  LuTableRow: {
    default: "border-b border-zinc-200 dark:border-zinc-800",
    "body-row": "hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors",
  },
  LuTableHeadCell: {
    default: "py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100",
  },
  LuTableCell: {
    default: "py-3 px-4 text-zinc-600 dark:text-zinc-400 text-[13px]",
    "prop-name": "py-3 px-4",
    "prop-type": "py-3 px-4 font-mono text-[11px] text-emerald-600 dark:text-emerald-400",
    "prop-default": "py-3 px-4 font-mono text-[11px] text-zinc-500",
  },
  LuTableBody: {
    default: "divide-y divide-zinc-100 dark:divide-zinc-800/50",
  }
};
