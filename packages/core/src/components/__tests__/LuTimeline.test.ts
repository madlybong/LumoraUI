import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import LuTimeline from "../LuTimeline.vue";
import LuTimelineItem from "../LuTimelineItem.vue";

describe("LuTimeline", () => {
  it("renders a container with role=list", () => {
    const Wrapper = defineComponent({
      components: { LuTimeline },
      template: `<LuTimeline><span>test</span></LuTimeline>`,
    });
    const wrapper = mount(Wrapper);
    const timeline = wrapper.findComponent(LuTimeline);
    expect(timeline.attributes("role")).toBe("list");
  });

  it("renders slot content", () => {
    const Wrapper = defineComponent({
      components: { LuTimeline },
      template: `<LuTimeline><span id="inner">content</span></LuTimeline>`,
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.find("#inner").exists()).toBe(true);
  });
});

describe("LuTimelineItem", () => {
  it("renders the date", () => {
    const Wrapper = defineComponent({
      components: { LuTimelineItem },
      template: `<LuTimelineItem date="May 22, 2026" />`,
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).toContain("May 22, 2026");
  });

  it("renders without errors for success status", () => {
    const Wrapper = defineComponent({
      components: { LuTimelineItem },
      template: `<LuTimelineItem status="success" />`,
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders multiple timeline items correctly", () => {
    const Wrapper = defineComponent({
      components: { LuTimeline, LuTimelineItem },
      template: `
        <LuTimeline>
          <LuTimelineItem date="Day 1" :last="false">Event A</LuTimelineItem>
          <LuTimelineItem date="Day 2" :last="true">Event B</LuTimelineItem>
        </LuTimeline>
      `,
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).toContain("Day 1");
    expect(wrapper.text()).toContain("Day 2");
  });
});
