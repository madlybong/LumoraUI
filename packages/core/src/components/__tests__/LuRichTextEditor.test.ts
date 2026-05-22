import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuRichTextEditor from "../LuRichTextEditor.vue";

describe("LuRichTextEditor", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuRichTextEditor, {
      props: {
        modelValue: "<p>Test</p>"
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
