import { ref, watch, onMounted, onBeforeUnmount, type Ref } from 'vue';
import { computePosition, flip, shift, offset, autoUpdate, type Placement } from '@floating-ui/dom';

export interface UseFloatingOptions {
  placement?: Placement;
  offset?: number;
}

export function useFloating(
  reference: Ref<HTMLElement | null | undefined>,
  floating: Ref<HTMLElement | null | undefined>,
  options: UseFloatingOptions = {}
) {
  const x = ref(0);
  const y = ref(0);
  const placement = ref<Placement>(options.placement || 'bottom');
  
  let cleanup: (() => void) | null = null;

  function update() {
    const referenceEl = reference.value;
    const floatingEl = floating.value;

    if (!referenceEl || !floatingEl) return;

    computePosition(referenceEl, floatingEl, {
      placement: options.placement || 'bottom',
      middleware: [
        offset(options.offset !== undefined ? options.offset : 8),
        flip(),
        shift({ padding: 8 })
      ]
    }).then((pos) => {
      x.value = pos.x;
      y.value = pos.y;
      placement.value = pos.placement;
    });
  }

  function start() {
    if (!reference.value || !floating.value) return;
    cleanup = autoUpdate(reference.value, floating.value, update);
  }

  function stop() {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
  }

  watch([reference, floating], ([refVal, floatVal]) => {
    stop();
    if (refVal && floatVal) {
      start();
    }
  }, { flush: 'post' });

  // Watch for option changes
  watch(() => options.placement, () => {
    if (reference.value && floating.value) {
      update();
    }
  });

  onMounted(() => {
    if (reference.value && floating.value) {
      start();
    }
  });

  onBeforeUnmount(() => {
    stop();
  });

  return {
    x,
    y,
    placement,
    update
  };
}
