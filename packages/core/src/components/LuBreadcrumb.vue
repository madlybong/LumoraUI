<template>
  <nav aria-label="breadcrumb">
    <ol :class="['lu-breadcrumb', variant && `lu-breadcrumb--${variant}`]">
      <li v-for="(item, index) in items" :key="index" :class="['lu-breadcrumb__item']">
        <LuLink
          v-if="item.href || item.to"
          :href="item.href"
          :to="item.to"
          :variant="item.current ? 'nav-active' : 'nav'"
          :aria-current="item.current ? 'page' : undefined"
          :class="['lu-breadcrumb__link']"
        >
          <LuIcon v-if="item.icon" :name="item.icon" class="lu-breadcrumb__separator-icon" />
          {{ item.label }}
        </LuLink>
        <span
          v-else
          :class="['lu-breadcrumb__page']"
          :aria-current="item.current ? 'page' : undefined"
        >
          <LuIcon v-if="item.icon" :name="item.icon" class="lu-breadcrumb__separator-icon" />
          {{ item.label }}
        </span>
        <LuIcon
          v-if="index < items.length - 1"
          :name="separatorIcon"
          :class="['lu-breadcrumb__separator']"
        />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
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


</script>
