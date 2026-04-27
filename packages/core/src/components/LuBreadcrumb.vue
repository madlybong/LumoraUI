<template>
  <nav aria-label="breadcrumb">
    <ol :class="resolvedSkin">
      <li v-for="(item, index) in items" :key="index" :class="resolvedItemSkin">
        <LuLink
          v-if="item.href || item.to"
          :href="item.href"
          :to="item.to"
          :variant="item.current ? 'nav-active' : 'nav'"
          :aria-current="item.current ? 'page' : undefined"
          :class="resolvedLinkSkin"
        >
          <LuIcon v-if="item.icon" :name="item.icon" class="mr-2 h-4 w-4" />
          {{ item.label }}
        </LuLink>
        <span
          v-else
          :class="resolvedPageSkin"
          :aria-current="item.current ? 'page' : undefined"
        >
          <LuIcon v-if="item.icon" :name="item.icon" class="mr-2 h-4 w-4" />
          {{ item.label }}
        </span>
        <LuIcon
          v-if="index < items.length - 1"
          :name="separatorIcon"
          :class="resolvedSeparatorSkin"
        />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLumoraConfig } from "../context";
import LuLink from "./LuLink.vue";
import LuIcon from "./LuIcon.vue";

export interface LuBreadcrumbItem {
  label: string;
  href?: string;
  to?: any;
  current?: boolean;
  icon?: string;
}

const props = withDefaults(defineProps<{
  items: LuBreadcrumbItem[];
  variant?: string;
  separatorIcon?: string;
}>(), {
  separatorIcon: 'chevron-right'
});

const { resolveSkin } = useLumoraConfig();

const resolvedSkin = computed(() => resolveSkin("LuBreadcrumb", props.variant));
const resolvedItemSkin = computed(() => resolveSkin("LuBreadcrumbItem", props.variant));
const resolvedLinkSkin = computed(() => resolveSkin("LuBreadcrumbLink", props.variant));
const resolvedPageSkin = computed(() => resolveSkin("LuBreadcrumbPage", props.variant));
const resolvedSeparatorSkin = computed(() => resolveSkin("LuBreadcrumbSeparator", props.variant));
</script>
