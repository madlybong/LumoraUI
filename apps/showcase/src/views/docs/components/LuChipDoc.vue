<template>
  <LuPageHeader title="LuChip / LuChipGroup" description="Compact interactive action components representing input tags, selections, filters, or standalone triggers." />

  <LuCodeBlock variant="preview" 
    title="Single Selection Chip Group" 
    description="Select a single option from the coordinated Chip Group."
    :code="singleChipCode"
  >
    <template #preview>
      <div class="flex flex-col gap-3 w-full max-w-md">
        <LuChipGroup v-model="selectedFruit" :multiple="false">
          <LuChip label="Apple" value="apple" />
          <LuChip label="Banana" value="banana" />
          <LuChip label="Cherry" value="cherry" />
          <LuChip label="Orange" value="orange" />
        </LuChipGroup>
        <LuText variant="caption" class="text-zinc-500">Selected Fruit: <span class="font-bold text-rose-500">{{ selectedFruit || 'None' }}</span></LuText>
      </div>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Multiple Selection Filter" 
    description="Filter list selections using chips with support for trailing close buttons and leading icons."
    :code="multiChipCode"
  >
    <template #preview>
      <div class="flex flex-col gap-4 w-full max-w-md">
        <div class="flex flex-wrap gap-2">
          <LuChipGroup v-model="selectedCategories" :multiple="true">
            <LuChip value="tech" label="Technology">
              <template #leading><LuIcon name="cpu" :size="14" /></template>
            </LuChip>
            <LuChip value="design" label="Design">
              <template #leading><LuIcon name="palette" :size="14" /></template>
            </LuChip>
            <LuChip value="growth" label="Marketing">
              <template #leading><LuIcon name="trending-up" :size="14" /></template>
            </LuChip>
          </LuChipGroup>
        </div>
        <LuText variant="caption" class="text-zinc-500">Active Filters: <span class="font-bold">{{ selectedCategories.join(', ') || 'None' }}</span></LuText>
      </div>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Closable Input Chips" 
    description="Render a list of tags that can be dynamically deleted."
    :code="closableChipCode"
  >
    <template #preview>
      <div class="flex flex-wrap gap-2 max-w-md">
        <LuChip
          v-for="tag in tags"
          :key="tag"
          :label="tag"
          closable
          @close="removeTag(tag)"
        />
        <LuChip v-if="tags.length === 0" label="No Tags Left" disabled />
      </div>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuChip, LuChipGroup, LuIcon, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const selectedFruit = ref('apple');
const selectedCategories = ref(['tech']);

const tags = ref(['vue3', 'typescript', 'headless', 'tailwindcss']);
const removeTag = (tag: string) => {
  tags.value = tags.value.filter(t => t !== tag);
};

const singleChipCode = `<template>
  <LuChipGroup v-model="selectedFruit" :multiple="false">
    <LuChip label="Apple" value="apple" />
    <LuChip label="Banana" value="banana" />
  </LuChipGroup>
</template>`;

const multiChipCode = `<template>
  <LuChipGroup v-model="selectedCategories" :multiple="true">
    <LuChip value="tech" label="Technology">
      <template #leading><LuIcon name="cpu" /></template>
    </LuChip>
  </LuChipGroup>
</template>`;

const closableChipCode = `<template>
  <LuChip label="JavaScript" closable @close="onClose" />
</template>`;

const propsData = [
  { name: 'label', type: 'string', default: 'undefined', description: 'Sets the text content of the chip.' },
  { name: 'value', type: 'any', default: 'undefined', description: 'Associated selection value when used in a LuChipGroup.' },
  { name: 'closable', type: 'boolean', default: 'false', description: 'Renders a close/delete button.' },
  { name: 'selected', type: 'boolean', default: 'false', description: 'Highlights the chip as selected (independent of group).' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables pointer events and adds lock styling.' },
  { name: 'variant', type: 'string', default: 'undefined', description: 'Custom visual theme variants.' }
];
</script>
