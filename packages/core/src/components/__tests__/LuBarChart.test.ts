import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuBarChart from "../LuBarChart.vue";

describe("LuBarChart", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuBarChart, {
      props: {
        labels: ["A", "B"],
        datasets: [{ label: "Data", data: [10, 20] }]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
