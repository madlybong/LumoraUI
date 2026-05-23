import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuAccordion from "../LuAccordion.vue";
import LuCollapsible from "../LuCollapsible.vue";

describe("LuAccordion", () => {
  it("coordinates single exclusive open mode", async () => {
    const wrapper = mount(LuAccordion, {
      props: {
        modelValue: "panel-1",
        multiple: false
      },
      slots: {
        default: `
          <LuCollapsible value="panel-1">
            <template #trigger="{ isOpen }">Trigger 1</template>
            <template #content>Content 1</template>
          </LuCollapsible>
          <LuCollapsible value="panel-2">
            <template #trigger="{ isOpen }">Trigger 2</template>
            <template #content>Content 2</template>
          </LuCollapsible>
        `
      },
      global: {
        components: {
          LuCollapsible
        }
      }
    });

    const panels = wrapper.findAllComponents(LuCollapsible);
    expect(panels[0].vm.isOpen).toBe(true);
    expect(panels[1].vm.isOpen).toBe(false);

    // Click trigger of panel 2
    const trigger2 = panels[1].find("button");
    await trigger2.trigger("click");
    
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["panel-2"]);
  });

  it("coordinates multiple open mode", async () => {
    const wrapper = mount(LuAccordion, {
      props: {
        modelValue: ["panel-1"],
        multiple: true
      },
      slots: {
        default: `
          <LuCollapsible value="panel-1">
            <template #trigger="{ isOpen }">Trigger 1</template>
            <template #content>Content 1</template>
          </LuCollapsible>
          <LuCollapsible value="panel-2">
            <template #trigger="{ isOpen }">Trigger 2</template>
            <template #content>Content 2</template>
          </LuCollapsible>
        `
      },
      global: {
        components: {
          LuCollapsible
        }
      }
    });

    const panels = wrapper.findAllComponents(LuCollapsible);
    expect(panels[0].vm.isOpen).toBe(true);
    expect(panels[1].vm.isOpen).toBe(false);

    // Click trigger of panel 2
    const trigger2 = panels[1].find("button");
    await trigger2.trigger("click");
    
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([["panel-1", "panel-2"]]);
  });
});
