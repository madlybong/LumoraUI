import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import LuTree from "../LuTree.vue";
import type { TreeNodeData } from "../LuTree.types";

const nodes: TreeNodeData[] = [
  {
    id: "1",
    label: "Documents",
    children: [
      { id: "1-1", label: "Work" },
      { id: "1-2", label: "Personal", children: [{ id: "1-2-1", label: "Photos" }] },
    ],
  },
  { id: "2", label: "Downloads" },
];

describe("LuTree", () => {
  it("renders root nodes", () => {
    const Wrapper = defineComponent({
      components: { LuTree },
      template: `<LuTree :nodes="nodes" />`,
      data() { return { nodes }; },
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).toContain("Documents");
    expect(wrapper.text()).toContain("Downloads");
  });

  it("does not render children when node is not expanded", () => {
    const Wrapper = defineComponent({
      components: { LuTree },
      template: `<LuTree :nodes="nodes" />`,
      data() { return { nodes }; },
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).not.toContain("Work");
    expect(wrapper.text()).not.toContain("Personal");
  });

  it("renders all children when defaultExpanded=true", () => {
    const Wrapper = defineComponent({
      components: { LuTree },
      template: `<LuTree :nodes="nodes" :defaultExpanded="true" />`,
      data() { return { nodes }; },
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).toContain("Work");
    expect(wrapper.text()).toContain("Personal");
    expect(wrapper.text()).toContain("Photos");
  });

  it("has role=tree on the container", () => {
    const Wrapper = defineComponent({
      components: { LuTree },
      template: `<LuTree :nodes="nodes" />`,
      data() { return { nodes }; },
    });
    const wrapper = mount(Wrapper);
    const tree = wrapper.findComponent(LuTree);
    expect(tree.attributes("role")).toBe("tree");
  });
});
