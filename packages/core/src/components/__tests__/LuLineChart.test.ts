import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuLineChart from "../LuLineChart.vue";

describe("LuLineChart", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuLineChart, {
      props: {
        labels: ["A", "B"],
        datasets: [{ label: "Data", data: [10, 20] }]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
