import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuDateRangePicker from "../LuDateRangePicker.vue";

describe("LuDateRangePicker", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuDateRangePicker, {
      props: {
        modelValue: { start: new Date().toISOString(), end: new Date().toISOString() }
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
