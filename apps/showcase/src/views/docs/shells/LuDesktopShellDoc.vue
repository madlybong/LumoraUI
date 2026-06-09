<template>
  <LuPageHeader
    title="Desktop Shell"
    description="A full-featured application shell for desktop web apps, featuring a topbar, icon rail, collapsible sidebar, scrollable content area, and status bar."
  />

  <!-- Example 1: Complete Desktop Layout -->
  <LuCodeBlock
    variant="preview"
    title="Complete Desktop Layout"
    description="Full shell with topbar, icon rail, sidebar navigation, content area, and status bar."
    :code="exampleCode"
  >
    <template #preview>
      <!-- 
        FIX: wrapper controls height; shell uses height:100% to respect it. 
        Use a relative/sized container — the shell fills it.
      -->
      <div style="height: 420px; width: 100%; position: relative; overflow: hidden; border-radius: 0.75rem; border: 1px solid color-mix(in srgb, currentColor 12%, transparent);">
        <LuDesktopShell>
          <template #topbar>
            <LuDesktopTopBar>
              <template #left>
                <LuStack direction="horizontal" align="center" gap="3">
                  <LuIcon name="layout-dashboard" />
                  <LuText variant="section-title">My App</LuText>
                </LuStack>
              </template>
              <template #center>
                <!-- global search / command launcher -->
              </template>
              <template #right>
                <LuStack direction="horizontal" align="center" gap="2">
                  <LuButton variant="ghost" class="p-2 h-8 w-8"><LuIcon name="bell" /></LuButton>
                  <LuAvatar variant="sm" fallback="U" />
                </LuStack>
              </template>
            </LuDesktopTopBar>
          </template>

          <template #rail>
            <LuDesktopRailBar>
              <LuDesktopRailItem :active="activeRailItem === 'home'" title="Home" @click="activeRailItem = 'home'">
                <template #icon><LuIcon name="home" /></template>
                Home
              </LuDesktopRailItem>
              <LuDesktopRailItem :active="activeRailItem === 'users'" title="Users" @click="activeRailItem = 'users'">
                <template #icon><LuIcon name="users" /></template>
                Users
              </LuDesktopRailItem>
              <LuDesktopRailItem :active="activeRailItem === 'analytics'" title="Analytics" @click="activeRailItem = 'analytics'">
                <template #icon><LuIcon name="bar-chart-2" /></template>
                Analytics
              </LuDesktopRailItem>
              <LuDesktopRailItem :active="activeRailItem === 'settings'" title="Settings" @click="activeRailItem = 'settings'">
                <template #icon><LuIcon name="settings" /></template>
                Settings
              </LuDesktopRailItem>
            </LuDesktopRailBar>
          </template>

          <template #sidebar>
            <LuDesktopSidebar>
              <template #header>
                <LuText variant="label" class="text-xs uppercase tracking-widest opacity-50">Navigation</LuText>
              </template>
              <template #content>
                <LuStack direction="vertical" gap="1">
                  <LuButton variant="ghost" align="left" full>Dashboard</LuButton>
                  <LuButton variant="ghost" align="left" full>Analytics</LuButton>
                  <LuButton variant="ghost" align="left" full>Reports</LuButton>
                  <LuButton variant="ghost" align="left" full>Team</LuButton>
                </LuStack>
              </template>
              <template #footer>
                <LuButton variant="ghost" align="left" full class="text-xs">
                  <LuIcon name="log-out" class="mr-2" /> Sign out
                </LuButton>
              </template>
            </LuDesktopSidebar>
          </template>

          <template #content>
            <LuFill class="overflow-y-auto p-5">
              <LuStack direction="vertical" gap="4">
                <LuCard>
                  <LuText variant="section-title">Main Content Area</LuText>
                  <LuText variant="body" class="mt-2 text-sm opacity-60">
                    Primary application content renders here. This zone fills all remaining space and scrolls independently.
                  </LuText>
                </LuCard>
                <LuCard v-for="i in 3" :key="i">
                  <LuText variant="label">Section {{ i }}</LuText>
                </LuCard>
              </LuStack>
            </LuFill>
          </template>

          <template #statusbar>
            <LuDesktopStatusBar>
              <template #left>
                <LuText>Status: Online</LuText>
              </template>
              <template #right>
                <LuText>v0.7.4</LuText>
              </template>
            </LuDesktopStatusBar>
          </template>
        </LuDesktopShell>
      </div>
    </template>
  </LuCodeBlock>

  <!-- Example 2: Collapsible Sidebar -->
  <LuCodeBlock
    variant="preview"
    title="Collapsible Sidebar"
    description="The sidebar collapses via an external toggle in the topbar using v-model."
    :code="exampleCodeCollapsible"
  >
    <template #preview>
      <div style="height: 380px; width: 100%; position: relative; overflow: hidden; border-radius: 0.75rem; border: 1px solid color-mix(in srgb, currentColor 12%, transparent);">
        <LuDesktopShell>
          <template #topbar>
            <LuDesktopTopBar variant="compact">
              <template #left>
                <LuStack direction="horizontal" align="center" gap="2">
                  <LuButton variant="ghost" class="p-1 h-8 w-8" @click="collapsibleSidebarOpen = !collapsibleSidebarOpen">
                    <LuIcon name="panel-left" />
                  </LuButton>
                  <LuText variant="section-title">Collapsible Example</LuText>
                </LuStack>
              </template>
            </LuDesktopTopBar>
          </template>

          <template #sidebar>
            <!-- collapsible: true; v-model controls the open state (true = open, false = collapsed) -->
            <LuDesktopSidebar collapsible v-model="collapsibleSidebarOpen">
              <template #content>
                <LuStack direction="vertical" gap="1">
                  <LuButton variant="ghost" align="left" full>Menu Item 1</LuButton>
                  <LuButton variant="ghost" align="left" full>Menu Item 2</LuButton>
                  <LuButton variant="ghost" align="left" full>Menu Item 3</LuButton>
                </LuStack>
              </template>
            </LuDesktopSidebar>
          </template>

          <template #content>
            <LuFill class="overflow-y-auto p-5">
              <LuText variant="body">
                Click the panel-left icon in the topbar to toggle the sidebar.
                Sidebar is currently: <strong>{{ collapsibleSidebarOpen ? 'Open' : 'Collapsed' }}</strong>
              </LuText>
            </LuFill>
          </template>
        </LuDesktopShell>
      </div>
    </template>
  </LuCodeBlock>

  <!-- Example 3: Expandable Rail on Hover -->
  <LuCodeBlock
    variant="preview"
    title="Expandable Rail Bar"
    description="The rail bar expands on hover to reveal labels alongside icons."
    :code="exampleCodeRail"
  >
    <template #preview>
      <div style="height: 360px; width: 100%; position: relative; overflow: hidden; border-radius: 0.75rem; border: 1px solid color-mix(in srgb, currentColor 12%, transparent);">
        <LuDesktopShell>
          <template #rail>
            <LuDesktopRailBar expand-on-hover>
              <LuDesktopRailItem active title="Dashboard">
                <template #icon><LuIcon name="layout-dashboard" /></template>
                Dashboard
              </LuDesktopRailItem>
              <LuDesktopRailItem title="Users">
                <template #icon><LuIcon name="users" /></template>
                Users
              </LuDesktopRailItem>
              <LuDesktopRailItem title="Analytics">
                <template #icon><LuIcon name="bar-chart-2" /></template>
                Analytics
              </LuDesktopRailItem>
              <LuDesktopRailItem title="Settings">
                <template #icon><LuIcon name="settings" /></template>
                Settings
              </LuDesktopRailItem>
            </LuDesktopRailBar>
          </template>

          <template #content>
            <LuFill class="p-5">
              <LuText variant="body" class="opacity-60">Hover over the rail bar on the left to expand it and reveal labels.</LuText>
            </LuFill>
          </template>
        </LuDesktopShell>
      </div>
    </template>
  </LuCodeBlock>

  <!-- API Reference -->
  <LuStack direction="vertical" gap="6" class="mt-10">
    <LuText as="h2" variant="default">API Reference</LuText>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuDesktopShell</LuText>
      <PropTable :props-list="shellProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuDesktopTopBar</LuText>
      <PropTable :props-list="topbarProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuDesktopSidebar</LuText>
      <PropTable :props-list="sidebarProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuDesktopRailBar</LuText>
      <PropTable :props-list="railbarProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuDesktopRailItem</LuText>
      <PropTable :props-list="railItemProps" />
    </div>
  </LuStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  LuStack, LuText, LuButton, LuIcon, LuAvatar, LuCard, LuFill, LuCodeBlock,
  LuDesktopShell, LuDesktopTopBar, LuDesktopRailBar, LuDesktopRailItem,
  LuDesktopSidebar, LuDesktopStatusBar
} from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';

