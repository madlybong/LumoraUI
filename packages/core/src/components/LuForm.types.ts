import type { InjectionKey, Ref } from "vue";

export type LuFormValidator = (value: unknown) => string | null | Promise<string | null>;

export type LuFormRules = Record<string, LuFormValidator | LuFormValidator[]>;

export type LuFormErrors = Record<string, string>;

export interface LuFormFieldRegistration {
  name: string;
  getValue: () => unknown;
  setValue: (v: unknown) => void;
  setError: (msg: string | null) => void;
}

export const LuFormContextKey = Symbol("LuFormContext") as InjectionKey<LuFormContext>;

export interface LuFormContext {
  register(field: LuFormFieldRegistration): void;
  unregister(name: string): void;
  getError(name: string): string | null;
  validateOn: Readonly<Ref<"submit" | "blur" | "both">>;
  disabled: Readonly<Ref<boolean>>;
}
