<template>
  <LuPageHeader
    title="Embedded Shell"
    description="Specialized application shell for kiosks, POS systems, and embedded touch interfaces. Provides a topbar with 3-zone layout, full content area, and an optional status bar at the bottom."
  />

  <!-- Example 1: Landscape Kiosk / Barcode Scanner -->
  <LuCodeBlock
    variant="preview"
    title="Landscape Embedded Interface"
    description="Standard landscape layout for touch panels or tablets. Includes topbar with clock, content zone, and a status bar showing device info."
    :code="exampleCode"
  >
    <template #preview>
      <!--
        Bounded height wrapper — shell uses height: 100% to fill it.
        For a real deployment, wrap in a 100dvh container at the page root.
      -->
      <div style="height: 400px; max-width: 600px; margin: 0 auto; position: relative; overflow: hidden; border-radius: 0.75rem; border: 1px solid color-mix(in srgb, currentColor 12%, transparent); box-shadow: 0 16px 48px rgba(0,0,0,0.25);">
        <LuEmbeddedShell>
          <template #topbar>
            <LuEmbeddedTopBar>
              <template #left>
                <LuStack direction="horizontal" align="center" gap="3">
                  <LuButton variant="ghost" class="p-2 h-8 w-8"><LuIcon name="menu" /></LuButton>
                  <LuText variant="section-title">Kiosk App</LuText>
                </LuStack>
              </template>
              <template #center>
                <LuText class="text-sm opacity-50">{{ currentTime }}</LuText>
              </template>
              <template #right>
                <LuButton variant="primary">Help</LuButton>
              </template>
            </LuEmbeddedTopBar>
          </template>

          <template #content>
            <LuFill class="overflow-y-auto">
              <div style="width: 100%; max-width: 20rem; margin: 0 auto; padding: 2.5rem 1rem 1rem;">
                <div class="lu-embedded-barcode-input">
                  <LuText variant="label" class="mb-2">Scan Barcode</LuText>
                  <div class="lu-embedded-barcode-input-field lu-embedded-barcode-input-field--scanning">
                    <LuIcon name="scan" style="color: var(--lu-color-primary, #6366f1);" />
                    <input
                      type="text"
                      class="lu-embedded-barcode-input-inner"
                      :value="barcodeValue"
                      placeholder="Ready to scan..."
                    />
                  </div>
                </div>
              </div>
            </LuFill>
          </template>

          <template #statusbar>
            <LuEmbeddedStatusBar>
              <template #left>
                <span>Device ID: KSK-092</span>
              </template>
              <template #center>
                <span>{{ scanCount }} items scanned</span>
              </template>
              <template #right>
                <LuStack direction="horizontal" align="center" gap="2">
                  <LuIcon name="wifi" style="width: 0.75rem; height: 0.75rem; color: #22c55e;" />
                  <span>Connected</span>
                </LuStack>
              </template>
            </LuEmbeddedStatusBar>
          </template>
        </LuEmbeddedShell>
      </div>
    </template>
  </LuCodeBlock>

  <!-- Example 2: Portrait HMI Control Panel -->
  <LuCodeBlock
    variant="preview"
    title="Portrait HMI Interface"
    description="Portrait layout for wall-mounted or handheld embedded devices. Uses compact topbar and icon-row status bar for quick system access."
    :code="exampleCodePortrait"
  >
    <template #preview>
      <div style="height: 500px; width: 300px; margin: 0 auto; position: relative; overflow: hidden; border-radius: 0.75rem; border: 1px solid color-mix(in srgb, currentColor 12%, transparent); box-shadow: 0 16px 48px rgba(0,0,0,0.25);">
        <LuEmbeddedShell>
          <template #topbar>
            <LuEmbeddedTopBar variant="compact">
              <template #left>
                <LuIcon name="cpu" />
              </template>
              <template #center>
                <LuText variant="section-title">Control Panel</LuText>
              </template>
              <template #right>
                <div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background: #22c55e;" />
              </template>
            </LuEmbeddedTopBar>
          </template>

          <template #content>
            <LuFill class="overflow-y-auto p-3">
              <LuStack direction="vertical" gap="3">
                <LuCard v-for="setting in hmiSettings" :key="setting.id">
                  <LuStack direction="horizontal" align="center" gap="3">
                    <LuIcon :name="setting.icon" style="opacity: 0.5;" />
                    <LuStack direction="vertical" gap="0">
                      <LuText variant="label">{{ setting.name }}</LuText>
                      <LuText class="text-xs opacity-40">{{ setting.value }}</LuText>
                    </LuStack>
                  </LuStack>
                </LuCard>
              </LuStack>
            </LuFill>
          </template>

          <template #statusbar>
            <LuEmbeddedStatusBar variant="icon-row">
              <template #center>
                <LuStack direction="horizontal" align="center" gap="6">
                  <LuButton variant="ghost" class="p-2 h-9 w-9"><LuIcon name="settings" /></LuButton>
                  <LuButton variant="ghost" class="p-2 h-9 w-9"><LuIcon name="activity" /></LuButton>
                  <LuButton variant="ghost" class="p-2 h-9 w-9" style="color: #ef4444;"><LuIcon name="power" /></LuButton>
                </LuStack>
              </template>
            </LuEmbeddedStatusBar>
          </template>
        </LuEmbeddedShell>
      </div>
    </template>
  </LuCodeBlock>

  <!-- API Reference -->
  <LuStack direction="vertical" gap="6" class="mt-10">
    <LuText as="h2" variant="default">API Reference</LuText>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuEmbeddedShell</LuText>
      <PropTable :props-list="shellProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuEmbeddedTopBar</LuText>
      <PropTable :props-list="topbarProps" />
    </div>

    <div>
      <LuText as="h3" variant="section-title" class="mb-3">LuEmbeddedStatusBar</LuText>
      <PropTable :props-list="statusbarProps" />
    </div>
  </LuStack>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import {
  LuStack, LuText, LuButton, LuIcon, LuCard, LuFill, LuCodeBlock,
  LuEmbeddedShell, LuEmbeddedTopBar, LuEmbeddedStatusBar
} from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';
import LuPageHeader from '../../../recipes/page-header/LuPageHeader.vue';

