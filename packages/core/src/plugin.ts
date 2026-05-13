import type { App, Plugin } from "vue";
import { shallowReactive } from "vue";
import { LumoraUIConfigKey } from "./context";
import type { LumoraUIConfig } from "./types";
import * as allComponents from "./components/_all";

export interface LumoraUIPluginOptions extends LumoraUIConfig {
  global?: boolean;
}

export function createLumoraUI(options: LumoraUIPluginOptions = {}): Plugin {
  return {
    install(app: App) {
      const config = shallowReactive<LumoraUIConfig>({
        target: options.target ?? "desktop",
        skin: options.skin,
        locale: options.locale ?? "en-US",
        a11y: options.a11y ?? true,
        icons: options.icons,
      });

      app.provide(LumoraUIConfigKey, config);

      if (options.global !== false) {
        for (const [name, component] of Object.entries(allComponents)) {
          if (name.startsWith('Lu') && typeof component === 'object') {
            app.component(name, component);
          }
        }
      }
    },
  };
}
