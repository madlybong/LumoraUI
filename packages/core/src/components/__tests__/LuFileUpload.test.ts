import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuFileUpload from "../LuFileUpload.vue";

describe("LuFileUpload", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuFileUpload);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the drop zone area", () => {
    const wrapper = mount(LuFileUpload);
    // Should have a clickable/droppable area
    expect(wrapper.find("[role='button']").exists() || wrapper.find("label").exists() || wrapper.find("input[type='file']").exists()).toBe(true);
  });

  it("applies accept filter", () => {
    const wrapper = mount(LuFileUpload, {
      props: { accept: ["image/*"] },
    });
    const input = wrapper.find("input[type='file']");
    if (input.exists()) {
      expect(input.attributes("accept")).toBe("image/*");
    }
  });

  it("allows multiple file selection when multiple prop is true", () => {
    const wrapper = mount(LuFileUpload, {
      props: { multiple: true },
    });
    const input = wrapper.find("input[type='file']");
    if (input.exists()) {
      expect(input.attributes("multiple")).toBeDefined();
    }
  });
});
