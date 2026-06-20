<template>
  <LuPageHeader title="LuGrid" description="A primitive that maps to CSS Grid. It provides a structural foundation for 2D layouts." />

  <LuCodeBlock variant="preview" 
    title="Basic 3-Column Grid" 
    description="Render a grid with a fixed number of columns using the cols prop."
    :code="basicCode"
  >
    <template #preview>
      <PreviewFrame width="100%">
        <LuGrid :cols="3" :style="{ gap: 'var(--lu-space-4)', width: '100%' }">
          <LuButton v-for="i in 6" :key="i" variant="outline">
            Cell {{ i }}
          </LuButton>
        </LuGrid>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Responsive Grid" 
    description="Vary the number of columns based on responsive breakpoints using smCols, mdCols, and lgCols props."
    :code="responsiveCode"
  >
    <template #preview>
      <PreviewFrame width="100%">
        <LuGrid :smCols="1" :mdCols="2" :lgCols="3" :style="{ gap: 'var(--lu-space-4)', width: '100%' }">
          <LuButton v-for="i in 6" :key="i" variant="outline">
            Cell {{ i }}
          </LuButton>
        </LuGrid>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuGrid, LuText, LuCodeBlock, LuButton } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const basicCode = `<LuGrid :cols="3" :style="{ gap: 'var(--lu-space-4)' }">
  <LuButton v-for="i in 6" :key="i" variant="outline">
    Cell {{ i }}
  </LuButton>
</LuGrid>`;

const responsiveCode = `<LuGrid :smCols="1" :mdCols="2" :lgCols="3" :style="{ gap: 'var(--lu-space-4)' }">
  <LuButton v-for="i in 6" :key="i" variant="outline">
    Cell {{ i }}
  </LuButton>
</LuGrid>`;

const propsData = [
  { name: 'cols', type: 'number', description: 'Total number of columns (applied via inline grid-template-columns).' },
  { name: 'smCols', type: 'number', description: 'Columns at the sm breakpoint (adds responsive class sm:grid-cols-N).' },
  { name: 'mdCols', type: 'number', description: 'Columns at the md breakpoint (adds responsive class md:grid-cols-N).' },
  { name: 'lgCols', type: 'number', description: 'Columns at the lg breakpoint (adds responsive class lg:grid-cols-N).' },
  { name: 'as', type: 'string', default: '"div"', description: 'HTML element to render as.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
