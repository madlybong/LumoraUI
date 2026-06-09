<template>
  <LuPageHeader title="LuInput" description="A foundational input element. Renders a native HTML <code>&lt;input&gt;</code> element that supports <code>v-model</code>." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="Standard text input."
    :code="basicCode"
  >
    <template #preview>
      <LuInput v-model="val" placeholder="Enter your email..." />
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="With Prepend Icon" 
    description="Render a Lucide icon inside the left side of the input."
    :code="prependIconCode"
  >
    <template #preview>
      <LuInput v-model="email" prepend-icon="mail" placeholder="user@example.com" />
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="With Append Icon" 
    description="Render a Lucide icon inside the right side of the input."
    :code="appendIconCode"
  >
    <template #preview>
      <LuInput v-model="search" append-icon="search" placeholder="Search components..." />
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Custom Prepend Slot" 
    description="Pass any custom content into the prepend zone."
    :code="slotCode"
  >
    <template #preview>
      <LuInput v-model="url" placeholder="google.com">
        <template #prepend>
          <span style="display:flex;align-items:center;height:100%;padding:0 0.625rem;font-size:var(--lu-text-xs);font-weight:500;color:var(--lu-color-text-muted);background:var(--lu-color-surface-hover);border-right:1px solid var(--lu-color-border);white-space:nowrap">
            https://
          </span>
        </template>
      </LuInput>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Password Reveal" 
    description="Using type='password' automatically adds a reveal toggle button to the append zone."
    :code="passwordCode"
  >
    <template #preview>
      <LuInput v-model="password" type="password" placeholder="Enter your password" />
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Masked Input (Maska)" 
    description="Format input automatically using the optional Maska peer dependency. The v-model still receives the unmasked value."
    :code="maskCode"
  >
    <template #preview>
      <LuStack spacing="md" class="w-full">
        <div>
          <LuText variant="body" class="mb-2 block">Phone: {{ phone }}</LuText>
          <LuInput v-model="phone" mask="(###) ###-####" placeholder="(555) 555-5555" />
        </div>
        <div>
          <LuText variant="body" class="mb-2 block">Date: {{ date }}</LuText>
          <LuInput v-model="date" mask="##/##/####" placeholder="MM/DD/YYYY" />
        </div>
      </LuStack>
    </template>
  </LuCodeBlock>

  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuInput, LuStack, LuText, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const val = ref('');
const email = ref('');
const search = ref('');
const url = ref('');
const password = ref('');
const phone = ref('');
const date = ref('');

const basicCode = `<template>
  <LuInput v-model="val" placeholder="Enter your email..." />
</template>

<script setup>
import { ref } from 'vue';
const val = ref('');
<\/script>`;

const prependIconCode = `<template>
  <LuInput v-model="email" prepend-icon="mail" placeholder="user@example.com" />
</template>

<script setup>
import { ref } from 'vue';
const email = ref('');
<\/script>`;

const appendIconCode = `<template>
  <LuInput v-model="search" append-icon="search" placeholder="Search components..." />
</template>

<script setup>
import { ref } from 'vue';
const search = ref('');
<\/script>`;

const slotCode = `<template>
  <LuInput v-model="url" placeholder="google.com">
    <template #prepend>
      <span class="text-xs text-[var(--lu-color-text-muted)] font-medium bg-[var(--lu-color-surface-hover)] h-full px-2 rounded-l-[var(--lu-radius-input)] border-r border-[var(--lu-color-border)] flex items-center">
        https://
      </span>
    </template>
  </LuInput>
</template>

<script setup>
import { ref } from 'vue';
const url = ref('');
<\/script>`;

const passwordCode = `<template>
  <LuInput v-model="password" type="password" placeholder="Enter your password" />
</template>

<script setup>
import { ref } from 'vue';
const password = ref('');
<\/script>`;

const maskCode = `<template>
  <LuInput v-model="phone" mask="(###) ###-####" placeholder="(555) 555-5555" />
  <LuInput v-model="date" mask="##/##/####" placeholder="MM/DD/YYYY" />
</template>

<script setup>
import { ref } from 'vue';
const phone = ref('');
const date = ref('');
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'string | number', description: 'The value bound via v-model.' },
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
  { name: 'type', type: 'string', description: 'Passed natively to the input element. Defaults to text. Using "password" adds a reveal button.' },
  { name: 'prependIcon', type: 'string', description: 'Name of the Lucide icon to render on the left side of the input.' },
  { name: 'appendIcon', type: 'string', description: 'Name of the Lucide icon to render on the right side of the input.' },
  { name: 'mask', type: 'string | string[]', description: 'Optional Maska formatting pattern. Requires "maska" package installed.' },
  { name: 'maskOptions', type: 'object', description: 'Advanced configuration options passed to MaskInput.' },
];
</script>
