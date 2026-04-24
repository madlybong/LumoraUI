import type { App, Plugin } from "vue";
import { LumoraUIConfigKey } from "./context";
import type { LumoraUIConfig } from "./types";

export interface LumoraUIPluginOptions extends LumoraUIConfig {
  global?: boolean;
}

export function createLumoraUI(options: LumoraUIPluginOptions = {}): Plugin {
  return {
    install(app: App) {
      const config: LumoraUIConfig = {
        target: options.target ?? "desktop",
        skin: options.skin,
        locale: options.locale ?? "en-US",
        a11y: options.a11y ?? true,
        icons: options.icons,
      };

      app.provide(LumoraUIConfigKey, config);

      if (options.global) {
        // TODO: globally register all components if requested
      }
    },
  };
}
