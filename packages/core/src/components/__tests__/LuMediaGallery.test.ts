import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LuMediaGallery from "../LuMediaGallery.vue";

const items = [
  { id: "1", url: "https://example.com/img1.jpg", type: "image" as const },
  { id: "2", url: "https://example.com/img2.jpg", type: "image" as const, caption: "Photo 2" },
  { id: "3", url: "https://example.com/img3.jpg", type: "image" as const },
];

describe("LuMediaGallery", () => {
  it("renders correctly", () => {
    const wrapper = mount(LuMediaGallery, {
      props: { items },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct number of gallery items", () => {
    const wrapper = mount(LuMediaGallery, {
      props: { items },
    });
    const images = wrapper.findAll("img");
    expect(images.length).toBe(3);
  });

  it("renders image src attributes", () => {
    const wrapper = mount(LuMediaGallery, {
      props: { items },
    });
    const images = wrapper.findAll("img");
    expect(images[0].attributes("src")).toBe("https://example.com/img1.jpg");
  });

  it("renders alt text from caption", () => {
    const wrapper = mount(LuMediaGallery, {
      props: { items },
    });
    const images = wrapper.findAll("img");
    expect(images[1].attributes("alt")).toBe("Photo 2");
  });

  it("emits click when a gallery item is clicked", async () => {
    const wrapper = mount(LuMediaGallery, {
      props: { items },
    });
    const galleryItems = wrapper.findAll("[role='button']");
    expect(galleryItems.length).toBeGreaterThan(0);
    await galleryItems[0].trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("renders delete button when deletable is true", () => {
    const wrapper = mount(LuMediaGallery, {
      props: { items, deletable: true },
    });
    const deleteButtons = wrapper.findAll("button[aria-label^='Delete']");
    expect(deleteButtons.length).toBe(3);
  });
});
