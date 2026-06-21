<script setup lang="ts">
import { computed, ref } from "vue";

import LuIcon from "./LuIcon.vue";
import LuText from "./LuText.vue";
import LuButton from "./LuButton.vue";

defineOptions({ name: "LuFileUpload" });

export interface UploadedFile {
  id: string;
  name: string;
  size?: number;
  url?: string;
  type?: string;
}

const props = withDefaults(defineProps<{
  accept?: string[];
  maxSize?: number;
  maxFiles?: number;
  multiple?: boolean;
  existingFiles?: UploadedFile[];
  disabled?: boolean;
  hint?: string;
}>(), {
  multiple: false,
  existingFiles: () => [],
  disabled: false,
});

const emit = defineEmits<{
  (e: "files-selected", files: File[]): void;
  (e: "remove", file: UploadedFile): void;
}>();


const isDragActive = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function validateFiles(rawFiles: FileList | null): File[] {
  if (!rawFiles) return [];
  const files = Array.from(rawFiles);
  const valid = files.filter(f => {
    if (props.maxSize && f.size > props.maxSize) {
      console.warn(`[LuFileUpload] File "${f.name}" exceeds maxSize`);
      return false;
    }
    return true;
  });
  if (props.maxFiles) return valid.slice(0, props.maxFiles);
  return valid;
}

function onInputChange(e: Event) {
  const input = e.target as HTMLInputElement;
  const files = validateFiles(input.files);
  if (files.length) emit("files-selected", files);
  input.value = "";
}

function onDrop(e: DragEvent) {
  e.preventDefault();
  isDragActive.value = false;
  const files = validateFiles(e.dataTransfer?.files ?? null);
  if (files.length) emit("files-selected", files);
}

const acceptAttr = computed(() => props.accept?.join(","));

const skinDropzone = computed(() => `lu-file-upload__dropzone ${isDragActive.value ? 'lu-file-upload__dropzone--active' : ''}`.trim());
const skinList = computed(() => `lu-file-upload__list`);
const skinItem = computed(() => `lu-file-upload__item`);
const skinItemName = computed(() => `lu-file-upload__item-name`);
const skinItemSize = computed(() => `lu-file-upload__item-size`);
const skinItemRemove = computed(() => `lu-file-upload__item-remove`);
</script>

<template>
  <div :class="['lu-file-upload']">
    <!-- Drop zone -->
    <label
      :class="skinDropzone"
      @dragover.prevent="isDragActive = true"
      @dragleave.prevent="isDragActive = false"
      @drop="onDrop"
    >
      <input
        ref="inputRef"
        :class="['lu-file-upload__input']"
        type="file"
        :accept="acceptAttr"
        :multiple="multiple"
        :disabled="disabled"
        @change="onInputChange"
      />
      <LuIcon name="upload-cloud" :size="28" :class="['lu-file-upload__icon']" />
      <LuText variant="body">
        <slot name="label">Drop files here or <span class="lu-file-upload__browse-link">browse</span></slot>
      </LuText>
      <LuText variant="caption" v-if="hint || maxSize">
        {{ hint ?? (maxSize ? `Max ${formatBytes(maxSize)} per file` : '') }}
      </LuText>
    </label>

    <!-- File list (existing + newly selected) -->
    <div v-if="existingFiles.length" :class="skinList">
      <div v-for="file in existingFiles" :key="file.id" :class="skinItem">
        <LuIcon name="file" :size="16" :class="['lu-file-upload__item-icon']" />
        <span :class="skinItemName">{{ file.name }}</span>
        <span v-if="file.size" :class="skinItemSize">{{ formatBytes(file.size) }}</span>
        <button
          type="button"
          :class="skinItemRemove"
          :aria-label="`Remove ${file.name}`"
          @click="emit('remove', file)"
        >
          <LuIcon name="x" :size="14" />
        </button>
      </div>
    </div>
  </div>
</template>
