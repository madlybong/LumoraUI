import type { SkinMap } from "@astrake/lumora-ui";

const darkSkin: SkinMap = {
  LuEmbeddedShell: { default: "flex flex-col h-screen w-screen overflow-hidden bg-black text-zinc-200 font-sans touch-none select-none" },
  LuEmbeddedShellContent: { default: "flex-1 min-h-0 min-w-0 flex flex-col relative overflow-hidden" },
  
  LuStack: {
    default: "flex",
    vertical: "flex-col",
    horizontal: "flex-row",
    "status-bar": "items-center justify-between px-6 h-12 shrink-0 border-b border-white/10 bg-black z-50",
    "status-left": "items-center gap-4",
    "status-right": "items-center gap-2",
    "drive-layout": "h-full w-full justify-between items-center py-12",
    "drive-instrument-cluster": "items-center gap-6 w-full max-w-2xl",
    "speed-display": "absolute inset-0 items-center justify-center pt-8",
    "gear-selector": "items-center gap-8 px-8 py-3 bg-zinc-900/50 rounded-full border border-white/5",
    "trip-stats-grid": "items-center justify-center gap-12 mt-4 w-full",
    "trip-stat-item": "items-center gap-1",
    "climate-layout": "h-full w-full p-8 max-w-4xl mx-auto justify-center gap-12",
    "climate-zones": "items-center justify-between w-full",
    "climate-zone": "items-center gap-6 p-8 bg-zinc-900/40 rounded-3xl border border-white/5 flex-1 max-w-xs",
    "temp-controls": "items-center justify-between w-full",
    "seat-heater": "items-center gap-3 mt-4",
    "fan-controls": "items-center gap-4 w-full max-w-xl mx-auto",
    "fan-slider-row": "items-center gap-4 w-full bg-zinc-900/40 p-6 rounded-2xl border border-white/5",
    "climate-toggles": "items-center justify-center gap-6",
    "media-layout": "h-full w-full p-8 max-w-2xl mx-auto gap-8",
    "now-playing": "items-center gap-6",
    "track-info": "justify-center min-w-0 flex-1",
    "player-controls-area": "gap-6 w-full bg-zinc-900/40 p-8 rounded-3xl border border-white/5",
    "seek-bar-row": "items-center gap-4 w-full",
    "playback-buttons": "items-center justify-center gap-8 w-full",
    "volume-bar-row": "items-center gap-4 w-full mt-2",
    "playlist": "w-full pb-32",
    "charge-layout": "h-full w-full p-8 max-w-3xl mx-auto gap-8",
    "battery-display-area": "w-full bg-zinc-900/40 p-8 rounded-3xl border border-white/5",
    "battery-header": "items-center justify-between w-full",
    "battery-status": "items-end",
    "charge-limit-slider": "items-center gap-4 mt-6",
    "charge-stats-grid": "items-center justify-between w-full px-4",
    "charge-stat-item": "items-start gap-1",
    "schedule-row": "items-center justify-between w-full bg-zinc-900/40 p-6 rounded-2xl border border-white/5",
    "controls-layout": "w-full max-w-3xl mx-auto gap-6 p-8 pb-32",
    "quick-controls-grid": "items-center justify-between gap-4 py-4",
    "control-items": "w-full py-2 gap-2",
    "control-row": "items-center justify-between w-full py-4 border-b border-white/5",
    "segmented-control": "items-center bg-zinc-900 rounded-lg p-1 border border-white/5",
  },

  LuFill: {
    default: "flex-1 min-h-0 min-w-0",
    "dashboard-view-area": "flex-1 relative w-full h-full",
    "drive-car-view": "flex-1 flex items-center justify-center w-full",
  },

  LuText: {
    "status-temp": "text-lg font-medium",
    "status-clock": "text-xl font-bold tracking-wider",
    "status-battery": "text-lg font-medium",
    "speed-value": "text-[120px] font-bold leading-none tracking-tighter text-white",
    "speed-unit": "text-xl font-bold text-zinc-500 uppercase tracking-widest",
    "gear-active": "text-2xl font-bold text-white",
    "gear-inactive": "text-2xl font-bold text-zinc-600",
    "stat-label": "text-sm text-zinc-500 font-medium uppercase tracking-wider",
    "stat-value": "text-xl font-medium text-zinc-200",
    "climate-label": "text-sm text-zinc-500 font-medium uppercase tracking-widest",
    "temp-value": "text-5xl font-light text-white w-24 text-center",
    "seat-label": "text-xs font-bold text-zinc-500 uppercase tracking-widest",
    "track-title": "text-2xl font-bold text-white truncate",
    "track-artist": "text-lg text-zinc-400 truncate",
    "track-album": "text-sm text-zinc-600 truncate mt-1",
    "time-text": "text-sm font-mono text-zinc-500",
    "battery-percent": "text-6xl font-bold text-white tracking-tighter",
    "charge-status-text": "text-xl font-semibold text-emerald-500",
    "charge-time-text": "text-sm text-zinc-500",
    "control-label": "text-lg font-medium text-zinc-200",
  },

  LuButton: {
    default: "inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:opacity-50",
    "temp-btn": "w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all",
    "climate-toggle": "px-8 py-3 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 font-medium hover:bg-zinc-800 transition-colors",
    "climate-toggle-active": "px-8 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-600/20 transition-colors",
    "media-btn": "w-14 h-14 rounded-full text-zinc-400 hover:text-white flex items-center justify-center transition-colors",
    "media-btn-primary": "w-20 h-20 rounded-full bg-white text-black hover:bg-zinc-200 flex items-center justify-center shadow-xl active:scale-95 transition-all",
    "quick-control-btn": "flex flex-col items-center justify-center w-32 h-32 bg-zinc-900 hover:bg-zinc-800 rounded-2xl border border-white/5 text-sm font-medium text-zinc-300 transition-colors",
  },

  LuTabs: {
    "dashboard-tabs": "flex flex-col h-full w-full relative",
  },

  LuTabList: {
    "nav-dock": "flex items-center gap-4 bg-black/80 backdrop-blur-xl px-8 py-3 rounded-3xl border border-white/10 shadow-2xl",
  },

  LuTab: {
    "nav-tab": "flex flex-col items-center justify-center w-20 h-16 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer rounded-2xl",
    active: "!text-indigo-400",
  },

  LuTabPanel: {
    "view-panel": "absolute inset-0 flex flex-col w-full h-full",
  },

  LuProgressBar: {
    "fan-bar": "h-2 bg-zinc-800 rounded-full overflow-hidden relative cursor-pointer",
    "seek-bar": "h-1.5 bg-zinc-800 rounded-full overflow-hidden relative cursor-pointer group hover:h-3 transition-all",
    "volume-bar": "h-2 bg-zinc-800 rounded-full overflow-hidden relative cursor-pointer",
    "limit-bar": "h-2 bg-zinc-800 rounded-full overflow-hidden relative cursor-pointer",
  },

  LuProgressBarFill: {
    "fan-bar": "h-full bg-white transition-all duration-300",
    "seek-bar": "h-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors duration-300",
    "volume-bar": "h-full bg-white transition-all duration-300",
    "limit-bar": "h-full bg-zinc-500 transition-all duration-300",
  },

  LuCollapsible: {
    "control-group": "flex flex-col w-full bg-zinc-900/40 rounded-3xl border border-white/5 overflow-hidden",
  },

  LuCollapsibleTrigger: {
    "control-group": "flex items-center px-8 py-6 w-full cursor-pointer bg-transparent border-none outline-none",
  },

  LuCollapsibleContent: {
    "control-group": "flex flex-col px-8 pb-4",
  },

  LuScroll: {
    default: "overflow-y-auto h-full w-full",
    "playlist-scroll": "w-full max-w-2xl mx-auto overflow-y-auto no-scrollbar",
    "controls-scroll": "w-full h-full overflow-y-auto no-scrollbar",
  },

  LuSwitch: {
    "tesla-switch": "relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
  }
};

export { darkSkin as embeddedSkin, darkSkin as embeddedDarkSkin };
