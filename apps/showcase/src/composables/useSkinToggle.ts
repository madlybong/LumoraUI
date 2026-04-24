import { ref, readonly } from 'vue';

const isSkinEnabled = ref(true);

export function useSkinToggle() {
  function toggleSkin() {
    isSkinEnabled.value = !isSkinEnabled.value;
  }

  return {
    isSkinEnabled: readonly(isSkinEnabled),
    toggleSkin,
  };
}
