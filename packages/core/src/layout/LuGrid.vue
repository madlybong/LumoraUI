<template>
  <component :is="as" v-bind="$attrs" :class="resolvedSkin" :style="gridStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
import { resolveLayoutProps, cn } from "../utils";

const props = withDefaults(defineProps<{
  cols?: number;
  smCols?: number;
  mdCols?: number;
  lgCols?: number;
  variant?: string;
  as?: string;
  gap?: string | number;
  padding?: string | number;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}>(), {
  as: 'div'
});

const colsClass = computed(() => {
  const map: Record<number, string> = {1:'grid-cols-1',2:'grid-cols-2',3:'grid-cols-3',4:'grid-cols-4',5:'grid-cols-5',6:'grid-cols-6',12:'grid-cols-12'};
  const sm = props.smCols && map[props.smCols] ? `sm:${map[props.smCols]}` : '';
  const md = props.mdCols && map[props.mdCols] ? `md:${map[props.mdCols]}` : '';
  const lg = props.lgCols && map[props.lgCols] ? `lg:${map[props.lgCols]}` : '';
  return [sm, md, lg].filter(Boolean).join(' ');
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => cn(
  resolveSkin("LuGrid", props.variant),
  resolveLayoutProps(props),
  colsClass.value
));

const gridStyle = computed(() => 
  props.cols ? { gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))` } : {}
);
</script>
