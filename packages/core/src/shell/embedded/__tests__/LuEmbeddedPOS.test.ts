import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import LuEmbeddedPOSLayout from "../LuEmbeddedPOSLayout.vue";
import LuEmbeddedBarcodeInput from "../LuEmbeddedBarcodeInput.vue";
import LuEmbeddedPOSItemList from "../LuEmbeddedPOSItemList.vue";
import LuEmbeddedPOSSummary from "../LuEmbeddedPOSSummary.vue";
import LuEmbeddedPOSPayment from "../LuEmbeddedPOSPayment.vue";

describe("LuEmbeddedPOS Suite", () => {
  it("renders layout correctly", () => {
    const wrapper = mount(LuEmbeddedPOSLayout);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders barcode input", () => {
    const wrapper = mount(LuEmbeddedBarcodeInput);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders item list", () => {
    const wrapper = mount(LuEmbeddedPOSItemList, { props: { items: [] } });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders summary", () => {
    const wrapper = mount(LuEmbeddedPOSSummary, { props: { lines: [], subtotal: 0, tax: 0, total: 0 } });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders payment", () => {
    const wrapper = mount(LuEmbeddedPOSPayment, { props: { methods: [{ id: "cash", label: "Cash" }] } });
    expect(wrapper.exists()).toBe(true);
  });
});
