<template>
  <LuPageHeader title="LuSwitch" description="A control that allows the user to toggle between checked and not checked." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="The switch requires styling for both the track and the thumb."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack   >
        <LuStack   >
          <LuText as="span" >Notifications</LuText>
          <LuSwitch v-model="isOn" />
        </LuStack>
        <LuStack   >
          <LuText as="span" >Disabled</LuText>
          <LuSwitch v-model="isOn" disabled />
        </LuStack>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LuSwitch, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const isOn = ref(true);

const exampleCode = `<template>
  <LuStack   >
    <LuText as="span" >Notifications</LuText>
    <LuSwitch v-model="isOn" />
  </LuStack>
</template>

<script setup>
import { ref } from 'vue';
const isOn = ref(true);
<\/script>`;

const propsData = [
  { name: 'modelValue', type: 'boolean', description: 'The bound checked state.' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
