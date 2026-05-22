import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuDoughnutChart from "../LuDoughnutChart.vue";

describe("LuDoughnutChart", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuDoughnutChart, {
      props: {
        datasets: [{ label: "Data", value: 10 }]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
