<template>
  <LuPageHeader title="LuCard" description="A flexible container component for grouping content with structured sub-elements." />

  <LuCodeBlock variant="preview" 
    title="Basic Card" 
    description="Use lu-card__header, lu-card__body, and lu-card__footer to structure your content."
    :code="basicCode"
  >
    <template #preview>
      <LuCard variant="default" class="w-full max-w-sm">
        <div class="lu-card__header">
          <h3 class="lu-card__title">Card Title</h3>
          <p class="lu-card__subtitle">Card subtitle text</p>
        </div>
        <div class="lu-card__body">
          <LuText as="p" variant="body">This is the card body content. It has padding and acts as the primary content area.</LuText>
        </div>
        <div class="lu-card__footer">
          <LuStack direction="horizontal" class="justify-end">
            <LuButton variant="ghost">Cancel</LuButton>
            <LuButton variant="primary">Confirm</LuButton>
          </LuStack>
        </div>
      </LuCard>
    </template>
  </LuCodeBlock>

  <LuCodeBlock variant="preview" 
    title="Media Card" 
    description="Use lu-card__media to display border-radius-clipped images at the top of a card."
    :code="mediaCode"
    class="mt-8"
  >
    <template #preview>
      <LuCard variant="default" class="w-full max-w-sm">
        <div class="lu-card__media">
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=300&fit=crop" alt="Gradient background" />
        </div>
        <div class="lu-card__header">
          <h3 class="lu-card__title">Vibrant Gradients</h3>
        </div>
        <div class="lu-card__body pt-0">
          <LuText as="p" variant="body">Explore the new gradient pack available in your dashboard.</LuText>
        </div>
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
        <div class="lu-card__header">
          <div class="lu-card__header-content">
            <h3 class="lu-card__title">Team Members</h3>
            <LuButton variant="ghost" size="sm">Invite</LuButton>
          </div>
        </div>
        <hr class="lu-card__divider" />
        <div class="lu-card__body p-0">
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
        </div>
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
        <div class="lu-card__body flex flex-col items-center">
          <div class="lu-avatar lu-avatar--xl mb-3">
            <span class="lu-avatar__fallback">JD</span>
          </div>
          <h3 class="lu-card__title mb-1">Jane Doe</h3>
          <p class="lu-card__subtitle mb-4">Senior Designer</p>
          <LuStack direction="horizontal" class="gap-2">
            <span class="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-200">Design</span>
            <span class="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-200">Product</span>
          </LuStack>
        </div>
        <hr class="lu-card__divider" />
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
      <LuStack class="w-full max-w-2xl grid grid-cols-2 gap-4">
        <LuCard variant="default" class="p-4"><LuText class="font-semibold">Default</LuText><LuText variant="caption">With shadow and border</LuText></LuCard>
        <LuCard variant="flat" class="p-4"><LuText class="font-semibold">Flat</LuText><LuText variant="caption">Border, no shadow</LuText></LuCard>
        <LuCard variant="surface" class="p-4"><LuText class="font-semibold">Surface</LuText><LuText variant="caption">No border, sunken bg</LuText></LuCard>
        <LuCard variant="panel" class="p-4"><LuText class="font-semibold">Panel</LuText><LuText variant="caption">Hover to elevate</LuText></LuCard>
      </LuStack>
    </template>
  </LuCodeBlock>

  <LuStack direction="vertical" class="mt-8">
    <LuText as="h2" variant="section-title">Props</LuText>
    <PropTable :props-list="propsData" />
  </LuStack>
</template>

<script setup lang="ts">
import { LuStack, LuText, LuCard, LuButton, LuCodeBlock } from '@astrake/lumora-ui';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';
import PropTable from '../../../components/PropTable.vue';

const basicCode = `<template>
  <LuCard>
    <div class="lu-card__header">
      <h3 class="lu-card__title">Card Title</h3>
      <p class="lu-card__subtitle">Card subtitle text</p>
    </div>
    <div class="lu-card__body">
      <p>Body content...</p>
    </div>
    <div class="lu-card__footer">
      <LuButton>Action</LuButton>
    </div>
  </LuCard>
</template>`;

const mediaCode = `<template>
  <LuCard>
    <div class="lu-card__media">
      <img src="image.jpg" alt="Description" />
    </div>
    <div class="lu-card__header">
      <h3 class="lu-card__title">Vibrant Gradients</h3>
    </div>
    <div class="lu-card__body pt-0">
      <p>Body content...</p>
    </div>
  </LuCard>
</template>`;

const listCode = `<template>
  <LuCard>
    <div class="lu-card__header">
      <div class="lu-card__header-content">
        <h3 class="lu-card__title">Team Members</h3>
        <LuButton size="sm">Invite</LuButton>
      </div>
    </div>
    <hr class="lu-card__divider" />
    <div class="lu-card__body p-0">
      <!-- list items -->
    </div>
  </LuCard>
</template>`;

const profileCode = `<template>
  <LuCard class="text-center">
    <div class="lu-card__body">
      <!-- avatar and name -->
    </div>
    <hr class="lu-card__divider" />
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
