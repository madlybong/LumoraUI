<template>
  <LuCodeBlock variant="preview"
    title="Pagination"
    description="Pagination with page navigation, next and previous links."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-lg" variant="panel">
        <LuPagination v-model="currentPage" :total="100" :page-size="10" />
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCard, LuPagination , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const currentPage = ref(5);

const code = `<script setup>
import { ref } from 'vue';
import { LuPagination } from '@astrake/lumora-ui';

const currentPage = ref(5);
<\/script>

<template>
  <LuPagination 
    v-model="currentPage" 
    :total="100" 
    :page-size="10" 
  />
</template>`;

const propsList = [
  { name: 'modelValue', type: 'number', description: 'The current active page (1-indexed).' },
  { name: 'total', type: 'number', description: 'Total number of items.' },
  { name: 'pageSize', type: 'number', default: '10', description: 'Number of items per page.' },
  { name: 'siblingCount', type: 'number', default: '1', description: 'Number of always visible pages before and after the current page.' },
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map.' },
];
</script>
