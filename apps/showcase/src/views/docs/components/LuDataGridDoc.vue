<template>
  <LuPageHeader
    title="LuDataGrid"
    description="An advanced data table with sorting, selection, search, per-column filters, inline editing, and pagination."
  />

  <LuStack direction="vertical" gap="8">

    <!-- 1. Basic -->
    <LuCodeBlock
      variant="preview"
      title="Basic Usage"
      description="A simple data grid with columns and row data."
      :code="basicCode"
    >
      <template #preview>
        <LuDataGrid :columns="basicCols" :data="basicData" />
      </template>
    </LuCodeBlock>

    <!-- 2. Selectable + Sortable (local) -->
    <LuCodeBlock
      variant="preview"
      title="Selectable & Sortable"
      description="Enable row selection (with select-all bar) and client-side column sorting."
      :code="selectableCode"
    >
      <template #preview>
        <LuDataGrid
          :columns="basicCols"
          :data="basicData"
          selectable
          sortable
          local-sort
          @selection-change="selected = $event"
        />
      </template>
    </LuCodeBlock>

    <!-- 3. Search + Per-column filters -->
    <LuCodeBlock
      variant="preview"
      title="Search & Column Filters"
      description="Use the search box to globally filter rows, or narrow by individual column."
      :code="filterCode"
    >
      <template #preview>
        <LuDataGrid
          :columns="filterCols"
          :data="employeeData"
          searchable
          sortable
          local-sort
        />
      </template>
    </LuCodeBlock>

    <!-- 4. Master Data Table -->
    <LuCodeBlock
      variant="preview"
      title="Master Data Table"
      description="A full-featured enterprise table: selection, sort, search, column filters, status badges, custom cell slots, and pagination."
      :code="masterCode"
    >
      <template #preview>
        <LuDataGrid
          :columns="masterCols"
          :data="masterData"
          :total="masterData.length"
          :page="currentPage"
          :page-size="5"
          selectable
          sortable
          local-sort
          searchable
          search-placeholder="Search employees…"
          @selection-change="masterSelected = $event"
          @page-change="currentPage = $event.page"
        >
          <!-- Status badge cell -->
          <template #cell-status="{ value }">
            <LuBadge
              :variant="value === 'Active' ? 'success' : value === 'On Leave' ? 'warning' : 'danger'"
            >
              {{ value }}
            </LuBadge>
          </template>

          <!-- Salary cell -->
          <template #cell-salary="{ value }">
            <LuText variant="body" class="font-medium tabular-nums">
              ${{ Number(value).toLocaleString() }}
            </LuText>
          </template>

          <!-- Custom toolbar-start slot when nothing selected -->
          <template #toolbar-start>
            <LuText variant="caption" class="text-zinc-400">{{ masterData.length }} employees</LuText>
          </template>
        </LuDataGrid>
      </template>
    </LuCodeBlock>

  </LuStack>

  <PropTable :props-list="propsData" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuDataGrid, LuBadge, LuText, LuStack, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

// ─── Basic ────────────────────────────────────────────────────────────────────
const basicCols = [
  { key: 'name',  label: 'Name',  sortable: true },
  { key: 'age',   label: 'Age',   sortable: true },
  { key: 'role',  label: 'Role' },
];

const basicData = [
  { id: '1', name: 'Alice',   age: 30, role: 'Developer' },
  { id: '2', name: 'Bob',     age: 25, role: 'Designer'  },
  { id: '3', name: 'Carol',   age: 35, role: 'Manager'   },
];

const selected = ref<string[]>([]);

// ─── Filter cols ──────────────────────────────────────────────────────────────
const filterCols = [
  { key: 'name',       label: 'Name',       sortable: true, filterable: true },
  { key: 'department', label: 'Department',  sortable: true, filterable: true, filterType: 'select' as const,
    filterOptions: [
      { value: 'Engineering', label: 'Engineering' },
      { value: 'Design',      label: 'Design' },
      { value: 'Product',     label: 'Product' },
      { value: 'Marketing',   label: 'Marketing' },
    ],
  },
  { key: 'status',     label: 'Status',      sortable: true, filterable: true, filterType: 'select' as const,
    filterOptions: [
      { value: 'Active',   label: 'Active' },
      { value: 'On Leave', label: 'On Leave' },
      { value: 'Inactive', label: 'Inactive' },
    ],
  },
  { key: 'location',   label: 'Location',    filterable: true },
];

// ─── Shared employee data ─────────────────────────────────────────────────────
const employeeData = [
  { id: 'e1',  name: 'Alice Chen',    department: 'Engineering', status: 'Active',   location: 'San Francisco', salary: 145000, joined: '2019-03-12' },
  { id: 'e2',  name: 'Bob Müller',    department: 'Design',      status: 'Active',   location: 'Berlin',        salary: 112000, joined: '2020-07-01' },
  { id: 'e3',  name: 'Carol Smith',   department: 'Product',     status: 'On Leave', location: 'New York',      salary: 130000, joined: '2018-11-20' },
  { id: 'e4',  name: 'David Park',    department: 'Engineering', status: 'Active',   location: 'Seoul',         salary: 155000, joined: '2021-01-15' },
  { id: 'e5',  name: 'Eva Martinez',  department: 'Marketing',   status: 'Inactive', location: 'Madrid',        salary: 95000,  joined: '2017-06-08' },
  { id: 'e6',  name: 'Frank Thomas',  department: 'Engineering', status: 'Active',   location: 'London',        salary: 138000, joined: '2022-03-22' },
  { id: 'e7',  name: 'Grace Lee',     department: 'Design',      status: 'Active',   location: 'Toronto',       salary: 108000, joined: '2020-09-17' },
  { id: 'e8',  name: 'Hiro Tanaka',   department: 'Product',     status: 'Active',   location: 'Tokyo',         salary: 125000, joined: '2019-12-03' },
];

