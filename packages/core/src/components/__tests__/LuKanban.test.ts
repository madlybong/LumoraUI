import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuKanban from "../LuKanban.vue";

const columns = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      { id: "1", title: "Task A", priority: "high" as const },
      { id: "2", title: "Task B" },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [{ id: "3", title: "Task C", tags: ["shipped"] }],
  },
];

describe("LuKanban", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuKanban, {
      props: { columns },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders column titles", () => {
    const wrapper = mount(LuKanban, {
      props: { columns },
    });
    expect(wrapper.text()).toContain("To Do");
    expect(wrapper.text()).toContain("Done");
  });

  it("renders card titles", () => {
    const wrapper = mount(LuKanban, {
      props: { columns },
    });
    expect(wrapper.text()).toContain("Task A");
    expect(wrapper.text()).toContain("Task B");
    expect(wrapper.text()).toContain("Task C");
  });

  it("renders card count per column", () => {
    const wrapper = mount(LuKanban, {
      props: { columns },
    });
    expect(wrapper.text()).toContain("2"); // Todo column count
    expect(wrapper.text()).toContain("1"); // Done column count
  });

  it("emits card-click when a card is clicked", async () => {
    const wrapper = mount(LuKanban, {
      props: { columns },
    });
    // Find any card div and click it
    const cardElements = wrapper.findAll("[tabindex='0']");
    expect(cardElements.length).toBeGreaterThan(0);
    await cardElements[0].trigger("click");
    expect(wrapper.emitted("card-click")).toBeTruthy();
  });

  it("emits add-card when the add button is clicked", async () => {
    const wrapper = mount(LuKanban, {
      props: { columns },
    });
    const addButtons = wrapper.findAll("button[aria-label^='Add card']");
    expect(addButtons.length).toBeGreaterThan(0);
    await addButtons[0].trigger("click");
    expect(wrapper.emitted("add-card")).toBeTruthy();
    expect(wrapper.emitted("add-card")![0]).toEqual(["todo"]);
  });

  it("shows empty state text when column has no cards", () => {
    const emptyColumns = [{ id: "empty", title: "Empty", cards: [] }];
    const wrapper = mount(LuKanban, {
      props: { columns: emptyColumns },
    });
    expect(wrapper.text()).toContain("Empty");
  });
});
