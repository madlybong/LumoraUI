import { ref, readonly } from "vue";

export function useRail(defaultExpanded = false) {
  const isExpanded = ref(defaultExpanded);

  function toggle() {
    isExpanded.value = !isExpanded.value;
  }

  function expand() {
    isExpanded.value = true;
  }

  function collapse() {
    isExpanded.value = false;
  }

  return {
    isExpanded: readonly(isExpanded),
    toggle,
    expand,
    collapse,
  };
}
