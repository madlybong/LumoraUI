import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LuBottomSheet from "../LuBottomSheet.vue";

describe("LuBottomSheet", () => {
  it("renders when open", () => {
    const wrapper = mount(LuBottomSheet, {
      props: {
        modelValue: true
      },
      slots: {
        default: "<p>Bottom Sheet Content</p>"
      }
    });

    expect(wrapper.exists()).toBe(true);
    const body = document.body;
    expect(body.innerHTML).toContain("Bottom Sheet Content");
    
    wrapper.unmount();
  });

  it("does not render when closed", () => {
    const wrapper = mount(LuBottomSheet, {
      props: {
        modelValue: false
      }
    });
    
    const panel = document.querySelector("[role='dialog']");
    expect(panel).toBeNull();
    
    wrapper.unmount();
  });

  it("emits close when backdrop is clicked", async () => {
    const wrapper = mount(LuBottomSheet, {
      props: {
        modelValue: true
      }
    });

    const backdrop = document.querySelector(".fixed.inset-0.z-50");
    expect(backdrop).not.toBeNull();
    if (backdrop) {
      await backdrop.dispatchEvent(new MouseEvent("click"));
      expect(wrapper.emitted("update:modelValue")).toBeTruthy();
      expect(wrapper.emitted("update:modelValue")![0]).toEqual([false]);
    }
    
    wrapper.unmount();
  });
});
