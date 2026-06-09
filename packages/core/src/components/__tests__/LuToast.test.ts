import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import LuToast from "../LuToast.vue";
import { useLuToast } from "../../composables/useLuToast";

describe("LuToast and useLuToast", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    const { dismissAll } = useLuToast();
    dismissAll();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("adds, automatically dismisses, and manually dismisses toasts via composable", async () => {
    const { toast, toasts, dismiss } = useLuToast();
    
    expect(toasts.length).toBe(0);

    const id = toast({
      title: "Test Toast",
      description: "Test description",
      variant: "success",
      duration: 3000
    });

    expect(toasts.length).toBe(1);
    expect(toasts[0].title).toBe("Test Toast");
    expect(toasts[0].variant).toBe("success");

    // Test auto-dismiss
    vi.advanceTimersByTime(3000);
    expect(toasts.length).toBe(0);

    // Test manual dismiss
    const id2 = toast({ title: "Manual Close" });
    expect(toasts.length).toBe(1);
    dismiss(id2);
    expect(toasts.length).toBe(0);
  });

  it("renders toast stack inside portal teleport container", async () => {
    const { toast } = useLuToast();
    
    toast({
      title: "Portal Toast",
      description: "Check if rendered in body",
      variant: "error"
    });

    const wrapper = mount(LuToast);
    expect(wrapper.exists()).toBe(true);

    // Give Vue time to teleport and render inside body
    await nextTick();

    const toastElement = document.querySelector(".lu-toast");
    expect(toastElement).not.toBeNull();
    expect(toastElement?.textContent).toContain("Portal Toast");
    expect(toastElement?.textContent).toContain("Check if rendered in body");
    
    // Check close button click
    const closeBtn = document.querySelector(".lu-toast__close") as HTMLButtonElement | null;
    expect(closeBtn).not.toBeNull();
    closeBtn?.click();
    
    await nextTick();
    expect(document.querySelector(".lu-toast")).toBeNull();
  });
});
