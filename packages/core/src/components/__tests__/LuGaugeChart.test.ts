import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuGaugeChart from "../LuGaugeChart.vue";

describe("LuGaugeChart", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuGaugeChart, {
      props: {
        value: 50
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
