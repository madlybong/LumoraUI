<template>
  <LuPageHeader title="LuCheckbox (LuCheck)" description="A control that allows the user to toggle between checked, unchecked, and indeterminate states." />

  <LuStack direction="vertical" gap="8">
    <LuCodeBlock variant="preview"
      title="Basic Checkbox"
      description="Standard checkbox with label."
      :code="basicCode"
    >
      <template #preview>
        <LuCard class="w-full max-w-sm" variant="panel">
          <LuStack direction="vertical" gap="4">
            <LuCheck v-model="terms" label="Accept terms and conditions" name="terms" />
          </LuStack>
        </LuCard>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      title="Disabled State"
      description="Checkboxes can be disabled, preventing interaction."
      :code="disabledCode"
    >
      <template #preview>
        <LuCard class="w-full max-w-sm" variant="panel">
          <LuStack direction="vertical" gap="4">
            <LuCheck v-model="disabledOn" label="Subscribed to newsletter" disabled />
            <LuCheck v-model="disabledOff" label="Unsubscribed" disabled />
          </LuStack>
        </LuCard>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      title="Indeterminate State"
      description="Use the indeterminate state when a checkbox represents a group of items that are partially selected."
      :code="indeterminateCode"
    >
      <template #preview>
        <LuCard class="w-full max-w-sm" variant="panel">
          <LuStack direction="vertical" gap="2">
            <LuCheck 
              v-model="allSelected" 
              :indeterminate="isIndeterminate"
              label="Select All Permissions" 
              class="mb-2"
              @change="toggleAll"
            />
            <div class="ml-6">
              <LuStack direction="vertical" gap="2">
                <LuCheck v-model="perms.read" label="Read access" @change="updateAll" />
                <LuCheck v-model="perms.write" label="Write access" @change="updateAll" />
                <LuCheck v-model="perms.delete" label="Delete access" @change="updateAll" />
              </LuStack>
            </div>
          </LuStack>
        </LuCard>
      </template>
    </LuCodeBlock>
  </LuStack>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuCard, LuStack, LuCheck, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const terms = ref(false);
const disabledOn = ref(true);
const disabledOff = ref(false);

const perms = ref({
  read: true,
  write: false,
  delete: false
});

const allSelected = ref(false);
const isIndeterminate = ref(true);

const updateAll = () => {
  const vals = Object.values(perms.value);
  if (vals.every(v => v)) {
    allSelected.value = true;
    isIndeterminate.value = false;
  } else if (vals.every(v => !v)) {
    allSelected.value = false;
    isIndeterminate.value = false;
  } else {
    allSelected.value = false;
    isIndeterminate.value = true;
  }
};

const toggleAll = (val: boolean) => {
  isIndeterminate.value = false;
  perms.value.read = val;
  perms.value.write = val;
  perms.value.delete = val;
};

const basicCode = `<script setup>
import { ref } from 'vue';
import { LuCheck } from '@astrake/lumora-ui';

const terms = ref(false);
<\/script>

<template>
  <LuCheck v-model="terms" label="Accept terms and conditions" />
</template>`;

const disabledCode = `<template>
  <LuCheck v-model="val" label="Subscribed" disabled />
</template>`;

const indeterminateCode = `<script setup>
import { ref } from 'vue';
import { LuCheck } from '@astrake/lumora-ui';

const allSelected = ref(false);
const isIndeterminate = ref(true);
<\/script>

<template>
  <LuCheck 
    v-model="allSelected" 
    :indeterminate="isIndeterminate"
    label="Select All" 
  />
</template>`;

const propsList = [
  { name: 'modelValue', type: 'boolean', description: 'The controlled checked state.' },
  { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Forces the checkbox into an indeterminate (mixed) visual state.' },
  { name: 'label', type: 'string', description: 'The text label for the checkbox.' },
  { name: 'name', type: 'string', description: 'The name attribute for the hidden native input.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox.' },
  { name: 'variant', type: 'string', description: 'The variant to use from the skin map.' },
];
</script>
