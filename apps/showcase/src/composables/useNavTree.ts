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
      { label: 'LuAlert', path: '/docs/components/alert' },
      { label: 'LuAvatar', path: '/docs/components/avatar' },
      { label: 'LuBadge', path: '/docs/components/badge' },
      { label: 'LuBreadcrumb', path: '/docs/components/breadcrumb' },
      { label: 'LuButton', path: '/docs/components/button' },
      { label: 'LuCard', path: '/docs/components/card' },
      { label: 'LuCheckbox', path: '/docs/components/checkbox' },
      { label: 'LuCollapsible', path: '/docs/components/collapsible' },
      { label: 'LuDivider', path: '/docs/components/divider' },
      { label: 'LuMenu', path: '/docs/components/dropdown' },
      { label: 'LuForm', path: '/docs/components/form' },
      { label: 'LuIcon', path: '/docs/components/icon' },
      { label: 'LuInput', path: '/docs/components/input' },
      { label: 'LuLink', path: '/docs/components/link' },
      { label: 'LuModal', path: '/docs/components/modal' },
      { label: 'LuPageHeader', path: '/docs/components/page-header' },
      { label: 'LuPagination', path: '/docs/components/pagination' },
      { label: 'LuProgressBar', path: '/docs/components/progress-bar' },
      { label: 'LuRadio', path: '/docs/components/radio' },
      { label: 'LuSelect', path: '/docs/components/select' },
      { label: 'LuSkeleton', path: '/docs/components/skeleton' },
      { label: 'LuSpinner', path: '/docs/components/spinner' },
      { label: 'LuSwitch', path: '/docs/components/switch' },
      { label: 'LuTable', path: '/docs/components/table' },
      { label: 'LuTabs', path: '/docs/components/tabs' },
      { label: 'LuTag', path: '/docs/components/tag' },
      { label: 'LuText', path: '/docs/components/text' },
      { label: 'LuTextarea', path: '/docs/components/textarea' },
      { label: 'LuThemeSwitch', path: '/docs/components/theme-switch' },
      { label: 'LuToggleGroup', path: '/docs/components/toggle-group' },
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
  }
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
