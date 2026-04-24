<template>
  <LuMobileShell>
    <!-- HEADER -->
    <template #header>
      <!-- Chat List Header -->
      <LuStack v-if="activeScreen === 'list' && activeTab === 'chats'" variant="header-chats">
        <LuText variant="app-title">PulseChat</LuText>
        <LuStack variant="header-actions">
          <LuButton variant="nav-action">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </LuButton>
          <LuButton variant="nav-action">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
          </LuButton>
        </LuStack>
      </LuStack>

      <!-- Chat Thread Header -->
      <LuStack v-else-if="activeScreen === 'chat' && activeChat" variant="header-chats">
        <LuButton variant="icon-action" @click="goBack" class="-mr-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </LuButton>
        <LuStack variant="header-nav" @click="openProfile" class="cursor-pointer">
          <LuFixed variant="avatar" :class="activeChat.color" class="w-9 h-9 text-sm text-white rounded-full flex items-center justify-center font-bold">
            {{ activeChat.name.charAt(0) }}
          </LuFixed>
          <LuStack variant="header-contact">
            <LuText variant="chat-name-header">{{ activeChat.name }}</LuText>
            <LuText v-if="activeChat.online" variant="online-status">Online</LuText>
            <LuText v-else variant="offline-status">Last seen {{ activeChat.time }}</LuText>
          </LuStack>
        </LuStack>
        <LuStack variant="header-call-btns">
          <LuButton variant="icon-action">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </LuButton>
          <LuButton variant="icon-action">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          </LuButton>
        </LuStack>
      </LuStack>

      <!-- Profile Header -->
      <LuFixed variant="mobile-header" v-else-if="activeScreen === 'profile'">
        <LuButton variant="back-btn" @click="activeScreen = 'chat'">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          <LuText as="span" variant="action-label">Back</LuText>
        </LuButton>
        <LuText as="span" variant="contact-name" class="absolute inset-x-0 text-center pointer-events-none">Contact Info</LuText>
        <div class="w-20"></div>
      </LuFixed>

      <!-- Updates Header -->
      <LuStack v-else-if="activeScreen === 'list' && activeTab === 'updates'" variant="header-updates">
        <LuText variant="app-title">Updates</LuText>
        <LuButton variant="header-action">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
        </LuButton>
      </LuStack>

      <!-- Calls Header -->
      <LuStack v-else-if="activeScreen === 'list' && activeTab === 'calls'" variant="header-updates">
        <LuText variant="app-title">Calls</LuText>
        <LuButton variant="header-action">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </LuButton>
      </LuStack>

      <!-- Settings Header -->
      <LuStack v-else-if="activeScreen === 'list' && activeTab === 'settings'" variant="header-updates">
        <LuText variant="app-title">Settings</LuText>
      </LuStack>
    </template>

    <!-- MAIN CONTENT -->
    <template #content>

      <!-- Screen 1: CHATS LIST -->
      <LuDock v-if="activeScreen === 'list' && activeTab === 'chats'">
        <LuDockItem variant="search-header">
          <div class="relative">
            <svg class="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <LuInput 
              v-model="searchQuery" 
              placeholder="Search..." 
              variant="search-bar"
            />
          </div>
        </LuDockItem>
        <LuFill>
          <LuScroll variant="list-bg">
            <LuStack direction="vertical">
              <LuStack 
                v-for="chat in filteredConversations" 
                :key="chat.id" 
                variant="chat-list-item"
                @click="openChat(chat)"
              >
                <div class="relative shrink-0">
                  <LuFixed variant="avatar" :class="chat.color" class="w-14 h-14 text-[22px] text-white rounded-full flex items-center justify-center font-bold">
                    {{ chat.name.charAt(0) }}
                  </LuFixed>
                  <span v-if="chat.online" class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white"></span>
                </div>
                
                <LuFill class="flex-col justify-center">
                  <LuStack variant="chat-list-meta">
                    <LuText variant="contact-name">{{ chat.name }}</LuText>
                    <LuText variant="timestamp" :class="chat.unread ? 'text-indigo-600 font-bold' : ''">{{ chat.time }}</LuText>
                  </LuStack>
                  <LuStack variant="chat-list-preview">
                    <LuText :variant="chat.unread ? 'preview-unread' : 'preview-normal'">
                      <span v-if="chat.isTyping" class="text-indigo-600 font-medium italic">typing...</span>
                      <span v-else>{{ chat.lastMessage }}</span>
                    </LuText>
                    <span v-if="chat.unread" class="bg-indigo-600 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center leading-none">{{ chat.unread }}</span>
                  </LuStack>
                </LuFill>
              </LuStack>
              <div class="h-8"></div>
            </LuStack>
          </LuScroll>
        </LuFill>
      </LuDock>

      <!-- Screen 2: CHAT THREAD -->
      <LuDock v-else-if="activeScreen === 'chat'">
        <LuOverlay variant="chat-bg" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');" />
        
        <LuFill variant="chat-body">
          <LuScroll ref="chatScrollRef" variant="chat-thread">
            <LuStack variant="date-header">
              <LuText as="span" variant="date-pill">TODAY</LuText>
            </LuStack>
            
            <LuStack 
              v-for="(msg, idx) in currentMessages" 
              :key="idx"
              direction="vertical" 
              :variant="msg.isMe ? 'bubble-sent' : 'bubble-recv'"
            >
              <LuText variant="bubble-text">{{ msg.text }}</LuText>
              <LuText variant="bubble-time">
                {{ msg.time }}
                <svg v-if="msg.isMe" class="w-3.5 h-3.5" :class="msg.read ? 'text-indigo-500' : 'text-zinc-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </LuText>
            </LuStack>
          </LuScroll>
        </LuFill>
        
        <!-- Compose Bar -->
        <LuFixed variant="compose-bar">
          <LuStack variant="compose-row">
            <LuButton variant="compose-extra">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </LuButton>
            
            <LuFill variant="compose-input">
              <LuInput 
                variant="compose"
                v-model="newMessage" 
                placeholder="Message" 
                @keyup.enter="sendMessage"
              />
              <LuButton variant="compose-extra">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
              </LuButton>
            </LuFill>
            
            <LuButton v-if="newMessage.trim()" variant="send-btn" @click="sendMessage">
              <svg class="w-5 h-5 translate-x-[1px] translate-y-[1px]" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </LuButton>
            <LuButton v-else variant="mic-btn">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            </LuButton>
          </LuStack>
        </LuFixed>
      </LuDock>

      <!-- Screen 3: UPDATES -->
      <LuScroll v-else-if="activeScreen === 'list' && activeTab === 'updates'">
        <LuText variant="section-header">Status</LuText>
        
        <LuStack variant="status-hero">
          <LuStack variant="my-status-row">
            <div class="relative">
              <LuFixed as="span" variant="status-avatar">ME</LuFixed>
              <LuFixed as="span" variant="status-add-badge">+</LuFixed>
            </div>
            <LuStack direction="vertical" class="flex-1">
              <LuText variant="contact-name">My status</LuText>
              <LuText variant="preview-normal">Tap to add status update</LuText>
            </LuStack>
          </LuStack>
        </LuStack>

        <LuText variant="section-header">Recent updates</LuText>

        <!-- Status List -->
        <LuStack direction="vertical" variant="status-list">
          <LuStack 
            v-for="status in statuses" 
            :key="status.id" 
            variant="status-list-item"
          >
            <span class="w-14 h-14 rounded-full flex items-center justify-center font-bold text-[22px] ring-2 ring-indigo-500 ring-offset-2 text-white" :class="status.color">
              {{ status.name.charAt(0) }}
            </span>
            <LuStack direction="vertical">
              <LuText variant="contact-name">{{ status.name }}</LuText>
              <LuText variant="preview-normal">{{ status.time }}</LuText>
            </LuStack>
          </LuStack>
        </LuStack>
      </LuScroll>

      <!-- Screen 4: CALLS LOG -->
      <LuDock v-else-if="activeScreen === 'list' && activeTab === 'calls'">
        <LuFill>
          <LuScroll>
            <LuStack direction="vertical" variant="list-bg">
              <LuStack 
                v-for="call in callLog" 
                :key="call.id" 
                variant="call-list-item"
              >
                <span class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-[18px] text-white" :class="call.color">
                  {{ call.name.charAt(0) }}
                </span>
                
                <LuFill variant="call-center">
                  <LuText variant="contact-name" :class="call.type === 'missed' ? 'text-red-500' : ''">
                    {{ call.name }}
                  </LuText>
                  <LuStack variant="call-meta">
                    <!-- Call type icon -->
                    <svg v-if="call.type === 'missed'" class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.516l2.257-1.13a1 1 0 00.502-1.21L9.22 3.684A1 1 0 008.272 3H5z"></path></svg>
                    <svg v-else-if="call.type === 'incoming'" class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    <svg v-else class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                    
                    <LuText variant="preview-normal">{{ call.date }}, {{ call.time }}</LuText>
                  </LuStack>
                </LuFill>
                
                <LuButton variant="call-icon" :class="call.type === 'missed' ? 'text-red-500' : 'text-indigo-600'">
                  <svg v-if="call.isVideo" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </LuButton>
              </LuStack>
            </LuStack>
          </LuScroll>
        </LuFill>
      </LuDock>

      <!-- Screen 5: SETTINGS -->
      <LuScroll v-else-if="activeScreen === 'list' && activeTab === 'settings'" variant="settings-bg">
        <!-- Profile Card -->
        <LuStack variant="profile-card">
          <LuFixed as="span" variant="settings-avatar">ME</LuFixed>
          <LuStack direction="vertical">
            <LuText variant="profile-name">Your Name</LuText>
            <LuText variant="preview-normal">Available</LuText>
          </LuStack>
          <LuButton variant="settings-qr">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
          </LuButton>
        </LuStack>

        <!-- Appearance Group -->
        <LuStack direction="vertical" variant="settings-group">
          <LuStack variant="settings-row">
            <span class="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0 bg-slate-800">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </span>
            <LuStack direction="vertical" variant="settings-label-col">
              <LuText variant="setting-label">Dark Mode</LuText>
            </LuStack>
            <LuThemeSwitch />
          </LuStack>
        </LuStack>

        <!-- Settings Groups -->
        <LuStack 
          v-for="(group, idx) in settingsGroups" 
          :key="idx" 
          direction="vertical" 
          variant="settings-group"
        >
          <LuStack 
            v-for="(row, rIdx) in group.rows" 
            :key="rIdx" 
            variant="settings-row"
          >
            <span class="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0" :class="row.color">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </span>
            <LuStack direction="vertical" variant="settings-label-col">
              <LuText variant="setting-label">{{ row.label }}</LuText>
              <LuText v-if="row.description" variant="setting-desc">{{ row.description }}</LuText>
            </LuStack>
            <svg class="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </LuStack>
        </LuStack>
        <div class="h-4"></div> <!-- bottom padding -->
      </LuScroll>

      <!-- Screen 6: CONTACT PROFILE -->
      <LuScroll v-else-if="activeScreen === 'profile' && activeChat" variant="profile-bg">
        <!-- Hero -->
        <LuStack variant="profile-hero" direction="vertical">
          <span class="w-32 h-32 rounded-full font-bold flex items-center justify-center text-[48px] mb-4 text-white" :class="activeChat.color">
            {{ activeChat.name.charAt(0) }}
          </span>
          <LuText variant="profile-name">{{ activeChat.name }}</LuText>
          <LuText variant="profile-phone">+1 (555) 123-4567</LuText>
        </LuStack>

        <!-- Quick Actions Grid -->
        <LuGrid :cols="4" variant="action-bar">
          <LuStack direction="vertical" variant="profile-action-item">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            <LuText variant="action-label">Message</LuText>
          </LuStack>
          <LuStack direction="vertical" variant="profile-action-item">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <LuText variant="action-label">Audio</LuText>
          </LuStack>
          <LuStack direction="vertical" variant="profile-action-item">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            <LuText variant="action-label">Video</LuText>
          </LuStack>
          <LuStack direction="vertical" variant="profile-action-item">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <LuText variant="action-label">Search</LuText>
          </LuStack>
        </LuGrid>

        <LuStack direction="vertical" variant="profile-bio-card">
          <LuText variant="bio-text">Hey there! I am using PulseChat.</LuText>
          <LuText variant="bio-date">July 4, 2023</LuText>
        </LuStack>

        <LuStack direction="vertical" variant="profile-bio-card" class="!p-0 overflow-hidden">
          <LuStack variant="media-header-row">
            <LuText variant="media-section-label">Media, Links, and Docs</LuText>
            <LuText variant="media-count">24 <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></LuText>
          </LuStack>
          <LuGrid :cols="3" variant="media-grid">
            <LuFixed variant="media-thumb" style="background-image: url('https://picsum.photos/200?1'); background-size: cover;"></LuFixed>
            <LuFixed variant="media-thumb" style="background-image: url('https://picsum.photos/200?2'); background-size: cover;"></LuFixed>
            <LuFixed variant="media-thumb" style="background-image: url('https://picsum.photos/200?3'); background-size: cover;"></LuFixed>
          </LuGrid>
        </LuStack>
        <div class="h-8"></div>
      </LuScroll>

    </template>

    <!-- BOTTOM NAVBAR (Only on list screen) -->
    <template #navbar>
      <LuFixed variant="mobile-navbar" v-if="activeScreen === 'list'">
        
        <!-- Chats Tab -->
        <LuStack 
          direction="vertical" 
          @click="switchTab('chats')" 
          variant="tab-item"
          :class="activeTab === 'chats' ? 'text-indigo-600' : 'text-zinc-500 hover:text-zinc-700'"
        >
          <div class="relative">
            <svg class="w-6 h-6 mb-0.5" :fill="activeTab === 'chats' ? 'currentColor' : 'none'" :stroke="activeTab === 'chats' ? 'none' : 'currentColor'" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span class="absolute -top-1 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-zinc-900 leading-none">4</span>
          </div>
          <LuText variant="tab-label">Chats</LuText>
        </LuStack>

        <!-- Updates Tab -->
        <LuStack 
          direction="vertical" 
          @click="switchTab('updates')" 
          variant="tab-item"
          :class="activeTab === 'updates' ? 'text-indigo-600' : 'text-zinc-500 hover:text-zinc-700'"
        >
          <div class="relative">
            <svg class="w-6 h-6 mb-0.5" :fill="activeTab === 'updates' ? 'currentColor' : 'none'" :stroke="activeTab === 'updates' ? 'none' : 'currentColor'" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="absolute top-0 right-0 w-2 h-2 bg-indigo-600 rounded-full border border-white dark:border-zinc-900"></span>
          </div>
          <LuText variant="tab-label">Updates</LuText>
        </LuStack>

        <!-- Calls Tab -->
        <LuStack 
          direction="vertical" 
          @click="switchTab('calls')" 
          variant="tab-item"
          :class="activeTab === 'calls' ? 'text-indigo-600' : 'text-zinc-500 hover:text-zinc-700'"
        >
          <svg class="w-6 h-6 mb-0.5" :fill="activeTab === 'calls' ? 'currentColor' : 'none'" :stroke="activeTab === 'calls' ? 'none' : 'currentColor'" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <LuText variant="tab-label">Calls</LuText>
        </LuStack>

        <!-- Settings Tab -->
        <LuStack 
          direction="vertical" 
          @click="switchTab('settings')" 
          variant="tab-item"
          :class="activeTab === 'settings' ? 'text-indigo-600' : 'text-zinc-500 hover:text-zinc-700'"
        >
          <svg class="w-6 h-6 mb-0.5" :fill="activeTab === 'settings' ? 'currentColor' : 'none'" :stroke="activeTab === 'settings' ? 'none' : 'currentColor'" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <LuText variant="tab-label">Settings</LuText>
        </LuStack>
      </LuFixed>
    </template>
  </LuMobileShell>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import { 
  LuMobileShell, 
  LuStack, 
  LuDock, 
  LuDockItem, 
  LuFill, 
  LuFixed, 
  LuScroll,
  LuButton,
  LuInput,
  LuGrid,
  LuOverlay,
  LuText,
  LuThemeSwitch
} from '@astrake/lumora-ui';

