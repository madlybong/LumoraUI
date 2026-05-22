import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuDashboardGrid from "../LuDashboardGrid.vue";

describe("LuDashboardGrid", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuDashboardGrid, {
      props: {
        widgets: [],
        columns: 4
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
