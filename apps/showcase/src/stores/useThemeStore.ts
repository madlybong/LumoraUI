import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ThemeMode, ResolvedTheme } from "@astrake/lumora-ui/composables";

export const useThemeStore = defineStore(
  "lu-theme",
  () => {
    const mode = ref<ThemeMode>("system");

    // We can't use useMediaQuery directly inside pinia setup in the same way,
    // but we can just use the exact same logic we had in the core composable
    const systemPrefersDark = ref(false);

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

    const setMode = (newMode: ThemeMode) => {
      mode.value = newMode;
    };

    return {
      mode,
      resolved,
      setMode,
    };
  },
  {
    persist: true,
  }
);
