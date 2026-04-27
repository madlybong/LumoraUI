<template>
  <LuPageHeader title="LuTable" description="A set of components for building data tables." />

  <LuCodeBlock variant="preview" 
    title="Basic Table" 
    description="The table components map directly to native HTML table elements."
    :code="tableCode"
  >
    <template #preview>
      <LuStack>
        <LuCard variant="default">
          <LuTable variant="default">
            <LuTableHead variant="default">
              <LuTableRow variant="default">
                <LuTableHeadCell variant="default">Name</LuTableHeadCell>
                <LuTableHeadCell variant="default">Status</LuTableHeadCell>
                <LuTableHeadCell variant="default">Role</LuTableHeadCell>
              </LuTableRow>
            </LuTableHead>
            <LuTableBody variant="default">
              <LuTableRow variant="default">
                <LuTableCell variant="default">Jane Doe</LuTableCell>
                <LuTableCell variant="default">Active</LuTableCell>
                <LuTableCell variant="default">Admin</LuTableCell>
              </LuTableRow>
              <LuTableRow variant="default">
                <LuTableCell variant="default">John Smith</LuTableCell>
                <LuTableCell variant="default">Inactive</LuTableCell>
                <LuTableCell variant="default">User</LuTableCell>
              </LuTableRow>
            </LuTableBody>
          </LuTable>
        </LuCard>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical">
    <LuText as="h2" variant="section-title">Props (for all table components)</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuPageHeader, LuStack, LuText, LuTable, LuTableHead, LuTableBody, LuTableRow, LuTableHeadCell, LuTableCell, LuCard , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const tableCode = `<template>
  <LuTable variant="default">
    <LuTableHead variant="default">
      <LuTableRow variant="default">
        <LuTableHeadCell variant="default">Name</LuTableHeadCell>
        <LuTableHeadCell variant="default">Status</LuTableHeadCell>
        <LuTableHeadCell variant="default">Role</LuTableHeadCell>
      </LuTableRow>
    </LuTableHead>
    <LuTableBody variant="default">
      <LuTableRow variant="default">
        <LuTableCell variant="default">Jane Doe</LuTableCell>
        <LuTableCell variant="default">Active</LuTableCell>
        <LuTableCell variant="default">Admin</LuTableCell>
      </LuTableRow>
    </LuTableBody>
  </LuTable>
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
];
</script>
