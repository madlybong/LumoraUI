import type { SkinMap } from "../types";

export const componentsSkin: SkinMap = {
  LuButton: {
    default: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-zinc-200 bg-white text-zinc-800 px-3.5 py-2 text-sm font-medium shadow-xs transition-all duration-150 ease-in-out hover:bg-zinc-50 hover:border-zinc-300 active:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700/60 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 dark:active:bg-zinc-600 dark:focus-visible:ring-rose-400/70",
    primary: "bg-rose-600 text-white shadow-sm rounded-lg hover:bg-rose-700 active:bg-rose-800 focus-visible:ring-rose-500 dark:bg-rose-500 dark:hover:bg-rose-600",
    secondary: "border border-zinc-300 bg-transparent dark:bg-transparent text-zinc-700 rounded-lg hover:bg-zinc-50 hover:border-zinc-400 active:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800/80",
    ghost: "border-transparent bg-transparent dark:bg-transparent text-zinc-600 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
    danger: "bg-red-600 text-white shadow-sm rounded-lg hover:bg-red-700 active:bg-red-800 dark:bg-red-500 dark:hover:bg-red-600",
    icon: "border-transparent bg-transparent dark:bg-transparent p-1.5 text-zinc-500 rounded-lg hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
    "code-action": "h-8 w-8 rounded-md border-transparent bg-zinc-950/50 dark:bg-zinc-950/50 text-white backdrop-blur-sm hover:bg-zinc-950/80 active:bg-zinc-950",
  },
  LuIcon: {
    default: "inline-flex items-center justify-center shrink-0",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  },
  LuInput: {
    default: "flex h-9 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-rose-400 dark:focus:ring-rose-400",
  },
  LuInputPrepend: {
    default: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400 dark:text-zinc-500"
  },
  LuInputAppend: {
    default: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400 dark:text-zinc-500"
  },
  LuTextarea: {
    default: "flex min-h-[72px] w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-rose-400 dark:focus:ring-rose-400",
    error: "flex min-h-[72px] w-full rounded-lg border border-red-500 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-40 dark:border-red-500 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500",
  },
  LuCheckboxContainer: {
    default: "flex items-center space-x-2",
  },
  LuCheckbox: {
    default: "h-4 w-4 rounded border-zinc-300 text-rose-600 focus:ring-rose-500 focus:ring-offset-0 disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:ring-rose-500",
  },
  LuCheckboxLabel: {
    default: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-40 text-zinc-900 dark:text-zinc-100 cursor-pointer",
  },
  LuRadioGroup: {
    default: "flex flex-col space-y-2",
    horizontal: "flex flex-row space-x-4",
  },
  LuRadioContainer: {
    default: "flex items-center space-x-2",
  },
  LuRadio: {
    default: "h-4 w-4 rounded-full border-zinc-300 text-rose-600 focus:ring-rose-500 disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:ring-rose-500",
  },
  LuRadioLabel: {
    default: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-40 text-zinc-900 dark:text-zinc-100 cursor-pointer",
  },
  LuAlert: {
    default: "relative w-full rounded-lg border-l-[3px] border-l-zinc-400 bg-zinc-50 p-4 flex gap-3 text-sm text-zinc-800 dark:border-l-zinc-600 dark:bg-zinc-900 dark:text-zinc-200",
    success: "relative w-full rounded-lg border-l-[3px] border-l-emerald-500 bg-emerald-50/70 p-4 flex gap-3 text-sm text-emerald-900 dark:border-l-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-100",
    warning: "relative w-full rounded-lg border-l-[3px] border-l-amber-500 bg-amber-50/70 p-4 flex gap-3 text-sm text-amber-900 dark:border-l-amber-500 dark:bg-amber-950/40 dark:text-amber-100",
    destructive: "relative w-full rounded-lg border-l-[3px] border-l-red-500 bg-red-50/70 p-4 flex gap-3 text-sm text-red-900 dark:border-l-red-500 dark:bg-red-950/40 dark:text-red-100",
    info: "relative w-full rounded-lg border-l-[3px] border-l-rose-500 bg-rose-50/70 p-4 flex gap-3 text-sm text-rose-900 dark:border-l-rose-500 dark:bg-rose-950/40 dark:text-rose-100",
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
    default: "animate-spin text-zinc-800 dark:text-zinc-200 h-5 w-5",
    sm: "animate-spin text-zinc-800 dark:text-zinc-200 h-4 w-4",
    md: "animate-spin text-zinc-800 dark:text-zinc-200 h-5 w-5",
    lg: "animate-spin text-zinc-800 dark:text-zinc-200 h-8 w-8",
    primary: "animate-spin text-rose-600 dark:text-rose-400 h-5 w-5",
  },
  LuSkeleton: {
    default: "animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-800",
    circle: "animate-pulse rounded-full bg-zinc-100 dark:bg-zinc-800",
    line: "animate-pulse rounded bg-zinc-100 dark:bg-zinc-800 h-3.5 w-full",
    block: "animate-pulse rounded-lg bg-zinc-100 dark:bg-zinc-800 h-24 w-full",
  },
  LuTag: {
    default: "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-zinc-200 bg-zinc-50 text-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:ring-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:focus:ring-zinc-300",
  },
  LuTagCloseButton: {
    default: "ml-1 inline-flex items-center rounded p-0.5 hover:bg-zinc-200 hover:text-zinc-900 transition-colors focus:outline-none dark:hover:bg-zinc-700 dark:hover:text-zinc-100",
  },
  LuTagIcon: {
    default: "h-3 w-3",
  },
  LuBreadcrumb: {
    default: "flex flex-wrap items-center gap-1.5 break-words text-sm text-zinc-500 sm:gap-2.5 dark:text-zinc-400",
  },
  LuBreadcrumbItem: {
    default: "inline-flex items-center gap-1.5",
  },
  LuBreadcrumbLink: {
    default: "transition-colors hover:text-zinc-950 dark:hover:text-zinc-50",
  },
  LuBreadcrumbPage: {
    default: "font-medium text-zinc-950 dark:text-zinc-50",
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
    default: "absolute z-50 mt-2 min-w-[9rem] rounded-xl border border-zinc-200/80 bg-white/95 backdrop-blur-sm p-1 text-zinc-950 shadow-lg shadow-zinc-900/10 lu-fade-in dark:border-zinc-700/80 dark:bg-zinc-900/95 dark:text-zinc-50 dark:shadow-zinc-950/50",
  },
  LuMenuGroup: {
    default: "flex flex-col gap-1",
  },
  LuMenuItem: {
    default: "relative flex w-full cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
  },
  LuPagination: {
    default: "flex flex-row items-center justify-center gap-2",
  },
  LuPaginationButton: {
    default: "h-9 w-9 p-0 disabled:opacity-40 disabled:pointer-events-none",
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
    default: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm grid place-items-center p-4",
  },
  LuModal: {
    default: "relative w-full max-w-lg rounded-2xl border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-900/15 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-zinc-950/60",
  },
  LuModalHeader: {
    default: "flex flex-col space-y-1 p-6 text-center sm:text-left",
  },
  LuModalContent: {
    default: "p-6 pt-0",
  },
  LuModalFooter: {
    default: "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2 p-6 pt-0",
  },
  LuModalCloseButton: {
    default: "absolute right-4 top-4 rounded-lg p-1 opacity-60 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 disabled:pointer-events-none dark:focus-visible:ring-rose-400",
  },
  LuModalTransitionOverlay: {
    enterActive: "transition ease-out duration-200",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leaveActive: "transition ease-in duration-150",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  LuModalTransitionContent: {
    enterActive: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leaveActive: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
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
    default: "flex h-full w-full items-center justify-center rounded-full bg-zinc-200 text-zinc-700 text-xs font-semibold dark:bg-zinc-700 dark:text-zinc-200",
  },
  LuBadge: {
    default: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-zinc-200 bg-zinc-50 text-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 dark:ring-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
    primary: "ring-1 ring-rose-200 bg-rose-50 text-rose-700 dark:ring-rose-800/50 dark:bg-rose-950/40 dark:text-rose-300",
    secondary: "ring-1 ring-zinc-200 bg-zinc-50 text-zinc-600 dark:ring-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
    danger: "ring-1 ring-red-200 bg-red-50 text-red-700 dark:ring-red-800/50 dark:bg-red-950/40 dark:text-red-300",
    success: "ring-1 ring-emerald-200 bg-emerald-50 text-emerald-700 dark:ring-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-300",
    warning: "ring-1 ring-amber-200 bg-amber-50 text-amber-700 dark:ring-amber-800/50 dark:bg-amber-950/40 dark:text-amber-300",
    info: "ring-1 ring-rose-200 bg-rose-50 text-rose-700 dark:ring-rose-800/50 dark:bg-rose-950/40 dark:text-rose-300",
  },
  LuCard: {
    default: "rounded-xl border border-zinc-200/80 bg-white shadow-sm text-zinc-950 p-6 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50",
    panel: "rounded-xl border border-zinc-200/80 bg-white shadow-sm text-zinc-950 p-8 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50",
    surface: "rounded-xl border border-zinc-200/80 bg-white shadow-sm text-zinc-950 overflow-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50",
    footer: "rounded-b-xl border-t border-zinc-100 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50",
  },
  LuDivider: {
    default: "shrink-0 bg-zinc-100 dark:bg-zinc-800/60",
    horizontal: "h-px w-full",
    vertical: "h-full w-px",
  },
  LuSelect: {
    default: "flex h-9 w-full items-center justify-between rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-rose-400 dark:focus:ring-rose-400",
    theme: "w-32",
  },
  LuSwitch: {
    default: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-40 bg-zinc-200 dark:bg-zinc-700 dark:focus-visible:ring-rose-400 dark:focus-visible:ring-offset-zinc-950",
    checked: "bg-rose-600 dark:bg-rose-500",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-md ring-0 transition-transform duration-150 dark:bg-white",
    thumbChecked: "translate-x-5",
    thumbUnchecked: "translate-x-0",
    theme: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-40 bg-zinc-200 dark:bg-zinc-700 dark:focus-visible:ring-offset-zinc-950",
  },
  LuSwitchThumb: {
    default: "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-md ring-0 transition-transform duration-150 dark:bg-white",
    checked: "translate-x-5",
  },
  LuTable: {
    default: "w-full caption-bottom text-sm",
  },
  LuTableHead: {
    default: "border-b border-zinc-200 dark:border-zinc-800",
  },
  LuTableBody: {
    default: "[&_tr:last-child]:border-0",
  },
  LuTableRow: {
    default: "border-b border-zinc-100 transition-colors hover:bg-zinc-50/80 data-[state=selected]:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800",
  },
  LuTableHeadCell: {
    default: "h-11 px-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500 [&:has([role=checkbox])]:pr-0",
  },
  LuTableCell: {
    default: "p-4 align-middle [&:has([role=checkbox])]:pr-0",
  },
  LuTabs: {
    default: "flex flex-col w-full",
  },
  LuTabList: {
    default:      "flex items-center gap-0.5 border-b border-zinc-200 dark:border-zinc-700",
    "card-header": "flex items-center gap-0.5 w-full border-b border-zinc-200 px-4 dark:border-zinc-700",
  },
  LuTab: {
    default: "relative px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent -mb-px transition-colors duration-150 cursor-pointer focus:outline-none dark:text-zinc-400 dark:hover:text-zinc-100",
    active:  "text-zinc-900 border-b-rose-500 dark:text-zinc-50 dark:border-b-rose-500",
  },
  LuTabPanel: {
    default: "pt-6 focus:outline-none",
  },
  LuTooltip: {
    default: "relative inline-block",
  },
  LuTooltipContent: {
    default: "absolute z-50 whitespace-nowrap rounded-lg bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-50 shadow-md lu-fade-in dark:bg-zinc-50 dark:text-zinc-900",
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  },
  LuProgressBar: {
    default: "h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden dark:bg-zinc-800",
    primary: "bg-rose-100 dark:bg-rose-900/30",
    success: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  LuProgressBarFill: {
    default: "h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-500 ease-in-out",
    primary: "bg-rose-600 dark:bg-rose-500",
    success: "bg-emerald-500 dark:bg-emerald-400",
  },
  LuCollapsible: {
    default: "w-full",
  },
  LuCollapsibleTrigger: {
    default: "w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-zinc-700 hover:bg-zinc-100/60 hover:text-zinc-900 transition-colors duration-100 cursor-pointer focus:outline-none dark:text-zinc-300 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100",
  },
  LuCollapsibleContent: {
    default: "overflow-hidden",
    inner: "min-h-0",
  },
  LuLink: {
    default: "no-underline inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors duration-150 focus:outline-none dark:text-zinc-300 dark:hover:text-zinc-50",
    nav: "no-underline inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium text-zinc-600 transition-colors cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
    "nav-active": "no-underline inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium bg-rose-50 text-rose-700 border-l-2 border-rose-500 -ml-px cursor-pointer dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-500",
    brand: "no-underline inline-flex items-center gap-1.5 font-semibold text-zinc-900 hover:opacity-75 transition-opacity focus:outline-none dark:text-zinc-50",
    "footer-link": "no-underline inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-150 focus:outline-none dark:text-zinc-400 dark:hover:text-zinc-200",
  },
  LuText: {
    default: "text-zinc-900 dark:text-zinc-100",
    "page-title": "text-[1.875rem] sm:text-[2.25rem] font-bold tracking-[-0.02em] leading-tight text-zinc-950 dark:text-white",
    "page-subtitle": "text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl",
    "section-title": "text-xl font-semibold tracking-[-0.01em] leading-snug text-zinc-900 dark:text-zinc-50",
    "body": "text-sm leading-6 text-zinc-600 dark:text-zinc-400",
    "label": "text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-400 dark:text-zinc-500",
    "muted": "text-xs text-zinc-400 dark:text-zinc-600",
    "code": "font-mono text-[0.8125rem] border border-zinc-200 bg-zinc-100/60 text-zinc-700 px-1 py-px rounded dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300",
    "brand-label": "text-sm font-semibold text-zinc-900 dark:text-zinc-50",
    // Skin v2 — new variants
    "metric-large": "text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 tabular-nums",
    "metric-delta": "text-sm font-semibold tabular-nums",
    "metric-delta-up": "text-sm font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums",
    "metric-delta-down": "text-sm font-semibold text-rose-600 dark:text-rose-400 tabular-nums",
    "timeline-date": "text-xs font-medium text-zinc-500 dark:text-zinc-400",
    "caption": "text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed",
    "grid-header": "text-[11px] font-semibold uppercase tracking-[0.06em] text-zinc-500 dark:text-zinc-400",
    "overline": "text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500",
    "display": "text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-none text-zinc-950 dark:text-white",
  },
  LuPageHeader: {
    default: "pt-2 pb-8 border-b border-zinc-100 dark:border-zinc-800",
  },
  LuToggleGroup: {
    default: "inline-flex items-center rounded-lg bg-zinc-100 p-0.5 gap-0.5 dark:bg-zinc-800",
    ghost:   "inline-flex items-center gap-0.5",
  },
  LuToggleButton: {
    default: "inline-flex items-center justify-center rounded-md p-2 text-zinc-500 transition-all duration-150 focus:outline-none hover:bg-white hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-200",
    active:  "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-zinc-50",
    ghost:         "inline-flex items-center justify-center rounded-md p-1.5 text-zinc-500 transition-all duration-150 focus:outline-none hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
    "ghost-active": "inline-flex items-center justify-center rounded-md p-1.5 text-zinc-900 bg-white shadow-sm ring-1 ring-zinc-200 transition-all duration-150 focus:outline-none dark:text-zinc-50 dark:bg-zinc-700 dark:ring-zinc-600/60",
  },
  LuCodeBlockWrapper: { default: "flex flex-col gap-6" },
  LuCodeBlockHeader: { default: "flex flex-col gap-2" },
  LuCodeBlockTitle: { default: "text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50" },
  LuCodeBlockDescription: { default: "text-base text-zinc-600 dark:text-zinc-400" },
  LuCodeBlockCard: { default: "flex flex-col overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900" },
  LuCodeBlockPreviewArea: { default: "flex flex-col p-8 items-center justify-center min-h-[200px] w-full overflow-auto bg-zinc-50 dark:bg-zinc-800/60" },
  LuCodeBlockCodeArea: { default: "flex flex-col relative w-full" },
  LuCodeBlockSplitArea: { default: "flex flex-col relative border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 w-full md:w-1/2 shrink-0" },
  LuCodeBlockSplitContainer: { default: "flex flex-col md:flex-row min-h-[300px]" },
  LuCodeBlockCodeHeader: { default: "flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-[#282c34]" },
  LuCodeBlockBadge: { default: "text-xs font-mono font-medium text-zinc-400 uppercase tracking-widest" },
  LuCodeBlockCopyButton: { default: "text-zinc-400 hover:text-zinc-100 hover:bg-white/10 transition-colors duration-150 p-1.5 rounded-md focus:outline-none" },
  LuCodeBlockCodeContent: { default: "p-4 overflow-x-auto text-sm bg-[#282c34] [&>pre]:!bg-transparent [&>pre]:!m-0 [&>pre]:!p-0" },

  // ─── v0.3.0: LuDataGrid ───────────────────────────────────────────────────
  LuDataGrid: {
    default: "w-full text-sm",
  },
  LuDataGridContainer: {
    default: "lu-data-grid-container relative w-full overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900",
  },
  LuDataGridToolbar: {
    default: "flex items-center justify-between gap-3 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800",
  },
  LuDataGridScrollArea: {
    default: "lu-data-grid-scroll lu-scrollbar-thin",
  },
  LuDataGridTable: {
    default: "lu-data-grid-table w-full caption-bottom text-sm",
  },
  LuDataGridHead: {
    default: "border-b border-zinc-200 dark:border-zinc-800",
  },
  LuDataGridHeaderRow: {
    default: "",
  },
  LuDataGridHeaderCell: {
    default: "h-11 px-4 text-left align-middle whitespace-nowrap select-none",
    sortable: "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors",
  },
  LuDataGridBody: {
    default: "[&_tr:last-child]:border-0",
  },
  LuDataGridRow: {
    default: "border-b border-zinc-100 transition-colors hover:bg-zinc-50/80 data-[selected=true]:bg-rose-50/50 dark:border-zinc-800 dark:hover:bg-zinc-800/50 dark:data-[selected=true]:bg-rose-950/20",
  },
  LuDataGridCell: {
    default: "px-4 py-3 align-middle",
    editing: "p-1",
  },
  LuDataGridCheckboxCell: {
    default: "px-3 align-middle w-10",
  },
  LuDataGridGroupRow: {
    default: "border-b border-zinc-100 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-800/40",
  },
  LuDataGridGroupCell: {
    default: "px-4 py-2 align-middle font-medium text-sm text-zinc-600 dark:text-zinc-400",
  },
  LuDataGridEmpty: {
    default: "flex flex-col items-center justify-center gap-3 py-16 text-center",
  },
  LuDataGridFooter: {
    default: "flex items-center justify-between px-4 py-3 border-t border-zinc-100 dark:border-zinc-800",
  },
  LuDataGridCards: {
    default: "lu-data-grid-cards flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800",
  },
  LuDataGridCard: {
    default: "flex flex-col gap-2 px-4 py-3",
  },
  LuDataGridColumnMenu: {
    default: "absolute z-50 min-w-[160px] rounded-xl border border-zinc-200/80 bg-white/95 backdrop-blur-sm p-1 shadow-lg lu-slide-down dark:border-zinc-700/80 dark:bg-zinc-900/95",
  },
  LuDataGridSortIcon: {
    default: "ml-1.5 inline-flex text-zinc-400 dark:text-zinc-500",
    asc: "text-zinc-700 dark:text-zinc-300",
    desc: "text-zinc-700 dark:text-zinc-300",
  },

  // ─── v0.3.0: LuChart components ───────────────────────────────────────────
  LuBarChart: {
    default: "w-full",
  },
  LuLineChart: {
    default: "w-full",
  },
  LuDoughnutChart: {
    default: "w-full",
  },
  LuSparkline: {
    default: "inline-block",
  },
  LuGaugeChart: {
    default: "w-full",
  },
  LuChartContainer: {
    default: "relative w-full rounded-xl border border-zinc-200/80 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900",
  },
  LuChartLegend: {
    default: "flex flex-wrap items-center gap-3 mt-3 text-xs text-zinc-500 dark:text-zinc-400",
  },
  LuChartLegendItem: {
    default: "flex items-center gap-1.5",
  },
  LuChartLegendDot: {
    default: "w-2.5 h-2.5 rounded-full shrink-0",
  },

  // ─── v0.3.0: LuFileUpload ─────────────────────────────────────────────────
  LuFileUpload: {
    default: "flex flex-col gap-3",
  },
  LuFileUploadDropzone: {
    default: "relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50/50 px-6 py-10 text-center transition-colors cursor-pointer hover:border-rose-400 hover:bg-rose-50/30 dark:border-zinc-700 dark:bg-zinc-900/50 dark:hover:border-rose-500 dark:hover:bg-rose-950/20",
    active: "border-rose-400 bg-rose-50/50 dark:border-rose-500 dark:bg-rose-950/20",
  },
  LuFileUploadInput: {
    default: "absolute inset-0 opacity-0 cursor-pointer",
  },
  LuFileUploadIcon: {
    default: "text-zinc-400 dark:text-zinc-500",
  },
  LuFileUploadHint: {
    default: "text-xs text-zinc-400 dark:text-zinc-500",
  },
  LuFileUploadList: {
    default: "flex flex-col gap-2",
  },
  LuFileUploadItem: {
    default: "flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900",
  },
  LuFileUploadItemIcon: {
    default: "shrink-0 text-zinc-400 dark:text-zinc-500",
  },
  LuFileUploadItemName: {
    default: "flex-1 min-w-0 truncate text-sm text-zinc-700 dark:text-zinc-300",
  },
  LuFileUploadItemSize: {
    default: "text-xs text-zinc-400 dark:text-zinc-500 shrink-0",
  },
  LuFileUploadItemRemove: {
    default: "shrink-0 text-zinc-400 hover:text-rose-500 transition-colors cursor-pointer dark:text-zinc-500 dark:hover:text-rose-400",
  },

  // ─── v0.3.0: LuMediaGallery ───────────────────────────────────────────────
  LuMediaGallery: {
    default: "grid gap-2",
  },
  LuMediaGalleryItem: {
    default: "relative group overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 aspect-square cursor-pointer",
  },
  LuMediaGalleryItemImage: {
    default: "w-full h-full object-cover transition-transform duration-200 group-hover:scale-105",
  },
  LuMediaGalleryItemOverlay: {
    default: "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100",
  },
  LuMediaGalleryItemBadge: {
    default: "absolute top-1.5 right-1.5",
  },

  // ─── v0.3.0: LuLightbox (internal) ────────────────────────────────────────
  LuLightbox: {
    default: "fixed inset-0 z-[100] flex items-center justify-center",
  },
  LuLightboxOverlay: {
    default: "absolute inset-0 bg-black/80 backdrop-blur-sm",
  },
  LuLightboxContent: {
    default: "relative z-10 max-w-[90vw] max-h-[90vh] flex items-center justify-center",
  },
  LuLightboxImage: {
    default: "max-w-full max-h-[90vh] rounded-lg object-contain shadow-2xl",
  },
  LuLightboxNav: {
    default: "absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer",
    prev: "left-4",
    next: "right-4",
  },
  LuLightboxClose: {
    default: "absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer",
  },
  LuLightboxCaption: {
    default: "absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-white/80",
  },

  // ─── v0.3.0: LuTimeline ───────────────────────────────────────────────────
  LuTimeline: {
    default: "flex flex-col",
  },
  LuTimelineItem: {
    default: "relative flex gap-4 pb-8 last:pb-0",
  },
  LuTimelineDotWrapper: {
    default: "relative flex flex-col items-center shrink-0",
  },
  LuTimelineDot: {
    default: "flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-200 bg-white text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400",
    success: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400",
    warning: "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-400",
    danger: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-400",
    info: "border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-400",
  },
  LuTimelineConnector: {
    default: "lu-timeline-connector flex-1 w-0.5 bg-zinc-200 mt-1 dark:bg-zinc-700",
  },
  LuTimelineContent: {
    default: "flex-1 min-w-0 pt-1 pb-2",
  },
  LuTimelineDate: {
    default: "text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-0.5",
  },

  // ─── v0.3.0: LuFormWizard ─────────────────────────────────────────────────
  LuFormWizard: {
    default: "flex flex-col w-full",
  },
  LuFormWizardSteps: {
    default: "relative flex items-center justify-between gap-2 px-2 pb-8",
  },
  LuFormWizardStepWrapper: {
    default: "relative flex flex-col items-center gap-1.5 flex-1",
  },
  LuFormWizardStep: {
    default: "flex items-center justify-center w-9 h-9 rounded-full border-2 border-zinc-300 bg-white text-sm font-medium text-zinc-500 transition-all duration-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400",
    active: "border-rose-500 bg-rose-50 text-rose-600 dark:border-rose-400 dark:bg-rose-950/30 dark:text-rose-400",
    completed: "border-emerald-500 bg-emerald-50 text-emerald-600 dark:border-emerald-400 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
  LuFormWizardStepLabel: {
    default: "text-xs text-center text-zinc-500 dark:text-zinc-400 whitespace-nowrap",
    active: "text-rose-600 font-medium dark:text-rose-400",
    completed: "text-emerald-600 dark:text-emerald-400",
  },
  LuFormWizardStepConnector: {
    default: "lu-form-wizard-step-connector bg-zinc-200 dark:bg-zinc-700",
    completed: "bg-emerald-400 dark:bg-emerald-500",
  },
  LuFormWizardBody: {
    default: "flex-1 min-h-0",
  },
  LuFormWizardFooter: {
    default: "flex items-center justify-between gap-3 pt-6 border-t border-zinc-100 mt-6 dark:border-zinc-800",
  },
  LuFormWizardError: {
    default: "text-sm text-rose-600 dark:text-rose-400",
  },

  // ─── v0.3.0: LuFormField ──────────────────────────────────────────────────
  LuFormField: {
    default: "flex flex-col gap-1.5",
  },
  LuFormFieldLabel: {
    default: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
  },
  LuFormFieldHint: {
    default: "text-xs text-zinc-400 dark:text-zinc-500",
  },
  LuFormFieldError: {
    default: "text-xs text-rose-600 dark:text-rose-400",
  },

  // ─── v0.3.0: LuTree ───────────────────────────────────────────────────────
  LuTree: {
    default: "flex flex-col gap-0.5 select-none",
  },
  LuTreeNode: {
    default: "flex flex-col",
  },
  LuTreeNodeContent: {
    default: "relative flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-zinc-700 cursor-pointer hover:bg-zinc-100 transition-colors dark:text-zinc-300 dark:hover:bg-zinc-800",
    selected: "bg-rose-50 text-rose-700 hover:bg-rose-50 dark:bg-rose-950/30 dark:text-rose-300 dark:hover:bg-rose-950/30",
    disabled: "opacity-40 pointer-events-none",
  },
  LuTreeNodeToggle: {
    default: "flex items-center justify-center w-5 h-5 shrink-0 text-zinc-400 dark:text-zinc-500",
  },
  LuTreeNodeCheckbox: {
    default: "shrink-0",
  },
  LuTreeNodeLabel: {
    default: "flex-1 min-w-0 truncate",
  },
  LuTreeChildren: {
    default: "ml-5 pl-3 border-l border-zinc-200 mt-0.5 flex flex-col gap-0.5 dark:border-zinc-700",
  },

  // ─── v0.4.0: LuKanban ─────────────────────────────────────────────────────
  LuKanban: {
    default: "w-full",
  },
  LuKanbanBoard: {
    default: "flex gap-4 overflow-x-auto pb-4 lu-scrollbar-thin",
  },
  LuKanbanColumn: {
    default: "flex flex-col gap-3 min-w-[280px] max-w-[320px] shrink-0",
  },
  LuKanbanColumnHeader: {
    default: "flex items-center justify-between gap-2 px-1",
  },
  LuKanbanColumnHeaderDot: {
    default: "w-2 h-2 rounded-full shrink-0",
  },
  LuKanbanColumnHeaderTitle: {
    default: "text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex-1",
  },
  LuKanbanColumnHeaderCount: {
    default: "text-xs text-zinc-400 dark:text-zinc-500 tabular-nums",
  },
  LuKanbanColumnBody: {
    default: "flex flex-col gap-2 min-h-[120px] rounded-xl bg-zinc-50/80 p-2 dark:bg-zinc-800/40",
  },
  LuKanbanCard: {
    default: "rounded-lg border border-zinc-200/80 bg-white p-3 shadow-xs cursor-grab active:cursor-grabbing transition-shadow hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-900",
    dragging: "shadow-lg opacity-80 rotate-1",
  },

  // ─── v0.4.0: LuCalendar / LuDateRangePicker ───────────────────────────────
  LuCalendar: {
    default: "flex flex-col gap-4",
  },
  LuCalendarHeader: {
    default: "flex items-center justify-between gap-2",
  },
  LuCalendarNav: {
    default: "flex items-center gap-1",
  },
  LuCalendarTitle: {
    default: "text-sm font-semibold text-zinc-900 dark:text-zinc-50",
  },
  LuCalendarGrid: {
    default: "w-full border-collapse",
  },
  LuCalendarGridHeader: {
    default: "text-center",
  },
  LuCalendarGridHeaderCell: {
    default: "pb-2 text-[11px] font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500",
  },
  LuCalendarDay: {
    default: "relative p-1 text-center",
  },
  LuCalendarDayButton: {
    default: "w-8 h-8 rounded-full text-sm flex items-center justify-center mx-auto hover:bg-zinc-100 transition-colors cursor-pointer dark:hover:bg-zinc-800",
    today: "font-semibold text-rose-600 dark:text-rose-400",
    selected: "bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600",
    inRange: "bg-rose-50 text-rose-700 rounded-none dark:bg-rose-950/30 dark:text-rose-300",
    disabled: "opacity-30 pointer-events-none",
    otherMonth: "text-zinc-300 dark:text-zinc-700",
  },
  LuCalendarEventDot: {
    default: "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose-500",
  },
  LuCalendarEvent: {
    default: "truncate rounded px-1 py-0.5 text-[10px] font-medium cursor-pointer",
  },
  LuDateRangePicker: {
    default: "relative inline-block",
  },
  LuDateRangePickerInput: {
    default: "flex h-9 items-center gap-2 rounded-lg border border-zinc-300 bg-zinc-50 px-3 text-sm text-zinc-900 cursor-pointer hover:border-zinc-400 transition-colors dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50",
  },
  LuDateRangePickerDropdown: {
    default: "absolute z-50 top-full mt-1 rounded-xl border border-zinc-200/80 bg-white shadow-xl p-3 lu-slide-down dark:border-zinc-700/80 dark:bg-zinc-900",
  },
  LuDateRangePresets: {
    default: "flex flex-col gap-1 border-r border-zinc-100 pr-3 mr-3 dark:border-zinc-800",
  },
  LuDateRangePreset: {
    default: "px-3 py-1.5 text-sm rounded-md text-zinc-600 hover:bg-zinc-100 cursor-pointer transition-colors dark:text-zinc-400 dark:hover:bg-zinc-800",
    active: "bg-rose-50 text-rose-700 hover:bg-rose-50 dark:bg-rose-950/30 dark:text-rose-300 dark:hover:bg-rose-950/30",
  },

  // ─── v0.4.0: LuDashboardGrid ──────────────────────────────────────────────
  LuDashboardGrid: {
    default: "lu-dashboard-grid w-full",
  },
  LuDashboardGridWidget: {
    default: "relative",
  },
  LuDashboardGridWidgetHeader: {
    default: "flex items-center justify-between gap-2 mb-3",
  },
  LuDashboardGridWidgetDragHandle: {
    default: "text-zinc-300 hover:text-zinc-500 cursor-grab active:cursor-grabbing transition-colors dark:text-zinc-600 dark:hover:text-zinc-400",
  },
  LuDashboardGridEditMode: {
    default: "[&_.lu-dashboard-widget]:ring-2 [&_.lu-dashboard-widget]:ring-rose-300 [&_.lu-dashboard-widget]:ring-offset-1",
  },

  // ─── v0.4.0: LuCommandPalette ─────────────────────────────────────────────
  LuCommandPalette: {
    default: "relative",
  },
  LuCommandPaletteOverlay: {
    default: "lu-command-palette-overlay fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4",
  },
  LuCommandPaletteDialog: {
    default: "w-full max-w-xl rounded-2xl border border-zinc-200/80 bg-white shadow-2xl overflow-hidden lu-slide-down dark:border-zinc-700/80 dark:bg-zinc-900",
  },
  LuCommandPaletteInputWrapper: {
    default: "flex items-center gap-3 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800",
  },
  LuCommandPaletteInput: {
    default: "flex-1 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-zinc-50 dark:placeholder:text-zinc-500",
  },
  LuCommandPaletteList: {
    default: "max-h-[360px] overflow-y-auto py-2 lu-scrollbar-thin",
  },
  LuCommandPaletteGroup: {
    default: "px-2 pb-2",
  },
  LuCommandPaletteGroupLabel: {
    default: "px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500",
  },
  LuCommandPaletteItem: {
    default: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-700 cursor-pointer transition-colors dark:text-zinc-300",
    active: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-300",
  },
  LuCommandPaletteItemIcon: {
    default: "shrink-0 text-zinc-400 dark:text-zinc-500",
  },
  LuCommandPaletteEmpty: {
    default: "flex items-center justify-center py-12 text-sm text-zinc-400 dark:text-zinc-500",
  },
  LuCommandPaletteFooter: {
    default: "flex items-center gap-3 px-4 py-2.5 border-t border-zinc-100 dark:border-zinc-800",
  },
  LuCommandPaletteKbd: {
    default: "inline-flex items-center gap-0.5 rounded border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
  },

  // ─── v0.4.0: LuRichTextEditor ─────────────────────────────────────────────
  LuRichTextEditor: {
    default: "flex flex-col rounded-xl border border-zinc-300 bg-zinc-50 overflow-hidden transition-[border-color] focus-within:border-rose-500 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:border-rose-400",
  },
  LuRichTextEditorToolbar: {
    default: "flex items-center gap-0.5 flex-wrap px-2 py-1.5 border-b border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900",
  },
  LuRichTextEditorToolbarButton: {
    default: "flex items-center justify-center w-8 h-8 rounded-md text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 transition-colors cursor-pointer dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
    active: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
  },
  LuRichTextEditorToolbarDivider: {
    default: "w-px h-5 bg-zinc-200 mx-1 dark:bg-zinc-700",
  },
  LuRichTextEditorContent: {
    default: "px-4 py-3 min-h-[120px] text-sm text-zinc-900 leading-relaxed focus:outline-none [&_.ProseMirror]:focus:outline-none [&_.ProseMirror]:min-h-[120px] dark:text-zinc-50",
  },


  // ─── v0.5.0: Skin keys for headless contract compliance ──────────────────────
  LuKanbanAddButton: {
    default: "flex items-center justify-center w-6 h-6 rounded text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:text-zinc-500 dark:hover:text-zinc-200 dark:hover:bg-zinc-700 transition-colors",
  },
  LuKanbanCardTitle: {
    default: "font-medium text-zinc-800 dark:text-zinc-200 line-clamp-2",
  },
  LuKanbanEmptyColumn: {
    default: "flex items-center justify-center h-20 text-xs text-zinc-400 dark:text-zinc-600 border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-lg",
  },
  LuMediaGalleryRemoveButton: {
    default: "flex items-center justify-center w-7 h-7 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition-colors",
  },
  LuChartFallbackText: {
    default: "text-xs text-zinc-400 dark:text-zinc-500",
  },
  LuCommandPaletteSearchIcon: {
    default: "text-zinc-400 dark:text-zinc-500 shrink-0",
  },
  LuCommandPaletteClearIcon: {
    default: "text-zinc-400 cursor-pointer hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300",
  },
  LuCommandPaletteItemLabel: {
    default: "font-medium",
  },

  // ─── v0.6.0: LuDrawer ───────────────────────────────────────────────────────
  LuDrawerBackdrop: {
    default: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
  },
  LuDrawerPanel: {
    default: "fixed z-50 flex flex-col bg-white shadow-2xl dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 transition-transform duration-300 ease-in-out",
  },
  "LuDrawerPanel.left": {
    default: "left-0 top-0 bottom-0 w-80 border-r",
  },
  "LuDrawerPanel.right": {
    default: "right-0 top-0 bottom-0 w-80 border-l",
  },
  "LuDrawerPanel.top": {
    default: "top-0 left-0 right-0 h-80 border-b",
  },
  "LuDrawerPanel.bottom": {
    default: "bottom-0 left-0 right-0 h-80 border-t",
  },
  LuDrawerHeader: {
    default: "flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 shrink-0",
  },
  LuDrawerContent: {
    default: "flex-1 overflow-y-auto p-6 lu-scrollbar-thin",
  },
  LuDrawerFooter: {
    default: "px-6 py-4 border-t border-zinc-100 dark:border-zinc-800 shrink-0 bg-zinc-50 dark:bg-zinc-900/50",
  },

  // ─── v0.6.0: LuList ─────────────────────────────────────────────────────────
  LuList: {
    default: "flex flex-col w-full divide-y-0 divide-zinc-100 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm overflow-hidden p-1.5",
  },
  LuListItem: {
    default: "flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500/20",
  },
  "LuListItem.active": {
    default: "bg-rose-50/50 text-rose-600 dark:bg-rose-950/10 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20",
  },
  "LuListItem.disabled": {
    default: "opacity-40 pointer-events-none",
  },
  LuListItemLeading: {
    default: "flex items-center justify-center shrink-0 min-w-[20px] text-zinc-400 dark:text-zinc-500",
  },
  LuListItemContent: {
    default: "flex-1 min-w-0 flex flex-col gap-0.5",
  },
  LuListItemTrailing: {
    default: "flex items-center justify-center shrink-0 text-zinc-400 dark:text-zinc-500 text-xs",
  },
  LuListDivider: {
    default: "h-px bg-zinc-200 dark:bg-zinc-800/80 my-1 mx-2 list-none",
  },
  LuListSubheader: {
    default: "px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 list-none mt-2 first:mt-0",
  },

  // ─── v0.6.0: LuPopover ──────────────────────────────────────────────────────
  LuPopover: {
    default: "relative inline-block",
  },
  LuPopoverContent: {
    default: "absolute z-40 w-72 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xl focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 lu-fade-in",
  },

  // ─── v0.6.0: LuBottomSheet ──────────────────────────────────────────────────
  LuBottomSheetBackdrop: {
    default: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
  },
  LuBottomSheet: {
    default: "fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] flex flex-col rounded-t-3xl border-t border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 transition-transform duration-300 ease-in-out",
  },
  LuBottomSheetHandle: {
    default: "py-4 w-full cursor-grab active:cursor-grabbing shrink-0",
  },
};

