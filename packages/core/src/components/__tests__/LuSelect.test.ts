import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import LuSelect from "../LuSelect.vue";
import { LuFormContextKey } from "../LuForm.types";
import { ref } from "vue";

describe("LuSelect", () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  const options = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three", disabled: true },
  ];

  it("renders placeholder when no value", () => {
    const wrapper = mount(LuSelect, {
      props: { options, placeholder: "Pick one" },
    });
    expect(wrapper.text()).toContain("Pick one");
  });

  it("shows selected label when value set", () => {
    const wrapper = mount(LuSelect, {
      props: { options, modelValue: "2" },
    });
    expect(wrapper.text()).toContain("Two");
  });

  it("opens panel on trigger click", async () => {
    const wrapper = mount(LuSelect, {
      props: { options },
      attachTo: document.body,
    });
    
    // Panel should not be visible
    expect(document.querySelector('.absolute.z-50')).toBeNull();
    
    await wrapper.find("button").trigger("click");
    
    // Panel teleported to body
    const panel = document.querySelector('.lu-select__panel');
    expect(panel).not.toBeNull();
    expect(panel?.textContent).toContain("One");
    expect(panel?.textContent).toContain("Two");
    
    wrapper.unmount();
  });

  it("keyboard navigation works", async () => {
    const wrapper = mount(LuSelect, {
      props: { options },
      attachTo: document.body,
    });
    
    await wrapper.find("button").trigger("keydown.down");
    
    // Panel should be open
    expect(document.body.innerHTML).toContain("One");
    
    wrapper.unmount();
  });

  it("searchable true filters options", async () => {
    const wrapper = mount(LuSelect, {
      props: { options, searchable: true },
      attachTo: document.body,
    });
    
    await wrapper.find("button").trigger("click");
    
    const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
    expect(searchInput).toBeTruthy();
    
    searchInput.value = "th";
    searchInput.dispatchEvent(new Event("input"));
    
    // wait for vue update
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick(); // Wait a bit more for watch to update
    
    const panel = document.querySelector('.lu-select__panel');
    // Only "Three" should be visible in the dropdown
    expect(panel?.textContent).toContain("Three");
    expect(panel?.textContent).not.toContain("One");
    
    wrapper.unmount();
  });

  it("registers with LuFormContext", () => {
    const mockRegister = vi.fn();
    const mockUnregister = vi.fn();
    const disabled = ref(false);

    const wrapper = mount(LuSelect, {
      props: { name: "myField", options },
      global: {
        provide: {
          [LuFormContextKey as symbol]: {
            register: mockRegister,
            unregister: mockUnregister,
            disabled,
            validateOn: ref("submit")
          }
        }
      }
    });

    expect(mockRegister).toHaveBeenCalledWith(expect.objectContaining({
      name: "myField"
    }));

    wrapper.unmount();
    expect(mockUnregister).toHaveBeenCalledWith("myField");
  });
});
