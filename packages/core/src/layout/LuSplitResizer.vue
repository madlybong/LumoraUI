<template>
  <div v-bind="$attrs" :class="resolvedSkin" @mousedown="onDragStart" @touchstart.passive="onDragStart"></div>
</template>

<script setup lang="ts">
import { computed, inject, unref, type Ref } from "vue";

const props = defineProps<{
  variant?: string;
}>();

const direction = inject<Ref<"horizontal" | "vertical"> | "horizontal">("lu-split-direction", "horizontal");
const resolvedSkin = computed(() => `lu-split-resizer ${unref(direction) === "horizontal" ? "lu-split-resizer--horizontal" : "lu-split-resizer--vertical"}`);

function onDragStart(e: MouseEvent | TouchEvent) {
  const target = e.currentTarget as HTMLElement;
  if (!target) return;
  const prev = target.previousElementSibling as HTMLElement;
  const next = target.nextElementSibling as HTMLElement;
  if (!prev || !next) return;

  const isHorizontal = unref(direction) === "horizontal";
  
  const startPos = 'touches' in e ? e.touches[0][isHorizontal ? 'clientX' : 'clientY'] : (e as MouseEvent)[isHorizontal ? 'clientX' : 'clientY'];
  const startPrevSize = prev.getBoundingClientRect()[isHorizontal ? 'width' : 'height'];
  const startNextSize = next.getBoundingClientRect()[isHorizontal ? 'width' : 'height'];
  const totalSize = startPrevSize + startNextSize;

  document.body.style.userSelect = "none";
  document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize";

  function onDragMove(moveEvent: MouseEvent | TouchEvent) {
    const currentPos = 'touches' in moveEvent ? moveEvent.touches[0][isHorizontal ? 'clientX' : 'clientY'] : (moveEvent as MouseEvent)[isHorizontal ? 'clientX' : 'clientY'];
    const delta = currentPos - startPos;
    
    let newPrevSize = startPrevSize + delta;
    let newNextSize = startNextSize - delta;

    if (newPrevSize < 0) {
      newPrevSize = 0;
      newNextSize = totalSize;
    } else if (newNextSize < 0) {
      newNextSize = 0;
      newPrevSize = totalSize;
    }

    prev.style.flex = `0 0 ${newPrevSize}px`;
    next.style.flex = `0 0 ${newNextSize}px`;
    if (isHorizontal) {
      prev.style.width = `${newPrevSize}px`;
      next.style.width = `${newNextSize}px`;
    } else {
      prev.style.height = `${newPrevSize}px`;
      next.style.height = `${newNextSize}px`;
    }
  }

  function onDragEnd() {
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
    window.removeEventListener("mousemove", onDragMove);
    window.removeEventListener("touchmove", onDragMove);
    window.removeEventListener("mouseup", onDragEnd);
    window.removeEventListener("touchend", onDragEnd);
  }

  window.addEventListener("mousemove", onDragMove);
  window.addEventListener("touchmove", onDragMove, { passive: false });
  window.addEventListener("mouseup", onDragEnd);
  window.addEventListener("touchend", onDragEnd);
}
</script>