// ... (State logic remains exactly the same)

type ScreenType = 'list' | 'chat' | 'profile';
type TabType = 'chats' | 'updates' | 'calls' | 'settings';

const activeScreen = ref<ScreenType>('list');
const activeTab = ref<TabType>('chats');
const searchQuery = ref('');

// State data omitted for brevity as it is unchanged from the original
// but we need to include it for the file to compile.
const conversations = ref([
  { id: 1, name: 'Design Team', color: 'bg-indigo-500', time: '12:34 PM', lastMessage: 'Alice: I updated the Figma file', unread: 4, online: true, isTyping: false },
  { id: 2, name: 'Sarah Jenkins', color: 'bg-rose-500', time: '11:20 AM', lastMessage: 'Are we still on for lunch?', unread: 0, online: false, isTyping: true },
  { id: 3, name: 'Project Alpha', color: 'bg-emerald-500', time: 'Yesterday', lastMessage: 'Bob: Deployment successful!', unread: 0, online: true, isTyping: false },
  { id: 4, name: 'Mom', color: 'bg-amber-500', time: 'Yesterday', lastMessage: 'Call me when you get home', unread: 0, online: false, isTyping: false },
  { id: 5, name: 'Marketing Sync', color: 'bg-cyan-500', time: 'Tuesday', lastMessage: 'Q3 numbers look great', unread: 0, online: false, isTyping: false },
  { id: 6, name: 'David Smith', color: 'bg-violet-500', time: 'Monday', lastMessage: 'Thanks for the help', unread: 0, online: true, isTyping: false },
  { id: 7, name: 'DevOps Alerts', color: 'bg-slate-700', time: 'Monday', lastMessage: '[Resolved] High CPU usage on prod-1', unread: 12, online: true, isTyping: false },
  { id: 8, name: 'Emily Chen', color: 'bg-fuchsia-500', time: 'Sunday', lastMessage: 'See you tomorrow!', unread: 0, online: false, isTyping: false },
]);

