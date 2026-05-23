import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuRadioGroup from "../LuRadioGroup.vue";
import LuRadio from "../LuRadio.vue";

describe("LuRadio", () => {
  it("renders custom radio button", () => {
    const wrapper = mount({
      components: { LuRadioGroup, LuRadio },
      template: `
        <LuRadioGroup name="test" modelValue="1">
          <LuRadio value="1" label="One" />
          <LuRadio value="2" label="Two" />
        </LuRadioGroup>
      `
    });
    
    const radios = wrapper.findAll('button[role="radio"]');
    expect(radios).toHaveLength(2);
    expect(wrapper.text()).toContain("One");
    expect(wrapper.text()).toContain("Two");
  });

  it("handles checked state correctly", () => {
    const wrapper = mount({
      components: { LuRadioGroup, LuRadio },
      template: `
        <LuRadioGroup name="test" modelValue="2">
          <LuRadio value="1" />
          <LuRadio value="2" />
        </LuRadioGroup>
      `
    });
    
    const radios = wrapper.findAll('button[role="radio"]');
    expect(radios[0].attributes('aria-checked')).toBe("false");
    expect(radios[1].attributes('aria-checked')).toBe("true");
  });

  it("handles disabled state", () => {
    const wrapper = mount({
      components: { LuRadioGroup, LuRadio },
      template: `
        <LuRadioGroup name="test" modelValue="1">
          <LuRadio value="1" />
          <LuRadio value="2" disabled />
        </LuRadioGroup>
      `
    });
    
    const radios = wrapper.findAll('button[role="radio"]');
    expect(radios[1].attributes('aria-disabled')).toBe("true");
    expect(radios[1].attributes('disabled')).toBeDefined();
  });

  it("updates value on click", async () => {
    const wrapper = mount(LuRadioGroup, {
      props: { name: "test", modelValue: "1" },
      slots: {
        default: `
          <LuRadio value="1" />
          <LuRadio value="2" />
        `
      },
      global: { components: { LuRadio } }
    });
    
    const radios = wrapper.findAll('button[role="radio"]');
    await radios[1].trigger("click");
    
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual(["2"]);
  });
});
