<template>
  <teleport to="body">
    <transition name="lu-bottom-sheet-fade">
      <div v-if="modelValue" :class="['lu-bottom-sheet__backdrop']" @click="close" />
    </transition>
    <transition name="lu-bottom-sheet-slide">
      <div 
        v-if="modelValue" 
        :class="['lu-bottom-sheet', variant && `lu-bottom-sheet--${variant}`]"
        :style="sheetStyle"
        role="dialog"
        aria-modal="true"
      >
        <!-- Drag Handle Area -->
        <div 
          :class="['lu-bottom-sheet__handle']"
          @mousedown="startDrag"
          @touchstart="startDrag"
        >
          <slot name="handle">
            <div class="lu-bottom-sheet__handle-bar" />
          </slot>
        </div>

        <!-- Content Area -->
        <div class="lu-bottom-sheet__body">
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = withDefaults(defineProps<{
  modelValue: boolean;
  draggable?: boolean;
  variant?: string;
}>(), {
  draggable: true
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();

const close = () => {
  emit("update:modelValue", false);
  emit("close");
};

// Drag gesture tracking
const dragOffset = ref(0);
const isDragging = ref(false);
let startY = 0;

const startDrag = (event: MouseEvent | TouchEvent) => {
  if (!props.draggable) return;
  isDragging.value = true;
  startY = 'touches' in event ? event.touches[0].clientY : event.clientY;
  dragOffset.value = 0;

  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchmove', handleDrag, { passive: false });
  document.addEventListener('touchend', endDrag);
};

const handleDrag = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;
  const currentY = 'touches' in event ? event.touches[0].clientY : event.clientY;
  const diff = currentY - startY;
  
  // Only allow dragging downwards
  if (diff > 0) {
    dragOffset.value = diff;
    if ('touches' in event) {
      // Prevent pull-to-refresh on mobile while dragging bottom sheet
      event.preventDefault();
    }
  }
};

const endDrag = () => {
  if (!isDragging.value) return;
  isDragging.value = false;

  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', endDrag);
  document.removeEventListener('touchmove', handleDrag);
  document.removeEventListener('touchend', endDrag);

  // If dragged down more than 120px, close
  if (dragOffset.value > 120) {
    close();
  }
  dragOffset.value = 0;
};

const sheetStyle = computed(() => {
  if (dragOffset.value > 0) {
    return {
      transform: `translateY(${dragOffset.value}px)`,
      transition: isDragging.value ? 'none' : 'transform 200ms ease'
    };
  }
  return {};
});


</script>
