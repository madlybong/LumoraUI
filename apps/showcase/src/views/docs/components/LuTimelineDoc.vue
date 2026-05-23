<template>
  <LuPageHeader title="LuTimeline" description="Vertical chronological event display using LuTimelineItem children." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Render a timeline using LuTimelineItem child components inside a LuTimeline container."
    :code="basicCode"
  >
    <template #preview>
      <LuTimeline>
        <LuTimelineItem date="2023-01-01" status="success">
          <LuText variant="body" class="font-medium">Project Started</LuText>
          <LuText variant="caption">Initial project setup and architecture design.</LuText>
        </LuTimelineItem>
        <LuTimelineItem date="2023-02-15" status="info">
          <LuText variant="body" class="font-medium">v1.0 Launched</LuText>
          <LuText variant="caption">First public release with core features.</LuText>
        </LuTimelineItem>
        <LuTimelineItem date="2023-04-10" status="warning" :last="true">
          <LuText variant="body" class="font-medium">Scaling Phase</LuText>
          <LuText variant="caption">Infrastructure upgrades in progress.</LuText>
        </LuTimelineItem>
      </LuTimeline>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuTimeline, LuTimelineItem, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const basicCode = `<template>
  <LuTimeline>
    <LuTimelineItem date="2023-01-01" status="success">
      <LuText variant="body" class="font-medium">Project Started</LuText>
      <LuText variant="caption">Initial project setup.</LuText>
    </LuTimelineItem>
    <LuTimelineItem date="2023-02-15" status="info">
      <LuText variant="body" class="font-medium">v1.0 Launched</LuText>
      <LuText variant="caption">First public release.</LuText>
    </LuTimelineItem>
    <LuTimelineItem date="2023-04-10" status="warning" :last="true">
      <LuText variant="body" class="font-medium">Scaling Phase</LuText>
      <LuText variant="caption">Infrastructure upgrades.</LuText>
    </LuTimelineItem>
  </LuTimeline>
</template>`;

const propsData = [
  { name: 'LuTimeline', type: 'container', description: 'Wrapper container for timeline items. Uses the default slot.' },
  { name: 'date', type: 'string', description: 'Date string displayed above the timeline item content (LuTimelineItem prop).' },
  { name: 'status', type: '"default" | "success" | "warning" | "danger" | "info"', default: '"default"', description: 'Visual status variant for the dot indicator (LuTimelineItem prop).' },
  { name: 'last', type: 'boolean', default: 'false', description: 'Hides the connector line below this item (LuTimelineItem prop).' },
];
</script>
