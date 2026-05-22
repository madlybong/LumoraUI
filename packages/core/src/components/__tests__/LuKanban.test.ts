import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuKanban from "../LuKanban.vue";

describe("LuKanban", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuKanban, {
      props: {
        columns: [{ id: "todo", title: "To Do", cards: [{ id: "1", title: "Task 1" }] }]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
