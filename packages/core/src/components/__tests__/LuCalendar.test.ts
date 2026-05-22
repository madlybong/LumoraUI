import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuCalendar from "../LuCalendar.vue";

describe("LuCalendar", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuCalendar, {
      props: {
        events: []
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
