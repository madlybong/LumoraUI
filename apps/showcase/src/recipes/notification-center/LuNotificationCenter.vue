<script setup lang="ts">
import { computed, ref } from "vue";
import { useLumoraConfig } from '@astrake/lumora-ui';
import { LuText } from '@astrake/lumora-ui';
import { LuIcon } from '@astrake/lumora-ui';
import { LuButton } from '@astrake/lumora-ui';

defineOptions({ name: "LuNotificationCenter" });

export interface NotificationItem {
  id: string;
  title: string;
  body?: string;
  time?: string;
  read?: boolean;
  icon?: string;
  iconColor?: string;
  action?: () => void;
}

const props = withDefaults(defineProps<{
  notifications: NotificationItem[];
  maxVisible?: number;
}>(), {
  maxVisible: 30,
});

const emit = defineEmits<{
  (e: "read", id: string): void;
  (e: "read-all"): void;
  (e: "dismiss", id: string): void;
  (e: "clear-all"): void;
  (e: "click", notification: NotificationItem): void;
}>();

const { resolveSkin } = useLumoraConfig();

const isOpen = ref(false);

const unreadCount = computed(() => props.notifications.filter(n => !n.read).length);

function handleClick(n: NotificationItem) {
  if (!n.read) emit("read", n.id);
  n.action?.();
  emit("click", n);
}

const visibleNotifications = computed(() =>
  props.notifications.slice(0, props.maxVisible)
);

// Close on outside click
function onOverlayClick() {
  isOpen.value = false;
}

const skinCenter = computed(() => resolveSkin("LuNotificationCenter"));
const skinTrigger = computed(() => resolveSkin("LuNotificationCenterTrigger"));
const skinBadge = computed(() => resolveSkin("LuNotificationCenterBadge"));
const skinPanel = computed(() => resolveSkin("LuNotificationCenterPanel"));
const skinHeader = computed(() => resolveSkin("LuNotificationCenterHeader"));
const skinList = computed(() => resolveSkin("LuNotificationCenterList"));
const skinEmpty = computed(() => resolveSkin("LuNotificationCenterEmpty"));
const skinFooter = computed(() => resolveSkin("LuNotificationCenterFooter"));
</script>

<template>
  <div :class="skinCenter">
    <!-- Backdrop -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[90]"
        aria-hidden="true"
        @click="onOverlayClick"
      />
    </Teleport>

    <!-- Bell trigger -->
    <button
      type="button"
      :class="skinTrigger"
      :aria-label="`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`"
      :aria-expanded="isOpen"
      @click.stop="isOpen = !isOpen"
    >
      <LuIcon name="bell" :size="18" />
      <span v-if="unreadCount > 0" :class="skinBadge" aria-hidden="true">
        {{ unreadCount > 99 ? "99+" : unreadCount }}
      </span>
    </button>

    <!-- Notification panel -->
    <Transition name="lu-slide-down">
      <div
        v-if="isOpen"
        :class="skinPanel"
        role="region"
        aria-label="Notifications"
        style="z-index: 91"
        @click.stop
      >
        <!-- Header -->
        <div :class="skinHeader">
          <LuText variant="section-title" class="text-base">Notifications</LuText>
          <div class="flex items-center gap-2">
            <LuButton
              v-if="unreadCount > 0"
              variant="ghost"
              size="sm"
              @click="emit('read-all')"
            >
              <LuIcon name="check-check" :size="14" />
              <LuText variant="caption">Mark all read</LuText>
            </LuButton>
            <LuButton variant="ghost" size="icon-sm" @click="emit('clear-all')" aria-label="Clear all">
              <LuIcon name="trash-2" :size="14" />
            </LuButton>
          </div>
        </div>

        <!-- List -->
        <div :class="skinList" role="list">
          <template v-if="visibleNotifications.length">
            <div
              v-for="n in visibleNotifications"
              :key="n.id"
              :class="n.read ? resolveSkin('LuNotificationCenterItem') : resolveSkin('LuNotificationCenterItemUnread')"
              role="listitem"
              :tabindex="0"
              @click="handleClick(n)"
              @keydown.enter="handleClick(n)"
            >
              <!-- Unread dot -->
              <span
                v-if="!n.read"
                :class="resolveSkin('LuNotificationCenterUnreadDot')"
                aria-hidden="true"
              />
              <span v-else class="w-2 h-2 shrink-0" />

              <!-- Icon -->
              <LuIcon
                v-if="n.icon"
                :name="n.icon"
                :size="16"
                class="shrink-0 mt-0.5"
                :style="n.iconColor ? { color: n.iconColor } : undefined"
              />

              <!-- Content -->
              <div class="flex flex-col flex-1 min-w-0">
                <LuText variant="body" class="font-medium line-clamp-1">{{ n.title }}</LuText>
                <LuText v-if="n.body" variant="caption" class="line-clamp-2 mt-0.5">{{ n.body }}</LuText>
                <LuText v-if="n.time" variant="caption" class="mt-1">{{ n.time }}</LuText>
              </div>

              <!-- Dismiss -->
              <button
                type="button"
                class="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded text-zinc-300 hover:text-zinc-500 hover:bg-zinc-100 transition-colors dark:text-zinc-600 dark:hover:text-zinc-300 dark:hover:bg-zinc-800"
                :aria-label="`Dismiss: ${n.title}`"
                @click.stop="emit('dismiss', n.id)"
              >
                <LuIcon name="x" :size="12" />
              </button>
            </div>
          </template>

          <!-- Empty state -->
          <div v-else :class="skinEmpty">
            <LuIcon name="bell-off" :size="28" class="text-zinc-300 dark:text-zinc-600" />
            <LuText variant="muted">All caught up!</LuText>
          </div>
        </div>

        <!-- Footer: show-more -->
        <div v-if="notifications.length > maxVisible" :class="skinFooter">
          <LuText variant="caption" class="text-rose-600 dark:text-rose-400 cursor-pointer hover:underline">
            +{{ notifications.length - maxVisible }} more
          </LuText>
        </div>
      </div>
    </Transition>
  </div>
</template>
