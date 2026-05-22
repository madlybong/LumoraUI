import { createRouter, createWebHistory } from 'vue-router';

import NotFoundView from '../views/NotFoundView.vue';
import GettingStartedView from '../views/docs/GettingStartedView.vue';

// Components
import LuAlertDoc from '../views/docs/components/LuAlertDoc.vue';
import LuAvatarDoc from '../views/docs/components/LuAvatarDoc.vue';
import LuBadgeDoc from '../views/docs/components/LuBadgeDoc.vue';
import LuBreadcrumbDoc from '../views/docs/components/LuBreadcrumbDoc.vue';
import LuButtonDoc from '../views/docs/components/LuButtonDoc.vue';
import LuCardDoc from '../views/docs/components/LuCardDoc.vue';
import LuCheckboxDoc from '../views/docs/components/LuCheckboxDoc.vue';
import LuCollapsibleDoc from '../views/docs/components/LuCollapsibleDoc.vue';
import LuDividerDoc from '../views/docs/components/LuDividerDoc.vue';
import LuMenuDoc from '../views/docs/components/LuMenuDoc.vue';
import LuFormDoc from '../views/docs/components/LuFormDoc.vue';
import LuIconDoc from '../views/docs/components/LuIconDoc.vue';
import LuInputDoc from '../views/docs/components/LuInputDoc.vue';
import LuLinkDoc from '../views/docs/components/LuLinkDoc.vue';
import LuModalDoc from '../views/docs/components/LuModalDoc.vue';
import LuPageHeaderDoc from '../views/docs/components/LuPageHeaderDoc.vue';
import LuPaginationDoc from '../views/docs/components/LuPaginationDoc.vue';
import LuProgressBarDoc from '../views/docs/components/LuProgressBarDoc.vue';
import LuRadioDoc from '../views/docs/components/LuRadioDoc.vue';
import LuSelectDoc from '../views/docs/components/LuSelectDoc.vue';
import LuSkeletonDoc from '../views/docs/components/LuSkeletonDoc.vue';
import LuSpinnerDoc from '../views/docs/components/LuSpinnerDoc.vue';
import LuSwitchDoc from '../views/docs/components/LuSwitchDoc.vue';
import LuTableDoc from '../views/docs/components/LuTableDoc.vue';
import LuTabsDoc from '../views/docs/components/LuTabsDoc.vue';
import LuTagDoc from '../views/docs/components/LuTagDoc.vue';
import LuTextDoc from '../views/docs/components/LuTextDoc.vue';
import LuTextareaDoc from '../views/docs/components/LuTextareaDoc.vue';
import LuThemeSwitchDoc from '../views/docs/components/LuThemeSwitchDoc.vue';
import LuToggleGroupDoc from '../views/docs/components/LuToggleGroupDoc.vue';
import LuTooltipDoc from '../views/docs/components/LuTooltipDoc.vue';

// v0.3.0
import LuDataGridDoc from '../views/docs/components/LuDataGridDoc.vue';
import LuBarChartDoc from '../views/docs/components/LuBarChartDoc.vue';
import LuLineChartDoc from '../views/docs/components/LuLineChartDoc.vue';
import LuDoughnutChartDoc from '../views/docs/components/LuDoughnutChartDoc.vue';
import LuSparklineDoc from '../views/docs/components/LuSparklineDoc.vue';
import LuGaugeChartDoc from '../views/docs/components/LuGaugeChartDoc.vue';
import LuFileUploadDoc from '../views/docs/components/LuFileUploadDoc.vue';
import LuMediaGalleryDoc from '../views/docs/components/LuMediaGalleryDoc.vue';
import LuTimelineDoc from '../views/docs/components/LuTimelineDoc.vue';
import LuFormWizardDoc from '../views/docs/components/LuFormWizardDoc.vue';
import LuTreeDoc from '../views/docs/components/LuTreeDoc.vue';

// v0.4.0
import LuKanbanDoc from '../views/docs/components/LuKanbanDoc.vue';
import LuCalendarDoc from '../views/docs/components/LuCalendarDoc.vue';
import LuDateRangePickerDoc from '../views/docs/components/LuDateRangePickerDoc.vue';
import LuDashboardGridDoc from '../views/docs/components/LuDashboardGridDoc.vue';
import LuCommandPaletteDoc from '../views/docs/components/LuCommandPaletteDoc.vue';
import LuRichTextEditorDoc from '../views/docs/components/LuRichTextEditorDoc.vue';
import LuNotificationCenterDoc from '../views/docs/components/LuNotificationCenterDoc.vue';

// v0.5.0
import LuEntityCardDoc from '../views/docs/components/LuEntityCardDoc.vue';

// Layout
import LuStackDoc from '../views/docs/layout/LuStackDoc.vue';
import LuDockDoc from '../views/docs/layout/LuDockDoc.vue';
import LuSplitDoc from '../views/docs/layout/LuSplitDoc.vue';
import LuFillFixedDoc from '../views/docs/layout/LuFillFixedDoc.vue';
import LuScrollDoc from '../views/docs/layout/LuScrollDoc.vue';
import LuGridDoc from '../views/docs/layout/LuGridDoc.vue';
import LuOverlayDoc from '../views/docs/layout/LuOverlayDoc.vue';

