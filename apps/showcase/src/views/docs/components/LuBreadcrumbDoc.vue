<template>
  <LuCodeBlock variant="preview"
    title="Breadcrumb"
    description="Displays the path to the current resource using a hierarchy of links."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-lg" variant="panel">
        <LuBreadcrumb :items="breadcrumbItems" />
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { LuCard, LuBreadcrumb , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb', current: true },
];

const code = `<script setup>
import { LuBreadcrumb } from '@astrake/lumora-ui';

const items = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb', current: true },
];
<\/script>

<template>
  <LuBreadcrumb :items="items" />
</template>`;

const propsList = [
  { name: 'items', type: 'LuBreadcrumbItem[]', description: 'Array of objects representing the breadcrumb trail. Requires a label. Optional href, to, icon, and current.' },
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map.' },
  { name: 'separatorIcon', type: 'string', default: 'chevron-right', description: 'Icon name used for the separator.' },
];
</script>
