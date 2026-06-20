<template>
  <LuPageHeader title="LuFill & LuFixed" description="Layout modifiers that dictate how elements consume space within a Flex container. LuFill expands to consume available space. LuFixed prevents an element from shrinking and accepts explicit dimensions." />

  <LuCodeBlock variant="preview" 
    title="Sidebar + Content Layout" 
    description="A classic page layout where LuFixed defines a sidebar with a declared width, and LuFill houses scrolling content."
    :code="exampleCode"
  >
    <template #preview>
      <PreviewFrame width="100%" height="300px" >
        <LuStack direction="horizontal" class="sc-layout-demo" style="width: 100%; height: 100%;">
          <!-- Fixed 200px sidebar -->
          <LuFixed :width="200" class="sc-layout-demo-nav">
            <LuStack direction="vertical" gap="1" style="width: 100%;">
              <LuButton v-for="item in navItems" :key="item" variant="ghost" style="justify-content: flex-start;">
                {{ item }}
              </LuButton>
            </LuStack>
          </LuFixed>
          
          <!-- Fill area with scrolling cards -->
          <LuFill style="padding: var(--lu-space-4); height: 100%;">
            <LuScroll>
              <LuStack direction="vertical" gap="3" style="width: 100%;">
                <LuCard v-for="i in 6" :key="i">
                  <LuStack direction="vertical" gap="1">
                    <LuText style="font-weight: 600;">Main Content Section {{ i }}</LuText>
                    <LuText variant="muted">This area uses LuFill to expand and fill all remaining horizontal space, hosting a LuScroll container.</LuText>
                  </LuStack>
                </LuCard>
              </LuStack>
            </LuScroll>
          </LuFill>
        </LuStack>
      </PreviewFrame>
    </template>
  </LuCodeBlock>

  <PropTable title="LuFixed Props" :props-list="fixedProps" />
  <PropTable title="LuFill Props" :props-list="fillProps" />
</template>

<script setup lang="ts">
import { LuStack, LuFill, LuFixed, LuText, LuCodeBlock, LuButton, LuScroll, LuCard } from '@astrake/lumora-ui';
import PreviewFrame from '../../../components/PreviewFrame.vue';
import PropTable from '../../../components/PropTable.vue';

const navItems = ['Dashboard', 'Inbox', 'Calendar', 'Analytics', 'Settings'];

const exampleCode = `<LuStack direction="horizontal">
  <!-- LuFixed with dimension prop -->
  <LuFixed :width="200">
    <LuStack direction="vertical" gap="1">
      <LuButton v-for="item in navItems" :key="item" variant="ghost">
        {{ item }}
      </LuButton>
    </LuStack>
  </LuFixed>
  
  <!-- LuFill occupying remaining space -->
  <LuFill>
    <LuScroll>
      <LuStack direction="vertical" gap="3">
        <LuCard v-for="i in 6" :key="i">
          <!-- Content -->
        </LuCard>
      </LuStack>
    </LuScroll>
  </LuFill>
</LuStack>`;

const fixedProps = [
  { name: 'width', type: 'string | number', description: 'Fixed width. Numbers resolve to px, strings (e.g. "20rem") pass through verbatim. Sets CSS width and flex-basis.' },
  { name: 'height', type: 'string | number', description: 'Fixed height. Numbers resolve to px, strings (e.g. "4rem") pass through verbatim. Sets CSS height and flex-basis.' },
  { name: 'minWidth', type: 'string | number', description: 'Minimum width floor value.' },
  { name: 'minHeight', type: 'string | number', description: 'Minimum height floor value.' },
  { name: 'basis', type: 'string', description: 'Explicit flex-basis override.' },
  { name: 'as', type: 'string', default: '"div"', description: 'HTML element to render as.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];

const fillProps = [
  { name: 'as', type: 'string', default: '"div"', description: 'HTML element to render as.' },
  { name: 'variant', type: 'string', description: 'Skin variant key.' },
];
</script>