const statuses = ref([
  { id: 1, name: 'Sarah Jenkins', color: 'bg-rose-500', time: '10 minutes ago' },
  { id: 2, name: 'David Smith', color: 'bg-violet-500', time: 'Today, 9:45 AM' },
  { id: 3, name: 'Mom', color: 'bg-amber-500', time: 'Yesterday, 8:00 PM' },
]);

const callLog = ref([
  { id: 1, name: 'Sarah Jenkins', type: 'missed', date: 'Today', time: '10:30 AM', color: 'bg-rose-500', isVideo: true },
  { id: 2, name: 'David Smith', type: 'incoming', date: 'Yesterday', time: '4:15 PM', color: 'bg-violet-500', isVideo: false },
  { id: 3, name: 'Mom', type: 'outgoing', date: 'Yesterday', time: '12:00 PM', color: 'bg-amber-500', isVideo: true },
  { id: 4, name: 'Emily Chen', type: 'incoming', date: 'Monday', time: '9:00 AM', color: 'bg-fuchsia-500', isVideo: false },
]);

const settingsGroups = ref([
  {
    rows: [
      { label: 'Account', description: 'Security notifications, change number', color: 'bg-blue-500' },
      { label: 'Privacy', description: 'Block contacts, disappearing messages', color: 'bg-sky-500' },
      { label: 'Chats', description: 'Theme, wallpapers, chat history', color: 'bg-emerald-500' },
    ]
  },
  {
    rows: [
      { label: 'Notifications', description: 'Message, group & call tones', color: 'bg-rose-500' },
      { label: 'Storage and data', description: 'Network usage, auto-download', color: 'bg-emerald-600' },
    ]
  },
  {
    rows: [
      { label: 'Help', description: 'Help center, contact us, privacy policy', color: 'bg-indigo-500' },
      { label: 'Invite a friend', color: 'bg-pink-500' },
    ]
  }
]);

