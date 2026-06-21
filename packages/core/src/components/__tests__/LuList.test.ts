import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LuList from "../LuList.vue";
import LuListItem from "../LuListItem.vue";
import LuListDivider from "../LuListDivider.vue";
import LuListSubheader from "../LuListSubheader.vue";

describe("LuList family", () => {
  it("renders LuList with items correctly", () => {
    const wrapper = mount(LuList, {
      slots: {
        default: `
          <LuListSubheader label="Group A" />
          <LuListItem>Item 1</LuListItem>
          <LuListDivider />
          <LuListItem active>Item 2</LuListItem>
        `
      },
      global: {
        components: {
          LuListItem,
          LuListDivider,
          LuListSubheader
        }
      }
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.element.tagName.toLowerCase()).toBe("ul");
    expect(wrapper.text()).toContain("Group A");
    expect(wrapper.text()).toContain("Item 1");
    expect(wrapper.text()).toContain("Item 2");
  });

  it("handles clickable and disabled states in LuListItem", async () => {
    const onClick = vi.fn();
    const wrapper = mount(LuListItem, {
      props: {
        clickable: true,
        disabled: false
      },
      slots: {
        default: "Click me"
      },
      attrs: {
        onClick
      }
    });

    expect(wrapper.classes()).toContain("lu-list-item--clickable");
    expect(wrapper.attributes("tabindex")).toBe("0");

    await wrapper.trigger("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("prevents clicks on disabled LuListItem", async () => {
    const onClick = vi.fn();
    const wrapper = mount(LuListItem, {
      props: {
        clickable: true,
        disabled: true
      },
      slots: {
        default: "Disabled"
      },
      attrs: {
        onClick
      }
    });

    expect(wrapper.classes()).not.toContain("lu-list-item--clickable");
    expect(wrapper.attributes("tabindex")).toBeUndefined();

    await wrapper.trigger("click");
    expect(onClick).not.toHaveBeenCalled();
  });
});
