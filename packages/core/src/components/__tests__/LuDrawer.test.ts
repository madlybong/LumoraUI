import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LuDrawer from "../LuDrawer.vue";

describe("LuDrawer", () => {
  it("renders slot contents when open", async () => {
    const wrapper = mount(LuDrawer, {
      props: {
        modelValue: true,
        position: "right"
      },
      slots: {
        header: "<h2>Test Header</h2>",
        default: "<p>Test Content</p>",
        footer: "<button>Test Footer</button>"
      }
    });

    expect(wrapper.exists()).toBe(true);
    const body = document.body;
    expect(body.innerHTML).toContain("Test Header");
    expect(body.innerHTML).toContain("Test Content");
    expect(body.innerHTML).toContain("Test Footer");
    
    wrapper.unmount();
  });

  it("does not render panel when closed", () => {
    const wrapper = mount(LuDrawer, {
      props: {
        modelValue: false
      }
    });
    // Teleport doesn't mount when closed
    const panel = document.querySelector("[role='dialog']");
    expect(panel).toBeNull();
    
    wrapper.unmount();
  });

  it("emits close and update:modelValue when backdrop is clicked", async () => {
    const wrapper = mount(LuDrawer, {
      props: {
        modelValue: true,
        closeOnOutsideClick: true
      }
    });

    const backdrop = document.querySelector(".lu-drawer__backdrop");
    expect(backdrop).not.toBeNull();
    if (backdrop) {
      await backdrop.dispatchEvent(new MouseEvent("click"));
      expect(wrapper.emitted("update:modelValue")).toBeTruthy();
      expect(wrapper.emitted("update:modelValue")![0]).toEqual([false]);
    }
    
    wrapper.unmount();
  });
});
