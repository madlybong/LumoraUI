import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { SkinMap } from "./types";

/**
 * Merges Tailwind classes intelligently
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extends a base skin with a user skin, intelligently merging Tailwind classes
 */
export function extendSkin(baseSkin: SkinMap, userSkin: SkinMap): SkinMap {
  const merged: SkinMap = { ...baseSkin };

  for (const componentName in userSkin) {
    if (!merged[componentName]) {
      merged[componentName] = { ...userSkin[componentName] };
      continue;
    }

    const componentBase = merged[componentName];
    const componentUser = userSkin[componentName];

    const mergedComponent: any = { ...componentBase };

    for (const variant in componentUser) {
      if (componentBase[variant]) {
        mergedComponent[variant] = cn(componentBase[variant], componentUser[variant]);
      } else {
        mergedComponent[variant] = componentUser[variant];
      }
    }

    merged[componentName] = mergedComponent;
  }

  return merged;
}

