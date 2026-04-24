<template>
  <LuCard variant="prop-table-card">
    <LuTable>
      <LuTableHead>
        <LuTableRow>
          <LuTableHeadCell class="w-1/4">Prop</LuTableHeadCell>
          <LuTableHeadCell class="w-1/4">Type</LuTableHeadCell>
          <LuTableHeadCell class="w-1/6">Default</LuTableHeadCell>
          <LuTableHeadCell>Description</LuTableHeadCell>
        </LuTableRow>
      </LuTableHead>
      <LuTableBody>
        <LuTableRow v-for="prop in propsList" :key="prop.name" variant="body-row">
          <LuTableCell variant="prop-name">
            <LuBadge variant="docs-lang" class="!relative !top-0 !right-0 !inline-flex font-mono text-[11px] font-semibold text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 px-1.5 py-0.5 rounded border border-violet-100 dark:border-violet-500/20">{{ prop.name }}</LuBadge>
          </LuTableCell>
          <LuTableCell variant="prop-type">{{ prop.type }}</LuTableCell>
          <LuTableCell variant="prop-default">{{ prop.default || '—' }}</LuTableCell>
          <LuTableCell>{{ prop.description }}</LuTableCell>
        </LuTableRow>
      </LuTableBody>
    </LuTable>
  </LuCard>
</template>

<script setup lang="ts">
import { LuCard, LuTable, LuTableHead, LuTableBody, LuTableRow, LuTableHeadCell, LuTableCell, LuBadge } from '@astrake/lumora-ui';

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

defineProps<{
  propsList: PropDef[];
}>();
</script>
