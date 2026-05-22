import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import LuDataGrid from "../LuDataGrid.vue";
import type { ColumnDef, Row } from "../LuDataGrid.types";

const columns: ColumnDef[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "age",  label: "Age",  sortable: true },
  { key: "email",label: "Email" },
];

const data: Row[] = [
  { id: "1", name: "Alice", age: 30, email: "alice@example.com" },
  { id: "2", name: "Bob",   age: 25, email: "bob@example.com" },
  { id: "3", name: "Carol", age: 35, email: "carol@example.com" },
];

// Mount wrapper via defineComponent with template to work around vue-test-utils stub registration
function mountGrid(props: Record<string, unknown> = {}) {
  const Wrapper = defineComponent({
    components: { LuDataGrid },
    props: Object.keys(props),
    template: `<LuDataGrid v-bind="$props" />`,
  });
  return mount(Wrapper, { props: { columns, data, ...props } });
}

describe("LuDataGrid", () => {
  it("renders all rows", () => {
    const wrapper = mountGrid();
    const rows = wrapper.findAll("tbody tr");
    expect(rows).toHaveLength(data.length);
  });

  it("renders column headers", () => {
    const wrapper = mountGrid();
    const headers = wrapper.findAll("thead th");
    expect(headers).toHaveLength(columns.length);
  });

  it("renders empty state when data is empty", () => {
    const wrapper = mountGrid({ data: [], emptyText: "Nothing here" });
    expect(wrapper.text()).toContain("Nothing here");
  });

  it("emits sort event when a sortable header is clicked", async () => {
    const wrapper = mountGrid({ sortable: true });
    const nameHeader = wrapper.findAll("thead th")[0];
    await nameHeader.trigger("click");
    const sortEvents = wrapper.findComponent(LuDataGrid).emitted("sort");
    expect(sortEvents).toBeTruthy();
    expect(sortEvents?.[0]?.[0]).toMatchObject({ key: "name", direction: "asc" });
  });

  it("does not emit sort event for non-sortable column", async () => {
    const wrapper = mountGrid({ sortable: true });
    const emailHeader = wrapper.findAll("thead th")[2];
    await emailHeader.trigger("click");
    expect(wrapper.findComponent(LuDataGrid).emitted("sort")).toBeFalsy();
  });

  it("renders a checkbox column when selectable=true", () => {
    const wrapper = mountGrid({ selectable: true });
    const headers = wrapper.findAll("thead th");
    expect(headers).toHaveLength(columns.length + 1);
  });

  it("renders loading state", () => {
    const wrapper = mountGrid({ loading: true });
    expect(wrapper.text()).toContain("Loading");
  });
});
