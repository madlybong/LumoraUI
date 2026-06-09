import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuPlanner from "../LuPlanner.vue";
import type { LuPlannerEvent } from "../LuPlanner.types";

describe("LuPlanner", () => {
  const events: LuPlannerEvent[] = [
    {
      id: "evt1",
      title: "Weekly Sync",
      date: "2026-05-25", // A Monday
      startTime: "09:00",
      endTime: "10:30",
      color: "#3b82f6",
    },
  ];

  it("renders 7 day columns in week view", () => {
    const wrapper = mount(LuPlanner, {
      props: {
        events,
        startDate: "2026-05-25",
        startHour: 8,
        endHour: 18,
      },
    });
    
    // Check that we have 7 columns (one for each weekday)
    const columns = wrapper.findAll(".lu-planner__day-column");
    expect(columns.length).toBe(7);
  });

  it("renders event title inside day column", () => {
    const wrapper = mount(LuPlanner, {
      props: {
        events,
        startDate: "2026-05-25",
        startHour: 8,
        endHour: 18,
      },
    });

    expect(wrapper.text()).toContain("Weekly Sync");
    expect(wrapper.text()).toContain("09:00 – 10:30");
  });

  it("emits slot-click when an empty slot is clicked", async () => {
    const wrapper = mount(LuPlanner, {
      props: {
        events,
        startDate: "2026-05-25",
        startHour: 8,
        endHour: 18,
      },
    });

    const cell = wrapper.find(".lu-planner__hour-cell");
    expect(cell.exists()).toBe(true);

    await cell.trigger("click");
    expect(wrapper.emitted("slot-click")).toBeTruthy();
    const payload = wrapper.emitted("slot-click")?.[0]?.[0] as any;
    expect(payload.date).toBe("2026-05-25");
    expect(payload.time).toBeDefined();
  });

  it("emits week-change when prev/next buttons are clicked", async () => {
    const wrapper = mount(LuPlanner, {
      props: {
        events,
        startDate: "2026-05-25",
      },
    });

    const prevButton = wrapper.find('button[aria-label="Previous week"]');
    const nextButton = wrapper.find('button[aria-label="Next week"]');

    expect(prevButton.exists()).toBe(true);
    expect(nextButton.exists()).toBe(true);

    await prevButton.trigger("click");
    expect(wrapper.emitted("week-change")).toBeTruthy();
    expect(wrapper.emitted("week-change")?.[0]?.[0]).toBe("2026-05-18");

    await nextButton.trigger("click");
    expect(wrapper.emitted("week-change")?.[1]?.[0]).toBe("2026-05-25");
  });
});
