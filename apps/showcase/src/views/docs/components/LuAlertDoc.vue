<template>
  <LuCodeBlock variant="preview"
    title="Alert"
    description="Displays a callout for user attention."
    :code="code"
  >
    <template #preview>
      <LuCard class="w-full max-w-lg" variant="panel">
        <LuStack direction="vertical" gap="4">
          <LuAlert icon="info">
            <LuText variant="label">Info Alert</LuText>
            <LuText>This is an information message.</LuText>
          </LuAlert>

          <LuAlert variant="destructive" icon="alert-triangle">
            <LuText variant="label">Destructive Alert</LuText>
            <LuText>There was a problem with your request.</LuText>
          </LuAlert>
          
          <LuAlert variant="success" icon="check-circle">
            <LuText variant="label">Success Alert</LuText>
            <LuText>Your changes have been saved successfully.</LuText>
            <template #action>
              <LuButton variant="ghost">View</LuButton>
            </template>
          </LuAlert>
        </LuStack>
      </LuCard>
    </template>
  </LuCodeBlock>

  <PropTable :propsList="propsList" class="mt-8" />
</template>

<script setup lang="ts">
import { LuCard, LuStack, LuText, LuAlert, LuButton , LuCodeBlock } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const code = `<template>
  <LuAlert variant="destructive" icon="alert-triangle">
    <LuText variant="label">Destructive Alert</LuText>
    <LuText>There was a problem with your request.</LuText>
  </LuAlert>
</template>`;

const propsList = [
  { name: 'variant', type: 'string', default: 'default', description: 'The variant to use from the skin map (e.g., success, warning, destructive, info).' },
  { name: 'icon', type: 'string', description: 'The name of the icon to display. Alternatively, use the #icon slot.' },
];
</script>
