import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuMediaGallery from "../LuMediaGallery.vue";

describe("LuMediaGallery", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuMediaGallery, {
      props: {
        items: [{ id: "1", url: "https://example.com/img.jpg" }]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
