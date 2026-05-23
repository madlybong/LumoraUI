import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LuChip from "../LuChip.vue";
import LuChipGroup from "../LuChipGroup.vue";

describe("LuChip", () => {
  it("renders correctly with custom label and closable button", async () => {
    const onClose = vi.fn();
    const onClick = vi.fn();
    const wrapper = mount(LuChip, {
      props: {
        label: "Primary Chip",
        closable: true
      },
      attrs: {
        onClick,
        onClose
      }
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain("Primary Chip");
    
    const closeButton = wrapper.find("button");
    expect(closeButton.exists()).toBe(true);

    await wrapper.trigger("click");
    expect(onClick).toHaveBeenCalled();

    await closeButton.trigger("click");
    expect(onClose).toHaveBeenCalled();
  });

  it("handles disabled state and prevents interactions", async () => {
    const onClick = vi.fn();
    const wrapper = mount(LuChip, {
      props: {
        label: "Disabled Chip",
        disabled: true
      },
      attrs: {
        onClick
      }
    });

    expect(wrapper.attributes("aria-disabled")).toBe("true");
    expect(wrapper.attributes("tabindex")).toBe("-1");

    await wrapper.trigger("click");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("coordinates single selection within LuChipGroup", async () => {
    const wrapper = mount(LuChipGroup, {
      props: {
        modelValue: "apple",
        multiple: false
      },
      slots: {
        default: `
          <LuChip label="Apple" value="apple" />
          <LuChip label="Banana" value="banana" />
        `
      },
      global: {
        components: {
          LuChip
        }
      }
    });

    const chips = wrapper.findAllComponents(LuChip);
    expect(chips[0].props("value")).toBe("apple");
    expect(chips[0].vm.isChipSelected).toBe(true);
    expect(chips[1].vm.isChipSelected).toBe(false);

    // Click banana
    await chips[1].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["banana"]);
  });

  it("coordinates multiple selection within LuChipGroup", async () => {
    const wrapper = mount(LuChipGroup, {
      props: {
        modelValue: ["apple"],
        multiple: true
      },
      slots: {
        default: `
          <LuChip label="Apple" value="apple" />
          <LuChip label="Banana" value="banana" />
        `
      },
      global: {
        components: {
          LuChip
        }
      }
    });

    const chips = wrapper.findAllComponents(LuChip);
    expect(chips[0].vm.isChipSelected).toBe(true);
    expect(chips[1].vm.isChipSelected).toBe(false);

    // Click banana
    await chips[1].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["apple", "banana"]]);
  });
});
