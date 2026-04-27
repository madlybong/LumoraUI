import type { SkinMap } from "../types";

export const defaultSkin: SkinMap = {
  LuButton: {
    default:
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-50 px-4 py-2 text-sm font-medium transition-all duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900 dark:focus-visible:ring-offset-gray-900",
    primary:
      "border-blue-600 bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600",
    secondary:
      "border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-gray-500",
    ghost:
      "border-transparent bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",
    danger:
      "border-red-600 bg-red-600 text-white shadow-sm hover:bg-red-700 hover:border-red-700 active:bg-red-800 dark:border-red-500 dark:bg-red-500 dark:hover:bg-red-600",
    icon:
      "border-transparent bg-transparent p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",
    "code-action":
      "h-8 w-8 rounded-md border-transparent bg-gray-950/50 text-white backdrop-blur-sm hover:bg-gray-950/80 active:bg-gray-950",
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
      "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-blue-500",
  },
  LuInputPrepend: {
    default: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 dark:text-gray-500"
  },
  LuInputAppend: {
    default: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-gray-500"
  },
  LuTextarea: {
    default:
      "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500",
    error: "flex min-h-[80px] w-full rounded-md border border-red-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 dark:border-red-500 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500",
  },
  LuCheckboxContainer: {
    default: "flex items-center space-x-2",
  },
  LuCheckbox: {
    default: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:ring-offset-gray-900 dark:focus:ring-blue-500",
  },
  LuCheckboxLabel: {
    default: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900 dark:text-gray-100 cursor-pointer",
  },
  LuRadioGroup: {
    default: "flex flex-col space-y-2",
    horizontal: "flex flex-row space-x-4",
  },
  LuRadioContainer: {
    default: "flex items-center space-x-2",
  },
  LuRadio: {
    default: "h-4 w-4 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:ring-offset-gray-900 dark:focus:ring-blue-500",
  },
  LuRadioLabel: {
    default: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900 dark:text-gray-100 cursor-pointer",
  },
  LuAlert: {
    default: "relative w-full rounded-lg border p-4 flex gap-3 text-sm bg-white text-gray-900 border-gray-200 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800",
    success: "relative w-full rounded-lg border p-4 flex gap-3 text-sm bg-green-50 text-green-900 border-green-200 dark:bg-green-900/20 dark:text-green-100 dark:border-green-900/50",
    warning: "relative w-full rounded-lg border p-4 flex gap-3 text-sm bg-yellow-50 text-yellow-900 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-100 dark:border-yellow-900/50",
    destructive: "relative w-full rounded-lg border p-4 flex gap-3 text-sm bg-red-50 text-red-900 border-red-200 dark:bg-red-900/20 dark:text-red-100 dark:border-red-900/50",
    info: "relative w-full rounded-lg border p-4 flex gap-3 text-sm bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-900/20 dark:text-blue-100 dark:border-blue-900/50",
  },
  LuAlertIcon: {
    default: "shrink-0 mt-0.5 w-5 h-5",
  },
  LuAlertContent: {
    default: "flex-1 flex flex-col gap-1",
  },
  LuAlertAction: {
    default: "shrink-0 ml-auto",
  },
  LuSpinner: {
    default: "animate-spin text-gray-900 dark:text-gray-100 h-5 w-5",
    sm: "animate-spin text-gray-900 dark:text-gray-100 h-4 w-4",
    md: "animate-spin text-gray-900 dark:text-gray-100 h-5 w-5",
    lg: "animate-spin text-gray-900 dark:text-gray-100 h-8 w-8",
    primary: "animate-spin text-blue-600 dark:text-blue-500 h-5 w-5",
  },
  LuSkeleton: {
    default: "animate-pulse rounded-md bg-gray-200 dark:bg-gray-800",
    circle: "animate-pulse rounded-full bg-gray-200 dark:bg-gray-800",
    line: "animate-pulse rounded bg-gray-200 dark:bg-gray-800 h-4 w-full",
    block: "animate-pulse rounded-md bg-gray-200 dark:bg-gray-800 h-24 w-full",
  },
  LuTag: {
    default: "inline-flex items-center rounded-md border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300",
  },
  LuTagCloseButton: {
    default: "ml-1 inline-flex items-center rounded-full outline-none hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800",
  },
  LuTagIcon: {
    default: "h-3 w-3",
  },
  LuBreadcrumb: {
    default: "flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500 sm:gap-2.5 dark:text-gray-400",
  },
  LuBreadcrumbItem: {
    default: "inline-flex items-center gap-1.5",
  },
  LuBreadcrumbLink: {
    default: "transition-colors hover:text-gray-950 dark:hover:text-gray-50",
  },
  LuBreadcrumbPage: {
    default: "font-normal text-gray-950 dark:text-gray-50",
  },
  LuBreadcrumbSeparator: {
    default: "h-3.5 w-3.5",
  },
  LuMenu: {
    default: "relative inline-block text-left",
  },
  LuMenuTrigger: {
    default: "inline-flex items-center justify-center",
  },
  LuMenuContent: {
    default: "absolute z-50 mt-2 min-w-[8rem] rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-md dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
  },
  LuMenuGroup: {
    default: "flex flex-col gap-1",
  },
  LuMenuItem: {
    default: "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800",
  },
  LuPagination: {
    default: "flex flex-row items-center justify-center gap-2",
  },
  LuPaginationButton: {
    default: "h-9 w-9 p-0 disabled:opacity-50 disabled:pointer-events-none",
  },
  LuPaginationPages: {
    default: "flex flex-row items-center gap-1",
  },
  LuPaginationPageButton: {
    default: "h-9 w-9 p-0",
  },
  LuPaginationEllipsis: {
    default: "flex h-9 w-9 items-center justify-center",
  },
  LuModalOverlay: {
    default: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm grid place-items-center p-4",
  },
  LuModal: {
    default: "relative w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-950",
  },
  LuModalHeader: {
    default: "flex flex-col space-y-1.5 p-6 text-center sm:text-left",
  },
  LuModalContent: {
    default: "p-6 pt-0",
  },
  LuModalFooter: {
    default: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0",
  },
  LuModalCloseButton: {
    default: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 dark:ring-offset-gray-950 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800 dark:data-[state=open]:text-gray-400",
  },
  LuDesktopRailBar: {
    default: "flex flex-col w-12 h-full border-r border-gray-200 bg-white transition-all duration-200 overflow-hidden dark:bg-gray-900 dark:border-gray-800 shrink-0",
    expanded: "w-56",
  },
  LuDesktopRailItem: {
    default: "flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer whitespace-nowrap dark:text-gray-300 dark:hover:bg-gray-800",
    active: "bg-blue-50 text-blue-700 font-medium dark:bg-blue-900/50 dark:text-blue-400",
  },
  LuDesktopTopBar: {
    default: "flex items-center justify-between w-full h-14 border-b border-gray-200 bg-white px-4 shrink-0 dark:bg-gray-900 dark:border-gray-800",
  },
  LuDesktopSidebar: {
    default: "flex flex-col w-64 shrink-0 border-r border-gray-200 bg-gray-50 overflow-y-auto h-full dark:bg-gray-800 dark:border-gray-800",
  },
  LuDesktopSidebarHeader: {
    default: "p-4 shrink-0",
  },
  LuDesktopSidebarContent: {
    default: "flex-1 overflow-y-auto p-4",
  },
  LuDesktopSidebarFooter: {
    default: "p-4 shrink-0",
  },
  LuDesktopStatusBar: {
    default: "flex items-center justify-between w-full h-8 border-t border-gray-200 bg-gray-50 px-4 text-xs text-gray-500 shrink-0 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-400",
  },
  LuDesktopShell: {
    default: "flex flex-col h-screen w-full overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100",
  },
  LuDesktopShellContentWrapper: {
    default: "flex flex-1 w-full overflow-hidden",
  },
  LuDesktopShellMainContent: {
    default: "flex flex-1 flex-col overflow-hidden relative",
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
    default: "bg-gray-200 hover:bg-blue-400 transition-colors z-10 dark:bg-gray-800 dark:hover:bg-blue-500",
    horizontal: "w-1 cursor-col-resize",
    vertical: "h-1 cursor-row-resize",
  },
  LuMobileShell: {
    default: "flex flex-col h-full w-full overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100",
  },
  LuMobileShellContent: {
    default: "flex flex-1 flex-col overflow-hidden relative",
  },
  LuMobileNavBar: {
    default: "flex items-center justify-around w-full h-14 border-t border-gray-200 bg-white shrink-0 pb-safe dark:bg-gray-900 dark:border-gray-800",
  },
  LuMobileHeader: {
    default: "flex items-center justify-between w-full h-14 border-b border-gray-200 bg-white px-4 shrink-0 pt-safe dark:bg-gray-900 dark:border-gray-800",
  },
  LuEmbeddedShell: {
    default: "flex flex-col h-full w-full overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 select-none",
  },
  LuEmbeddedShellContent: {
    default: "flex flex-1 w-full overflow-hidden relative",
  },
  LuEmbeddedTopBar: {
    default: "flex items-center justify-between w-full h-16 bg-gray-900 text-white px-6 shrink-0",
  },
  LuEmbeddedStatusBar: {
    default: "flex items-center justify-between w-full h-10 bg-gray-800 text-gray-300 px-6 text-sm shrink-0",
  },
  LuStack: {
    default: "flex",
    vertical: "flex flex-col",
    horizontal: "flex flex-row",
    container: "flex flex-col w-full max-w-4xl mx-auto min-h-full",
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
    "responsive-3": "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3",
  },
  LuAvatar: {
    default: "relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  },
  LuAvatarImage: {
    default: "aspect-square h-full w-full object-cover",
  },
  LuAvatarFallback: {
    default: "flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-700 text-sm font-medium dark:bg-gray-700 dark:text-gray-200",
  },
  LuBadge: {
    default: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    danger: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
  LuCard: {
    default: "rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
    panel: "rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-8 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
    surface: "rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
    footer: "border-t border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-900/50 p-6",
  },
  LuDivider: {
    default: "shrink-0 bg-gray-200 dark:bg-gray-800",
    horizontal: "h-[1px] w-full",
    vertical: "h-full w-[1px]",
  },
  LuSelect: {
    default: "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:ring-offset-gray-950 dark:placeholder:text-gray-400",
    theme: "w-32",
  },
  LuSwitch: {
    default: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 dark:bg-gray-700 dark:focus-visible:ring-offset-gray-950",
    checked: "bg-blue-600 dark:bg-blue-500",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform dark:bg-white",
    thumbChecked: "translate-x-5",
    thumbUnchecked: "translate-x-0",
    theme: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 dark:bg-gray-700 dark:focus-visible:ring-offset-gray-950",
  },
  LuSwitchThumb: {
    default: "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform dark:bg-white",
    checked: "translate-x-5",
  },
  LuTable: {
    default: "w-full caption-bottom text-sm",
  },
  LuTableHead: {
    default: "border-b border-gray-200 dark:border-gray-800",
  },
  LuTableBody: {
    default: "[&_tr:last-child]:border-0",
  },
  LuTableRow: {
    default: "border-b border-gray-200 transition-colors hover:bg-gray-100/50 data-[state=selected]:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800/50 dark:data-[state=selected]:bg-gray-800",
  },
  LuTableHeadCell: {
    default: "h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 [&:has([role=checkbox])]:pr-0",
  },
  LuTableCell: {
    default: "p-4 align-middle [&:has([role=checkbox])]:pr-0",
  },
  LuTabs: {
    default: "flex flex-col w-full",
  },
  LuTabList: {
    default: "flex items-center gap-1 border-b border-gray-200 dark:border-gray-800",
    "card-header": "flex items-center gap-1 w-full border-b border-gray-200 px-4 dark:border-gray-800",
  },
  LuTab: {
    default: "relative px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent -mb-px transition-colors duration-150 focus:outline-none cursor-pointer dark:text-gray-400 dark:hover:text-gray-200",
    active: "text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400",
  },
  LuTabPanel: {
    default: "pt-4 focus:outline-none",
  },
  LuTooltip: {
    default: "relative inline-block",
  },
  LuTooltipContent: {
    default: "absolute z-50 whitespace-nowrap overflow-hidden rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-950 shadow-md animate-in fade-in-0 zoom-in-95 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50",
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  },
  LuProgressBar: {
    default: "h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden",
    primary: "bg-blue-100 dark:bg-blue-900/30",
    success: "bg-green-100 dark:bg-green-900/30",
  },
  LuProgressBarFill: {
    default: "h-full bg-gray-900 dark:bg-gray-50 transition-all duration-300 ease-in-out",
    primary: "bg-blue-600 dark:bg-blue-500",
    success: "bg-green-500 dark:bg-green-400",
  },
  LuCollapsible: {
    default: "w-full",
  },
  LuCollapsibleTrigger: {
    default: "w-full text-left flex items-center justify-between px-2 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors dark:text-gray-300 dark:hover:bg-gray-800 cursor-pointer focus:outline-none",
  },
  LuCollapsibleContent: {
    default: "overflow-hidden",
  },
  LuLink: {
    default: "inline-flex items-center gap-1 font-medium hover:underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none",
    nav: "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
    "nav-active": "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 focus:outline-none",
    brand: "inline-flex items-center gap-1 font-medium text-gray-900 dark:text-gray-50 hover:opacity-80 transition-opacity focus:outline-none",
  },
  LuText: {
    default: "text-gray-900 dark:text-gray-100",
    "page-title": "text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white",
    "page-subtitle": "text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-[750px]",
    "section-title": "text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50",
    "body": "text-base text-gray-600 dark:text-gray-300 leading-7",
    "label": "text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400",
    "muted": "text-sm text-gray-400 dark:text-gray-500",
    "code": "font-mono text-sm border border-gray-200 dark:border-gray-800 bg-gray-100/50 text-gray-800 dark:bg-gray-800/50 dark:text-gray-200 px-1.5 py-0.5 rounded-md",
  },
  LuPageHeader: {
    default: "mb-10 pb-8 border-b border-gray-200 dark:border-gray-800",
  },
  LuToggleGroup: {
    default: "inline-flex items-center rounded-lg border border-gray-300 bg-gray-100 p-0.5 gap-0.5 shadow-sm dark:border-gray-600 dark:bg-gray-800",
  },
  LuToggleButton: {
    default:
      "inline-flex items-center justify-center rounded-md p-2 text-gray-500 transition-all duration-150 focus:outline-none hover:bg-white hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200",
    active:
      "bg-white text-gray-900 shadow-sm dark:bg-gray-600 dark:text-gray-100",
  },
  LuCodeBlock: {
    container: "flex flex-col gap-4",
    header: "flex flex-col gap-2",
    title: "text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-50",
    description: "text-base text-gray-600 dark:text-gray-400",
    card: "flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950",
    previewArea: "flex flex-col p-8 items-center justify-center min-h-[200px] w-full overflow-auto bg-gray-50 dark:bg-gray-900/50",
    codeArea: "flex flex-col relative w-full",
    splitCodeArea: "flex flex-col relative border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 w-full md:w-1/2 shrink-0",
    splitContainer: "flex flex-col md:flex-row min-h-[300px]",
    codeHeader: "flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-[#282c34]",
    badge: "text-xs font-mono font-medium text-gray-400 uppercase tracking-widest",
    copyButton: "text-gray-400 hover:text-white transition-colors p-1.5 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400",
    codeContent: "p-4 overflow-x-auto text-sm bg-[#282c34] [&>pre]:!bg-transparent [&>pre]:!m-0 [&>pre]:!p-0",
  },
};
