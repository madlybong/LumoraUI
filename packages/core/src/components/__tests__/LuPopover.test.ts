import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LuPopover from "../LuPopover.vue";

describe("LuPopover", () => {
  it("renders trigger correctly", () => {
    const wrapper = mount(LuPopover, {
      slots: {
        trigger: "<button id='trigger-btn'>Click me</button>",
        content: "<div id='popover-content'>Popover info</div>"
      }
    });

    expect(wrapper.exists()).toBe(true);
    const trigger = wrapper.find("#trigger-btn");
    expect(trigger.exists()).toBe(true);
    
    // Content should not be visible initially
    const content = wrapper.find("#popover-content");
    expect(content.exists()).toBe(false);
  });

  it("toggles popover content on trigger click", async () => {
    const wrapper = mount(LuPopover, {
      props: {
        trigger: "click"
      },
      slots: {
        trigger: "<button id='trigger-btn'>Click me</button>",
        content: "<div id='popover-content'>Popover info</div>"
      }
    });

    const trigger = wrapper.find("#trigger-btn");
    await trigger.trigger("click");

    const content = wrapper.find("#popover-content");
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe("Popover info");

    await trigger.trigger("click");
    expect(wrapper.find("#popover-content").exists()).toBe(false);
  });

  it("shows popover content on trigger hover", async () => {
    const wrapper = mount(LuPopover, {
      props: {
        trigger: "hover"
      },
      slots: {
        trigger: "<button id='trigger-btn'>Hover me</button>",
        content: "<div id='popover-content'>Popover info</div>"
      }
    });

    const triggerWrapper = wrapper.find(".lu-popover__trigger");
    await triggerWrapper.trigger("mouseenter");

    const content = wrapper.find("#popover-content");
    expect(content.exists()).toBe(true);

    await wrapper.trigger("mouseleave");
    expect(wrapper.find("#popover-content").exists()).toBe(false);
  });
});
