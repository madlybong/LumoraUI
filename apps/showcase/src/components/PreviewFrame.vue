<template>
  <LuCard  :style="wrapperStyle">
    <LuCard 
      
      :style="frameStyle"
    >
      <slot />
    </LuCard>
  </LuCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LuCard } from '@astrake/lumora-ui';

const props = defineProps<{
  width?: number | string;
  height?: number | string;
  scale?: number;
}>();

const wrapperStyle = computed(() => {
  if (!props.scale || props.scale === 1) return {};
  
  // Calculate wrapper height needed to contain scaled content
  const h = typeof props.height === 'number' ? props.height : parseInt(String(props.height || '0'), 10);
  return {
    height: h ? `${h * props.scale}px` : 'auto',
  };
});

const frameStyle = computed(() => {
  return {
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    height: typeof props.height === 'number' ? `${props.height}px` : props.height,
    transform: props.scale && props.scale !== 1 ? `scale(${props.scale})` : 'none',
    transformOrigin: 'top left',
  };
});
</script>
