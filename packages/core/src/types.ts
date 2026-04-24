import type { Component, Ref, ComputedRef } from "vue";

export type SkinMap = {
  [componentName: string]: {
    default?: string;
    [variant: string]: string | undefined;
  };
};

export type IconResolver = (name: string, size?: number) => Component | null;

export interface LumoraUIConfig {
  target?: "mobile" | "desktop" | "embedded";
  skin?: SkinMap | Ref<SkinMap> | ComputedRef<SkinMap>;
  locale?: string;
  a11y?: boolean;
  icons?: IconResolver;
}
