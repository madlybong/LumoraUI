<template>
  <LuPageHeader title="LuSwitch" description="A control that allows the user to toggle between checked, unchecked, and indeterminate states." />

  <LuStack direction="vertical" gap="8">
    <LuCodeBlock variant="preview" 
      title="Basic Switch" 
      description="Standard boolean toggle with a label."
      :code="basicCode"
    >
      <template #preview>
        <LuCard class="w-full max-w-sm" variant="panel">
          <LuStack direction="vertical" gap="4">
            <LuSwitch v-model="isOn" label="Enable notifications" />
          </LuStack>
        </LuCard>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview" 
      title="Disabled State" 
      description="Switches can be disabled to prevent interaction."
      :code="disabledCode"
    >
      <template #preview>
        <LuCard class="w-full max-w-sm" variant="panel">
          <LuStack direction="vertical" gap="4">
            <LuSwitch :modelValue="true" label="Required setting" disabled />
            <LuSwitch :modelValue="false" label="Unavailable feature" disabled />
          </LuStack>
        </LuCard>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview" 
      title="Three-State (Indeterminate)" 
      description="A switch can represent an unknown or mixed state using a null model value."
      :code="indeterminateCode"
    >
      <template #preview>
        <LuCard class="w-full max-w-sm" variant="panel">
          <LuStack direction="vertical" gap="4">
            <LuSwitch v-model="mixedState" label="Sync settings (mixed)" />
            <LuButton variant="outline" size="sm" class="self-start mt-2" @click="resetMixed">Reset to Mixed</LuButton>
          </LuStack>
        </LuCard>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview" 
      title="Color Variants" 
      description="Change the semantic color of the switch when active."
      :code="colorCode"
    >
      <template #preview>
        <LuCard class="w-full max-w-sm" variant="panel">
          <LuStack direction="vertical" gap="4">
            <LuSwitch v-model="colorStates.default" label="Default (Rose)" />
            <LuSwitch v-model="colorStates.success" variant="success" label="Success (Emerald)" />
            <LuSwitch v-model="colorStates.warning" variant="warning" label="Warning (Amber)" />
            <LuSwitch v-model="colorStates.danger" variant="danger" label="Danger (Red)" />
          </LuStack>
        </LuCard>
      </template>
    </LuCodeBlock>
  </LuStack>

  <PropTable :props-list="propsData" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuSwitch, LuStack, LuText, LuCodeBlock, LuCard, LuButton } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const isOn = ref(true);
const mixedState = ref<boolean | null>(null);

const colorStates = ref({
  default: true,
  success: true,
  warning: true,
  danger: true
});

const resetMixed = () => {
  mixedState.value = null;
};

const basicCode = `<script setup>
import { ref } from 'vue';
import { LuSwitch } from '@astrake/lumora-ui';

const isOn = ref(true);
<\/script>

<template>
  <LuSwitch v-model="isOn" label="Enable notifications" />
</template>`;

const disabledCode = `<template>
  <LuSwitch :modelValue="true" label="Required setting" disabled />
  <LuSwitch :modelValue="false" label="Unavailable feature" disabled />
</template>`;

const indeterminateCode = `<script setup>
import { ref } from 'vue';
import { LuSwitch } from '@astrake/lumora-ui';

const state = ref(null); // null = indeterminate
<\/script>

<template>
  <LuSwitch v-model="state" label="Sync settings" />
</template>`;

const colorCode = `<template>
  <LuSwitch v-model="val" variant="success" label="Success" />
  <LuSwitch v-model="val" variant="warning" label="Warning" />
  <LuSwitch v-model="val" variant="danger" label="Danger" />
</template>`;

const propsData = [
  { name: 'modelValue', type: 'boolean | null', description: 'The bound state: true (on), false (off), or null (indeterminate).' },
  { name: 'label', type: 'string', description: 'Text label rendered next to the switch.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction.' },
  { name: 'variant', type: 'string', description: 'Skin variant key (e.g., success, warning, danger).' },
];
</script>
