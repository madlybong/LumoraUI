import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuEntityCard from "../LuEntityCard.vue";

describe("LuEntityCard", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuEntityCard);
    expect(wrapper.exists()).toBe(true);
  });
});
