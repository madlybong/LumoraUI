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

/**
 * Resolves standard layout props to Tailwind classes statically.
 */
export function resolveLayoutProps(props: { 
  gap?: string | number, 
  padding?: string | number,
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly',
  width?: string,
  height?: string
}): string {
  const classes: string[] = [];
  
  if (props.gap) classes.push(`gap-${props.gap}`);
  if (props.padding) classes.push(`p-${props.padding}`);
  
  if (props.align) {
    const alignMap: Record<string, string> = {
      'start': 'items-start',
      'center': 'items-center',
      'end': 'items-end',
      'stretch': 'items-stretch',
      'baseline': 'items-baseline'
    };
    if (alignMap[props.align]) classes.push(alignMap[props.align]);
  }
  
  if (props.justify) {
    const justifyMap: Record<string, string> = {
      'start': 'justify-start',
      'center': 'justify-center',
      'end': 'justify-end',
      'between': 'justify-between',
      'around': 'justify-around',
      'evenly': 'justify-evenly'
    };
    if (justifyMap[props.justify]) classes.push(justifyMap[props.justify]);
  }

  if (props.width) {
    if (props.width === 'full') classes.push('w-full');
    else if (props.width === 'screen') classes.push('w-screen');
    else classes.push(`w-${props.width}`);
  }

  if (props.height) {
    if (props.height === 'full') classes.push('h-full');
    else if (props.height === 'screen') classes.push('h-screen');
    else classes.push(`h-${props.height}`);
  }

  return classes.join(' ');
}
