import { computed } from 'vue';

export interface NavItem {
  label: string;
  path?: string;
  external?: boolean;
  icon?: string;
}

export interface NavSection {
  title: string;
  icon?: string;
  items: NavItem[];
}

export const navTree: NavSection[] = [
  {
    title: 'Overview',
    icon: 'sparkles',
    items: [
      { label: 'Getting Started', path: '/docs/getting-started', icon: 'rocket' },
    ]
  },
  {
    title: 'Layout System',
    icon: 'layout-template',
    items: [
      { label: 'LuStack', path: '/docs/layout/stack', icon: 'layers' },
      { label: 'LuDock', path: '/docs/layout/dock', icon: 'panel-top' },
      { label: 'LuSplit', path: '/docs/layout/split', icon: 'columns-2' },
      { label: 'LuFill & LuFixed', path: '/docs/layout/fill-fixed', icon: 'maximize-2' },
      { label: 'LuScroll', path: '/docs/layout/scroll', icon: 'move-vertical' },
      { label: 'LuGrid', path: '/docs/layout/grid', icon: 'grid-2x2' },
      { label: 'LuOverlay', path: '/docs/layout/overlay', icon: 'copy' },
    ]
  },
  {
    title: 'Components',
    icon: 'package',
    items: [
      { label: 'LuAlert', path: '/docs/components/alert', icon: 'alert-circle' },
      { label: 'LuAvatar', path: '/docs/components/avatar', icon: 'user-round' },
      { label: 'LuBadge', path: '/docs/components/badge', icon: 'badge' },
      { label: 'LuBarChart', path: '/docs/components/bar-chart', icon: 'bar-chart-3' },
      { label: 'LuBreadcrumb', path: '/docs/components/breadcrumb', icon: 'navigation' },
      { label: 'LuButton', path: '/docs/components/button', icon: 'mouse-pointer-click' },
      { label: 'LuCalendar', path: '/docs/components/calendar', icon: 'calendar' },
      { label: 'LuCard', path: '/docs/components/card', icon: 'square' },
      { label: 'LuCheckbox', path: '/docs/components/checkbox', icon: 'square-check' },
      { label: 'LuCollapsible', path: '/docs/components/collapsible', icon: 'chevrons-up-down' },
      { label: 'LuCommandPalette', path: '/docs/components/command-palette', icon: 'terminal' },
      { label: 'LuDashboardGrid', path: '/docs/components/dashboard-grid', icon: 'layout-dashboard' },
      { label: 'LuDataGrid', path: '/docs/components/data-grid', icon: 'table-properties' },
      { label: 'LuDateRangePicker', path: '/docs/components/date-range-picker', icon: 'calendar-range' },
      { label: 'LuDivider', path: '/docs/components/divider', icon: 'separator-horizontal' },
      { label: 'LuDoughnutChart', path: '/docs/components/doughnut-chart', icon: 'pie-chart' },
      { label: 'LuEntityCard', path: '/docs/components/entity-card', icon: 'contact' },
      { label: 'LuFileUpload', path: '/docs/components/file-upload', icon: 'upload-cloud' },
      { label: 'LuForm', path: '/docs/components/form', icon: 'file-input' },
      { label: 'LuFormWizard', path: '/docs/components/form-wizard', icon: 'wand-2' },
      { label: 'LuGaugeChart', path: '/docs/components/gauge-chart', icon: 'gauge' },
      { label: 'LuIcon', path: '/docs/components/icon', icon: 'star' },
      { label: 'LuInput', path: '/docs/components/input', icon: 'pen-line' },
      { label: 'LuKanban', path: '/docs/components/kanban', icon: 'kanban' },
      { label: 'LuLineChart', path: '/docs/components/line-chart', icon: 'trending-up' },
      { label: 'LuLink', path: '/docs/components/link', icon: 'link-2' },
      { label: 'LuMediaGallery', path: '/docs/components/media-gallery', icon: 'images' },
      { label: 'LuMenu', path: '/docs/components/dropdown', icon: 'list' },
      { label: 'LuModal', path: '/docs/components/modal', icon: 'app-window' },
      { label: 'LuNotificationCenter', path: '/docs/components/notification-center', icon: 'bell' },
      { label: 'LuPageHeader', path: '/docs/components/page-header', icon: 'heading-1' },
      { label: 'LuPagination', path: '/docs/components/pagination', icon: 'ellipsis' },
      { label: 'LuProgressBar', path: '/docs/components/progress-bar', icon: 'activity' },
      { label: 'LuRadio', path: '/docs/components/radio', icon: 'circle-dot' },
      { label: 'LuRichTextEditor', path: '/docs/components/rich-text-editor', icon: 'file-text' },
      { label: 'LuSelect', path: '/docs/components/select', icon: 'chevrons-up-down' },
      { label: 'LuSkeleton', path: '/docs/components/skeleton', icon: 'square-dashed' },
      { label: 'LuSparkline', path: '/docs/components/sparkline', icon: 'activity' },
      { label: 'LuSpinner', path: '/docs/components/spinner', icon: 'loader-2' },
      { label: 'LuSwitch', path: '/docs/components/switch', icon: 'toggle-left' },
      { label: 'LuTable', path: '/docs/components/table', icon: 'table-2' },
      { label: 'LuTabs', path: '/docs/components/tabs', icon: 'panel-top-close' },
      { label: 'LuTag', path: '/docs/components/tag', icon: 'tag' },
      { label: 'LuText', path: '/docs/components/text', icon: 'type' },
      { label: 'LuTextarea', path: '/docs/components/textarea', icon: 'align-left' },
      { label: 'LuThemeSwitch', path: '/docs/components/theme-switch', icon: 'sun-moon' },
      { label: 'LuTimeline', path: '/docs/components/timeline', icon: 'clock' },
      { label: 'LuToggleGroup', path: '/docs/components/toggle-group', icon: 'sliders-horizontal' },
      { label: 'LuTooltip', path: '/docs/components/tooltip', icon: 'message-circle' },
      { label: 'LuTree', path: '/docs/components/tree', icon: 'network' },
    ]
  },
  {
    title: 'Shells',
    icon: 'monitor',
    items: [
      { label: 'Desktop Shell', path: '/docs/shells/desktop', icon: 'monitor' },
      { label: 'Mobile Shell', path: '/docs/shells/mobile', icon: 'smartphone' },
      { label: 'Embedded Shell', path: '/docs/shells/embedded', icon: 'cpu' },
      { label: 'Embedded POS', path: '/docs/shells/embedded-pos', icon: 'shopping-cart' },
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
