<template>
  <LuPageHeader title="LuAccordion" description="Grouped collapsible panels that coordinate expand and collapse states, supporting single exclusive-open or multi-panel modes." />

  <LuCodeBlock variant="preview" 
    title="Exclusive Single Accordion" 
    description="Only one panel can be active at a time. Perfect for clean, clutter-free content delivery."
    :code="singleAccordionCode"
  >
    <template #preview>
      <div class="w-full max-w-lg">
        <LuAccordion v-model="activePanel">
          <LuCollapsible value="panel-1">
            <template #trigger="{ isOpen }">
              <span>Section 1: Core Framework</span>
              <LuIcon :name="isOpen ? 'chevron-up' : 'chevron-down'" :size="16" />
            </template>
            <template #content>
              <LuText variant="body" class="p-2">
                Lumora UI is built around a 100% headless contract. All components use state-driven resolveSkin mappings for pristine design system integration.
              </LuText>
            </template>
          </LuCollapsible>

          <LuCollapsible value="panel-2">
            <template #trigger="{ isOpen }">
              <span>Section 2: High Performance Engine</span>
              <LuIcon :name="isOpen ? 'chevron-up' : 'chevron-down'" :size="16" />
            </template>
            <template #content>
              <LuText variant="body" class="p-2">
                By stripping raw utility classes out of component templates, rendering overhead is minimized. Custom animations leverage hardware-accelerated GPU layers.
              </LuText>
            </template>
          </LuCollapsible>
        </LuAccordion>
      </div>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Multi-Open Accordion Group" 
    description="Allows multiple collapsible sections to stay expanded simultaneously."
    :code="multiAccordionCode"
  >
    <template #preview>
      <div class="w-full max-w-lg">
        <LuAccordion v-model="activePanels" multiple>
          <LuCollapsible value="section-a">
            <template #trigger="{ isOpen }">
              <span>System Configuration</span>
              <LuIcon :name="isOpen ? 'minus' : 'plus'" :size="16" />
            </template>
            <template #content>
              <div class="space-y-2 p-2">
                <LuText variant="caption">Server Mode: Development</LuText>
                <LuText variant="caption">Node Engine: v20.10.0</LuText>
              </div>
            </template>
          </LuCollapsible>

          <LuCollapsible value="section-b">
            <template #trigger="{ isOpen }">
              <span>Global Preferences</span>
              <LuIcon :name="isOpen ? 'minus' : 'plus'" :size="16" />
            </template>
            <template #content>
              <div class="space-y-2 p-2">
                <LuText variant="caption">Skin Selector: Default Dark Mode</LuText>
                <LuText variant="caption">Hotkeys: Enabled</LuText>
              </div>
            </template>
          </LuCollapsible>
        </LuAccordion>
      </div>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuAccordion, LuCollapsible, LuIcon, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const activePanel = ref('panel-1');
const activePanels = ref(['section-a']);

const singleAccordionCode = `<template>
  <LuAccordion v-model="activePanel">
    <LuCollapsible value="panel-1">
      <template #trigger="{ isOpen }">
        <span>Section 1</span>
        <LuIcon :name="isOpen ? 'chevron-up' : 'chevron-down'" />
      </template>
      <template #content>
        Panel Content 1
      </template>
    </LuCollapsible>
    <LuCollapsible value="panel-2">
      <template #trigger="{ isOpen }">
        <span>Section 2</span>
        <LuIcon :name="isOpen ? 'chevron-up' : 'chevron-down'" />
      </template>
      <template #content>
        Panel Content 2
      </template>
    </LuCollapsible>
  </LuAccordion>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuAccordion, LuCollapsible, LuIcon } from '@astrake/lumora-ui';

const activePanel = ref('panel-1');
<\/script>`;

const multiAccordionCode = `<template>
  <LuAccordion v-model="activePanels" multiple>
    <LuCollapsible value="section-a">
      <template #trigger="{ isOpen }">Trigger A</template>
      <template #content>Content A</template>
    </LuCollapsible>
  </LuAccordion>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuAccordion, LuCollapsible } from '@astrake/lumora-ui';

const activePanels = ref(['section-a']);
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'string | string[]', default: 'undefined', description: 'Sets the active open panel values (single or array).' },
  { name: 'multiple', type: 'boolean', default: 'false', description: 'Enables opening multiple panels simultaneously.' },
  { name: 'variant', type: 'string', default: 'undefined', description: 'Custom visual theme variant.' }
];
</script>
