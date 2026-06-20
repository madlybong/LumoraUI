# Showcase App Documentation — `@astrake/lumora-ui`

The showcase application at `apps/showcase` is the reference implementation demonstrating the library's features. It serves both as a live preview platform during development and as interactive documentation for developers consuming the library.

---

## 1. Directory Structure

```
apps/showcase/src/
  components/                 ← Showcase-only helper components (e.g. PropTable.vue)
  router/                     ← Route mapping for components, shells, and layouts
  views/                      ← Primary views
    HomeView.vue              ← Standard welcome landing page
    recipes/                  ← Full-page complex compositions (POS, Dashboard)
    sc-recipes.css            ← Showcase-exclusive CSS BEM classes
    docs/
      GettingStartedView.vue  ← Overview and installation guidelines
      components/             ← Interactive view pages demonstrating individual Lu* controls
      layout/                 ← Demos for layout containers (LuStack, LuGrid, etc.)
      shells/                 ← Surface shell previews (Desktop, Mobile, Embedded shells)
```

---

## 2. Strict Showcase Rule: Zero-Raw-HTML Adherence

When authoring pages within the showcase app, you must follow the **Zero-Raw-HTML Adherence Rule**:
- **No Unstyled Divs**: Do not compose layout wraps using `<div class="some-custom-class">` or `<div style="display: flex;">`.
- **Use Primitives Only**: Design layout arrangements using framework elements exclusively (`LuStack`, `LuGrid`, `LuCard`, `LuDivider`, `LuText`).
  - **IMPORTANT WARNING**: When using `LuStack` or `LuGrid` purely as structural elements (e.g. wrapper divs, flex containers for alignment) without wanting intrinsic component spacing, you MUST specify `pad="0"`. Failure to do so will cause severe "blowfish" layout inflation because these layout primitives carry default bounding padding.
- **Showcase CSS Namespace**: Recipe components may use custom BEM classes, but they MUST be prefixed with `sc-` (e.g. `sc-dashboard-header`), never `lu-`.
- **Why**: The showcase app is a real-world validation of the library's completeness. If we cannot build the showcase app entirely using our own layout primitives, then the layout primitives are not complete.

---

## 3. Showcase CSS Namespace (`sc-`)

While standard documentation pages should use `Lu*` primitives exclusively, `recipes/` components often require custom composite styles.
- **Prefix Rule**: Any CSS class exclusive to the showcase app MUST use the `sc-` prefix.
- **Location**: Define these classes in `apps/showcase/src/sc-recipes.css`.
- **Exclusivity**: Never use the `lu-` prefix in showcase custom CSS; it is reserved strictly for the core `@astrake/lumora-ui` package.

---

## 4. Creating a New Component Demo

To add a new component view (e.g. `LuBadgeDoc.vue`), follow this guide:

### Step 1 — Create the File
Create the documentation component view inside `apps/showcase/src/views/docs/components/`:
```vue
<template>
  <LuPageHeader title="LuBadge" description="A small visual badge for badges and count numbers." />

  <!-- 1. Showcase usage inside a LuCodeBlock preview -->
  <LuCodeBlock variant="preview" 
    title="Variants" 
    description="Badges represent status alerts or notifications using semantic presets."
    :code="variantsCode"
  >
    <template #preview>
      <LuStack>
        <LuBadge variant="primary">New</LuBadge>
        <LuBadge variant="success">Completed</LuBadge>
      </LuStack>
    </template>
  </LuCodeBlock>

  <!-- 2. Detail props using PropTable -->
  <PropTable :props-list="propsData" />
</template>

<script setup lang="ts">
import { LuBadge, LuPageHeader, LuStack, LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const variantsCode = `<template>
  <LuBadge variant="primary">New</LuBadge>
  <LuBadge variant="success">Completed</LuBadge>
</template>`;

const propsData = [
  { name: 'variant', type: 'string', description: 'The variant mapping key declared inside skin definitions.' },
];
</script>
```

### Step 2 — Route Registration
Open `apps/showcase/src/router/index.ts` and add your view mapping under the appropriate docs group.

---

## 5. Running the Showcase App

To test showcase updates locally:
1. Fire up the Vite development server in the root workspace directory:
   ```bash
   bun run dev
   ```
2. Open `http://localhost:5173` (or local port allocated by Vite) in your browser to verify rendering.
3. Validate that both dark mode and light mode render correctly using the top-bar theme selectors.