const filteredConversations = computed(() => {
  if (!searchQuery.value) return conversations.value;
  const lowerQuery = searchQuery.value.toLowerCase();
  return conversations.value.filter(c => c.name.toLowerCase().includes(lowerQuery));
});

const activeChat = ref<any>(null);
const currentMessages = ref<any[]>([]);
const newMessage = ref('');
const chatScrollRef = ref<any>(null);

const sampleChatHistory = [
  { text: 'Hey team, how is the new feature coming along?', time: '12:30 PM', isMe: false, read: true },
  { text: 'Almost done! Just fixing some layout bugs.', time: '12:32 PM', isMe: true, read: true },
  { text: 'The new LumoraUI components are making it so much faster.', time: '12:33 PM', isMe: true, read: true },
  { text: 'Awesome. Let me know when it\'s ready for testing.', time: '12:35 PM', isMe: false, read: false }
];

const switchTab = (tab: TabType) => {
  activeTab.value = tab;
};

const openChat = (chat: any) => {
  activeChat.value = chat;
  currentMessages.value = [...sampleChatHistory];
  activeScreen.value = 'chat';
  
  // Clear unread
  const chatRef = conversations.value.find(c => c.id === chat.id);
  if (chatRef) chatRef.unread = 0;

  scrollToBottom();
};

const goBack = () => {
  activeScreen.value = 'list';
  activeChat.value = null;
};

const openProfile = () => {
  activeScreen.value = 'profile';
};

const scrollToBottom = () => {
  nextTick(() => {
    if (chatScrollRef.value && chatScrollRef.value.$el) {
      chatScrollRef.value.$el.scrollTop = chatScrollRef.value.$el.scrollHeight;
    }
  });
};

const sendMessage = () => {
  if (!newMessage.value.trim()) return;
  
  currentMessages.value.push({
    text: newMessage.value,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isMe: true,
    read: false
  });
  
  newMessage.value = '';
  scrollToBottom();

  setTimeout(() => {
    currentMessages.value.push({
      text: 'Looks great! I will review it shortly.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: false,
      read: false
    });
    scrollToBottom();
  }, 1000);
};
</script>
