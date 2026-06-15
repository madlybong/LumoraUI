<template>
  <LuPageHeader title="LuToggleGroup" description="A set of two-state buttons that can be toggled on or off." />

  <LuCodeBlock variant="preview" 
    title="Single Select (Default)" 
    description="By default, LuToggleGroup acts as a single-select radio group."
    :code="singleSelectCode"
  >
    <template #preview>
      <LuStack direction="horizontal" gap="4">
        <LuToggleGroup v-model="selected">
          <LuToggleButton value="bold" aria-label="Bold">
            <LuIcon name="bold" class="h-4 w-4" />
          </LuToggleButton>
          <LuToggleButton value="italic" aria-label="Italic">
            <LuIcon name="italic" class="h-4 w-4" />
          </LuToggleButton>
          <LuToggleButton value="underline" aria-label="Underline">
            <LuIcon name="underline" class="h-4 w-4" />
          </LuToggleButton>
        </LuToggleGroup>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" class="mt-8"
    title="Multiple Select" 
    description="Pass the `multiple` prop to allow selecting multiple values. The v-model must be an array."
    :code="multiSelectCode"
  >
    <template #preview>
      <LuStack direction="horizontal" gap="4">
        <LuToggleGroup v-model="multiSelected" multiple>
          <LuToggleButton value="html">HTML</LuToggleButton>
          <LuToggleButton value="css">CSS</LuToggleButton>
          <LuToggleButton value="js">JavaScript</LuToggleButton>
        </LuToggleGroup>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" class="mt-8"
    title="Vertical Orientation" 
    description="Set the variant to `vertical` to stack buttons vertically."
    :code="verticalCode"
  >
    <template #preview>
      <LuStack direction="horizontal" gap="4">
        <LuToggleGroup v-model="verticalSelected" variant="vertical">
          <LuToggleButton value="top">Top</LuToggleButton>
          <LuToggleButton value="middle">Middle</LuToggleButton>
          <LuToggleButton value="bottom">Bottom</LuToggleButton>
        </LuToggleGroup>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuText as="h3" variant="section-title" class="mt-8">LuToggleGroup</LuText>
    <PropTable :props-list="groupPropsData" />
    
    <LuText as="h3" variant="section-title" class="mt-4">LuToggleButton</LuText>
    <PropTable :props-list="buttonPropsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuToggleGroup, LuToggleButton, LuStack, LuText, LuIcon, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const selected = ref('bold');
const multiSelected = ref(['html', 'js']);
const verticalSelected = ref('top');

const singleSelectCode = `<script setup>
import { ref } from 'vue';
import { LuToggleGroup, LuToggleButton, LuIcon } from '@astrake/lumora-ui';

const selected = ref('bold');
<\/script>

<template>
  <LuToggleGroup v-model="selected">
    <LuToggleButton value="bold" aria-label="Bold">
      <LuIcon name="bold" />
    </LuToggleButton>
    <LuToggleButton value="italic" aria-label="Italic">
      <LuIcon name="italic" />
    </LuToggleButton>
    <LuToggleButton value="underline" aria-label="Underline">
      <LuIcon name="underline" />
    </LuToggleButton>
  </LuToggleGroup>
</template>`;

const multiSelectCode = `<script setup>
import { ref } from 'vue';
import { LuToggleGroup, LuToggleButton } from '@astrake/lumora-ui';

const multiSelected = ref(['html', 'js']);
<\/script>

<template>
  <LuToggleGroup v-model="multiSelected" multiple>
    <LuToggleButton value="html">HTML</LuToggleButton>
    <LuToggleButton value="css">CSS</LuToggleButton>
    <LuToggleButton value="js">JavaScript</LuToggleButton>
  </LuToggleGroup>
</template>`;

const verticalCode = `<script setup>
import { ref } from 'vue';
import { LuToggleGroup, LuToggleButton } from '@astrake/lumora-ui';

const selected = ref('top');
<\/script>

<template>
  <LuToggleGroup v-model="selected" variant="vertical">
    <LuToggleButton value="top">Top</LuToggleButton>
    <LuToggleButton value="middle">Middle</LuToggleButton>
    <LuToggleButton value="bottom">Bottom</LuToggleButton>
  </LuToggleGroup>
</template>`;

const groupPropsData = [
  { name: 'modelValue', type: 'string | number | boolean | any[]', description: 'The bound selected value.' },
  { name: 'multiple', type: 'boolean', default: 'false', description: 'Whether multiple items can be selected. If true, modelValue should be an array.' },
  { name: 'variant', type: 'string', description: 'Skin variant key. Use "vertical" for vertical layout.' },
];

const buttonPropsData = [
  { name: 'value', type: 'string | number', description: 'The value represented by this button.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the toggle button.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
