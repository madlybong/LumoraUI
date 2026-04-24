import type { SkinMap } from "@astrake/lumora-ui";

const lightSkin: SkinMap = {
  LuMobileShell: { default: "flex flex-col h-full w-full overflow-hidden bg-white relative" },
  LuMobileShellContent: { default: "flex flex-1 flex-col overflow-hidden relative bg-white" },
  LuMobileHeader: { default: "flex items-center h-14 bg-white border-b border-zinc-100 px-2 shrink-0 pt-safe w-full relative z-20 justify-between" },
  LuMobileNavBar: { default: "h-[52px] flex bg-white border-t border-zinc-200 items-center justify-around pb-safe shrink-0 w-full relative z-20" },

  LuStack: {
    default: "flex",
    vertical: "flex-col",
    horizontal: "flex-row",
    
    // Headers
    "header-chats": "h-14 items-center px-4 gap-3 bg-white border-b border-zinc-100 shrink-0 w-full relative z-20",
    "header-actions": "ml-auto gap-4 items-center text-zinc-500",
    "header-nav": "items-center gap-3 flex-1 min-w-0 cursor-pointer",
    "header-contact": "min-w-0 justify-center",
    "header-call-btns": "items-center gap-1 text-indigo-600 shrink-0",
    "header-updates": "h-14 items-center px-4 bg-white border-b border-zinc-100 shrink-0 w-full relative z-20",
    "status-hero": "px-4 py-3 bg-white",
    "status-list": "bg-white border-y border-zinc-100 divide-y divide-zinc-100",
    "date-header": "justify-center mb-2",
    
    // Chat List
    "chat-list-item": "px-4 py-3 gap-3.5 hover:bg-zinc-50 active:bg-zinc-100 cursor-pointer transition-colors",
    "chat-list-meta": "items-baseline justify-between mb-0.5",
    "chat-list-preview": "items-center justify-between gap-2",
    
    // Chat Thread
    "bubble-sent": "max-w-[82%] rounded-xl rounded-tr-sm px-3 py-1.5 relative shadow-sm bg-[#E1FFC7] self-end",
    "bubble-recv": "max-w-[82%] rounded-xl rounded-tl-sm px-3 py-1.5 relative shadow-sm bg-white self-start",
    "compose-row": "items-end gap-2 relative z-10 w-full",
    
    // Bottom Nav
    "tab-item": "items-center justify-center flex-1 h-full cursor-pointer transition-colors",
    
    // Updates
    "status-list-item": "px-4 py-3 gap-4 items-center cursor-pointer active:bg-zinc-50",
    "my-status-row": "items-center gap-4 cursor-pointer",
    
    // Calls
    "call-list-item": "px-4 py-3 gap-4 items-center",
    "call-meta": "items-center gap-1.5",
    
    // Settings
    "settings-group": "mx-4 mb-4 bg-white rounded-xl overflow-hidden shadow-sm divide-y divide-zinc-100",
    "settings-row": "px-4 py-3 gap-4 items-center active:bg-zinc-50 cursor-pointer",
    "settings-label-col": "flex-1",
    
    // Profile
    "profile-hero": "items-center pt-8 pb-6 bg-white border-b border-zinc-200",
    "profile-card": "m-4 bg-white rounded-xl p-4 gap-4 items-center shadow-sm",
    "profile-action-item": "items-center gap-1.5 py-2 cursor-pointer active:bg-zinc-50 rounded-lg",
    "profile-bio-card": "bg-white mx-4 mt-4 rounded-xl p-4 shadow-sm",
    "media-header-row": "px-4 py-3 justify-between items-center border-b border-zinc-100",
  },

  LuText: {
    "app-title": "font-bold text-xl text-zinc-900 tracking-tight",
    "contact-name": "font-semibold text-[16px] text-zinc-900 truncate pr-2",
    "timestamp": "text-[12px] font-medium text-zinc-500 whitespace-nowrap shrink-0 ml-2",
    "preview-normal": "text-[14px] truncate leading-snug text-zinc-500",
    "preview-unread": "text-[14px] truncate leading-snug text-zinc-800 font-medium",
    "chat-name-header": "font-semibold text-[15px] text-zinc-900 truncate leading-tight",
    "online-status": "text-[11px] text-emerald-500 font-medium",
    "offline-status": "text-[11px] text-zinc-500 font-medium",
    "bubble-text": "text-[15px] text-zinc-900 leading-snug break-words",
    "bubble-time": "text-[10px] text-zinc-500 text-right mt-0.5 -mb-0.5 inline-flex items-center justify-end gap-1",
    "section-header": "px-4 py-2 block text-[13px] font-semibold text-zinc-500 uppercase tracking-wide",
    "setting-label": "text-[16px] text-zinc-900",
    "setting-desc": "text-[13px] text-zinc-500",
    "profile-name": "font-bold text-[24px] text-zinc-900 mb-1",
    "profile-phone": "text-[16px] text-zinc-500",
    "tab-label": "text-[10px] font-semibold tracking-wide",
    "action-label": "text-[12px] font-medium text-indigo-600",
    "media-section-label": "text-[15px] font-semibold text-zinc-900",
    "media-count": "text-[14px] text-zinc-500",
    "bio-text": "text-[15px] text-zinc-900 leading-relaxed",
    "bio-date": "text-[13px] text-zinc-500 mt-1",
    "date-pill": "bg-zinc-200/80 backdrop-blur-sm text-zinc-600 text-[11px] font-bold px-3 py-1 rounded-lg shadow-sm",
  },

  LuButton: {
    default: "inline-flex items-center justify-center transition-colors focus:outline-none",
    ghost: "hover:bg-zinc-100 active:bg-zinc-200 rounded-lg",
    "nav-action": "p-1.5 -m-1.5",
    "back-btn": "p-2 text-indigo-600 flex items-center gap-1 shrink-0 w-20 relative z-10",
    "icon-action": "p-2 text-indigo-600",
    "header-action": "p-2 -mr-2 text-zinc-500 ml-auto",
    "call-icon": "p-2 shrink-0",
    "compose-extra": "p-2 text-zinc-500 shrink-0 mb-1 rounded-full",
    "send-btn": "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mb-0.5 bg-indigo-600 text-white shadow-sm",
    "mic-btn": "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mb-0.5 bg-zinc-100 text-zinc-500",
    "settings-qr": "ml-auto !p-2 shrink-0 flex items-center justify-center text-zinc-400",
  },

  LuInput: {
    default: "flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50",
    "search-bar": "w-full !bg-zinc-100 !border-transparent !shadow-none pl-9 py-2 text-[15px] rounded-xl h-10 focus:!ring-0 text-zinc-900",
    "compose": "w-full !bg-transparent !border-0 !py-2 !px-0 text-[15px] focus:!outline-none !shadow-none !ring-0 resize-none leading-snug max-h-[120px] min-h-[24px] text-zinc-900",
  },

  LuScroll: {
    default: "overflow-y-auto h-full",
    horizontal: "overflow-x-auto w-full",
    "chat-thread": "p-4 flex flex-col gap-2 bg-[#E5DDD5]",
    "settings-bg": "bg-zinc-100",
    "profile-bg": "bg-zinc-100",
    "list-bg": "divide-y divide-zinc-100",
  },

  LuFill: {
    default: "flex-1 min-h-0 min-w-0 overflow-hidden",
    "compose-input": "bg-white rounded-[20px] border border-zinc-200 flex flex-row items-end min-h-[40px] max-h-[120px] pl-3 py-0.5 w-full",
    "chat-body": "z-10",
    "call-center": "justify-center",
  },

  LuFixed: {
    default: "shrink-0",
    "compose-bar": "p-2 shrink-0 z-20 pb-safe relative",
    "media-thumb": "aspect-square bg-zinc-200",
    "mobile-header": "flex items-center h-14 bg-white border-b border-zinc-100 px-2 shrink-0 pt-safe w-full relative z-20 justify-between",
    "mobile-navbar": "h-[52px] flex bg-white border-t border-zinc-200 items-center justify-around pb-safe shrink-0 w-full relative z-20",
    "status-avatar": "w-14 h-14 rounded-full bg-zinc-200 text-zinc-500 font-bold flex items-center justify-center text-[22px]",
    "status-add-badge": "absolute bottom-0 right-0 w-5 h-5 bg-indigo-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-[14px] leading-none pb-[1px]",
    "settings-avatar": "w-16 h-16 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[24px]",
  },

  LuDockItem: {
    default: "shrink-0",
    top: "shrink-0",
    bottom: "shrink-0",
    left: "shrink-0 h-full",
    right: "shrink-0 h-full",
    fill: "flex-1 min-h-0 min-w-0 overflow-hidden",
    "search-header": "px-4 py-2 bg-white",
  },

  LuGrid: {
    default: "grid",
    "action-bar": "bg-white mx-4 mt-4 rounded-xl p-3 shadow-sm",
    "media-grid": "p-1 gap-1",
  },

  LuSwitch: {
    default: "relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent transition-colors focus:outline-none bg-zinc-200",
    active: "bg-indigo-600",
    theme: "relative inline-flex h-6 w-11 items-center rounded-full border-2 border-transparent transition-colors focus:outline-none bg-zinc-200",
  },
  
  LuSwitchThumb: {
    default: "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform translate-x-0",
    active: "translate-x-5",
    theme: "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform translate-x-0",
  },

  LuSelect: {
    default: "rounded-lg border border-zinc-200 bg-white py-1.5 pl-3 pr-8 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",
    theme: "rounded-lg border border-zinc-200 bg-white py-1.5 pl-3 pr-8 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",
  },
  
  LuOverlay: {
    default: "absolute inset-0 z-50",
    "chat-bg": "absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none z-0",
  }
};

