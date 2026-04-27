<template>
  <LuPageHeader title="LuScroll" description="A container that handles overflow by providing a scrollable area." />

  <LuCodeBlock variant="preview" 
    title="Vertical Scroll" 
    description="The default variant provides vertical scrolling."
    :code="verticalCode"
  >
    <template #preview>
      <PreviewFrame width="300px" height="200px" >
        <LuScroll>
          <LuStack direction="vertical" gap="2" class="p-4">
            <LuStack v-for="i in 10" :key="i" class="p-4 border border-gray-200 dark:border-gray-800 rounded-lg shrink-0">
              Item {{ i }}
            </LuStack>
          </LuStack>
        </LuScroll>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Horizontal Scroll" 
    description="Use variant='horizontal' for horizontal scrolling."
    :code="horizontalCode"
  >
    <template #preview>
      <PreviewFrame width="300px" height="150px" >
        <LuScroll variant="horizontal">
          <LuStack direction="horizontal" gap="4" class="p-4">
            <LuStack v-for="i in 10" :key="i" class="p-8 border border-gray-200 dark:border-gray-800 rounded-lg shrink-0 w-32 items-center justify-center">
              Card {{ i }}
            </LuStack>
          </LuStack>
        </LuScroll>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" >
    <LuText as="h2" variant="default" >Props API</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuScroll, LuPageHeader, LuStack, LuText , LuCodeBlock } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const verticalCode = `<LuScroll>
  <LuStack direction="vertical" gap="2" class="p-4">
    <LuStack v-for="i in 10" :key="i" class="p-4 border border-gray-200 rounded-lg shrink-0">
      Item {{ i }}
    </LuStack>
  </LuStack>
</LuScroll>`;

const horizontalCode = `<LuScroll variant="horizontal">
  <LuStack direction="horizontal" gap="4" class="p-4">
    <LuStack v-for="i in 10" :key="i" class="p-8 border border-gray-200 rounded-lg shrink-0 w-32 items-center justify-center">
      Card {{ i }}
    </LuStack>
  </LuStack>
</LuScroll>`;

const propsData = [
  { name: 'variant', type: '"default" | "horizontal"', default: '"default"', description: 'The scroll direction variant.' },
];
</script>
