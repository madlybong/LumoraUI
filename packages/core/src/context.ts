import { inject, type InjectionKey, type Component } from "vue";
import type { LumoraUIConfig } from "./types";

export const LumoraUIConfigKey: InjectionKey<LumoraUIConfig> = Symbol("LumoraUIConfig");

export function useLumoraConfig() {
  const config = inject(LumoraUIConfigKey, {});

  const resolveIcon = (name: string, size?: number): Component | null => {
    if (!config.icons) return null;
    return config.icons(name, size);
  };

  return { config, resolveIcon };
}