const activeRailItem = ref('home');
const collapsibleSidebarOpen = ref(true);

const exampleCode = `<div style="height: 100vh;">
  <LuDesktopShell>
    <template #topbar>
      <LuDesktopTopBar>
        <template #left>...</template>
        <template #center><!-- search --></template>
        <template #right>...</template>
      </LuDesktopTopBar>
    </template>

    <template #rail>
      <LuDesktopRailBar>
        <LuDesktopRailItem active title="Home">
          <template #icon><LuIcon name="home" /></template>
          Home
        </LuDesktopRailItem>
      </LuDesktopRailBar>
    </template>

    <template #sidebar>
      <LuDesktopSidebar>
        <template #header>Navigation</template>
        <template #content>
          <LuButton variant="ghost" align="left" full>Dashboard</LuButton>
        </template>
        <template #footer>...</template>
      </LuDesktopSidebar>
    </template>

    <template #content>
      <LuFill class="overflow-y-auto p-5">
        Main content here
      </LuFill>
    </template>

    <template #statusbar>
      <LuDesktopStatusBar>
        <template #left>Status: Online</template>
        <template #right>v1.0.0</template>
      </LuDesktopStatusBar>
    </template>
  </LuDesktopShell>
</div>`;

const exampleCodeCollapsible = `<script setup>
const sidebarOpen = ref(true);
<\/script>

<LuDesktopShell>
  <template #topbar>
    <LuDesktopTopBar>
      <template #left>
        <LuButton @click="sidebarOpen = !sidebarOpen">Toggle</LuButton>
      </template>
    </LuDesktopTopBar>
  </template>

  <template #sidebar>
    <!-- collapsible + v-model: controls open state directly -->
    <LuDesktopSidebar collapsible v-model="sidebarOpen">
      <template #content>...</template>
    </LuDesktopSidebar>
  </template>
</LuDesktopShell>`;

