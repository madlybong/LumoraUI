<template>
  <div v-bind="$attrs" :class="resolvedSkin.wrapper">
    <div v-if="title || description" :class="resolvedSkin.header">
      <LuText v-if="title" variant="section-title" :class="resolvedSkin.title">{{ title }}</LuText>
      <LuText v-if="description" variant="body" :class="resolvedSkin.description">{{ description }}</LuText>
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
              <LuButton @click="copyCode" variant="icon" :class="resolvedSkin.copyButton" aria-label="Copy code">
                <LuIcon :name="copied ? 'check' : 'copy'" class="lu-code-block__copy-icon" />
              </LuButton>
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
                <LuButton @click="copyCode" variant="icon" :class="resolvedSkin.copyButton" aria-label="Copy code">
                  <LuIcon :name="copied ? 'check' : 'copy'" class="lu-code-block__copy-icon" />
                </LuButton>
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
            <LuButton @click="copyCode" variant="icon" :class="resolvedSkin.copyButton" aria-label="Copy code">
              <LuIcon :name="copied ? 'check' : 'copy'" class="lu-code-block__copy-icon" />
            </LuButton>
          </div>
          <div :class="resolvedSkin.codeContent" v-html="html"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { getHighlighter } from "../composables/useShiki";
import LuTabs from "./LuTabs.vue";
import LuTabList from "./LuTabList.vue";
import LuTab from "./LuTab.vue";
import LuIcon from "./LuIcon.vue";
import LuText from "./LuText.vue";
import LuButton from "./LuButton.vue";

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


const resolvedSkin = computed(() => {
  return {
    wrapper: `lu-code-block-wrapper ${props.variant && props.variant !== 'default' ? 'lu-code-block-wrapper--'+props.variant : ''}`.trim(),
    header: `lu-code-block-header ${props.variant && props.variant !== 'default' ? 'lu-code-block-header--'+props.variant : ''}`.trim(),
    title: `lu-code-block-title ${props.variant && props.variant !== 'default' ? 'lu-code-block-title--'+props.variant : ''}`.trim(),
    description: `lu-code-block-description ${props.variant && props.variant !== 'default' ? 'lu-code-block-description--'+props.variant : ''}`.trim(),
    card: `lu-code-block-card ${props.variant && props.variant !== 'default' ? 'lu-code-block-card--'+props.variant : ''}`.trim(),
    previewArea: `lu-code-block-preview-area ${props.variant && props.variant !== 'default' ? 'lu-code-block-preview-area--'+props.variant : ''}`.trim(),
    codeArea: `lu-code-block-code-area ${props.variant && props.variant !== 'default' ? 'lu-code-block-code-area--'+props.variant : ''}`.trim(),
    splitCodeArea: `lu-code-block-split-area ${props.variant && props.variant !== 'default' ? 'lu-code-block-split-area--'+props.variant : ''}`.trim(),
    splitContainer: `lu-code-block-split-container ${props.variant && props.variant !== 'default' ? 'lu-code-block-split-container--'+props.variant : ''}`.trim(),
    codeHeader: `lu-code-block-code-header ${props.variant && props.variant !== 'default' ? 'lu-code-block-code-header--'+props.variant : ''}`.trim(),
    badge: `lu-code-block-badge ${props.variant && props.variant !== 'default' ? 'lu-code-block-badge--'+props.variant : ''}`.trim(),
    copyButton: `lu-code-block-copy-button ${props.variant && props.variant !== 'default' ? 'lu-code-block-copy-button--'+props.variant : ''}`.trim(),
    codeContent: `lu-code-block-code-content ${props.variant && props.variant !== 'default' ? 'lu-code-block-code-content--'+props.variant : ''}`.trim(),
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
