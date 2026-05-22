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

  // ─── v0.5.0: POS suite ────────────────────────────────────────────────────
  LuEmbeddedPOSLayout: {
    default: "lu-embedded-pos-layout",
    "2col": "lu-embedded-pos-layout grid-cols-[1fr_360px]",
    "3col": "lu-embedded-pos-layout grid-cols-[240px_1fr_360px]",
  },
  LuEmbeddedPOSTopBar: {
    default: "flex items-center justify-between gap-3 px-4 h-12 border-b border-zinc-200 bg-zinc-50 shrink-0 dark:bg-zinc-900 dark:border-zinc-800",
  },
  LuEmbeddedBarcodeInput: {
    default: "flex flex-col gap-1.5",
  },
  LuEmbeddedBarcodeInputField: {
    default: "flex h-11 items-center gap-3 rounded-xl border-2 border-zinc-300 bg-zinc-50 px-4 text-sm font-mono focus-within:border-rose-500 transition-colors dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:border-rose-400",
    scanning: "border-emerald-500 bg-emerald-50/30 dark:border-emerald-400 dark:bg-emerald-950/20",
  },
  LuEmbeddedBarcodeInputInner: {
    default: "flex-1 bg-transparent focus:outline-none text-zinc-900 placeholder:text-zinc-400 dark:text-zinc-50 dark:placeholder:text-zinc-500",
  },
  LuEmbeddedPOSItemList: {
    default: "lu-embedded-pos-item-list flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800 lu-scrollbar-thin",
  },
  LuEmbeddedPOSItemListRow: {
    default: "flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors",
  },
  LuEmbeddedPOSItemListQty: {
    default: "flex items-center gap-1.5 shrink-0",
  },
  LuEmbeddedPOSItemListQtyBtn: {
    default: "flex items-center justify-center w-7 h-7 rounded-md border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-300 transition-colors dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700",
  },
  LuEmbeddedPOSItemListQtyValue: {
    default: "w-8 text-center text-sm font-semibold text-zinc-900 dark:text-zinc-50 tabular-nums",
  },
  LuEmbeddedPOSItemListRemove: {
    default: "shrink-0 flex items-center justify-center w-7 h-7 rounded-md text-zinc-300 hover:text-rose-500 hover:bg-rose-50 transition-colors dark:text-zinc-600 dark:hover:text-rose-400 dark:hover:bg-rose-950/20",
  },
  LuEmbeddedPOSSummary: {
    default: "flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800",
  },
  LuEmbeddedPOSSummaryRow: {
    default: "flex items-center justify-between px-4 py-2 text-sm",
  },
  LuEmbeddedPOSSummaryTotal: {
    default: "flex items-center justify-between px-4 py-3 font-bold text-base text-zinc-900 dark:text-zinc-50",
  },
  LuEmbeddedPOSPayment: {
    default: "flex flex-col gap-2 p-4",
  },
  LuEmbeddedPOSPaymentMethod: {
    default: "flex items-center gap-2.5 rounded-xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 cursor-pointer transition-colors hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600",
    selected: "border-rose-500 bg-rose-50/50 dark:border-rose-400 dark:bg-rose-950/20",
  },
  LuEmbeddedPOSPayButton: {
    default: "flex items-center justify-center gap-2 h-12 w-full rounded-xl font-semibold text-sm transition-colors bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 dark:bg-rose-500 dark:hover:bg-rose-600",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  },
};

