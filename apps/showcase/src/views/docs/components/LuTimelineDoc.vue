<template>
  <LuPageHeader title="LuTimeline" description="A clean, responsive timeline component for displaying chronologically ordered events, activity logs, and multi-step onboarding processes." />

  <LuStack direction="vertical" gap="8">
    <LuCodeBlock variant="preview"
      title="Default Project Timeline"
      description="The standard timeline featuring status variants (default, success, info, warning, danger) with titles and body content."
      :code="defaultCode"
    >
      <template #preview>
        <div class="w-full max-w-md">
          <LuTimeline>
            <LuTimelineItem date="May 22, 2026" status="success" title="Milestone Achieved">
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                Core architecture finalized and verified via automated checks. All initial unit tests passing.
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem date="May 23, 2026" status="info" title="Shiki Codeblock Fixes">
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                Created the missing showcase route and resolved popover/select dropdown clipping within preview containers.
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem date="May 24, 2026" status="warning" title="LuPlanner Development">
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                Currently designing the weekly time grid and absolute positioning for planner event blocks.
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem date="June 01, 2026" status="default" title="Production Launch" :last="true">
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                Deploying stable v0.7.0 of the Lumora UI component framework to npm registry.
              </LuText>
            </LuTimelineItem>
          </LuTimeline>
        </div>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      title="Compact Activity Feed"
      description="Use the compact variant for denser info feeds like user action streams, comment sections, or notification logs."
      :code="compactCode"
    >
      <template #preview>
        <div class="w-full max-w-md">
          <LuTimeline variant="compact">
            <LuTimelineItem date="2 minutes ago" status="success" title="Sarah Jenkins uploaded a file">
              <LuText variant="caption" class="text-zinc-500">
                marketing_deck_final.pdf (4.8 MB)
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem date="10 minutes ago" status="info" title="System backup complete">
              <LuText variant="caption" class="text-zinc-500">
                Database snap_20260523 was successfully stored in AWS S3.
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem date="1 hour ago" status="default" title="Alex Rivera left a comment">
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                "Looks great! I'll review the responsive layout behavior tomorrow morning."
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem date="4 hours ago" status="danger" title="Build failed in production-deploy">
              <LuText variant="caption" class="text-zinc-500">
                Process terminated with exit code 1. Reference check logs.
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem date="Yesterday" status="warning" title="CPU usage exceeded 90%" :last="true">
              <LuText variant="caption" class="text-zinc-500">
                Alert resolved automatically after autoscaling group spawned new instances.
              </LuText>
            </LuTimelineItem>
          </LuTimeline>
        </div>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      title="Numbered Onboarding Steps"
      description="Render custom step numbers or indicators inside the dots by using the numbered variant alongside the index prop."
      :code="numberedCode"
    >
      <template #preview>
        <div class="w-full max-w-md">
          <LuTimeline variant="numbered">
            <LuTimelineItem :index="1" status="success" title="Create Account">
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                Sign up with your professional email address and verify your credentials.
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem :index="2" status="info" title="Configure Workspace">
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                Invite your teammates and select the default skin settings for the workspace.
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem :index="3" status="default" title="Upload Brand Assets" :last="true">
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                Import custom logo vectors, primary color tokens, and font styles.
              </LuText>
            </LuTimelineItem>
          </LuTimeline>
        </div>
      </template>
    </LuCodeBlock>

    <LuCodeBlock variant="preview"
      title="Custom Icon Slot"
      description="Replace the default status icons by passing a custom element to the icon slot."
      :code="iconSlotCode"
    >
      <template #preview>
        <div class="w-full max-w-md">
          <LuTimeline>
            <LuTimelineItem date="Yesterday" title="Award Received">
              <template #icon>
                <div class="flex items-center justify-center w-full h-full text-amber-500 bg-amber-50 rounded-full dark:bg-amber-950/40">
                  <LuIcon name="star" class="w-4 h-4 fill-amber-500" />
                </div>
              </template>
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                Lumora UI won the design framework of the year award!
              </LuText>
            </LuTimelineItem>
            <LuTimelineItem date="Last Week" title="Feature Request Approved" :last="true">
              <template #icon>
                <div class="flex items-center justify-center w-full h-full text-indigo-500 bg-indigo-50 rounded-full dark:bg-indigo-950/40">
                  <LuIcon name="zap" class="w-4 h-4 fill-indigo-500" />
                </div>
              </template>
              <LuText variant="body" class="text-zinc-600 dark:text-zinc-400">
                We're planning native weekly planner calendar support to allow developers to build scheduling utilities.
              </LuText>
            </LuTimelineItem>
          </LuTimeline>
        </div>
      </template>
    </LuCodeBlock>
  </LuStack>

  <LuText variant="section-title" class="mt-12 mb-4">LuTimeline Props</LuText>
  <PropTable :propsList="timelineProps" />

  <LuText variant="section-title" class="mt-12 mb-4">LuTimelineItem Props</LuText>
  <PropTable :propsList="timelineItemProps" />
