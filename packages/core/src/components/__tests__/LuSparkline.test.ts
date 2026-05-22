import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuSparkline from "../LuSparkline.vue";

describe("LuSparkline", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuSparkline, {
      props: {
        data: [10, 20, 15]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
