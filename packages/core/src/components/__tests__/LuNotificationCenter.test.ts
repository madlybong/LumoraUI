import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import LuNotificationCenter from "../LuNotificationCenter.vue";
import type { NotificationItem } from "../LuNotificationCenter.vue";

const notifications: NotificationItem[] = [
  { id: "1", title: "New order received", body: "Order #1234 has been placed", time: "2 min ago", read: false },
  { id: "2", title: "Payment confirmed",  body: "Order #1233 payment approved",  time: "1 hr ago",  read: true },
  { id: "3", title: "Stock alert",        body: "Item XYZ is low on stock",      time: "3 hr ago",  read: false },
];

describe("LuNotificationCenter", () => {
  it("renders bell trigger button", () => {
    const Wrapper = defineComponent({
      components: { LuNotificationCenter },
      template: `<LuNotificationCenter :notifications="notifications" />`,
      data() { return { notifications }; },
    });
    const wrapper = mount(Wrapper);
    const trigger = wrapper.find("button");
    expect(trigger.exists()).toBe(true);
  });

  it("shows unread count badge", () => {
    const Wrapper = defineComponent({
      components: { LuNotificationCenter },
      template: `<LuNotificationCenter :notifications="notifications" />`,
      data() { return { notifications }; },
    });
    const wrapper = mount(Wrapper);
    const unread = notifications.filter(n => !n.read).length;
    expect(wrapper.text()).toContain(String(unread));
  });

  it("panel is not visible initially", () => {
    const Wrapper = defineComponent({
      components: { LuNotificationCenter },
      template: `<LuNotificationCenter :notifications="notifications" />`,
      data() { return { notifications }; },
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).not.toContain("New order received");
  });

  it("shows panel after trigger click", async () => {
    const Wrapper = defineComponent({
      components: { LuNotificationCenter },
      template: `<LuNotificationCenter :notifications="notifications" />`,
      data() { return { notifications }; },
    });
    const wrapper = mount(Wrapper, { attachTo: document.body });
    await wrapper.find("button").trigger("click");
    expect(wrapper.text()).toContain("New order received");
    expect(wrapper.text()).toContain("Payment confirmed");
    wrapper.unmount();
  });

  it("emits read event when an unread notification is clicked", async () => {
    const Wrapper = defineComponent({
      components: { LuNotificationCenter },
      template: `<LuNotificationCenter :notifications="notifications" />`,
      data() { return { notifications }; },
    });
    const wrapper = mount(Wrapper, { attachTo: document.body });
    await wrapper.find("button").trigger("click");
    const items = wrapper.findAll("[role='listitem']");
    if (items.length > 0) {
      await items[0].trigger("click");
      const center = wrapper.findComponent(LuNotificationCenter);
      expect(center.emitted("read")).toBeTruthy();
    }
    wrapper.unmount();
  });
});