const barcodeValue = ref('sdfsdf');
const scanCount = ref(14);
const currentTime = ref('');

const hmiSettings = [
  { id: 1, icon: 'thermometer', name: 'Temperature', value: '72.4 °F' },
  { id: 2, icon: 'droplets', name: 'Humidity', value: '45%' },
  { id: 3, icon: 'zap', name: 'Power Draw', value: '2.4 kW' },
  { id: 4, icon: 'signal', name: 'Signal', value: '-68 dBm' },
];

let timer: ReturnType<typeof setInterval> | null = null;

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

const exampleCode = `<div style="height: 100dvh;">
  <LuEmbeddedShell>
    <template #topbar>
      <LuEmbeddedTopBar>
        <template #left>
          <LuText variant="section-title">Kiosk App</LuText>
        </template>
        <template #center>
          <span>08:42 AM</span>
        </template>
        <template #right>
          <LuButton variant="primary">Help</LuButton>
        </template>
      </LuEmbeddedTopBar>
    </template>

    <template #content>
      <LuFill class="overflow-y-auto p-6">
        <!-- Kiosk content -->
      </LuFill>
    </template>

    <template #statusbar>
      <LuEmbeddedStatusBar>
        <template #left>Device ID: KSK-092</template>
        <template #right>Connected</template>
      </LuEmbeddedStatusBar>
    </template>
  </LuEmbeddedShell>
</div>`;

const exampleCodePortrait = `<div style="height: 100dvh;">
  <LuEmbeddedShell>
    <template #topbar>
      <LuEmbeddedTopBar variant="compact">
        <template #center>
          <LuText variant="section-title">Control Panel</LuText>
        </template>
      </LuEmbeddedTopBar>
    </template>

    <template #content>
      <LuFill class="overflow-y-auto p-3">
        <!-- HMI content -->
      </LuFill>
    </template>

    <template #statusbar>
      <LuEmbeddedStatusBar variant="icon-row">
        <template #center>
          <LuButton variant="ghost"><LuIcon name="settings" /></LuButton>
          <LuButton variant="ghost"><LuIcon name="power" /></LuButton>
        </template>
      </LuEmbeddedStatusBar>
    </template>
  </LuEmbeddedShell>
</div>`;

const shellProps = [
  { name: 'variant', type: '"default" | "fullscreen"', default: '"default"', description: 'Visual style. "fullscreen" forces 100dvh for standalone page usage.' },
  { name: 'ariaLabel', type: 'string', default: '"Embedded application"', description: 'Accessible label for the application region.' }
];

const topbarProps = [
  { name: 'variant', type: '"default" | "compact"', default: '"default"', description: 'Compact reduces height to 2.25rem for space-constrained devices.' }
];

const statusbarProps = [
  { name: 'variant', type: '"default" | "icon-row"', default: '"default"', description: '"icon-row" increases height to 3rem for larger touch targets.' }
];
</script>
