import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LuFormWizard from "../LuFormWizard.vue";
import type { FormWizardStep } from "../LuFormWizard.types";
import { nextTick } from "vue";

describe("LuFormWizard", () => {
  const steps: FormWizardStep[] = [
    { id: "1", label: "Step 1" },
    { id: "2", label: "Step 2" },
    { id: "3", label: "Step 3" }
  ];

  it("renders steps correctly", () => {
    const wrapper = mount(LuFormWizard, {
      props: { steps }
    });
    
    expect(wrapper.text()).toContain("Step 1");
    expect(wrapper.text()).toContain("Step 2");
    expect(wrapper.text()).toContain("Step 3");
  });

  it("renders specific slot content based on current step", async () => {
    const wrapper = mount(LuFormWizard, {
      props: { steps, modelValue: 0 },
      slots: {
        "step-1": '<div class="content-1">Content 1</div>',
        "step-2": '<div class="content-2">Content 2</div>',
      }
    });

    // Both might be in DOM due to v-show, but only step-1 should be visible
    const div1 = wrapper.find(".content-1").element.parentElement;
    expect(div1?.style.display).not.toBe("none");

    const div2 = wrapper.find(".content-2").element.parentElement;
    expect(div2?.style.display).toBe("none");

    await wrapper.setProps({ modelValue: 1 });
    
    expect(div1?.style.display).toBe("none");
    expect(div2?.style.display).not.toBe("none");
  });

  it("validates before proceeding", async () => {
    const mockValidate = vi.fn().mockResolvedValue(false);
    
    const wrapper = mount(LuFormWizard, {
      props: { 
        steps: [
          { id: "1", label: "Step 1", validateFn: mockValidate },
          { id: "2", label: "Step 2" }
        ],
        modelValue: 0 
      }
    });

    const nextBtn = wrapper.findAll("button").filter(b => b.text().includes("Continue"))[0];
    await nextBtn.trigger("click");
    
    // Wait for async validation
    await new Promise(r => setTimeout(r, 0));
    
    expect(mockValidate).toHaveBeenCalled();
    expect(wrapper.emitted("update:modelValue")).toBeFalsy();
    expect(wrapper.text()).toContain("Please complete this step before continuing.");
  });

  it("proceeds when validation passes", async () => {
    const mockValidate = vi.fn().mockResolvedValue(true);
    
    const wrapper = mount(LuFormWizard, {
      props: { 
        steps: [
          { id: "1", label: "Step 1", validateFn: mockValidate },
          { id: "2", label: "Step 2" }
        ],
        modelValue: 0 
      }
    });

    const nextBtn = wrapper.findAll("button").filter(b => b.text().includes("Continue"))[0];
    await nextBtn.trigger("click");
    
    await new Promise(r => setTimeout(r, 0));
    
    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([1]);
  });
});
