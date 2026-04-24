<template>
  <LuDesktopShell variant="vscode">
    <!-- TITLE BAR -->
    <template #topbar>
      <LuDesktopTopBar variant="vscode-titlebar">
        <LuStack variant="titlebar-inner">
          <LuAvatar variant="app-icon" fallback="VS" />
          <LuStack variant="titlebar-menus">
            <LuText variant="menu-item">File</LuText>
            <LuText variant="menu-item">Edit</LuText>
            <LuText variant="menu-item">Selection</LuText>
            <LuText variant="menu-item">View</LuText>
            <LuText variant="menu-item">Go</LuText>
            <LuText variant="menu-item">Run</LuText>
            <LuText variant="menu-item">Terminal</LuText>
            <LuText variant="menu-item">Help</LuText>
          </LuStack>
          
          <LuFill variant="titlebar-center">
            <LuStack variant="search-box">
              <svg class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <LuText variant="search-text">LumoraCode</LuText>
            </LuStack>
          </LuFill>
          
          <LuStack variant="titlebar-right">
            <LuThemeSelect />
            <LuButton variant="titlebar-action">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </LuButton>
            <LuAvatar variant="user-avatar" fallback="JS" />
          </LuStack>
        </LuStack>
      </LuDesktopTopBar>
    </template>

    <!-- ACTIVITY BAR -->
    <template #rail>
      <LuDesktopRailBar variant="activity-bar">
        <LuStack direction="vertical" variant="activity-bar-top">
          <LuTooltip v-for="item in activityItems" :key="item.id" position="right" :delay="300">
            <template #trigger>
              <LuDesktopRailItem 
                :variant="activeActivityId === item.id ? 'activity-item-active' : 'activity-item'"
                @click="activeActivityId = item.id"
              >
                <template #icon>
                  <div class="relative">
                    <span v-html="item.icon"></span>
                    <LuBadge v-if="item.badge" variant="activity-badge">{{ item.badge }}</LuBadge>
                  </div>
                </template>
              </LuDesktopRailItem>
            </template>
            <template #content>{{ item.label }}</template>
          </LuTooltip>
        </LuStack>
        <LuStack direction="vertical" variant="activity-bar-bottom">
           <LuTooltip position="right" :delay="300">
            <template #trigger>
              <LuDesktopRailItem variant="activity-item">
                <template #icon>
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </template>
              </LuDesktopRailItem>
            </template>
            <template #content>Settings</template>
          </LuTooltip>
        </LuStack>
      </LuDesktopRailBar>
    </template>

    <!-- EXPLORER -->
    <template #sidebar>
      <LuDesktopSidebar v-show="isSidebarOpen" variant="explorer">
        <LuStack variant="explorer-header">
          <LuText variant="explorer-title">EXPLORER</LuText>
          <LuButton variant="explorer-action">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </LuButton>
        </LuStack>
        
        <LuScroll variant="explorer-scroll">
          <LuCollapsible defaultOpen variant="explorer-section">
            <template #trigger="{ isOpen }">
              <svg class="w-4 h-4 transition-transform duration-200" :class="isOpen ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              LUMORA-PROJECT
            </template>
            <template #content>
              <FileTree :nodes="fileSystem" @select="openFile" :activeId="activeFileId" :level="1" />
            </template>
          </LuCollapsible>
        </LuScroll>
      </LuDesktopSidebar>
    </template>

    <!-- EDITOR & PANELS -->
    <template #content>
      <LuFill variant="editor-container">
        
        <!-- Editor Tabs Group -->
        <LuTabs v-model="activeFileId" variant="editor-tabs-group" class="flex-1 flex flex-col min-h-0 min-w-0">
          <!-- Tab Bar -->
          <div class="flex shrink-0">
            <LuTabList variant="editor-tablist" class="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar">
              <LuTab 
                v-for="file in openFiles" 
                :key="file.id" 
                :value="file.id" 
                variant="editor-tab"
              >
                <span v-html="getFileIcon(file.name)" class="w-4 h-4 shrink-0"></span>
                <span :class="file.modified ? 'italic' : ''" class="truncate">{{ file.name }}</span>
                <LuBadge v-if="file.modified" variant="tab-modified-dot" />
                <button v-else @click.stop="closeFile(file.id)" class="shrink-0 w-5 h-5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors ml-auto">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </LuTab>
            </LuTabList>
          </div>

          <!-- Breadcrumbs -->
          <LuStack v-if="activeFile" variant="breadcrumb-bar">
            <LuText variant="breadcrumb-item">LUMORA-PROJECT</LuText>
            <svg class="w-3 h-3 text-zinc-500 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <LuText variant="breadcrumb-item">src</LuText>
            <svg class="w-3 h-3 text-zinc-500 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <LuText variant="breadcrumb-item">components</LuText>
            <svg class="w-3 h-3 text-zinc-500 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span v-html="getFileIcon(activeFile.name)" class="w-3.5 h-3.5 mr-1 shrink-0"></span>
            <LuText variant="breadcrumb-item">{{ activeFile.name }}</LuText>
          </LuStack>

          <!-- Code View -->
          <LuFill variant="editor-body">
            <LuTabPanel 
              v-for="file in openFiles" 
              :key="file.id" 
              :value="file.id" 
              variant="editor-panel"
            >
              <div class="flex h-full w-full">
                <LuScroll variant="code-scroll">
                  <table class="w-full text-sm font-mono leading-relaxed pb-8 table-fixed border-collapse">
                    <tbody>
                      <tr v-for="(line, idx) in file.content.split('\n')" :key="idx" class="hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50">
                        <td class="w-12 text-right pr-4 select-none text-zinc-400 dark:text-zinc-600 border-r border-transparent py-0.5 align-top">{{ idx + 1 }}</td>
                        <td class="pl-4 whitespace-pre text-zinc-800 dark:text-zinc-300 py-0.5"><div class="overflow-hidden break-words whitespace-pre-wrap">{{ line }}</div></td>
                      </tr>
                    </tbody>
                  </table>
                </LuScroll>
                <!-- Minimap Placeholder -->
                <div class="w-20 bg-zinc-50 dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shrink-0 hidden lg:block opacity-60 pointer-events-none">
                  <div class="w-full h-32 bg-zinc-200/50 dark:bg-zinc-700/50 mt-4 rounded-sm"></div>
                </div>
              </div>
            </LuTabPanel>
          </LuFill>
        </LuTabs>

        <!-- Terminal Panel -->
        <LuCollapsible v-model="isTerminalOpen" variant="terminal-panel">
          <template #trigger="{ isOpen }">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 transition-transform duration-200 shrink-0" :class="isOpen ? 'rotate-90' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span class="text-xs font-medium uppercase shrink-0 tracking-wider">TERMINAL</span>
            </div>
            <div class="flex items-center gap-4 text-xs font-medium text-zinc-500 ml-6 overflow-x-auto no-scrollbar">
              <span class="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer shrink-0">PROBLEMS <LuBadge variant="problem-badge">0</LuBadge></span>
              <span class="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer shrink-0">OUTPUT</span>
              <span class="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer shrink-0">DEBUG CONSOLE</span>
              <span class="text-zinc-900 dark:text-zinc-200 border-b border-indigo-500 pb-[1px] mb-[-1px] shrink-0">TERMINAL</span>
            </div>
            <div class="ml-auto flex items-center gap-2 shrink-0 pr-4">
              <svg class="w-5 h-5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded p-1 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
              <svg class="w-5 h-5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded p-1 cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </div>
          </template>
          <template #content>
            <LuScroll variant="terminal-scroll">
              <pre class="text-sm font-mono text-zinc-700 dark:text-zinc-300">