// We create a dark version by just overriding specific colors.
// For brevity in the demo, we map some core backgrounds to dark, but ideally
// it would be a full tailwind dark: map or a distinct set of strings.
const darkSkin: SkinMap = {
  ...lightSkin,
  LuMobileShell: { default: "flex flex-col h-full w-full overflow-hidden bg-zinc-950 relative" },
  LuMobileShellContent: { default: "flex flex-1 flex-col overflow-hidden relative bg-zinc-950" },
  
  LuFixed: {
    ...lightSkin.LuFixed,
    "mobile-header": "flex items-center h-14 bg-zinc-900 border-b border-zinc-800 px-2 shrink-0 pt-safe w-full relative z-20 justify-between",
    "mobile-navbar": "h-[52px] flex bg-zinc-900 border-t border-zinc-800 items-center justify-around pb-safe shrink-0 w-full relative z-20",
    "status-avatar": "w-14 h-14 rounded-full bg-zinc-800 text-zinc-400 font-bold flex items-center justify-center text-[22px]",
    "status-add-badge": "absolute bottom-0 right-0 w-5 h-5 bg-indigo-600 rounded-full border-2 border-zinc-900 flex items-center justify-center text-white font-bold text-[14px] leading-none pb-[1px]",
    "settings-avatar": "w-16 h-16 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-[24px]",
  },
  
  LuDockItem: {
    ...lightSkin.LuDockItem,
    "search-header": "px-4 py-2 bg-zinc-950",
  },
  
  LuText: {
    ...lightSkin.LuText,
    "app-title": "font-bold text-xl text-zinc-100 tracking-tight",
    "setting-label": "text-[16px] text-zinc-100",
    "contact-name": "font-semibold text-[16px] text-zinc-100 truncate pr-2",
    "chat-name-header": "font-semibold text-[15px] text-zinc-100 truncate leading-tight",
    "profile-name": "font-bold text-[24px] text-zinc-100 mb-1",
    "bio-text": "text-[15px] text-zinc-100 leading-relaxed",
    "bubble-text": "text-[15px] text-zinc-100 leading-snug break-words",
    "bubble-time": "text-[10px] text-zinc-400 text-right mt-0.5 -mb-0.5 inline-flex items-center justify-end gap-1",
    "preview-normal": "text-[14px] truncate leading-snug text-zinc-400",
    "setting-desc": "text-[13px] text-zinc-400",
    "section-header": "px-4 py-2 block text-[13px] font-semibold text-zinc-400 uppercase tracking-wide",
    "action-label": "text-[12px] font-medium text-indigo-400",
    "media-section-label": "text-[15px] font-semibold text-zinc-100",
    "tab-label": "text-[10px] font-semibold tracking-wide",
    "timestamp": "text-[12px] font-medium text-zinc-400 whitespace-nowrap shrink-0 ml-2",
    "media-count": "text-[14px] text-zinc-400",
    "date-pill": "bg-zinc-800/80 backdrop-blur-sm text-zinc-300 text-[11px] font-bold px-3 py-1 rounded-lg shadow-sm",
  },
  
  LuButton: {
    ...lightSkin.LuButton,
    "mic-btn": "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mb-0.5 bg-zinc-800 text-zinc-400 hover:bg-zinc-700",
    "send-btn": "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mb-0.5 bg-indigo-500 text-white shadow-sm",
    "icon-action": "p-2 text-indigo-400",
    "header-action": "p-2 -mr-2 text-zinc-400 ml-auto",
    "back-btn": "p-2 text-indigo-400 flex items-center gap-1 shrink-0 w-20 relative z-10",
    "nav-action": "p-1.5 -m-1.5 text-zinc-100",
    "call-icon": "p-2 shrink-0 text-indigo-400",
    "compose-extra": "p-2 text-zinc-400 shrink-0 mb-1 rounded-full",
    "settings-qr": "ml-auto !p-2 shrink-0 flex items-center justify-center text-zinc-500",
  },
  
  LuStack: {
    ...lightSkin.LuStack,
    "header-chats": "h-14 items-center px-4 gap-3 bg-zinc-900 border-b border-zinc-800 shrink-0 w-full relative z-20",
    "header-updates": "h-14 items-center px-4 bg-zinc-900 border-b border-zinc-800 shrink-0 w-full relative z-20",
    "status-hero": "px-4 py-3 bg-zinc-900",
    "status-list": "bg-zinc-900 border-y border-zinc-800 divide-y divide-zinc-800/50",
    "chat-list-item": "px-4 py-3 gap-3.5 hover:bg-zinc-800 active:bg-zinc-800 cursor-pointer transition-colors",
    "bubble-sent": "max-w-[82%] rounded-xl rounded-tr-sm px-3 py-1.5 relative shadow-sm bg-indigo-600 self-end",
    "bubble-recv": "max-w-[82%] rounded-xl rounded-tl-sm px-3 py-1.5 relative shadow-sm bg-zinc-800 self-start",
    "settings-group": "mx-4 mb-4 bg-zinc-900 rounded-xl overflow-hidden shadow-sm divide-y divide-zinc-800",
    "settings-row": "px-4 py-3 gap-4 items-center active:bg-zinc-800 cursor-pointer",
    "profile-card": "m-4 bg-zinc-900 rounded-xl p-4 gap-4 items-center shadow-sm",
    "profile-hero": "items-center pt-8 pb-6 bg-zinc-900 border-b border-zinc-800",
    "profile-action-item": "items-center gap-1.5 py-2 cursor-pointer active:bg-zinc-800 rounded-lg",
    "profile-bio-card": "bg-zinc-900 mx-4 mt-4 rounded-xl p-4 shadow-sm",
  },
  
  LuScroll: {
    ...lightSkin.LuScroll,
    "chat-thread": "p-4 flex flex-col gap-2 bg-black",
    "settings-bg": "bg-zinc-950",
    "profile-bg": "bg-zinc-950",
    "list-bg": "divide-y divide-zinc-800/50",
  },
  
  LuFill: {
    ...lightSkin.LuFill,
    "compose-input": "bg-zinc-900 rounded-[20px] border border-zinc-800 flex flex-row items-end min-h-[40px] max-h-[120px] pl-3 py-0.5 w-full",
  },
  
  LuGrid: {
    ...lightSkin.LuGrid,
    "action-bar": "bg-zinc-900 mx-4 mt-4 rounded-xl p-3 shadow-sm",
  },
  
  LuInput: {
    ...lightSkin.LuInput,
    "search-bar": "w-full !bg-zinc-800 text-zinc-100 placeholder:text-zinc-500 !border-transparent !shadow-none pl-9 py-2 text-[15px] rounded-xl h-10 focus:!ring-0",
    "compose": "w-full !bg-transparent !border-0 !py-2 !px-0 text-[15px] focus:!outline-none !shadow-none !ring-0 resize-none leading-snug max-h-[120px] min-h-[24px] text-zinc-100",
  }
};

export { lightSkin as mobileSkin, darkSkin as mobileDarkSkin };
