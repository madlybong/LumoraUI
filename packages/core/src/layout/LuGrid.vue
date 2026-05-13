<template>
  <component :is="as" v-bind="$attrs" :class="resolvedSkin" :style="gridStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

const props = withDefaults(defineProps<{
  cols?: number;
  smCols?: number;
  mdCols?: number;
  lgCols?: number;
  variant?: string;
  as?: string;
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
const resolvedSkin = computed(() => [
  resolveSkin("LuGrid", props.variant),
  colsClass.value
].filter(Boolean).join(" "));

const gridStyle = computed(() => 
  props.cols ? { gridTemplateColumns: `repeat(${props.cols}, minmax(0, 1fr))` } : {}
);
</script>
