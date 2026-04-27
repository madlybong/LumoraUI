<template>
  <div v-bind="$attrs" :class="resolvedSkin.container">
    <div v-if="title || description" :class="resolvedSkin.header">
      <h3 v-if="title" :class="resolvedSkin.title">{{ title }}</h3>
      <p v-if="description" :class="resolvedSkin.description">{{ description }}</p>
    </div>

    <template v-if="variant === 'preview'">
      <div :class="resolvedSkin.card">
        <template v-if="layout === 'tabbed'">
          <LuTabs v-model="activeTab" variant="default">
            <LuTabList variant="card-header">
              <LuTab value="preview">Preview</LuTab>
              <LuTab value="code">Code</LuTab>
            </LuTabList>
          </LuTabs>

          <div v-if="activeTab === 'preview'" :class="resolvedSkin.previewArea">
            <slot name="preview" />
          </div>

          <div v-if="activeTab === 'code'" :class="resolvedSkin.codeArea">
            <div :class="resolvedSkin.codeHeader">
              <div :class="resolvedSkin.badge">{{ lang }}</div>
              <button @click="copyCode" :class="resolvedSkin.copyButton" aria-label="Copy code">
                <LuIcon :name="copied ? 'check' : 'copy'" class="w-4 h-4" />
              </button>
            </div>
            <div :class="resolvedSkin.codeContent" v-html="html"></div>
          </div>
        </template>

        <template v-else-if="layout === 'split'">
          <div :class="resolvedSkin.splitContainer">
            <div :class="resolvedSkin.previewArea">
              <slot name="preview" />
            </div>
            <div :class="resolvedSkin.splitCodeArea">
              <div :class="resolvedSkin.codeHeader">
                <div :class="resolvedSkin.badge">{{ lang }}</div>
                <button @click="copyCode" :class="resolvedSkin.copyButton" aria-label="Copy code">
                  <LuIcon :name="copied ? 'check' : 'copy'" class="w-4 h-4" />
                </button>
              </div>
              <div :class="resolvedSkin.codeContent" v-html="html"></div>
            </div>
          </div>
        </template>
      </div>
    </template>

    <template v-else>
      <div :class="resolvedSkin.card">
        <div :class="resolvedSkin.codeArea">
          <div :class="resolvedSkin.codeHeader">
            <div :class="resolvedSkin.badge">{{ lang }}</div>
            <button @click="copyCode" :class="resolvedSkin.copyButton" aria-label="Copy code">
              <LuIcon :name="copied ? 'check' : 'copy'" class="w-4 h-4" />
            </button>
          </div>
          <div :class="resolvedSkin.codeContent" v-html="html"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { createHighlighter, type Highlighter } from 'shiki';

let globalHighlighter: Highlighter | null = null;
let highlighterPromise: Promise<Highlighter> | null = null;

async function getHighlighter() {
  if (globalHighlighter) return globalHighlighter;
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['one-dark-pro'],
      langs: ['bash', 'vue', 'ts', 'html', 'css', 'json']
    });
  }
  globalHighlighter = await highlighterPromise;
  return globalHighlighter;
}
</script>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { useLumoraConfig } from "../context";
import LuTabs from "./LuTabs.vue";
import LuTabList from "./LuTabList.vue";
import LuTab from "./LuTab.vue";
import LuIcon from "./LuIcon.vue";

const props = withDefaults(defineProps<{
  code: string;
  lang?: string;
  variant?: "default" | "preview";
  layout?: "tabbed" | "split";
  title?: string;
  description?: string;
}>(), {
  lang: "vue",
  variant: "default",
  layout: "tabbed"
});

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => {
  return {
    container: resolveSkin("LuCodeBlock", "container"),
    header: resolveSkin("LuCodeBlock", "header"),
    title: resolveSkin("LuCodeBlock", "title"),
    description: resolveSkin("LuCodeBlock", "description"),
    card: resolveSkin("LuCodeBlock", "card"),
    previewArea: resolveSkin("LuCodeBlock", "previewArea"),
    codeArea: resolveSkin("LuCodeBlock", "codeArea"),
    splitCodeArea: resolveSkin("LuCodeBlock", "splitCodeArea"),
    splitContainer: resolveSkin("LuCodeBlock", "splitContainer"),
    codeHeader: resolveSkin("LuCodeBlock", "codeHeader"),
    badge: resolveSkin("LuCodeBlock", "badge"),
    copyButton: resolveSkin("LuCodeBlock", "copyButton"),
    codeContent: resolveSkin("LuCodeBlock", "codeContent"),
  };
});

const html = ref('');
const activeTab = ref<'preview' | 'code'>('preview');
const copied = ref(false);

const highlight = async () => {
  if (!props.code) {
    html.value = '';
    return;
  }
  
  try {
    const highlighter = await getHighlighter();
    
    html.value = highlighter.codeToHtml(props.code, {
      lang: props.lang || 'vue',
      theme: 'one-dark-pro'
    });
  } catch (e) {
    console.error('Failed to highlight code', e);
    // fallback to plain pre
    html.value = `<pre><code>${props.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
  }
};

onMounted(() => {
  highlight();
});

watch(() => [props.code, props.lang], () => {
  highlight();
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => copied.value = false, 2000);
  } catch (err) {
    console.error('Failed to copy', err);
  }
};
</script>
