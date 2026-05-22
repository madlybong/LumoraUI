<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useLumoraConfig } from "../context";
import LuText from "./LuText.vue";

defineOptions({ name: "LuRichTextEditor" });

/**
 * Rich text editor wrapper around Tiptap (@tiptap/vue-3 peer dep).
 * Consumer must install: npm i @tiptap/vue-3 @tiptap/starter-kit
 */

const props = withDefaults(defineProps<{
  modelValue?: string;
  placeholder?: string;
  readonly?: boolean;
  toolbar?: ("bold" | "italic" | "underline" | "strike" | "h1" | "h2" | "h3" | "bullet" | "ordered" | "blockquote" | "code" | "link" | "undo" | "redo")[];
  minHeight?: number;
}>(), {
  modelValue: "",
  placeholder: "Write something…",
  readonly: false,
  toolbar: () => ["bold", "italic", "underline", "strike", "h2", "h3", "bullet", "ordered", "blockquote", "code", "undo", "redo"],
  minHeight: 120,
});

const emit = defineEmits<{
  (e: "update:modelValue", html: string): void;
  (e: "focus"): void;
  (e: "blur"): void;
}>();

const { resolveSkin } = useLumoraConfig();

// Lazy-load Tiptap to avoid hard peer dep error
// @vite-ignore comments prevent bundler from analyzing the import path
const EditorContent = defineAsyncComponent(() =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore — @tiptap/vue-3 is a peer dep; graceful fallback if absent
  (import("@tiptap/vue-3" /* @vite-ignore */) as unknown as Promise<{ EditorContent: object }>)
    .then((m: { EditorContent: object }) => m.EditorContent)
    .catch(() => {
      console.warn("[LuRichTextEditor] @tiptap/vue-3 peer dep not found. Install: npm i @tiptap/vue-3 @tiptap/starter-kit");
      return { template: `<div class="p-4 text-xs text-zinc-400">@tiptap/vue-3 not installed.</div>` };
    })
);

// We dynamically create the editor to avoid SSR issues and peer dep requirement
import { ref, onMounted, onBeforeUnmount } from "vue";
const editor = ref<unknown>(null);

onMounted(async () => {
  try {
    // @ts-ignore peer deps — vue-tsc cannot resolve these without direct deps
    const { useEditor } = await (import("@tiptap/vue-3" /* @vite-ignore */) as unknown as Promise<{ useEditor: Function }>);
    // @ts-ignore peer deps
    const { StarterKit } = await (import("@tiptap/starter-kit" /* @vite-ignore */) as unknown as Promise<{ StarterKit: object }>);
    // @ts-ignore peer deps — optional extension
    const placeholderMod = await (import("@tiptap/extension-placeholder" /* @vite-ignore */) as unknown as Promise<{ Placeholder: object | null }>).catch(() => ({ Placeholder: null }));
    const { Placeholder } = placeholderMod;

    const extensions: object[] = [StarterKit];
    if (Placeholder) {
      const P = Placeholder as { configure: (opts: { placeholder: string }) => object };
      extensions.push(P.configure({ placeholder: props.placeholder }));
    }

    editor.value = useEditor({
      extensions,
      content: props.modelValue,
      editable: !props.readonly,
      onUpdate: ({ editor: e }: { editor: { getHTML: () => string } }) => {
        emit("update:modelValue", e.getHTML());
      },
      onFocus: () => emit("focus"),
      onBlur: () => emit("blur"),
    });
  } catch {
    // Peer dep not installed — graceful fallback rendered
  }
});

onBeforeUnmount(() => {
  if (editor.value && typeof (editor.value as { destroy?: () => void }).destroy === "function") {
    (editor.value as { destroy: () => void }).destroy();
  }
});


// ── Toolbar action helpers ────────────────────────────────────────────────────
type EditorChain = {
  focus: () => EditorChain;
  toggleBold: () => EditorChain;
  toggleItalic: () => EditorChain;
  toggleUnderline: () => EditorChain;
  toggleStrike: () => EditorChain;
  toggleHeading: (opts: { level: number }) => EditorChain;
  toggleBulletList: () => EditorChain;
  toggleOrderedList: () => EditorChain;
  toggleBlockquote: () => EditorChain;
  toggleCode: () => EditorChain;
  undo: () => EditorChain;
  redo: () => EditorChain;
  run: () => void;
};

function chain(): EditorChain | null {
  const e = editor.value as { chain?: () => EditorChain } | null;
  return e?.chain?.() ?? null;
}

