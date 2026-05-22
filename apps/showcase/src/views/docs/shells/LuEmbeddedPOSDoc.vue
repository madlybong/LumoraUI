<template>
  <LuPageHeader title="LuEmbeddedPOS Suite" description="POS Layout components targeting kiosk and touch-only screens." />

  <LuCodeBlock variant="preview" 
    title="Basic Usage" 
    description="POS Layout combining Scanner, Items, Summary, and Payment."
    :code="basicCode"
  >
    <template #preview>
      <div style="height: 600px; width: 100%; position: relative; border: 1px solid var(--lu-color-border);">
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
      </div>
    </template>
  </LuCodeBlock>

</template>

<script setup lang="ts">
import { 
  LuEmbeddedPOSLayout, 
  LuEmbeddedBarcodeInput, 
  LuEmbeddedPOSItemList, 
  LuEmbeddedPOSSummary, 
  LuEmbeddedPOSPayment,
  LuPageHeader, 
  LuCodeBlock 
} from '@astrake/lumora-ui';

const items = [
  { id: '1', name: 'Item A', qty: 1, price: 50 },
  { id: '2', name: 'Item B', qty: 2, price: 25 },
];

const basicCode = `<template>
  <div style="height: 600px; width: 100%; position: relative;">
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
  </div>
</template>`;
</script>
