<template>
  <LuPageHeader title="LuAvatar" description="A visual representation of a user or entity. Supports images and text fallbacks." />

  <LuCodeBlock variant="preview" 
    title="Usage" 
    description="If the src fails to load, it automatically shows the fallback."
    :code="exampleCode"
  >
    <template #preview>
      <LuStack   >
        <LuAvatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User"  />
        <LuAvatar src="invalid-url.jpg" fallback="JD"  />
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuAvatar, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuStack   >
  <!-- Successful image -->
  <LuAvatar 
    src="https://i.pravatar.cc/150" 
     
  />
  
  <!-- Fallback (invalid src) -->
  <LuAvatar 
    src="invalid.jpg" 
    fallback="JD" 
     
  />
</LuStack>`;

const propsData = [
  { name: 'src', type: 'string', description: 'The image source URL.' },
  { name: 'fallback', type: 'string', description: 'Text to display if the image fails to load.' },
  { name: 'alt', type: 'string', description: 'Alternative text for the image.' },
  { name: 'size', type: 'string', description: 'Optional size marker passed as data-size.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
