import { inject, isRef, type InjectionKey, type Component } from "vue";
import type { LumoraUIConfig, SkinMap } from "./types";
import { extendSkin, cn } from "./utils";
import { defaultSkin } from "./skins/default";

export const LumoraUIConfigKey: InjectionKey<LumoraUIConfig> = Symbol("LumoraUIConfig");

export function useLumoraConfig() {
  const config = inject(LumoraUIConfigKey, {});

  const resolveSkin = (componentName: string, variant?: string): string => {
    // Unwrap the user's skin map if it's a ref
    const userSkinMap = isRef(config.skin) ? config.skin.value : (config.skin || {});
    
    // The base structural skin merged with any consumer overrides
    const skinMap = extendSkin(defaultSkin, userSkinMap);

    const componentSkin = skinMap[componentName];
    if (!componentSkin) return "";

    const classes: string[] = [];
    if (componentSkin.default) {
      classes.push(componentSkin.default);
    }
    if (variant && componentSkin[variant]) {
      classes.push(componentSkin[variant] as string);
    }

    // Use cn() so that variant classes intelligently override default classes
    return cn(classes);
  };

  const resolveIcon = (name: string, size?: number): Component | null => {
    if (!config.icons) return null;
    return config.icons(name, size);
  };

  return { config, resolveSkin, resolveIcon };
}
