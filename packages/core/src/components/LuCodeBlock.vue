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
                <LuIcon :name="copied ? 'check' : 'copy'" class="w-4 h-4" />
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
                  <LuIcon :name="copied ? 'check' : 'copy'" class="w-4 h-4" />
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
              <LuIcon :name="copied ? 'check' : 'copy'" class="w-4 h-4" />
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
import { useLumoraConfig } from "../context";
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

const { resolveSkin } = useLumoraConfig();
const resolvedSkin = computed(() => {
  return {
    wrapper: resolveSkin("LuCodeBlockWrapper", props.variant),
    header: resolveSkin("LuCodeBlockHeader", props.variant),
    title: resolveSkin("LuCodeBlockTitle", props.variant),
    description: resolveSkin("LuCodeBlockDescription", props.variant),
    card: resolveSkin("LuCodeBlockCard", props.variant),
    previewArea: resolveSkin("LuCodeBlockPreviewArea", props.variant),
    codeArea: resolveSkin("LuCodeBlockCodeArea", props.variant),
    splitCodeArea: resolveSkin("LuCodeBlockSplitArea", props.variant),
    splitContainer: resolveSkin("LuCodeBlockSplitContainer", props.variant),
    codeHeader: resolveSkin("LuCodeBlockCodeHeader", props.variant),
    badge: resolveSkin("LuCodeBlockBadge", props.variant),
    copyButton: resolveSkin("LuCodeBlockCopyButton", props.variant),
    codeContent: resolveSkin("LuCodeBlockCodeContent", props.variant),
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