// ─── Master ───────────────────────────────────────────────────────────────────
const masterCols = [
  { key: 'name',       label: 'Name',       sortable: true, filterable: true },
  { key: 'department', label: 'Department',  sortable: true, filterable: true, filterType: 'select' as const,
    filterOptions: [
      { value: 'Engineering', label: 'Engineering' },
      { value: 'Design',      label: 'Design' },
      { value: 'Product',     label: 'Product' },
      { value: 'Marketing',   label: 'Marketing' },
    ],
  },
  { key: 'status',     label: 'Status',      sortable: true, filterable: true, filterType: 'select' as const,
    filterOptions: [
      { value: 'Active',   label: 'Active' },
      { value: 'On Leave', label: 'On Leave' },
      { value: 'Inactive', label: 'Inactive' },
    ],
  },
  { key: 'salary',     label: 'Salary',      sortable: true },
  { key: 'location',   label: 'Location',    filterable: true },
  { key: 'joined',     label: 'Joined',      sortable: true },
];

const masterData = [...employeeData];
const masterSelected = ref<string[]>([]);
const currentPage = ref(1);

// ─── Code snippets ────────────────────────────────────────────────────────────
const basicCode = `<template>
  <LuDataGrid :columns="columns" :data="data" />
</template>

<script setup>
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'age',  label: 'Age',  sortable: true },
  { key: 'role', label: 'Role' },
];
const data = [
  { id: '1', name: 'Alice', age: 30, role: 'Developer' },
  { id: '2', name: 'Bob',   age: 25, role: 'Designer'  },
];
<\/script>`;

const selectableCode = `<template>
  <LuDataGrid
    :columns="columns"
    :data="data"
    selectable
    sortable
    local-sort
    @selection-change="onSelect"
  />
</template>`;

const filterCode = `<template>
  <LuDataGrid
    :columns="columns"
    :data="data"
    searchable
    sortable
    local-sort
  />
</template>

<script setup>
const columns = [
  { key: 'name',       label: 'Name',       sortable: true, filterable: true },
  { key: 'department', label: 'Department',  filterable: true, filterType: 'select',
    filterOptions: [{ value: 'Engineering', label: 'Engineering' }, ...],
  },
  { key: 'status',     label: 'Status',      filterable: true, filterType: 'select',
    filterOptions: [{ value: 'Active', label: 'Active' }, ...],
  },
];
<\/script>`;

const masterCode = `<template>
  <LuDataGrid
    :columns="columns"
    :data="employees"
    :total="employees.length"
    :page="page"
    :page-size="5"
    selectable sortable local-sort searchable
    search-placeholder="Search employees…"
    @selection-change="selected = $event"
    @page-change="page = $event.page"
  >
    <template #cell-status="{ value }">
      <LuBadge :variant="value === 'Active' ? 'success' : 'warning'">{{ value }}</LuBadge>
    </template>
    <template #cell-salary="{ value }">
      <LuText variant="body" class="font-medium">\${{ Number(value).toLocaleString() }}</LuText>
    </template>
  </LuDataGrid>
</template>`;

// ─── Props table ──────────────────────────────────────────────────────────────
const propsData = [
  { name: 'columns',          type: 'ColumnDef[]',           description: 'Array of column definitions.' },
  { name: 'data',             type: 'Row[]',                 description: 'Reactive row data.' },
  { name: 'loading',          type: 'boolean', default: 'false', description: 'Shows loading spinner.' },
  { name: 'selectable',       type: 'boolean', default: 'false', description: 'Enables checkbox column and selection bar.' },
  { name: 'sortable',         type: 'boolean', default: 'false', description: 'Enables column sort headers.' },
  { name: 'localSort',        type: 'boolean', default: 'true',  description: 'Sort rows client-side. Set false for server sort.' },
  { name: 'searchable',       type: 'boolean', default: 'false', description: 'Shows search input in toolbar.' },
  { name: 'searchMode',       type: "'local' | 'remote'", default: "'local'", description: 'Local filters in-memory; remote emits a search event.' },
  { name: 'searchDebounce',   type: 'number',  default: '300',   description: 'Debounce ms for remote search.' },
  { name: 'total',            type: 'number',                description: 'Total record count for pagination.' },
  { name: 'page',             type: 'number',  default: '1',     description: 'Current page (controlled).' },
  { name: 'pageSize',         type: 'number',  default: '20',    description: 'Rows per page.' },
  { name: 'groupBy',          type: 'string',                description: 'Column key to group rows by.' },
  { name: 'inlineEdit',       type: 'boolean', default: 'false', description: 'Enable double-click cell editing.' },
  { name: 'freezeColumns',    type: 'number',  default: '0',     description: 'Number of leading columns to freeze.' },
  { name: 'idKey',            type: 'string',  default: "'id'",  description: 'Row identity key.' },
  { name: 'emptyText',        type: 'string',  default: "'No data'", description: 'Text shown when there are no rows.' },
];
</script>
