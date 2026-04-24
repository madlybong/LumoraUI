import { computed } from 'vue';

export interface NavItem {
  label: string;
  path?: string;
  external?: boolean;
}

export interface NavSection {
  title: string;
  icon?: string;
  items: NavItem[];
}

export const navTree: NavSection[] = [
  {
    title: 'Overview',
    items: [{ label: 'Getting Started', path: '/docs/getting-started' }]
  },
  {
    title: 'Layout System',
    items: [
      { label: 'LuStack', path: '/docs/layout/stack' },
      { label: 'LuDock', path: '/docs/layout/dock' },
      { label: 'LuSplit', path: '/docs/layout/split' },
      { label: 'LuFill & LuFixed', path: '/docs/layout/fill-fixed' },
      { label: 'LuScroll', path: '/docs/layout/scroll' },
      { label: 'LuGrid', path: '/docs/layout/grid' },
      { label: 'LuOverlay', path: '/docs/layout/overlay' },
    ]
  },
  {
    title: 'Components',
    items: [
      { label: 'LuAvatar', path: '/docs/components/avatar' },
      { label: 'LuBadge', path: '/docs/components/badge' },
      { label: 'LuButton', path: '/docs/components/button' },
      { label: 'LuCollapsible', path: '/docs/components/collapsible' },
      { label: 'LuIcon', path: '/docs/components/icon' },
      { label: 'LuInput', path: '/docs/components/input' },
      { label: 'LuProgressBar', path: '/docs/components/progress-bar' },
      { label: 'LuSelect', path: '/docs/components/select' },
      { label: 'LuSwitch', path: '/docs/components/switch' },
      { label: 'LuTabs', path: '/docs/components/tabs' },
      { label: 'LuText', path: '/docs/components/text' },
      { label: 'LuThemeSwitch', path: '/docs/components/theme-switch' },
      { label: 'LuTooltip', path: '/docs/components/tooltip' },
    ]
  },
  {
    title: 'Shells',
    items: [
      { label: 'Desktop Shell', path: '/docs/shells/desktop' },
      { label: 'Mobile Shell', path: '/docs/shells/mobile' },
      { label: 'Embedded Shell', path: '/docs/shells/embedded' },
    ]
  },
  {
    title: 'Live Demos',
    items: [
      { label: 'Desktop Demo ↗', path: '/demo/desktop', external: true },
      { label: 'Mobile Demo ↗', path: '/demo/mobile', external: true },
      { label: 'Embedded Demo ↗', path: '/demo/embedded', external: true },
    ]
  },
];

export function useNavTree() {
  const flattenedItems = computed(() => {
    return navTree.flatMap(section => section.items).filter(item => !item.external && item.path);
  });

  const getPrevNext = (currentPath: string) => {
    const items = flattenedItems.value;
    const index = items.findIndex(item => item.path === currentPath);
    
    if (index === -1) return { prev: null, next: null };
    
    return {
      prev: index > 0 ? items[index - 1] : null,
      next: index < items.length - 1 ? items[index + 1] : null
    };
  };

  return {
    navTree,
    getPrevNext
  };
}
