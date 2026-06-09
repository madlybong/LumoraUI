<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "LuEntityCard" });

const skinCard = computed(() => `sc-entity-card`);
const skinHeader = computed(() => `sc-entity-card__header`);
const skinAvatar = computed(() => `sc-entity-card__avatar`);
const skinMeta = computed(() => `sc-entity-card__meta`);
const skinStats = computed(() => `sc-entity-card__stats`);
const skinActions = computed(() => `sc-entity-card__actions`);
const skinContent = computed(() => `sc-entity-card__content`);
</script>

<template>
  <div :class="skinCard">
    <!-- Header: avatar + meta -->
    <div :class="skinHeader">
      <div v-if="$slots.avatar" :class="skinAvatar">
        <slot name="avatar" />
      </div>
      <div :class="skinMeta">
        <slot name="meta" />
      </div>
    </div>

    <!-- Stats grid -->
    <div v-if="$slots.stats" :class="skinStats">
      <slot name="stats" />
    </div>

    <!-- Actions bar -->
    <div v-if="$slots.actions" :class="skinActions">
      <slot name="actions" />
    </div>

    <!-- Main content (tabs, tables, etc.) -->
    <div v-if="$slots.default" :class="skinContent">
      <slot />
    </div>
  </div>
</template>
