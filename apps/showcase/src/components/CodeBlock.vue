<template>
  <div class="relative overflow-hidden bg-[#0D1117] rounded-b-lg">
    <div v-html="html" class="p-4 md:p-6 text-[13px] md:text-sm font-mono overflow-auto custom-scrollbar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { createHighlighter, type Highlighter } from 'shiki';

const props = defineProps<{ 
  code: string;
  lang?: string;
}>();

const html = ref('');

// Singleton highlighter instance
let highlighter: Highlighter | null = null;

const highlight = async () => {
  try {
    if (!highlighter) {
      highlighter = await createHighlighter({
        themes: ['one-dark-pro'],
        langs: ['bash', 'vue', 'ts', 'html', 'css', 'json']
      });
    }
    
    html.value = highlighter!.codeToHtml(props.code, {
      lang: props.lang || 'bash',
      theme: 'one-dark-pro'
    });
  } catch (e) {
    console.error('Failed to highlight code', e);
    html.value = ''; // fallback to plain pre
  }
};

onMounted(() => {
  highlight();
});

watch(() => [props.code, props.lang], () => {
  highlight();
});


</script>
