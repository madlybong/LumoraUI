import type { InjectionKey, Ref } from 'vue';

export interface LuRadioGroupContext {
  name: string;
  modelValue: Ref<string | number | undefined>;
  updateValue: (value: string | number) => void;
  disabled: Ref<boolean>;
}

export const LuRadioGroupContextKey: InjectionKey<LuRadioGroupContext> = Symbol('LuRadioGroupContext');
