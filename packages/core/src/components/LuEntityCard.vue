<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";

defineOptions({ name: "LuEntityCard" });

const { resolveSkin } = useLumoraConfig();

const skinCard = computed(() => resolveSkin("LuEntityCard"));
const skinHeader = computed(() => resolveSkin("LuEntityCardHeader"));
const skinAvatar = computed(() => resolveSkin("LuEntityCardAvatar"));
const skinMeta = computed(() => resolveSkin("LuEntityCardMeta"));
const skinStats = computed(() => resolveSkin("LuEntityCardStats"));
const skinActions = computed(() => resolveSkin("LuEntityCardActions"));
const skinContent = computed(() => resolveSkin("LuEntityCardContent"));
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
