<template>
  <LuPageHeader title="Embedded POS Suite Recipe" description="POS Layout components targeting kiosk and touch-only screens." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="POS Layout combining Scanner, Items, Summary, and Payment using named slots."
    :code="basicCode"
  >
    <template #preview>
      <LuStack class="h-[600px] w-full relative border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden" pad="0">
        <LuEmbeddedPOSLayout>
          <template #scanner>
            <LuEmbeddedBarcodeInput />
          </template>
          <template #items>
            <LuEmbeddedPOSItemList :items="items" />
          </template>
          <template #summary>
            <LuEmbeddedPOSSummary :lines="[]" :subtotal="100" :tax="10" :total="110" />
          </template>
          <template #payment>
            <LuEmbeddedPOSPayment :methods="[{ id: 'cash', label: 'Cash' }, { id: 'card', label: 'Card' }]" />
          </template>
        </LuEmbeddedPOSLayout>
      </LuStack>
    </template>
  </LuCodeBlock>

</template>

<script setup lang="ts">
import LuEmbeddedPOSLayout from '../../../recipes/pos/LuEmbeddedPOSLayout.vue';
import LuEmbeddedBarcodeInput from '../../../recipes/pos/LuEmbeddedBarcodeInput.vue';
import LuEmbeddedPOSItemList from '../../../recipes/pos/LuEmbeddedPOSItemList.vue';
import LuEmbeddedPOSSummary from '../../../recipes/pos/LuEmbeddedPOSSummary.vue';
import LuEmbeddedPOSPayment from '../../../recipes/pos/LuEmbeddedPOSPayment.vue';
import { LuStack, LuCodeBlock } from '@astrake/lumora-ui';

const items = [
  { id: '1', name: 'Item A', qty: 1, price: 50 },
  { id: '2', name: 'Item B', qty: 2, price: 25 },
];

const basicCode = `<template>
  <LuEmbeddedPOSLayout>
    <template #scanner>
      <LuEmbeddedBarcodeInput />
    </template>
    <template #items>
      <LuEmbeddedPOSItemList :items="items" />
    </template>
    <template #summary>
      <LuEmbeddedPOSSummary :lines="[]" :subtotal="100" :tax="10" :total="110" />
    </template>
    <template #payment>
      <LuEmbeddedPOSPayment :methods="[{ id: 'cash', label: 'Cash' }, { id: 'card', label: 'Card' }]" />
    </template>
  </LuEmbeddedPOSLayout>
</template>`;
</script>
