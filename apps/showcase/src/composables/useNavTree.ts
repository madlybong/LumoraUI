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
    title: 'Layout',
    icon: 'layout-template',
    items: [
      { label: 'LuStack', path: '/docs/layout/stack', icon: 'layers' },
      { label: 'LuGrid', path: '/docs/layout/grid', icon: 'grid-2x2' },
      { label: 'LuDock', path: '/docs/layout/dock', icon: 'panel-top' },
      { label: 'LuSplit', path: '/docs/layout/split', icon: 'columns-2' },
      { label: 'LuFill & LuFixed', path: '/docs/layout/fill-fixed', icon: 'maximize-2' },
      { label: 'LuScroll', path: '/docs/layout/scroll', icon: 'move-vertical' },
      { label: 'LuOverlay', path: '/docs/layout/overlay', icon: 'copy' },
    ]
  },
  {
    title: 'Shells',
    icon: 'monitor',
    items: [
      { label: 'Desktop Shell', path: '/docs/shells/desktop', icon: 'monitor' },
      { label: 'Mobile Shell', path: '/docs/shells/mobile', icon: 'smartphone' },
      { label: 'Embedded Shell', path: '/docs/shells/embedded', icon: 'cpu' },
    ]
  },
  {
    title: 'Form',
    icon: 'pen-line',
    items: [
      { label: 'LuInput', path: '/docs/components/input', icon: 'pen-line' },
      { label: 'LuTextarea', path: '/docs/components/textarea', icon: 'align-left' },
      { label: 'LuSelect', path: '/docs/components/select', icon: 'chevrons-up-down' },
      { label: 'LuCheckbox', path: '/docs/components/checkbox', icon: 'square-check' },
      { label: 'LuRadio', path: '/docs/components/radio', icon: 'circle-dot' },
      { label: 'LuSwitch', path: '/docs/components/switch', icon: 'toggle-left' },
      { label: 'LuToggleGroup', path: '/docs/components/toggle-group', icon: 'sliders-horizontal' },
      { label: 'LuFileUpload', path: '/docs/components/file-upload', icon: 'upload-cloud' },
      { label: 'LuDateRangePicker', path: '/docs/components/date-range-picker', icon: 'calendar-range' },
      { label: 'LuForm', path: '/docs/components/form', icon: 'file-input' },
      { label: 'LuFormWizard', path: '/docs/components/form-wizard', icon: 'wand-2' },
    ]
  },
  {
    title: 'Data Display',
    icon: 'table-2',
    items: [
      { label: 'LuText', path: '/docs/components/text', icon: 'type' },
      { label: 'LuIcon', path: '/docs/components/icon', icon: 'star' },
      { label: 'LuAvatar', path: '/docs/components/avatar', icon: 'user-round' },
      { label: 'LuBadge', path: '/docs/components/badge', icon: 'badge' },
      { label: 'LuTag', path: '/docs/components/tag', icon: 'tag' },
      { label: 'LuCard', path: '/docs/components/card', icon: 'square' },
      { label: 'LuTable', path: '/docs/components/table', icon: 'table-2' },
      { label: 'LuDataGrid', path: '/docs/components/data-grid', icon: 'table-properties' },
      { label: 'LuTree', path: '/docs/components/tree', icon: 'network' },
      { label: 'LuTimeline', path: '/docs/components/timeline', icon: 'clock' },
      { label: 'LuCalendar', path: '/docs/components/calendar', icon: 'calendar' },
      { label: 'LuCodeBlock', path: '/docs/components/code-block', icon: 'code' },
      { label: 'LuMediaGallery', path: '/docs/components/media-gallery', icon: 'images' },
    ]
  },
  {
    title: 'Charts',
    icon: 'bar-chart-3',
    items: [
      { label: 'LuBarChart', path: '/docs/components/bar-chart', icon: 'bar-chart-3' },
      { label: 'LuLineChart', path: '/docs/components/line-chart', icon: 'trending-up' },
      { label: 'LuDoughnutChart', path: '/docs/components/doughnut-chart', icon: 'pie-chart' },
      { label: 'LuGaugeChart', path: '/docs/components/gauge-chart', icon: 'gauge' },
      { label: 'LuSparkline', path: '/docs/components/sparkline', icon: 'activity' },
    ]
  },
  {
    title: 'Navigation',
    icon: 'compass',
    items: [
      { label: 'LuButton', path: '/docs/components/button', icon: 'mouse-pointer-click' },
      { label: 'LuLink', path: '/docs/components/link', icon: 'link-2' },
      { label: 'LuBreadcrumb', path: '/docs/components/breadcrumb', icon: 'navigation' },
      { label: 'LuTabs', path: '/docs/components/tabs', icon: 'panel-top-close' },
      { label: 'LuPagination', path: '/docs/components/pagination', icon: 'ellipsis' },
      { label: 'LuMenu', path: '/docs/components/dropdown', icon: 'list' },
    ]
  },
  {
    title: 'Feedback',
    icon: 'message-circle',
    items: [
      { label: 'LuAlert', path: '/docs/components/alert', icon: 'alert-circle' },
      { label: 'LuModal', path: '/docs/components/modal', icon: 'app-window' },
      { label: 'LuToast', path: '/docs/components/toast', icon: 'message-square' },
      { label: 'LuTooltip', path: '/docs/components/tooltip', icon: 'help-circle' },
      { label: 'LuPopover', path: '/docs/components/popover', icon: 'message-circle' },
      { label: 'LuSpinner', path: '/docs/components/spinner', icon: 'loader-2' },
      { label: 'LuSkeleton', path: '/docs/components/skeleton', icon: 'square-dashed' },
      { label: 'LuProgressBar', path: '/docs/components/progress-bar', icon: 'activity' },
      { label: 'LuDivider', path: '/docs/components/divider', icon: 'separator-horizontal' },
      { label: 'LuCollapsible', path: '/docs/components/collapsible', icon: 'chevrons-up-down' },
      { label: 'LuAccordion', path: '/docs/components/accordion', icon: 'fold-vertical' },
    ]
  },
  {
    title: 'Surfaces',
    icon: 'panel-left',
    items: [
      { label: 'LuDrawer', path: '/docs/components/drawer', icon: 'panel-right-open' },
      { label: 'LuBottomSheet', path: '/docs/components/bottom-sheet', icon: 'panel-bottom-open' },
    ]
  },
  {
    title: 'Complex',
    icon: 'boxes',
    items: [
      { label: 'LuKanban', path: '/docs/components/kanban', icon: 'kanban' },
      { label: 'LuCommandPalette', path: '/docs/components/command-palette', icon: 'terminal' },
      { label: 'LuRichTextEditor', path: '/docs/components/rich-text-editor', icon: 'file-text' },
      { label: 'LuList', path: '/docs/components/list', icon: 'list-todo' },
    ]
  },
  {
    title: 'Recipes',
    icon: 'book-open',
    items: [
      { label: 'Entity Card', path: '/docs/recipes/entity-card', icon: 'contact' },
      { label: 'Page Header', path: '/docs/recipes/page-header', icon: 'heading-1' },
      { label: 'Notification Center', path: '/docs/recipes/notification-center', icon: 'bell' },
      { label: 'Dashboard Grid', path: '/docs/recipes/dashboard-grid', icon: 'layout-dashboard' },
      { label: 'Theme Controls', path: '/docs/recipes/theme-controls', icon: 'sun-moon' },
      { label: 'POS Demo', path: '/docs/recipes/pos-demo', icon: 'shopping-cart' },
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
