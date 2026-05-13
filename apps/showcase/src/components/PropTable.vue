<template>
  <LuStack direction="vertical" class="gap-4">
    <!-- Section heading -->
    <LuText as="h2" variant="section-title">{{ title }}</LuText>

    <LuCard variant="surface">
      <LuTable>
        <LuTableHead>
          <LuTableRow>
            <LuTableHeadCell>Prop</LuTableHeadCell>
            <LuTableHeadCell>Type</LuTableHeadCell>
            <LuTableHeadCell>Default</LuTableHeadCell>
            <LuTableHeadCell>Description</LuTableHeadCell>
          </LuTableRow>
        </LuTableHead>
        <LuTableBody>
          <LuTableRow v-for="prop in propsList" :key="prop.name">
            <LuTableCell>
              <LuBadge variant="default">{{ prop.name }}</LuBadge>
            </LuTableCell>
            <LuTableCell>
              <LuText variant="code" class="whitespace-nowrap">{{ prop.type }}</LuText>
            </LuTableCell>
            <LuTableCell>
              <LuText v-if="prop.default" variant="code">{{ prop.default }}</LuText>
              <LuText v-else variant="muted">—</LuText>
            </LuTableCell>
            <LuTableCell>
              <LuText variant="body">{{ prop.description }}</LuText>
            </LuTableCell>
          </LuTableRow>
        </LuTableBody>
      </LuTable>
    </LuCard>
  </LuStack>
</template>

<script setup lang="ts">
import {
  LuCard, LuTable, LuTableHead, LuTableBody, LuTableRow,
  LuTableHeadCell, LuTableCell, LuBadge, LuText, LuStack
} from '@astrake/lumora-ui';

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
}

withDefaults(defineProps<{
  title?: string;
  propsList: PropDef[];
}>(), {
  title: 'Props API'
});
</script>
