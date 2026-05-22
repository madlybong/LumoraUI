import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuFileUpload from "../LuFileUpload.vue";

describe("LuFileUpload", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuFileUpload);
    expect(wrapper.exists()).toBe(true);
  });
});