// Shells
import LuDesktopShellDoc from '../views/docs/shells/LuDesktopShellDoc.vue';
import LuMobileShellDoc from '../views/docs/shells/LuMobileShellDoc.vue';
import LuEmbeddedShellDoc from '../views/docs/shells/LuEmbeddedShellDoc.vue';
import LuEmbeddedPOSDoc from '../views/docs/shells/LuEmbeddedPOSDoc.vue';

// Demos removed

import HomeView from '../views/HomeView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/docs', redirect: '/docs/getting-started' },
    { path: '/docs/getting-started', component: GettingStartedView },
    
    { path: '/docs/components', redirect: '/docs/components/alert' },
    { path: '/docs/components/alert', component: LuAlertDoc },
    { path: '/docs/components/avatar', component: LuAvatarDoc },
    { path: '/docs/components/badge', component: LuBadgeDoc },
    { path: '/docs/components/breadcrumb', component: LuBreadcrumbDoc },
    { path: '/docs/components/button', component: LuButtonDoc },
    { path: '/docs/components/card', component: LuCardDoc },
    { path: '/docs/components/checkbox', component: LuCheckboxDoc },
    { path: '/docs/components/collapsible', component: LuCollapsibleDoc },
    { path: '/docs/components/divider', component: LuDividerDoc },
    { path: '/docs/components/dropdown', component: LuMenuDoc },
    { path: '/docs/components/form', component: LuFormDoc },
    { path: '/docs/components/icon', component: LuIconDoc },
    { path: '/docs/components/input', component: LuInputDoc },
    { path: '/docs/components/link', component: LuLinkDoc },
    { path: '/docs/components/modal', component: LuModalDoc },
    { path: '/docs/components/page-header', component: LuPageHeaderDoc },
    { path: '/docs/components/pagination', component: LuPaginationDoc },
    { path: '/docs/components/progress-bar', component: LuProgressBarDoc },
    { path: '/docs/components/radio', component: LuRadioDoc },
    { path: '/docs/components/select', component: LuSelectDoc },
    { path: '/docs/components/skeleton', component: LuSkeletonDoc },
    { path: '/docs/components/spinner', component: LuSpinnerDoc },
    { path: '/docs/components/switch', component: LuSwitchDoc },
    { path: '/docs/components/table', component: LuTableDoc },
    { path: '/docs/components/tabs', component: LuTabsDoc },
    { path: '/docs/components/tag', component: LuTagDoc },
    { path: '/docs/components/text', component: LuTextDoc },
    { path: '/docs/components/textarea', component: LuTextareaDoc },
    { path: '/docs/components/theme-switch', component: LuThemeSwitchDoc },
    { path: '/docs/components/toggle-group', component: LuToggleGroupDoc },
    { path: '/docs/components/tooltip', component: LuTooltipDoc },

    // v0.3.0
    { path: '/docs/components/data-grid', component: LuDataGridDoc },
    { path: '/docs/components/bar-chart', component: LuBarChartDoc },
    { path: '/docs/components/line-chart', component: LuLineChartDoc },
    { path: '/docs/components/doughnut-chart', component: LuDoughnutChartDoc },
    { path: '/docs/components/sparkline', component: LuSparklineDoc },
    { path: '/docs/components/gauge-chart', component: LuGaugeChartDoc },
    { path: '/docs/components/file-upload', component: LuFileUploadDoc },
    { path: '/docs/components/media-gallery', component: LuMediaGalleryDoc },
    { path: '/docs/components/timeline', component: LuTimelineDoc },
    { path: '/docs/components/form-wizard', component: LuFormWizardDoc },
    { path: '/docs/components/tree', component: LuTreeDoc },

    // v0.4.0
    { path: '/docs/components/kanban', component: LuKanbanDoc },
    { path: '/docs/components/calendar', component: LuCalendarDoc },
    { path: '/docs/components/date-range-picker', component: LuDateRangePickerDoc },
    { path: '/docs/components/dashboard-grid', component: LuDashboardGridDoc },
    { path: '/docs/components/command-palette', component: LuCommandPaletteDoc },
    { path: '/docs/components/rich-text-editor', component: LuRichTextEditorDoc },
    { path: '/docs/components/notification-center', component: LuNotificationCenterDoc },

    // v0.5.0
    { path: '/docs/components/entity-card', component: LuEntityCardDoc },

    { path: '/docs/layout', redirect: '/docs/layout/stack' },
    { path: '/docs/layout/stack', component: LuStackDoc },
    { path: '/docs/layout/dock', component: LuDockDoc },
    { path: '/docs/layout/split', component: LuSplitDoc },
    { path: '/docs/layout/fill-fixed', component: LuFillFixedDoc },
    { path: '/docs/layout/scroll', component: LuScrollDoc },
    { path: '/docs/layout/grid', component: LuGridDoc },
    { path: '/docs/layout/overlay', component: LuOverlayDoc },
    
    { path: '/docs/shells', redirect: '/docs/shells/desktop' },
    { path: '/docs/shells/desktop', component: LuDesktopShellDoc },
    { path: '/docs/shells/mobile', component: LuMobileShellDoc },
    { path: '/docs/shells/embedded', component: LuEmbeddedShellDoc },
    { path: '/docs/shells/embedded-pos', component: LuEmbeddedPOSDoc },


    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});
