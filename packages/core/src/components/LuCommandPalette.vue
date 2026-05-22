<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useLumoraConfig } from "../context";
import LuText from "./LuText.vue";
import LuIcon from "./LuIcon.vue";

defineOptions({ name: "LuCommandPalette" });

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: string;
  group?: string;
  shortcut?: string[];
  action: () => void;
}

const props = withDefaults(defineProps<{
  items: CommandItem[];
  open?: boolean;
  placeholder?: string;
}>(), {
  open: false,
  placeholder: "Type a command or search…",
});

const emit = defineEmits<{
  (e: "update:open", val: boolean): void;
  (e: "select", item: CommandItem): void;
}>();

const { resolveSkin } = useLumoraConfig();

const query = ref("");
const activeIndex = ref(0);

watch(() => props.open, (val) => {
  if (val) {
    query.value = "";
    activeIndex.value = 0;
  }
});

// Filter and group
const filteredItems = computed(() => {
  if (!query.value) return props.items;
  const q = query.value.toLowerCase();
  return props.items.filter(i =>
    i.label.toLowerCase().includes(q) ||
    i.description?.toLowerCase().includes(q)
  );
});

const groups = computed(() => {
  const map: Record<string, CommandItem[]> = {};
  for (const item of filteredItems.value) {
    const g = item.group ?? "Actions";
    if (!map[g]) map[g] = [];
    map[g].push(item);
  }
  return Object.entries(map);
});

// The flat list for keyboard navigation
const flatList = computed(() => filteredItems.value);

function close() {
  emit("update:open", false);
}

function selectItem(item: CommandItem) {
  item.action();
  emit("select", item);
  close();
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeIndex.value = Math.min(activeIndex.value + 1, flatList.value.length - 1);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex.value = Math.max(activeIndex.value - 1, 0);
  } else if (e.key === "Enter") {
    const item = flatList.value[activeIndex.value];
    if (item) selectItem(item);
  } else if (e.key === "Escape") {
    close();
  }
}

function isActive(item: CommandItem): boolean {
  return flatList.value[activeIndex.value]?.id === item.id;
}

const skinOverlay = computed(() => resolveSkin("LuCommandPaletteOverlay"));
const skinDialog = computed(() => resolveSkin("LuCommandPaletteDialog"));
const skinInputWrapper = computed(() => resolveSkin("LuCommandPaletteInputWrapper"));
const skinInput = computed(() => resolveSkin("LuCommandPaletteInput"));
const skinList = computed(() => resolveSkin("LuCommandPaletteList"));
const skinGroup = computed(() => resolveSkin("LuCommandPaletteGroup"));
const skinGroupLabel = computed(() => resolveSkin("LuCommandPaletteGroupLabel"));
const skinEmpty = computed(() => resolveSkin("LuCommandPaletteEmpty"));
const skinFooter = computed(() => resolveSkin("LuCommandPaletteFooter"));
</script>

<template>
  <Teleport to="body">
    <Transition name="lu-fade">
      <div
        v-if="open"
        :class="skinOverlay"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        @click.self="close"
        @keydown="onKeydown"
      >
        <div :class="skinDialog">
          <!-- Search input -->
          <div :class="skinInputWrapper">
            <LuIcon name="search" :size="16" class="text-zinc-400 dark:text-zinc-500 shrink-0" />
            <input
              v-model="query"
              :class="skinInput"
              :placeholder="placeholder"
              autofocus
              role="combobox"
              :aria-expanded="true"
              aria-autocomplete="list"
            />
            <LuIcon
              v-if="query"
              name="x"
              :size="14"
              class="text-zinc-400 cursor-pointer hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
              @click="query = ''"
            />
          </div>

          <!-- Results list -->
          <div :class="skinList" role="listbox">
            <template v-if="groups.length">
              <div v-for="[groupName, groupItems] in groups" :key="groupName" :class="skinGroup">
                <LuText :class="skinGroupLabel">{{ groupName }}</LuText>
                <div
                  v-for="item in groupItems"
                  :key="item.id"
                  :class="resolveSkin('LuCommandPaletteItem', isActive(item) ? 'active' : undefined)"
                  role="option"
                  :aria-selected="isActive(item)"
                  @click="selectItem(item)"
                  @mouseenter="activeIndex = flatList.indexOf(item)"
                >
                  <LuIcon
                    v-if="item.icon"
                    :name="item.icon"
                    :size="15"
                    :class="resolveSkin('LuCommandPaletteItemIcon')"
                  />
                  <div class="flex flex-col flex-1 min-w-0">
                    <LuText variant="body" class="font-medium">{{ item.label }}</LuText>
                    <LuText v-if="item.description" variant="caption" class="truncate">{{ item.description }}</LuText>
                  </div>
                  <!-- Keyboard shortcut -->
                  <div v-if="item.shortcut?.length" class="flex items-center gap-0.5">
                    <kbd
                      v-for="k in item.shortcut"
                      :key="k"
                      :class="resolveSkin('LuCommandPaletteKbd')"
                    >{{ k }}</kbd>
                  </div>
                </div>
              </div>
            </template>

            <div v-else :class="skinEmpty">No results for "{{ query }}"</div>
          </div>

          <!-- Footer keyboard hint -->
          <div :class="skinFooter">
            <LuText variant="caption" class="flex items-center gap-1">
              <kbd :class="resolveSkin('LuCommandPaletteKbd')">↑↓</kbd> Navigate
            </LuText>
            <LuText variant="caption" class="flex items-center gap-1">
              <kbd :class="resolveSkin('LuCommandPaletteKbd')">↵</kbd> Select
            </LuText>
            <LuText variant="caption" class="flex items-center gap-1">
              <kbd :class="resolveSkin('LuCommandPaletteKbd')">Esc</kbd> Close
            </LuText>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
