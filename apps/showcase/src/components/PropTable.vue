<template>
  <LuCard variant="surface">
    <LuTable>
      <LuTableHead>
        <LuTableRow>
          <LuTableHeadCell >Prop</LuTableHeadCell>
          <LuTableHeadCell >Type</LuTableHeadCell>
          <LuTableHeadCell >Default</LuTableHeadCell>
          <LuTableHeadCell>Description</LuTableHeadCell>
        </LuTableRow>
      </LuTableHead>
      <LuTableBody>
        <LuTableRow v-for="prop in propsList" :key="prop.name" variant="default">
          <LuTableCell variant="default">
            <LuBadge variant="default" >{{ prop.name }}</LuBadge>
          </LuTableCell>
          <LuTableCell variant="default">{{ prop.type }}</LuTableCell>
          <LuTableCell variant="default">{{ prop.default || '—' }}</LuTableCell>
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
