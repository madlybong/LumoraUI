import { createHighlighter, type Highlighter } from 'shiki';

let globalHighlighter: Highlighter | null = null;
let highlighterPromise: Promise<Highlighter> | null = null;

export async function getHighlighter(): Promise<Highlighter> {
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
