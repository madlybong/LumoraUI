<template>
  <LuPageHeader title="Entity Card Recipe" description="Rich summary cards for displaying entity detail information — avatar, meta, stats grid, and action buttons." />

  <LuCodeBlock variant="preview" 
    title="Full Entity Card" 
    description="A complete entity card with avatar, metadata, stats, and action buttons using named slots."
    :code="basicCode"
  >
    <template #preview>
      <LuEntityCard>
        <template #avatar>
          <LuAvatar initials="AC" variant="primary" />
        </template>
        <template #meta>
          <LuText variant="body" class="font-semibold">Acme Corporation</LuText>
          <LuText variant="caption">Enterprise customer since 2022</LuText>
        </template>
        <template #stats>
          <LuEntityCardStat label="Orders" :value="142" delta="+12%" :deltaUp="true" />
          <LuEntityCardStat label="Revenue" value="$48.2k" delta="+8.3%" :deltaUp="true" />
          <LuEntityCardStat label="Tickets" :value="3" delta="-2" :deltaUp="false" />
        </template>
        <template #actions>
          <LuButton variant="primary" size="sm">View Details</LuButton>
          <LuButton variant="ghost" size="sm">Edit</LuButton>
        </template>
      </LuEntityCard>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import LuEntityCard from '../../../recipes/entity-card/LuEntityCard.vue';
import LuEntityCardStat from '../../../recipes/entity-card/LuEntityCardStat.vue';
import { LuAvatar, LuButton, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const basicCode = `<template>
  <LuEntityCard>
    <template #avatar>
      <LuAvatar initials="AC" variant="primary" />
    </template>
    <template #meta>
      <LuText variant="body" class="font-semibold">Acme Corporation</LuText>
      <LuText variant="caption">Enterprise customer since 2022</LuText>
    </template>
    <template #stats>
      <LuEntityCardStat label="Orders" :value="142" delta="+12%" :deltaUp="true" />
      <LuEntityCardStat label="Revenue" value="$48.2k" delta="+8.3%" :deltaUp="true" />
      <LuEntityCardStat label="Tickets" :value="3" delta="-2" :deltaUp="false" />
    </template>
    <template #actions>
      <LuButton variant="primary" size="sm">View Details</LuButton>
      <LuButton variant="ghost" size="sm">Edit</LuButton>
    </template>
  </LuEntityCard>
</template>`;

const propsData = [
  { name: '#avatar', type: 'slot', description: 'Slot for the entity avatar (e.g., LuAvatar).' },
  { name: '#meta', type: 'slot', description: 'Slot for entity name, description, and metadata text.' },
  { name: '#stats', type: 'slot', description: 'Slot for LuEntityCardStat components in a stats grid.' },
  { name: '#actions', type: 'slot', description: 'Slot for action buttons (e.g., LuButton).' },
  { name: '#default', type: 'slot', description: 'Main content area for tabs, tables, or rich content.' },
];
</script>
