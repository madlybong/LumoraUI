<template>
  <LuStack direction="vertical" align="center" justify="center" style="height: 100vh;">
    <LuStack direction="vertical" align="center" gap="4">
      <LuIcon name="alert-triangle" :size="48" />
      <LuText as="h1" variant="default">Page not found</LuText>
      <LuText as="p" variant="default">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </LuText>
      <LuLink to="/docs" variant="default">
        Go to Documentation
      </LuLink>
    </LuStack>
  </LuStack>
</template>

<script setup lang="ts">
import { LuIcon, LuStack, LuText, LuLink } from '@astrake/lumora-ui';
</script>
