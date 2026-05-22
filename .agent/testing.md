# Testing Guide — `@astrake/lumora-ui`

We use **Vitest** alongside **Happy DOM** and **Vue Test Utils** to verify framework behavior. All component behaviors, form logic, composables, and skin resolution contracts must be covered by unit tests.

---

## 1. Testing Infrastructure

* **Test Runner**: Vitest (`bun run test` or `bun test`)
* **Environment**: `happy-dom` (configured inside `vitest.config.mts`)
* **Vue Integration**: `@vue/test-utils` for mounting and event assertions.

---

## 2. Test Placement

Unit tests are colocated inside `__tests__` subdirectories relative to components:
* Primitives: `packages/core/src/components/__tests__/*.test.ts`
* Shells: `packages/core/src/shell/{desktop,mobile,embedded}/__tests__/*.test.ts`
* Layouts: `packages/core/src/layout/__tests__/*.test.ts`
* Composables: `packages/core/src/composables/__tests__/*.test.ts`

---

## 3. Standard Test Patterns

### A. Providing Dynamic Skins in Tests

Since all components rely on `useLumoraConfig()`, tests must inject skin mock boundaries if they require custom styling verification:

```ts
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { LumoraUIConfigKey } from "../../context";
import LuButton from "../LuButton.vue";

describe("LuButton skin resolution", () => {
  it("resolves dynamic classes from mock injected SkinMap", () => {
    const mockSkin = {
      LuButton: {
        default: "base-btn-class",
        primary: "bg-blue-primary",
      }
    };

    const wrapper = mount(LuButton, {
      props: { variant: "primary" },
      global: {
        provide: {
          [LumoraUIConfigKey as any]: {
            skin: mockSkin,
          }
        }
      }
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("base-btn-class");
    expect(button.classes()).toContain("bg-blue-primary");
  });
});
```

### B. Compound Wrapper Patterns (e.g. Forms, Tabs)

When testing components that rely on parent-child context coordination (like standard form input registration), wrap them in a helper inline component within the test file:

```ts
import { defineComponent } from "vue";

it("emits submit event with values when validation passes", async () => {
  const TestWrapper = defineComponent({
    components: { LuForm, LuInput },
    template: `
      <LuForm>
        <LuInput name="email" modelValue="test@example.com" />
      </LuForm>
    `
  });

  const wrapper = mount(TestWrapper);
  await wrapper.find("form").trigger("submit");

  const form = wrapper.findComponent(LuForm);
  expect(form.emitted("submit")).toBeTruthy();
  expect(form.emitted("submit")?.[0][0]).toEqual({ email: "test@example.com" });
});
```

### C. Testing Emits & Standalone Functionality

Ensure that components behave gracefully even when standard context wrappers are missing (fallback configurations):

```ts
it("allows inputs to work standalone without a LuForm parent", async () => {
  const wrapper = mount(LuInput, {
    props: { name: "email", modelValue: "test" },
  });

  expect(wrapper.exists()).toBe(true);
  const input = wrapper.find("input");
  expect(input.element.value).toBe("test");
});
```

---

## 4. Checklist for Test Verification
* Do all new components have a corresponding test suite?
* Do assertions cover both default rendering and variable options?
* Are events correctly emitted and validated?
* Does `bun test` pass cleanly inside the workspace?
