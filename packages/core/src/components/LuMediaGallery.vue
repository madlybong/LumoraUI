<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useLumoraConfig } from "../context";
import LuIcon from "./LuIcon.vue";
import LuText from "./LuText.vue";

defineOptions({ name: "LuMediaGallery" });

export interface MediaItem {
  id: string;
  url: string;
  thumbnail?: string;
  type?: "image" | "video";
  caption?: string;
}

const props = withDefaults(defineProps<{
  items: MediaItem[];
  columns?: number;
  lightbox?: boolean;
  deletable?: boolean;
}>(), {
  columns: 4,
  lightbox: true,
  deletable: false,
});

const emit = defineEmits<{
  (e: "delete", item: MediaItem): void;
  (e: "click", item: MediaItem): void;
}>();

const { resolveSkin } = useLumoraConfig();

// ── Lightbox state ────────────────────────────────────────────────────────────
const lightboxOpen = ref(false);
const lightboxIndex = ref(0);

const lightboxItem = computed(() => props.items[lightboxIndex.value]);

function openLightbox(index: number) {
  if (!props.lightbox) return;
  lightboxIndex.value = index;
  lightboxOpen.value = true;
}

function closeLightbox() {
  lightboxOpen.value = false;
}

function prevItem() {
  lightboxIndex.value = (lightboxIndex.value - 1 + props.items.length) % props.items.length;
}

function nextItem() {
  lightboxIndex.value = (lightboxIndex.value + 1) % props.items.length;
}

function onKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return;
  if (e.key === "ArrowLeft") prevItem();
  if (e.key === "ArrowRight") nextItem();
  if (e.key === "Escape") closeLightbox();
}

onMounted(() => document.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => document.removeEventListener("keydown", onKeydown));

const skinGallery = computed(() => resolveSkin("LuMediaGallery") + ` grid-cols-${props.columns}`);
const skinItem = computed(() => resolveSkin("LuMediaGalleryItem"));
const skinItemImage = computed(() => resolveSkin("LuMediaGalleryItemImage"));
const skinItemOverlay = computed(() => resolveSkin("LuMediaGalleryItemOverlay"));
const skinLightbox = computed(() => resolveSkin("LuLightbox"));
const skinLightboxOverlay = computed(() => resolveSkin("LuLightboxOverlay"));
const skinLightboxContent = computed(() => resolveSkin("LuLightboxContent"));
const skinLightboxImage = computed(() => resolveSkin("LuLightboxImage"));
const skinLightboxNavBase = computed(() => resolveSkin("LuLightboxNav"));
const skinLightboxNavPrev = computed(() => resolveSkin("LuLightboxNav", "prev"));
const skinLightboxNavNext = computed(() => resolveSkin("LuLightboxNav", "next"));
const skinLightboxClose = computed(() => resolveSkin("LuLightboxClose"));
</script>

<template>
  <div>
    <!-- Gallery grid -->
    <div :class="skinGallery">
      <div
        v-for="(item, idx) in items"
        :key="item.id"
        :class="skinItem"
        role="button"
        :tabindex="lightbox ? 0 : -1"
        :aria-label="`View ${item.caption ?? item.id}`"
        @click="openLightbox(idx); emit('click', item)"
        @keydown.enter="openLightbox(idx)"
      >
        <img
          :src="item.thumbnail ?? item.url"
          :alt="item.caption ?? ''"
          :class="skinItemImage"
          loading="lazy"
        />
        <div :class="skinItemOverlay">
          <LuIcon v-if="lightbox" name="expand" :size="18" class="text-white" />
          <button
            v-if="deletable"
            type="button"
            class="flex items-center justify-center w-7 h-7 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition-colors"
            :aria-label="`Delete ${item.caption ?? item.id}`"
            @click.stop="emit('delete', item)"
          >
            <LuIcon name="trash-2" :size="14" />
          </button>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lu-fade">
        <div
          v-if="lightboxOpen"
          :class="skinLightbox"
          role="dialog"
          aria-modal="true"
          @keydown="onKeydown"
          tabindex="-1"
        >
          <div :class="skinLightboxOverlay" @click="closeLightbox" />

          <div :class="skinLightboxContent">
            <img
              :src="lightboxItem?.url"
              :alt="lightboxItem?.caption ?? ''"
              :class="skinLightboxImage"
            />
          </div>

          <!-- Nav buttons -->
          <button
            v-if="items.length > 1"
            type="button"
            :class="[skinLightboxNavBase, skinLightboxNavPrev]"
            aria-label="Previous"
            @click="prevItem"
          >
            <LuIcon name="chevron-left" :size="20" />
          </button>

          <button
            v-if="items.length > 1"
            type="button"
            :class="[skinLightboxNavBase, skinLightboxNavNext]"
            aria-label="Next"
            @click="nextItem"
          >
            <LuIcon name="chevron-right" :size="20" />
          </button>

          <!-- Close -->
          <button
            type="button"
            :class="skinLightboxClose"
            aria-label="Close lightbox"
            @click="closeLightbox"
          >
            <LuIcon name="x" :size="18" />
          </button>

          <!-- Caption -->
          <LuText
            v-if="lightboxItem?.caption"
            :class="resolveSkin('LuLightboxCaption')"
          >
            {{ lightboxItem.caption }}
          </LuText>

          <!-- Counter -->
          <LuText
            class="absolute top-4 left-4 text-white/70 text-xs"
          >
            {{ lightboxIndex + 1 }} / {{ items.length }}
          </LuText>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
