<script setup lang="ts">
import { computed, ref, nextTick } from "vue";
import { LuIcon } from '@astrake/lumora-ui';

defineOptions({ name: "LuEmbeddedBarcodeInput" });

const props = withDefaults(defineProps<{
  modelValue?: string;
  placeholder?: string;
  scanning?: boolean;
  autofocus?: boolean;
  clearOnSubmit?: boolean;
}>(), {
  modelValue: "",
  placeholder: "Scan barcode or enter SKU…",
  scanning: false,
  autofocus: true,
  clearOnSubmit: true,
});

const emit = defineEmits<{
  (e: "update:modelValue", val: string): void;
  (e: "submit", val: string): void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    const val = props.modelValue.trim();
    if (val) {
      emit("submit", val);
      if (props.clearOnSubmit) {
        emit("update:modelValue", "");
      }
    }
  }
}

function focus() {
  nextTick(() => inputRef.value?.focus());
}

defineExpose({ focus });

const skinField = computed(() =>
  `sc-embedded-barcode-input__field ${props.scanning ? "sc-embedded-barcode-input__field--scanning" : ""}`.trim()
);
const skinInner = computed(() => `sc-embedded-barcode-input__inner`);
</script>

<template>
  <div class="sc-embedded-barcode-input">
    <div :class="skinField">
      <LuIcon name="scan-line" :size="18" class="shrink-0 text-zinc-400 dark:text-zinc-500" />
      <input
        ref="inputRef"
        :value="modelValue"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :class="skinInner"
        type="text"
        inputmode="numeric"
        autocomplete="off"
        spellcheck="false"
        @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
        @keydown="handleKeydown"
      />
      <LuIcon
        v-if="scanning"
        name="loader-2"
        :size="16"
        class="shrink-0 animate-spin text-emerald-500 dark:text-emerald-400"
      />
    </div>
  </div>
</template>
