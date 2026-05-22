import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import LuFormWizard from "../LuFormWizard.vue";
import type { FormWizardStep } from "../LuFormWizard.types";

const steps: FormWizardStep[] = [
  { id: "basic",   label: "Basic Info" },
  { id: "address", label: "Address" },
  { id: "confirm", label: "Confirm" },
];

describe("LuFormWizard", () => {
  it("renders all step labels", () => {
    const Wrapper = defineComponent({
      components: { LuFormWizard },
      template: `<LuFormWizard :steps="steps" :modelValue="0" />`,
      data() { return { steps }; },
    });
    const wrapper = mount(Wrapper);
    for (const step of steps) {
      expect(wrapper.text()).toContain(step.label);
    }
  });

  it("shows Back button disabled on first step", () => {
    const Wrapper = defineComponent({
      components: { LuFormWizard },
      template: `<LuFormWizard :steps="steps" :modelValue="0" />`,
      data() { return { steps }; },
    });
    const wrapper = mount(Wrapper);
    const backBtn = wrapper.findAll("button").find(b => b.text().includes("Back"));
    expect(backBtn?.attributes("disabled")).toBeDefined();
  });

  it("shows Continue on non-last step", () => {
    const Wrapper = defineComponent({
      components: { LuFormWizard },
      template: `<LuFormWizard :steps="steps" :modelValue="0" />`,
      data() { return { steps }; },
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).toContain("Continue");
  });

  it("shows Complete on last step", () => {
    const Wrapper = defineComponent({
      components: { LuFormWizard },
      template: `<LuFormWizard :steps="steps" :modelValue="2" />`,
      data() { return { steps }; },
    });
    const wrapper = mount(Wrapper);
    expect(wrapper.text()).toContain("Complete");
  });

  it("emits update:modelValue on next click", async () => {
    const Wrapper = defineComponent({
      components: { LuFormWizard },
      template: `<LuFormWizard :steps="steps" :modelValue="0" />`,
      data() { return { steps }; },
    });
    const wrapper = mount(Wrapper);
    const nextBtn = wrapper.findAll("button").find(b => b.text().includes("Continue"));
    await nextBtn?.trigger("click");
    const wizard = wrapper.findComponent(LuFormWizard);
    const emitted = wizard.emitted("update:modelValue");
    expect(emitted?.[0]?.[0]).toBe(1);
  });

  it("emits complete when clicking next on last step", async () => {
    const Wrapper = defineComponent({
      components: { LuFormWizard },
      template: `<LuFormWizard :steps="steps" :modelValue="2" />`,
      data() { return { steps }; },
    });
    const wrapper = mount(Wrapper);
    const nextBtn = wrapper.findAll("button").find(b => b.text().includes("Complete"));
    await nextBtn?.trigger("click");
    const wizard = wrapper.findComponent(LuFormWizard);
    expect(wizard.emitted("complete")).toBeTruthy();
  });

  it("validates step before advancing when validateFn returns error string", async () => {
    const stepsWithValidation: FormWizardStep[] = [
      { id: "step1", label: "Step 1", validateFn: () => "Field required" },
      { id: "step2", label: "Step 2" },
    ];
    const Wrapper = defineComponent({
      components: { LuFormWizard },
      template: `<LuFormWizard :steps="stepsWithValidation" :modelValue="0" />`,
      data() { return { stepsWithValidation }; },
    });
    const wrapper = mount(Wrapper);
    const nextBtn = wrapper.findAll("button").find(b => b.text().includes("Continue"));
    await nextBtn?.trigger("click");
    await new Promise(r => setTimeout(r, 10)); // wait for async validation
    const wizard = wrapper.findComponent(LuFormWizard);
    expect(wizard.emitted("update:modelValue")).toBeFalsy();
    expect(wrapper.text()).toContain("Field required");
  });
});
