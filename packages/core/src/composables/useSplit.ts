import { ref, type Ref } from "vue";

export function useSplit(
  containerRef: Ref<HTMLElement | null>,
  direction: "horizontal" | "vertical" = "horizontal",
  onResize?: (sizes: number[]) => void
) {
  const isDragging = ref(false);

  // Simplified split drag logic hook.
  // In a real implementation, this would attach mousedown to resizers,
  // and mousemove/mouseup to the window, updating the size of adjacent panes.
  
  return {
    isDragging,
  };
}
