import { inject, isRef, type InjectionKey, type Component } from "vue";
import type { LumoraUIConfig, SkinMap } from "./types";

export const LumoraUIConfigKey: InjectionKey<LumoraUIConfig> = Symbol("LumoraUIConfig");

export function useLumoraConfig() {
  const config = inject(LumoraUIConfigKey, {});

  const resolveSkin = (componentName: string, variant?: string): string => {
    if (!config.skin) return "";
    
    // Unwrap the skin map if it's a ref
    const skinMap = isRef(config.skin) ? config.skin.value : config.skin;
    if (!skinMap) return "";

    const componentSkin = skinMap[componentName];
    if (!componentSkin) return "";

    const classes: string[] = [];
    if (componentSkin.default) {
      classes.push(componentSkin.default);
    }
    if (variant && componentSkin[variant]) {
      classes.push(componentSkin[variant] as string);
    }

    return classes.join(" ");
  };

  const resolveIcon = (name: string, size?: number): Component | null => {
    if (!config.icons) return null;
    return config.icons(name, size);
  };

  return { config, resolveSkin, resolveIcon };
}
