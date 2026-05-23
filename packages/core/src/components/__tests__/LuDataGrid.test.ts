import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent, nextTick } from "vue";
import LuDataGrid from "../LuDataGrid.vue";
import type { ColumnDef, Row } from "../LuDataGrid.types";

const columns: ColumnDef[] = [
  { key: "name",  label: "Name",  sortable: true, filterable: true },
  { key: "age",   label: "Age",   sortable: true },
  { key: "email", label: "Email" },
];

const data: Row[] = [
  { id: "1", name: "Alice", age: 30, email: "alice@example.com" },
  { id: "2", name: "Bob",   age: 25, email: "bob@example.com"   },
  { id: "3", name: "Carol", age: 35, email: "carol@example.com" },
];

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
    // Scope to first header row to avoid counting the filter row's <th> elements
    const headers = wrapper.findAll("thead tr:first-child th");
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
    // Scope to first header row to avoid counting the filter row's <th> elements
    const headers = wrapper.findAll("thead tr:first-child th");
    expect(headers).toHaveLength(columns.length + 1);
  });

  it("renders loading state", () => {
    const wrapper = mountGrid({ loading: true });
    expect(wrapper.text()).toContain("Loading");
  });

  it("sorts rows ascending locally when localSort=true", async () => {
    const wrapper = mountGrid({ sortable: true, localSort: true });
    // Click Age header (sortable)
    const ageHeader = wrapper.findAll("thead th")[1];
    await ageHeader.trigger("click");
    await nextTick();
    const cells = wrapper.findAll("tbody tr td:nth-child(2)");
    const ages = cells.map(c => Number(c.text()));
    expect(ages[0]).toBe(25); // Bob (youngest first)
    expect(ages[1]).toBe(30); // Alice
    expect(ages[2]).toBe(35); // Carol
  });

  it("sorts rows descending on second click", async () => {
    const wrapper = mountGrid({ sortable: true, localSort: true });
    const ageHeader = wrapper.findAll("thead th")[1];
    await ageHeader.trigger("click"); // asc
    await ageHeader.trigger("click"); // desc
    await nextTick();
    const cells = wrapper.findAll("tbody tr td:nth-child(2)");
    const ages = cells.map(c => Number(c.text()));
    expect(ages[0]).toBe(35); // Carol (oldest first)
  });

  it("renders filter row when a column is filterable", () => {
    const wrapper = mountGrid();
    // The columns fixture has name as filterable
    const filterRows = wrapper.findAll("thead tr");
    expect(filterRows.length).toBeGreaterThanOrEqual(2);
  });

  it("shows selection bar text when rows are selected", async () => {
    const wrapper = mountGrid({ selectable: true });
    // Click the custom checkbox button (LuCheckbox renders a button, not a native checkbox)
    const checkboxBtns = wrapper.findAll("tbody td button");
    if (checkboxBtns.length > 0) {
      await checkboxBtns[0].trigger("click");
      await nextTick();
    }
    // The selection bar should show the count and 'selected'
    expect(wrapper.text()).toMatch(/selected/i);
  });

  it("renders search input when searchable=true", () => {
    const wrapper = mountGrid({ searchable: true });
    expect(wrapper.find("input[type='text']").exists()).toBe(true);
  });
});
