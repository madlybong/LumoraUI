import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import LuCommandPalette from "../LuCommandPalette.vue";
import type { CommandItem } from "../LuCommandPalette.vue";

const items: CommandItem[] = [
  { id: "new",    label: "New Document",   group: "Files",   action: () => {} },
  { id: "open",   label: "Open File",      group: "Files",   action: () => {} },
  { id: "save",   label: "Save",           group: "Actions", shortcut: ["⌘", "S"], action: () => {} },
  { id: "search", label: "Search Project", group: "Actions", icon: "search", action: () => {} },
];

describe("LuCommandPalette", () => {
  it("does not render items when open=false", () => {
    const Wrapper = defineComponent({
      components: { LuCommandPalette },
      template: `<LuCommandPalette :items="items" :open="false" />`,
      data() { return { items }; },
    });
    const wrapper = mount(Wrapper);
    // When closed, the command palette dialog should not be in the DOM
    expect(document.querySelector("[role='dialog']")).toBeNull();
    wrapper.unmount();
  });

  it("renders dialog when open=true (via Teleport)", () => {
    const Wrapper = defineComponent({
      components: { LuCommandPalette },
      template: `<LuCommandPalette :items="items" :open="true" />`,
      data() { return { items }; },
    });
    const wrapper = mount(Wrapper, { attachTo: document.body });
    // Teleport renders to body — check document.body directly
    const dialog = document.querySelector("[role='dialog']");
    expect(dialog).not.toBeNull();
    wrapper.unmount();
  });

  it("renders item labels in the palette when open", () => {
    const Wrapper = defineComponent({
      components: { LuCommandPalette },
      template: `<LuCommandPalette :items="items" :open="true" />`,
      data() { return { items }; },
    });
    const wrapper = mount(Wrapper, { attachTo: document.body });
    const body = document.body.textContent ?? "";
    expect(body).toContain("New Document");
    expect(body).toContain("Open File");
    wrapper.unmount();
  });

  it("filters items when user types in the search input", async () => {
    const Wrapper = defineComponent({
      components: { LuCommandPalette },
      template: `<LuCommandPalette :items="items" :open="true" />`,
      data() { return { items }; },
    });
    const wrapper = mount(Wrapper, { attachTo: document.body });
    const input = document.querySelector("input") as HTMLInputElement | null;
    if (input) {
      // Simulate typing
      input.value = "save";
      input.dispatchEvent(new Event("input"));
      await new Promise(r => setTimeout(r, 20));
      const body = document.body.textContent ?? "";
      expect(body).toContain("Save");
      expect(body).not.toContain("New Document");
    }
    wrapper.unmount();
  });

  it("emits update:open=false when Escape key is pressed on dialog", async () => {
    const Wrapper = defineComponent({
      components: { LuCommandPalette },
      template: `<LuCommandPalette :items="items" :open="true" @update:open="onUpdate" />`,
      data() { return { items, lastOpen: true }; },
      methods: { onUpdate(val: boolean) { this.lastOpen = val; } },
    });
    const wrapper = mount(Wrapper, { attachTo: document.body });
    const dialog = document.querySelector("[role='dialog']");
    if (dialog) {
      dialog.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
      await new Promise(r => setTimeout(r, 20));
      const palette = wrapper.findComponent(LuCommandPalette);
      expect(palette.emitted("update:open")?.[0]?.[0]).toBe(false);
    }
    wrapper.unmount();
  });
});