$ bun run dev
$ vite v5.4.0 ready in 342 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
</pre>
              <div class="flex items-center mt-2">
                <span class="text-emerald-600 dark:text-emerald-400 font-mono text-sm mr-2">C:\project></span>
                <span class="w-2 h-4 bg-zinc-400 dark:bg-zinc-500 animate-pulse"></span>
              </div>
            </LuScroll>
          </template>
        </LuCollapsible>

      </LuFill>

      <!-- AI Chat Panel (Right) -->
      <LuFixed v-show="activeActivityId === 'chat'" variant="ai-panel">
        <LuStack variant="ai-header">
          <LuText variant="ai-title">Lumora AI</LuText>
          <div class="flex items-center gap-2">
            <LuBadge variant="ai-model-badge">GPT-4</LuBadge>
            <LuButton variant="icon-action" @click="activeActivityId = 'files'">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </LuButton>
          </div>
        </LuStack>
        
        <LuFill>
          <LuScroll variant="ai-chat-scroll">
            <LuStack direction="vertical" variant="ai-chat-history">
              <div class="flex gap-3 self-end w-5/6 flex-row-reverse">
                <LuAvatar variant="ai-user-avatar" fallback="JS" />
                <div class="bg-indigo-600 text-white rounded-xl rounded-tr-sm px-3 py-2.5 text-sm shadow-sm leading-relaxed">
                  Can you explain how the LuDesktopShell is working in this file?
                </div>
              </div>
              
              <div class="flex gap-3 self-start w-5/6">
                <LuAvatar variant="ai-bot-avatar" fallback="AI" />
                <div class="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-xl rounded-tl-sm px-3 py-2.5 text-sm shadow-sm border border-zinc-200 dark:border-zinc-700 leading-relaxed">
                  <p class="mb-2">The `LuDesktopShell` is a top-level headless component in LumoraUI that provides the structural grid for a desktop application. It manages standard desktop regions like:</p>
                  <ul class="list-disc pl-5 mb-2 space-y-1 text-zinc-600 dark:text-zinc-400">
                    <li><code>#topbar</code>: The window title bar</li>
                    <li><code>#rail</code>: The leftmost vertical activity bar</li>
                    <li><code>#sidebar</code>: The collapsible secondary sidebar</li>
                    <li><code>#content</code>: The main editor/view area</li>
                    <li><code>#statusbar</code>: The bottom info bar</li>
                  </ul>
                  <p>In this VSCode clone, we've mapped these slots directly to the corresponding UI areas.</p>
                </div>
              </div>
            </LuStack>
          </LuScroll>
        </LuFill>
        
        <LuStack direction="vertical" variant="ai-input-area">
          <LuStack variant="ai-suggestions">
            <LuButton variant="ai-suggestion-chip">Explain code</LuButton>
            <LuButton variant="ai-suggestion-chip">Find bugs</LuButton>
            <LuButton variant="ai-suggestion-chip">Add types</LuButton>
          </LuStack>
          <div class="relative">
            <LuInput variant="ai-input" placeholder="Ask Lumora AI..." />
            <LuButton variant="ai-send-btn">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </LuButton>
          </div>
        </LuStack>
      </LuFixed>

    </template>

    <!-- STATUS BAR -->
    <template #statusbar>
      <LuDesktopStatusBar variant="vscode-statusbar">
        <LuStack variant="statusbar-left">
          <LuStack variant="statusbar-item">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
            <span>main*</span>
          </LuStack>
          <LuStack variant="statusbar-item">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </LuStack>
          <LuStack variant="statusbar-item">
            <svg class="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>0</span>
            <svg class="w-3.5 h-3.5 text-zinc-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <span>0</span>
          </LuStack>
        </LuStack>
        
        <LuStack variant="statusbar-right">
          <LuStack variant="statusbar-item">Ln 4, Col 12</LuStack>
          <LuStack variant="statusbar-item">Spaces: 2</LuStack>
          <LuStack variant="statusbar-item">UTF-8</LuStack>
          <LuStack variant="statusbar-item">LF</LuStack>
          <LuStack variant="statusbar-item">Vue</LuStack>
          <LuStack variant="statusbar-item-accent">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            Lumora AI
          </LuStack>
        </LuStack>
      </LuDesktopStatusBar>
    </template>

  </LuDesktopShell>