</template>

<script setup lang="ts">
import { LuTimeline, LuTimelineItem, LuText, LuCodeBlock, LuStack, LuIcon } from '@astrake/lumora-ui';
import PropTable from '../../../components/PropTable.vue';

const defaultCode = `<template>
  <LuTimeline>
    <LuTimelineItem date="May 22, 2026" status="success" title="Milestone Achieved">
      <LuText variant="body">Core architecture finalized and verified.</LuText>
    </LuTimelineItem>
    <LuTimelineItem date="May 23, 2026" status="info" title="Shiki Codeblock Fixes">
      <LuText variant="body">Created missing routes and fixed dropdown clipping.</LuText>
    </LuTimelineItem>
    <LuTimelineItem date="June 01, 2026" status="default" title="Production Launch" :last="true">
      <LuText variant="body">Deploying stable v0.7.0 of Lumora UI.</LuText>
    </LuTimelineItem>
  </LuTimeline>
</template>`;

const compactCode = `<template>
  <LuTimeline variant="compact">
    <LuTimelineItem date="2 minutes ago" status="success" title="Sarah Jenkins uploaded a file">
      <LuText variant="caption">marketing_deck_final.pdf (4.8 MB)</LuText>
    </LuTimelineItem>
    <LuTimelineItem date="10 minutes ago" status="info" title="System backup complete" :last="true">
      <LuText variant="caption">Database snaps saved successfully.</LuText>
    </LuTimelineItem>
  </LuTimeline>
</template>`;

const numberedCode = `<template>
  <LuTimeline variant="numbered">
    <LuTimelineItem :index="1" status="success" title="Create Account">
      <LuText variant="body">Sign up with your professional email address.</LuText>
    </LuTimelineItem>
    <LuTimelineItem :index="2" status="info" title="Configure Workspace" :last="true">
      <LuText variant="body">Invite your teammates and select settings.</LuText>
    </LuTimelineItem>
  </LuTimeline>
</template>`;

const iconSlotCode = `<template>
  <LuTimeline>
    <LuTimelineItem date="Yesterday" title="Award Received" :last="true">
      <template #icon>
        <div class="flex items-center justify-center w-full h-full text-amber-500 bg-amber-50 rounded-full">
          <LuIcon name="star" class="w-4 h-4 fill-amber-500" />
        </div>
      </template>
      <LuText variant="body">Award won!</LuText>
    </LuTimelineItem>
  </LuTimeline>
</template>`;

const timelineProps = [
  { name: 'variant', type: "'default' | 'compact' | 'numbered'", default: "'default'", description: 'The visual variation of the timeline list container and item spacings.' }
];

const timelineItemProps = [
  { name: 'title', type: 'string', description: 'Bold header text displayed above the item description slot.' },
  { name: 'date', type: 'string', description: 'Secondary descriptive text or timestamp displayed above the title.' },
  { name: 'index', type: 'number', description: 'Step index number displayed inside the dot circle when LuTimeline variant is set to numbered.' },
  { name: 'status', type: "'default' | 'success' | 'warning' | 'danger' | 'info'", default: "'default'", description: 'Color indicator theme for the timeline dot border and background.' },
  { name: 'last', type: 'boolean', default: 'false', description: 'Hides the vertical vertical connecting line extending below this timeline item.' }
];
</script>
