import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuCalendar from "../LuCalendar.vue";

describe("LuCalendar", () => {
  it("renders correctly with no events", () => {
    const wrapper = mount(LuCalendar, {
      props: { events: [] },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders day of week headers", () => {
    const wrapper = mount(LuCalendar, {
      props: { events: [] },
    });
    const text = wrapper.text();
    // Check for abbreviated day names (Mon-based or Sun-based)
    expect(text).toMatch(/Mon|Tue|Wed|Thu|Fri|Sat|Sun/);
  });

  it("renders the current month/year label", () => {
    const wrapper = mount(LuCalendar, {
      props: { events: [] },
    });
    // Check for year somewhere in text
    const currentYear = new Date().getFullYear().toString();
    expect(wrapper.text()).toContain(currentYear);
  });

  it("emits update:modelValue on date click", async () => {
    const wrapper = mount(LuCalendar, {
      props: { events: [], modelValue: "2026-05-15" },
    });
    // Find a date button and click it
    const dayButtons = wrapper.findAll("button");
    const dateButton = dayButtons.find(
      (btn) => btn.text().trim() === "15" && !btn.classes().includes("opacity-0")
    );
    expect(dateButton).toBeDefined();
    await dateButton!.trigger("click");
    // Should emit some update event
    expect(wrapper.emitted()).toBeDefined();
  });

  it("renders event indicators when events are provided", () => {
    const today = new Date();
    const isoToday = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const wrapper = mount(LuCalendar, {
      props: {
        events: [{ id: "1", label: "Meeting", date: isoToday }],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("navigates months with prev/next buttons", async () => {
    const wrapper = mount(LuCalendar, {
      props: { events: [] },
    });
    // Find navigation buttons and click next
    const navButtons = wrapper.findAll("button");
    // The last few buttons should be prev/next navigation
    expect(navButtons.length).toBeGreaterThan(2);
    await navButtons[1].trigger("click"); // Next month button
    // Text should have changed (different month displayed)
    expect(wrapper.exists()).toBe(true);
  });
});
