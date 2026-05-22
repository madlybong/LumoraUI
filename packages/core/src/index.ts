export * from "./types";
export { useLumoraConfig, LumoraUIConfigKey } from "./context";
export { createLumoraUI } from "./plugin";

export * from "./layout/index";
export * from "./shell/index";
export * from "./components/index";
export * from "./skins/index";

// Composables (public API)
export { useDataGrid } from "./composables/useDataGrid";
export { useChartTheme } from "./composables/useChartTheme";
export type { UseDataGridOptions } from "./composables/useDataGrid";

// Short aliases for Retail/Kiosk components
export { default as LuPOSLayout } from "./shell/embedded/LuEmbeddedPOSLayout.vue";
export { default as LuBarcodeInput } from "./shell/embedded/LuEmbeddedBarcodeInput.vue";
export { default as LuPOSItemList } from "./shell/embedded/LuEmbeddedPOSItemList.vue";
export { default as LuPOSSummary } from "./shell/embedded/LuEmbeddedPOSSummary.vue";
export { default as LuPOSPayment } from "./shell/embedded/LuEmbeddedPOSPayment.vue";
export type { POSLineItem as LuPOSLineItem } from "./shell/embedded/LuEmbeddedPOSItemList.vue";
export type { POSSummaryLine as LuPOSSummaryLine } from "./shell/embedded/LuEmbeddedPOSSummary.vue";
export type { PaymentMethod as LuPaymentMethod } from "./shell/embedded/LuEmbeddedPOSPayment.vue";
