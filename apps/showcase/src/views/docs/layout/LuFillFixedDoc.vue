<template>
  <LuPageHeader title="LuFill & LuFixed" description="Layout modifiers that dictate how elements consume space within a Flex or Grid container.
      <code>LuFill</code> expands to consume available space. <code>LuFixed</code> prevents an element from shrinking." />

  <LuCodeBlock variant="preview" 
    title="Usage in a Stack" 
    description="A common pattern is a fixed sidebar and a filling content area."
    :code="exampleCode"
  >
    <template #preview>
      <PreviewFrame width="500px" height="200px" >
        <LuStack >
          <LuFixed >
            Fixed (128px)
          </LuFixed>
          <LuFill >
            Fill (Remaining)
          </LuFill>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuStack, LuFill, LuFixed, LuPageHeader, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const exampleCode = `<LuStack >
  <LuFixed >
    Fixed (128px)
  </LuFixed>
  <LuFill >
    Fill (Remaining)
  </LuFill>
</LuStack>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
