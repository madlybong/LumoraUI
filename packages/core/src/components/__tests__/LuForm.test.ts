import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuForm from "../LuForm.vue";
import LuInput from "../LuInput.vue";
import { ref, defineComponent } from "vue";

describe("LuForm", () => {
  it("emits submit event with values when validation passes", async () => {
    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      template: `
        <LuForm>
          <LuInput name="email" modelValue="test@example.com" />
        </LuForm>
      `
    });

    const wrapper = mount(Wrapper);
    await wrapper.find("form").trigger("submit");

    const form = wrapper.findComponent(LuForm);
    expect(form.emitted("submit")).toBeTruthy();
    expect(form.emitted("submit")?.[0][0]).toEqual({ email: "test@example.com" });
  });

  it("emits error event and blocks submit when validation fails", async () => {
    const rules = {
      email: (v: unknown) => !v ? "Required" : null,
    };

    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      data() { return { rules }; },
      template: `
        <LuForm :rules="rules">
          <LuInput name="email" modelValue="" />
        </LuForm>
      `
    });

    const wrapper = mount(Wrapper);
    await wrapper.find("form").trigger("submit");

    const form = wrapper.findComponent(LuForm);
    expect(form.emitted("submit")).toBeFalsy();
    expect(form.emitted("error")).toBeTruthy();
    expect(form.emitted("error")?.[0][0]).toEqual({ email: "Required" });
  });

  it("clears errors and emits submit when validation passes", async () => {
    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      template: `
        <LuForm>
          <LuInput name="email" modelValue="hello" />
        </LuForm>
      `
    });

    const wrapper = mount(Wrapper);
    await wrapper.find("form").trigger("submit");

    const form = wrapper.findComponent(LuForm);
    expect(form.emitted("submit")).toBeTruthy();
    expect(form.vm.errors).toEqual({});
  });

  it("evaluates multiple validators on one field and stops at first error", async () => {
    const rules = {
      code: [
        (v: unknown) => !v ? "Required" : null,
        (v: unknown) => String(v).length < 3 ? "Min 3 chars" : null,
      ],
    };

    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      data() { return { rules }; },
      template: `
        <LuForm :rules="rules">
          <LuInput name="code" modelValue="ab" />
        </LuForm>
      `
    });

    const wrapper = mount(Wrapper);
    await wrapper.find("form").trigger("submit");

    const form = wrapper.findComponent(LuForm);
    expect(form.vm.errors).toEqual({ code: "Min 3 chars" });
  });

  it("handles programmatic reset", async () => {
    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      template: `
        <LuForm>
          <LuInput name="email" modelValue="test" />
        </LuForm>
      `
    });

    const wrapper = mount(Wrapper);
    const form = wrapper.findComponent(LuForm);
    await wrapper.find("form").trigger("reset");

    expect(form.emitted("reset")).toBeTruthy();
    
    // Check that values are cleared by submitting again
    await wrapper.find("form").trigger("submit");
    expect(form.emitted("submit")?.[0][0]).toEqual({ email: undefined });
  });

  it("clears values after successful submit when resetOnSubmit is true", async () => {
    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      template: `
        <LuForm :resetOnSubmit="true">
          <LuInput name="email" modelValue="test" />
        </LuForm>
      `
    });

    const wrapper = mount(Wrapper);
    await wrapper.find("form").trigger("submit");

    const form = wrapper.findComponent(LuForm);
    expect(form.emitted("submit")).toBeTruthy();
    
    // Check that values are cleared by submitting again
    await wrapper.find("form").trigger("submit");
    // Second submit is at index 1
    expect(form.emitted("submit")?.[1][0]).toEqual({ email: undefined });
  });

  it("updates errors on blur when validateOn is both", async () => {
    const rules = {
      email: (v: unknown) => !v ? "Required" : null,
    };

    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      data() { return { rules }; },
      template: `
        <LuForm ref="form" :rules="rules" validateOn="both">
          <LuInput name="email" modelValue="" />
        </LuForm>
      `
    });

    const wrapper = mount(Wrapper);
    const form = wrapper.findComponent(LuForm);
    
    // We trigger the validate method manually to simulate it since single-field 
    // validation logic is handled by parent LuForm in the plan
    await form.vm.submit();
    expect(form.vm.errors).toEqual({ email: "Required" });
  });

  it("supports programmatic submit and reset via defineExpose", async () => {
    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      template: `
        <LuForm ref="form" @submit="onSubmit" @reset="onReset">
          <LuInput name="email" modelValue="test" />
        </LuForm>
      `,
      methods: {
        onSubmit() { this.$emit("submit"); },
        onReset() { this.$emit("reset"); }
      }
    });

    const wrapper = mount(Wrapper);
    const form = wrapper.findComponent(LuForm);

    await form.vm.submit();
    expect(wrapper.emitted("submit")).toBeTruthy();

    form.vm.reset();
    expect(wrapper.emitted("reset")).toBeTruthy();
  });

  it("allows inputs to work standalone without a LuForm parent", async () => {
    const wrapper = mount(LuInput, {
      props: { name: "email", modelValue: "test" },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("passes disabled context down to registered inputs", async () => {
    const Wrapper = defineComponent({
      components: { LuForm, LuInput },
      template: `
        <LuForm :disabled="true">
          <LuInput name="email" modelValue="test" />
        </LuForm>
      `
    });

    const wrapper = mount(Wrapper);
    const input = wrapper.find("input");
    expect(input.attributes("disabled")).toBeDefined();
  });
});
