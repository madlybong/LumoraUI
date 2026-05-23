import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuSwitch from "../LuSwitch.vue";

describe("LuSwitch", () => {
  it("renders with label", () => {
    const wrapper = mount(LuSwitch, {
      props: { label: "Enable Feature" },
    });
    
    expect(wrapper.text()).toContain("Enable Feature");
  });

  it("handles boolean checked state", async () => {
    const wrapper = mount(LuSwitch, {
      props: { modelValue: false },
    });
    
    const button = wrapper.find('button[role="switch"]');
    expect(button.attributes('aria-checked')).toBe("false");
    
    await wrapper.setProps({ modelValue: true });
    expect(button.attributes('aria-checked')).toBe("true");
  });

  it("handles null indeterminate state", () => {
    const wrapper = mount(LuSwitch, {
      props: { modelValue: null },
    });
    
    const button = wrapper.find('button[role="switch"]');
    expect(button.attributes('aria-checked')).toBe("mixed");
  });

  it("handles disabled state", () => {
    const wrapper = mount(LuSwitch, {
      props: { disabled: true },
    });
    
    const button = wrapper.find('button[role="switch"]');
    expect(button.attributes('disabled')).toBeDefined();
  });

  it("emits update:modelValue on click", async () => {
    const wrapper = mount(LuSwitch, {
      props: { modelValue: false },
    });
    
    await wrapper.find('label').trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([true]);
  });
});
