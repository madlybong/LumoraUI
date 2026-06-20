<template>
  <LuPageHeader title="LuCard" description="A flexible container component for grouping content with structured sub-elements." />

  <LuCodeBlock variant="preview" 
    title="Basic Card" 
    description="Use LuCardHeader, LuCardBody, and LuCardFooter to structure your content."
    :code="basicCode"
  >
    <template #preview>
      <LuCard variant="default" class="w-full max-w-sm">
        <LuCardHeader>
          <LuCardTitle>Card Title</LuCardTitle>
          <LuCardSubtitle>Card subtitle text</LuCardSubtitle>
        </LuCardHeader>
        <LuCardBody>
          <LuText as="p" variant="body">This is the card body content. It has padding and acts as the primary content area.</LuText>
        </LuCardBody>
        <LuCardFooter>
          <LuStack direction="horizontal" class="justify-end" pad="0">
            <LuButton variant="ghost">Cancel</LuButton>
            <LuButton variant="primary">Confirm</LuButton>
          </LuStack>
        </LuCardFooter>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Media Card" 
    description="Use LuCardMedia to display border-radius-clipped images at the top of a card."
    :code="mediaCode"
    class="mt-8"
  >
    <template #preview>
      <LuCard variant="default" class="w-full max-w-sm">
        <LuCardMedia>
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=300&fit=crop" alt="Gradient background" />
        </LuCardMedia>
        <LuCardHeader>
          <LuCardTitle>Vibrant Gradients</LuCardTitle>
        </LuCardHeader>
        <LuCardBody class="pt-0">
          <LuText as="p" variant="body">Explore the new gradient pack available in your dashboard.</LuText>
        </LuCardBody>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="List Card" 
    description="Cards work well with list items and dividers."
    :code="listCode"
    class="mt-8"
  >
    <template #preview>
      <LuCard variant="default" class="w-full max-w-sm">
        <LuCardHeader>
          <div class="lu-card__header-content">
            <LuCardTitle>Team Members</LuCardTitle>
            <LuButton variant="ghost" size="sm">Invite</LuButton>
          </div>
        </LuCardHeader>
        <LuDivider />
        <LuCardBody class="p-0">
          <div class="p-3 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <LuText variant="body" class="font-medium">Alice Smith</LuText>
            <LuText variant="caption">Admin</LuText>
          </div>
          <div class="p-3 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <LuText variant="body" class="font-medium">Bob Jones</LuText>
            <LuText variant="caption">Editor</LuText>
          </div>
          <div class="p-3 flex justify-between items-center">
            <LuText variant="body" class="font-medium">Charlie Brown</LuText>
            <LuText variant="caption">Viewer</LuText>
          </div>
        </LuCardBody>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Profile Card" 
    description="A complex composition showing avatar and stats."
    :code="profileCode"
    class="mt-8"
  >
    <template #preview>
      <LuCard variant="default" class="w-full max-w-sm text-center">
        <LuCardBody class="flex flex-col items-center">
          <div class="lu-avatar lu-avatar--xl mb-3">
            <span class="lu-avatar__fallback">JD</span>
          </div>
          <LuCardTitle class="mb-1">Jane Doe</LuCardTitle>
          <LuCardSubtitle class="mb-4">Senior Designer</LuCardSubtitle>
          <LuStack direction="horizontal" class="gap-2" pad="0">
            <span class="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-200">Design</span>
            <span class="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-200">Product</span>
          </LuStack>
        </LuCardBody>
        <LuDivider />
        <div class="grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800">
          <div class="p-3">
            <p class="text-xs text-zinc-500">Followers</p>
            <p class="font-semibold text-zinc-900 dark:text-white">1,234</p>
          </div>
          <div class="p-3">
            <p class="text-xs text-zinc-500">Following</p>
            <p class="font-semibold text-zinc-900 dark:text-white">567</p>
          </div>
        </div>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Variants" 
    description="Cards support default, flat, surface, and panel variants via the Skin Map."
    :code="variantsCode"
    class="mt-8"
  >
    <template #preview>
      <div class="w-full max-w-2xl grid grid-cols-2 gap-4">
        <LuCard variant="default">
          <LuCardBody>
            <LuText class="font-semibold block">Default</LuText>
            <LuText variant="caption" class="block">With shadow and border</LuText>
          </LuCardBody>
        </LuCard>
        <LuCard variant="flat">
          <LuCardBody>
            <LuText class="font-semibold block">Flat</LuText>
            <LuText variant="caption" class="block">Border, no shadow</LuText>
          </LuCardBody>
        </LuCard>
        <LuCard variant="surface">
          <LuCardBody>
            <LuText class="font-semibold block">Surface</LuText>
            <LuText variant="caption" class="block">No border, sunken bg</LuText>
          </LuCardBody>
        </LuCard>
        <LuCard variant="panel">
          <LuCardBody>
            <LuText class="font-semibold block">Panel</LuText>
            <LuText variant="caption" class="block">Hover to elevate</LuText>
          </LuCardBody>
        </LuCard>
      </div>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8" pad="0">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuStack, LuText, LuCard, LuCardHeader, LuCardTitle, LuCardSubtitle, LuCardBody, LuCardFooter, LuCardMedia, LuButton, LuCodeBlock, LuDivider } from '@astrake/lumora-ui';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';
import PropTable from '../../../components/PropTable.vue';

const basicCode = `<template>
  <LuCard>
    <LuCardHeader>
      <LuCardTitle>Card Title</LuCardTitle>
      <LuCardSubtitle>Card subtitle text</LuCardSubtitle>
    </LuCardHeader>
    <LuCardBody>
      <p>Body content...</p>
    </LuCardBody>
    <LuCardFooter>
      <LuButton>Action</LuButton>
    </LuCardFooter>
  </LuCard>
</template>`;

const mediaCode = `<template>
  <LuCard>
    <LuCardMedia>
      <img src="image.jpg" alt="Description" />
    </LuCardMedia>
    <LuCardHeader>
      <LuCardTitle>Vibrant Gradients</LuCardTitle>
    </LuCardHeader>
    <LuCardBody class="pt-0">
      <p>Body content...</p>
    </LuCardBody>
  </LuCard>
</template>`;

const listCode = `<template>
  <LuCard>
    <LuCardHeader>
      <div class="flex justify-between items-center">
        <LuCardTitle>Team Members</LuCardTitle>
        <LuButton size="sm">Invite</LuButton>
      </div>
    </LuCardHeader>
    <LuDivider />
    <LuCardBody class="p-0">
      <!-- list items -->
    </LuCardBody>
  </LuCard>
</template>`;

const profileCode = `<template>
  <LuCard class="text-center">
    <LuCardBody>
      <!-- avatar and name -->
    </LuCardBody>
    <LuDivider />
    <div class="grid grid-cols-2">
      <!-- stats -->
    </div>
  </LuCard>
</template>`;

const variantsCode = `<template>
  <LuCard variant="default">...</LuCard>
  <LuCard variant="flat">...</LuCard>
  <LuCard variant="surface">...</LuCard>
  <LuCard variant="panel">...</LuCard>
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant key mapped in your skin configuration.' },
  { name: 'as', type: 'string', default: '"div"', description: 'The HTML tag to render as.' },
];
</script>
