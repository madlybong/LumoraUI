import { ref, computed, watchEffect } from "vue";

export type ThemeMode = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

// Global state for the theme
const mode = ref<ThemeMode>("system");
const systemPrefersDark = ref(false);

// Update system preference when window matches change
if (typeof window !== "undefined") {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  systemPrefersDark.value = mediaQuery.matches;
  mediaQuery.addEventListener("change", (e) => {
    systemPrefersDark.value = e.matches;
  });
}

const resolved = computed<ResolvedTheme>(() => {
  if (mode.value === "system") {
    return systemPrefersDark.value ? "dark" : "light";
  }
  return mode.value;
});

export function useTheme() {
  const setMode = (newMode: ThemeMode) => {
    mode.value = newMode;
  };

  return {
    mode,
    resolved,
    setMode,
  };
}
