import { ref, type Ref } from "vue";

export function useSplit(
  _containerRef: Ref<HTMLElement | null>,
  _direction: "horizontal" | "vertical" = "horizontal",
  _onResize?: (sizes: number[]) => void
) {
  const isDragging = ref(false);

  // Simplified split drag logic hook.
  // In a real implementation, this would attach mousedown to resizers,
  // and mousemove/mouseup to the window, updating the size of adjacent panes.
  
  return {
    isDragging,
  };
}
