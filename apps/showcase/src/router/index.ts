import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import GettingStartedView from '../views/docs/GettingStartedView.vue';

// Components
import LuAvatarDoc from '../views/docs/components/LuAvatarDoc.vue';
import LuBadgeDoc from '../views/docs/components/LuBadgeDoc.vue';
import LuButtonDoc from '../views/docs/components/LuButtonDoc.vue';
import LuCollapsibleDoc from '../views/docs/components/LuCollapsibleDoc.vue';
import LuIconDoc from '../views/docs/components/LuIconDoc.vue';
import LuInputDoc from '../views/docs/components/LuInputDoc.vue';
import LuProgressBarDoc from '../views/docs/components/LuProgressBarDoc.vue';
import LuSelectDoc from '../views/docs/components/LuSelectDoc.vue';
import LuSwitchDoc from '../views/docs/components/LuSwitchDoc.vue';
import LuTabsDoc from '../views/docs/components/LuTabsDoc.vue';
import LuTextDoc from '../views/docs/components/LuTextDoc.vue';
import LuThemeSwitchDoc from '../views/docs/components/LuThemeSwitchDoc.vue';
import LuTooltipDoc from '../views/docs/components/LuTooltipDoc.vue';

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

// Demos
import DesktopDemo from '../views/demo/DesktopDemo.vue';
import MobileDemo from '../views/demo/MobileDemo.vue';
import EmbeddedDemo from '../views/demo/EmbeddedDemo.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/docs', redirect: '/docs/getting-started' },
    { path: '/docs/getting-started', component: GettingStartedView },
    
    { path: '/docs/components', redirect: '/docs/components/avatar' },
    { path: '/docs/components/avatar', component: LuAvatarDoc },
    { path: '/docs/components/badge', component: LuBadgeDoc },
    { path: '/docs/components/button', component: LuButtonDoc },
    { path: '/docs/components/collapsible', component: LuCollapsibleDoc },
    { path: '/docs/components/icon', component: LuIconDoc },
    { path: '/docs/components/input', component: LuInputDoc },
    { path: '/docs/components/progress-bar', component: LuProgressBarDoc },
    { path: '/docs/components/select', component: LuSelectDoc },
    { path: '/docs/components/switch', component: LuSwitchDoc },
    { path: '/docs/components/tabs', component: LuTabsDoc },
    { path: '/docs/components/text', component: LuTextDoc },
    { path: '/docs/components/theme-switch', component: LuThemeSwitchDoc },
    { path: '/docs/components/tooltip', component: LuTooltipDoc },

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

    { path: '/demo/desktop', component: DesktopDemo },
    { path: '/demo/mobile', component: MobileDemo },
    { path: '/demo/embedded', component: EmbeddedDemo },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});