const exampleCodeRail = `<LuDesktopShell>
  <template #rail>
    <LuDesktopRailBar expand-on-hover>
      <LuDesktopRailItem active title="Dashboard">
        <template #icon><LuIcon name="layout-dashboard" /></template>
        Dashboard
      </LuDesktopRailItem>
    </LuDesktopRailBar>
  </template>
  <template #content>...</template>
</LuDesktopShell>`;

const shellProps = [
  { name: 'variant', type: '"default" | "compact"', default: '"default"', description: 'Visual style variant. Compact reduces topbar height.' },
  { name: 'ariaLabel', type: 'string', default: '"Application"', description: 'Accessible label for the root application element.' }
];

const topbarProps = [
  { name: 'variant', type: '"default" | "bordered" | "transparent" | "compact"', default: '"default"', description: 'Visual style variant.' }
];

const sidebarProps = [
  { name: 'variant', type: '"default" | "narrow" | "bordered"', default: '"default"', description: 'Visual style variant.' },
  { name: 'collapsible', type: 'boolean', default: 'false', description: 'Enables collapsible behavior via v-model.' },
  { name: 'modelValue', type: 'boolean', default: 'true', description: 'When true, sidebar is open. Bind with v-model.' }
];

const railbarProps = [
  { name: 'expanded', type: 'boolean', default: 'false', description: 'Forces the rail to be always expanded.' },
  { name: 'expandOnHover', type: 'boolean', default: 'false', description: 'Expands the rail when the user hovers over it.' },
  { name: 'ariaLabel', type: 'string', default: '"Primary navigation"', description: 'Accessible label for the nav region.' }
];

const railItemProps = [
  { name: 'active', type: 'boolean', default: 'false', description: 'Marks this item as the currently active route.' },
  { name: 'to', type: 'any', default: 'undefined', description: 'Vue Router target. Renders as RouterLink when set, button otherwise.' },
  { name: 'title', type: 'string', default: 'undefined', description: 'Tooltip text shown when the rail is collapsed.' }
];
</script>