function isActive(name: string, attrs?: Record<string, unknown>): boolean {
  const e = editor.value as { isActive?: (name: string, attrs?: Record<string, unknown>) => boolean } | null;
  return e?.isActive?.(name, attrs) ?? false;
}

type ToolbarAction = {
  key: string;
  icon: string;
  label: string;
  isActive?: () => boolean;
  run?: () => void;
};

const toolbarActions = computed((): ToolbarAction[] => {
  const all: ToolbarAction[] = [
    { key: "bold",       icon: "bold",           label: "Bold",           isActive: () => isActive("bold"),           run: () => chain()?.focus().toggleBold().run() },
    { key: "italic",     icon: "italic",         label: "Italic",         isActive: () => isActive("italic"),         run: () => chain()?.focus().toggleItalic().run() },
    { key: "underline",  icon: "underline",      label: "Underline",      isActive: () => isActive("underline"),      run: () => chain()?.focus().toggleUnderline?.().run() },
    { key: "strike",     icon: "strikethrough",  label: "Strikethrough",  isActive: () => isActive("strike"),         run: () => chain()?.focus().toggleStrike().run() },
    { key: "h1",         icon: "heading-1",      label: "Heading 1",      isActive: () => isActive("heading", { level: 1 }), run: () => chain()?.focus().toggleHeading({ level: 1 }).run() },
    { key: "h2",         icon: "heading-2",      label: "Heading 2",      isActive: () => isActive("heading", { level: 2 }), run: () => chain()?.focus().toggleHeading({ level: 2 }).run() },
    { key: "h3",         icon: "heading-3",      label: "Heading 3",      isActive: () => isActive("heading", { level: 3 }), run: () => chain()?.focus().toggleHeading({ level: 3 }).run() },
    { key: "bullet",     icon: "list",           label: "Bullet list",    isActive: () => isActive("bulletList"),     run: () => chain()?.focus().toggleBulletList().run() },
    { key: "ordered",    icon: "list-ordered",   label: "Ordered list",   isActive: () => isActive("orderedList"),    run: () => chain()?.focus().toggleOrderedList().run() },
    { key: "blockquote", icon: "quote",          label: "Blockquote",     isActive: () => isActive("blockquote"),     run: () => chain()?.focus().toggleBlockquote().run() },
    { key: "code",       icon: "code",           label: "Code",           isActive: () => isActive("codeBlock"),      run: () => chain()?.focus().toggleCode().run() },
    { key: "undo",       icon: "undo",           label: "Undo",           run: () => chain()?.focus().undo().run() },
    { key: "redo",       icon: "redo",           label: "Redo",           run: () => chain()?.focus().redo().run() },
  ];
  return all.filter(a => props.toolbar.includes(a.key as typeof props.toolbar[0]));
});

// Divider positions (between groups)
const DIVIDER_AFTER = new Set(["strike", "h3", "ordered"]);

const skinWrapper = computed(() => resolveSkin("LuRichTextEditor"));
const skinToolbar = computed(() => resolveSkin("LuRichTextEditorToolbar"));
const skinContent = computed(() => resolveSkin("LuRichTextEditorContent"));
const skinDivider = computed(() => resolveSkin("LuRichTextEditorToolbarDivider"));
</script>

<template>
  <div :class="skinWrapper">
    <!-- Toolbar -->
    <div v-if="!readonly" :class="skinToolbar" role="toolbar" aria-label="Text editor controls">
      <template v-for="action in toolbarActions" :key="action.key">
        <button
          type="button"
          :class="resolveSkin('LuRichTextEditorToolbarButton', action.isActive?.() ? 'active' : undefined)"
          :aria-label="action.label"
          :aria-pressed="action.isActive?.() ?? false"
          :title="action.label"
          @mousedown.prevent="action.run?.()"
        >
          <span class="text-xs font-bold leading-none" style="font-family: monospace">
            {{ action.icon.slice(0, 2).toUpperCase() }}
          </span>
        </button>
        <span v-if="DIVIDER_AFTER.has(action.key)" :class="skinDivider" role="separator" />
      </template>
    </div>

    <!-- Editor content -->
    <div :class="skinContent" :style="{ minHeight: `${minHeight}px` }">
      <Suspense>
        <EditorContent v-if="editor" :editor="editor" />
        <template #fallback>
          <div class="text-xs text-zinc-400 p-2">Loading editor…</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>
