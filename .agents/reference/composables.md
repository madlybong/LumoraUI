# Composables Reference Guide

This document lists and details the shared Composition API hooks (composables) exported by `@astrake/lumora-ui`.

---

## 1. Core Config & Theme

### `useLumoraConfig()`
- **Purpose**: Retrieves the active, reactive configuration state provided by the `createLumoraUI` plugin (e.g., target surface, locale).
- **Exposes**:
  - `config`: ShallowReactive configuration object.

### `useTheme()`
- **Purpose**: Coordinates light and dark theme classes across the application frame. It registers media listeners and updates document-level class markers.
- **Exposes**:
  - `theme`: Reactive string (`'light' | 'dark'`).
  - `setTheme(theme: 'light' | 'dark')`: Toggles active color space.

---

## 2. Layout & Shell Systems

### `useRail()`
- **Purpose**: Manages the expand/collapse state of the navigation rail system in desktop application shells.
- **Exposes**:
  - `isExpanded`: Reactive boolean indicating state.
  - `toggleRail()`: Inverts expansion state.

### `useSplit()`
- **Purpose**: Tracks mouse drags and calculates width percentages for resizable splitter container panels.
- **Exposes**:
  - `panes`: Reactive array of panel widths.
  - `isDragging`: Reactive boolean.
  - `startResize(index: number, event: MouseEvent)`: Initiates resize tracking.

---

## 3. Overlay & UI Behavior

### `useFloating()`
- **Purpose**: Connects trigger anchors to floating utility layers (tooltips, popovers, context menus) using standard auto-placement rules.
- **Exposes**:
  - `x`, `y`: Injected coordinate values.
  - `strategy`: Reactive CSS position strategy.
  - `referenceRef`, `floatingRef`: Template reference bindings.

### `useLuToast()`
- **Purpose**: Operates the global active toast notification queue.
- **Exposes**:
  - `toasts`: Reactive array of active notifications.
  - `addToast(toast: ToastPayload)`: Queues a new alert.
  - `removeToast(id: string)`: Dismisses a target notification.

---

## 4. Rich Data Primitives

### `useDataGrid(options: DataGridOptions)`
- **Purpose**: Provides sorting, cell selection, filtering, and page pagination logic for the `LuDataGrid` tables.
- **Exposes**:
  - `sortedData`: Computed collection.
  - `currentPage`: Reactive page number.
  - `toggleSort(key: string)`: Re-sorts active view column.

### `useShiki()`
- **Purpose**: Lazy-initializes and caches the Shiki syntax highlighting engine inside the browser to power the native `LuCodeBlock` component.
- **Exposes**:
  - `highlighter`: Reactive instance reference.
  - `isLoaded`: Reactive loaded status indicator.
  - `highlight(code: string, lang: string)`: Returns highlighted HTML.
