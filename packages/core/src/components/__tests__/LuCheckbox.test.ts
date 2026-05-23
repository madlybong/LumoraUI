import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LuCheckbox from "../LuCheckbox.vue";

describe("LuCheckbox", () => {
  it("renders custom checkbox", () => {
    const wrapper = mount(LuCheckbox, {
      props: { label: "Test checkbox" },
    });
    
    const button = wrapper.find('button[role="checkbox"]');
    expect(button.exists()).toBe(true);
    expect(wrapper.text()).toContain("Test checkbox");
  });

  it("handles checked state", async () => {
    const wrapper = mount(LuCheckbox, {
      props: { modelValue: false },
    });
    
    const button = wrapper.find('button[role="checkbox"]');
    expect(button.attributes('aria-checked')).toBe("false");
    
    await wrapper.setProps({ modelValue: true });
    expect(button.attributes('aria-checked')).toBe("true");
  });

  it("handles indeterminate state", () => {
    const wrapper = mount(LuCheckbox, {
      props: { indeterminate: true },
    });
    
    const button = wrapper.find('button[role="checkbox"]');
    expect(button.attributes('aria-checked')).toBe("mixed");
  });

  it("handles disabled state", () => {
    const wrapper = mount(LuCheckbox, {
      props: { disabled: true },
    });
    
    const button = wrapper.find('button[role="checkbox"]');
    expect(button.attributes('aria-disabled')).toBe("true");
    expect(button.attributes('disabled')).toBeDefined();
  });

  it("emits update:modelValue on click", async () => {
    const wrapper = mount(LuCheckbox, {
      props: { modelValue: false },
    });
    
    await wrapper.find('button[role="checkbox"]').trigger("click");
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([true]);
  });
});