</template>

<script setup lang="ts">
import { ref, computed, defineComponent, h } from 'vue';
import { 
  LuDesktopShell, 
  LuDesktopTopBar, 
  LuDesktopRailBar, 
  LuDesktopSidebar, 
  LuDesktopRailItem,
  LuDesktopStatusBar,
  LuStack,
  LuScroll,
  LuFill,
  LuText,
  LuButton,
  LuInput,
  LuThemeSelect,
  LuTabs,
  LuTabList,
  LuTab,
  LuTabPanel,
  LuCollapsible,
  LuTooltip,
  LuBadge,
  LuAvatar,
  LuFixed
} from '@astrake/lumora-ui';

// File tree component
const FileTree = defineComponent({
  props: {
    nodes: Array,
    level: { type: Number, default: 0 },
    activeId: String
  },
  emits: ['select'],
  setup(props, { emit }) {
    return () => {
      return h('div', { class: 'flex flex-col' }, props.nodes?.map((node: any) => {
        if (node.type === 'folder') {
          return h(LuCollapsible, { variant: 'explorer-folder', defaultOpen: node.isOpen }, {
            trigger: ({ isOpen }: any) => [
              h('div', { class: 'flex items-center gap-1.5 px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer text-sm text-zinc-700 dark:text-zinc-300 transition-colors', style: `padding-left: ${props.level * 12}px` }, [
                h('svg', { class: `w-3.5 h-3.5 text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
                  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5l7 7-7 7' })
                ]),
                h('svg', { class: 'w-4 h-4 text-zinc-400 shrink-0', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
                  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' })
                ]),
                h('span', { class: 'truncate' }, node.name)
              ])
            ],
            content: () => h(FileTree, { nodes: node.children, level: props.level + 1, activeId: props.activeId, onSelect: (id: string) => emit('select', id) })
          });
        } else {
          return h('div', { 
            class: `flex items-center gap-2 px-2 py-1 cursor-pointer text-sm transition-colors ${props.activeId === node.id ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`,
            style: `padding-left: ${props.level * 12 + 18}px`,
            onClick: () => emit('select', node.id)
          }, [
            h('span', { innerHTML: getFileIcon(node.name), class: 'w-4 h-4 shrink-0' }),
            h('span', { class: 'truncate flex-1' }, node.name),
            node.gitStatus ? h(LuBadge, { variant: 'explorer-git-badge', class: node.gitStatus === 'M' ? 'text-amber-500' : 'text-emerald-500' }, () => node.gitStatus) : null
          ]);
        }
      }));
    };
  }
});

// SVG Icons
const icons = {
  files: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>`,
  search: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`,
  git: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>`,
  extensions: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`,
  chat: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>`,
  vue: `<svg viewBox="0 0 24 24" class="text-emerald-500" fill="currentColor"><path d="M15.22 4H20l-8 13.86L4 4h4.78l3.22 5.58L15.22 4z"/><path d="M12 17.86L4.78 5.34H0l12 20.78 12-20.78h-4.78L12 17.86z" opacity=".5"/></svg>`,
  ts: `<svg viewBox="0 0 24 24" class="text-blue-500" fill="currentColor"><path d="M1.5 1.5v21h21v-21h-21zm11.25 15.63c-.88.66-2.15 1.04-3.5 1.04-2.58 0-4.38-1.51-4.38-4.14 0-2.6 1.76-4.18 4.31-4.18 1.41 0 2.6.43 3.42 1.12l-1.39 1.83c-.56-.47-1.25-.76-2.03-.76-1.12 0-1.89.76-1.89 2 0 1.25.76 1.98 1.87 1.98.81 0 1.5-.32 1.96-.75l1.63 1.86zm6.87-1.11c-.55.67-1.58 1.18-2.92 1.18-2.3 0-3.8-1.33-3.8-3.4 0-2.33 1.75-3.66 4.36-3.66h2.24v-1.18c0-.98-.67-1.52-1.78-1.52-.89 0-1.66.36-2.16.86l-1.33-1.63c.8-.75 2.05-1.22 3.59-1.22 2.45 0 3.9 1.34 3.9 3.47v6.86h-2.1v-1.13c0 .01 0 .01-.01.01h.01v.36z"/></svg>`,
  json: `<svg viewBox="0 0 24 24" class="text-yellow-500" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-10h2v8h-2z"/></svg>`,
};

const getFileIcon = (name: string) => {
  if (name.endsWith('.vue')) return icons.vue;
  if (name.endsWith('.ts')) return icons.ts;
  if (name.endsWith('.json')) return icons.json;
  return `<svg class="text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`;
};

const activeActivityId = ref('files');
const activityItems = [
  { id: 'files', label: 'Explorer', icon: icons.files },
  { id: 'search', label: 'Search', icon: icons.search },
  { id: 'git', label: 'Source Control', icon: icons.git, badge: '3' },
  { id: 'extensions', label: 'Extensions', icon: icons.extensions },
  { id: 'chat', label: 'Lumora AI', icon: icons.chat },
];

const isSidebarOpen = computed(() => activeActivityId.value !== 'chat' && activeActivityId.value !== 'search');

const fileSystem = [
  {
    name: 'src',
    type: 'folder',
    isOpen: true,
    children: [
      {
        name: 'components',
        type: 'folder',
        isOpen: true,
        children: [
          { id: 'f1', name: 'Button.vue', type: 'file', content: '<template>\n  <button class="btn">\n    <slot />\n  </button>\n</template>\n\n<script setup lang="ts">\nconsole.log("Button initialized");\n<\/script>' },
          { id: 'f2', name: 'Input.vue', type: 'file', content: '<template>\n  <input class="input" />\n</template>' },
        ]
      },
      { id: 'f3', name: 'App.vue', type: 'file', gitStatus: 'M', content: '<template>\n  <div id="app">\n    <DesktopDemo />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport DesktopDemo from "./views/demo/DesktopDemo.vue";\n<\/script>' },
      { id: 'f4', name: 'main.ts', type: 'file', content: 'import { createApp } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");' }
    ]
  },
  { id: 'f5', name: 'package.json', type: 'file' },
  { id: 'f6', name: 'README.md', type: 'file', gitStatus: 'U' }
];

const openFiles = ref<any[]>([
  { id: 'f1', name: 'Button.vue', modified: false, content: '<template>\n  <button class="btn">\n    <slot />\n  </button>\n</template>\n\n<script setup lang="ts">\nconsole.log("Button initialized");\n<\/script>' },
  { id: 'f3', name: 'App.vue', modified: true, content: '<template>\n  <div id="app">\n    <DesktopDemo />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport DesktopDemo from "./views/demo/DesktopDemo.vue";\n<\/script>' },
  { id: 'f4', name: 'main.ts', modified: false, content: 'import { createApp } from "vue";\nimport App from "./App.vue";\n\ncreateApp(App).mount("#app");' }
]);

const activeFileId = ref('f3');
const activeFile = computed(() => openFiles.value.find(f => f.id === activeFileId.value));

const isTerminalOpen = ref(true);

const openFile = (id: string) => {
  const findFile = (nodes: any[]): any => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findFile(node.children);
        if (found) return found;
      }
    }
    return null;
  };
  
  const file = findFile(fileSystem);
  if (file && !openFiles.value.find(f => f.id === id)) {
    openFiles.value.push({ ...file, modified: false, content: file.content || '// Empty file' });
  }
  activeFileId.value = id;
};

const closeFile = (id: string) => {
  const index = openFiles.value.findIndex(f => f.id === id);
  if (index !== -1) {
    openFiles.value.splice(index, 1);
    if (activeFileId.value === id && openFiles.value.length > 0) {
      activeFileId.value = openFiles.value[Math.max(0, index - 1)].id;
    }
  }
};
</script>
