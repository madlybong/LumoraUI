import type { SkinMap } from "../types";
import { componentsSkin } from "./components";
import { layoutSkin } from "./layout";
import { desktopSkin } from "./shell/desktop";
import { mobileSkin } from "./shell/mobile";
import { embeddedSkin } from "./shell/embedded";

export const defaultSkin: SkinMap = {
  ...componentsSkin,
  ...layoutSkin,
  ...desktopSkin,
  ...mobileSkin,
  ...embeddedSkin,
};
