<template>
  <LuEmbeddedShell variant="tesla-dashboard">
    <!-- STATUS BAR (TOP) -->
    <template #topbar>
      <LuStack variant="status-bar">
        <LuStack variant="status-left">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          <LuText variant="status-temp">{{ climateState.driverTemp }}°C</LuText>
        </LuStack>
        <LuText variant="status-clock">{{ currentTime }}</LuText>
        <LuStack variant="status-right">
          <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4H8C6.9 4 6 4.9 6 6V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V6C18 4.9 17.1 4 16 4ZM12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18ZM15 10H9V7H15V10Z"/></svg>
          <LuText variant="status-battery">{{ chargingState.batteryPercent }}%</LuText>
        </LuStack>
      </LuStack>
    </template>

    <!-- CONTENT AREA -->
    <template #content>
      <LuTabs v-model="activeTab" variant="dashboard-tabs" class="h-full flex flex-col min-h-0 min-w-0 relative">
        
        <LuFill variant="dashboard-view-area">
          
          <!-- DRIVE SCREEN -->
          <LuTabPanel value="drive" variant="view-panel">
            <LuStack direction="vertical" variant="drive-layout">
              <LuFill variant="drive-car-view">
                <!-- Car top view SVG placeholder -->
                <div class="relative w-48 h-80 flex items-center justify-center">
                  <svg class="w-full h-full text-zinc-800 drop-shadow-2xl" viewBox="0 0 200 400" fill="currentColor">
                    <rect x="50" y="40" width="100" height="320" rx="40" fill="currentColor" />
                    <!-- Wheels -->
                    <rect x="40" y="80" width="15" height="40" rx="5" fill="#111" />
                    <rect x="145" y="80" width="15" height="40" rx="5" fill="#111" />
                    <rect x="40" y="280" width="15" height="40" rx="5" fill="#111" />
                    <rect x="145" y="280" width="15" height="40" rx="5" fill="#111" />
                    <!-- Windshield -->
                    <path d="M60 140 Q100 120 140 140 L130 180 Q100 190 70 180 Z" fill="#000" opacity="0.8"/>
                    <path d="M65 240 Q100 230 135 240 L125 320 Q100 330 75 320 Z" fill="#000" opacity="0.8"/>
                  </svg>
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10"></div>
                </div>
              </LuFill>
              
              <LuStack direction="vertical" variant="drive-instrument-cluster">
                <!-- Speedometer Arc -->
                <div class="relative w-80 h-48 flex items-end justify-center overflow-hidden shrink-0 mt-[-60px] z-20">
                  <svg class="absolute bottom-0 w-full h-full" viewBox="0 0 200 100" style="transform-origin: bottom center; transform: scale(1.5);">
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round" />
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#speed-gradient)" stroke-width="6" stroke-linecap="round" stroke-dasharray="251.2" :stroke-dashoffset="251.2 - (251.2 * driveState.speed / 120)" class="transition-all duration-300 ease-out" />
                    <defs>
                      <linearGradient id="speed-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#10B981" />
                        <stop offset="60%" stop-color="#F59E0B" />
                        <stop offset="100%" stop-color="#EF4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <LuStack direction="vertical" variant="speed-display">
                    <LuText variant="speed-value">{{ driveState.speed }}</LuText>
                    <LuText variant="speed-unit">mph</LuText>
                  </LuStack>
                </div>

                <!-- Gear Selector -->
                <LuStack variant="gear-selector">
                  <LuText v-for="g in ['P', 'R', 'N', 'D']" :key="g" :variant="driveState.gear === g ? 'gear-active' : 'gear-inactive'">{{ g }}</LuText>
                </LuStack>

                <!-- Trip Stats -->
                <LuStack variant="trip-stats-grid">
                  <LuStack direction="vertical" variant="trip-stat-item">
                    <LuText variant="stat-label">Trip A</LuText>
                    <LuText variant="stat-value">{{ driveState.tripDistance }} mi</LuText>
                  </LuStack>
                  <LuStack direction="vertical" variant="trip-stat-item">
                    <LuText variant="stat-label">Energy</LuText>
                    <LuText variant="stat-value">{{ driveState.energyUsage }} Wh/mi</LuText>
                  </LuStack>
                  <LuStack direction="vertical" variant="trip-stat-item">
                    <LuText variant="stat-label">Duration</LuText>
                    <LuText variant="stat-value">{{ driveState.tripDuration }}</LuText>
                  </LuStack>
                </LuStack>
              </LuStack>
            </LuStack>
          </LuTabPanel>

          <!-- CLIMATE SCREEN -->
          <LuTabPanel value="climate" variant="view-panel">
            <LuStack direction="vertical" variant="climate-layout">
              <LuStack variant="climate-zones">
                <!-- Driver Zone -->
                <LuStack direction="vertical" variant="climate-zone">
                  <LuText variant="climate-label">Driver</LuText>
                  <LuStack variant="temp-controls">
                    <LuButton variant="temp-btn" @click="climateState.driverTemp--"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></LuButton>
                    <LuText variant="temp-value">{{ climateState.driverTemp }}°</LuText>
                    <LuButton variant="temp-btn" @click="climateState.driverTemp++"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></LuButton>
                  </LuStack>
                  <LuStack variant="seat-heater">
                    <button class="flex gap-1 items-end h-8 cursor-pointer" @click="climateState.seatHeatDriver = (climateState.seatHeatDriver + 1) % 4 as any">
                      <div class="w-2 h-4 rounded-t-sm transition-colors" :class="climateState.seatHeatDriver > 0 ? 'bg-red-500' : 'bg-zinc-800'"></div>
                      <div class="w-2 h-6 rounded-t-sm transition-colors" :class="climateState.seatHeatDriver > 1 ? 'bg-red-500' : 'bg-zinc-800'"></div>
                      <div class="w-2 h-8 rounded-t-sm transition-colors" :class="climateState.seatHeatDriver > 2 ? 'bg-red-500' : 'bg-zinc-800'"></div>
                    </button>
                    <LuText variant="seat-label">Seat</LuText>
                  </LuStack>
                </LuStack>
                
                <!-- Passenger Zone -->
                <LuStack direction="vertical" variant="climate-zone">
                  <LuText variant="climate-label">Passenger</LuText>
                  <LuStack variant="temp-controls">
                    <LuButton variant="temp-btn" @click="climateState.passengerTemp--"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></LuButton>
                    <LuText variant="temp-value">{{ climateState.passengerTemp }}°</LuText>
                    <LuButton variant="temp-btn" @click="climateState.passengerTemp++"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></LuButton>
                  </LuStack>
                  <LuStack variant="seat-heater">
                    <button class="flex gap-1 items-end h-8 cursor-pointer" @click="climateState.seatHeatPassenger = (climateState.seatHeatPassenger + 1) % 4 as any">
                      <div class="w-2 h-4 rounded-t-sm transition-colors" :class="climateState.seatHeatPassenger > 0 ? 'bg-red-500' : 'bg-zinc-800'"></div>
                      <div class="w-2 h-6 rounded-t-sm transition-colors" :class="climateState.seatHeatPassenger > 1 ? 'bg-red-500' : 'bg-zinc-800'"></div>
                      <div class="w-2 h-8 rounded-t-sm transition-colors" :class="climateState.seatHeatPassenger > 2 ? 'bg-red-500' : 'bg-zinc-800'"></div>
                    </button>
                    <LuText variant="seat-label">Seat</LuText>
                  </LuStack>
                </LuStack>
              </LuStack>

              <LuStack direction="vertical" variant="fan-controls">
                <LuText variant="climate-label">Fan Speed</LuText>
                <LuStack variant="fan-slider-row">
                  <svg class="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A4 4 0 002 9.05v6.5a4 4 0 004.05 3.953 4.004 4.004 0 003.545-2.083l4.61-9.22c.67-1.34 2.87-1.34 3.54 0l4.61 9.22A4.004 4.004 0 0022 19.5a4 4 0 004.05-3.953v-6.5a4 4 0 00-9.555-2.014z"></path></svg>
                  <LuProgressBar variant="fan-bar" :value="climateState.fanSpeed" :max="10" class="flex-1" />
                </LuStack>
              </LuStack>

              <LuStack variant="climate-toggles">
                <LuButton :variant="climateState.defrostFront ? 'climate-toggle-active' : 'climate-toggle'" @click="climateState.defrostFront = !climateState.defrostFront">Front</LuButton>
                <LuButton :variant="climateState.defrostRear ? 'climate-toggle-active' : 'climate-toggle'" @click="climateState.defrostRear = !climateState.defrostRear">Rear</LuButton>
                <LuButton :variant="climateState.synced ? 'climate-toggle-active' : 'climate-toggle'" @click="climateState.synced = !climateState.synced">Sync</LuButton>
                <LuButton :variant="climateState.recirculate ? 'climate-toggle-active' : 'climate-toggle'" @click="climateState.recirculate = !climateState.recirculate">Recirc</LuButton>
              </LuStack>
            </LuStack>
          </LuTabPanel>

          <!-- MEDIA SCREEN -->
          <LuTabPanel value="media" variant="view-panel">
            <LuStack direction="vertical" variant="media-layout">
              <LuStack variant="now-playing">
                <div class="w-32 h-32 rounded-xl shrink-0 flex items-center justify-center shadow-2xl" :style="{ backgroundColor: currentTrack.color }">
                  <svg class="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
                </div>
                <LuStack direction="vertical" variant="track-info">
                  <LuText variant="track-title">{{ currentTrack.title }}</LuText>
                  <LuText variant="track-artist">{{ currentTrack.artist }}</LuText>
                  <LuText variant="track-album">{{ currentTrack.album }}</LuText>
                </LuStack>
              </LuStack>

              <LuStack direction="vertical" variant="player-controls-area">
                <LuStack variant="seek-bar-row">
                  <LuText variant="time-text">1:24</LuText>
                  <LuProgressBar variant="seek-bar" :value="35" class="flex-1" />
                  <LuText variant="time-text">{{ currentTrack.duration }}</LuText>
                </LuStack>
                <LuStack variant="playback-buttons">
                  <LuButton variant="media-btn"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path></svg></LuButton>
                  <LuButton variant="media-btn-primary"><svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></LuButton>
                  <LuButton variant="media-btn"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path></svg></LuButton>
                </LuStack>
                <LuStack variant="volume-bar-row">
                  <svg class="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                  <LuProgressBar variant="volume-bar" :value="60" class="flex-1" />
                </LuStack>
              </LuStack>

              <LuScroll variant="playlist-scroll">
                <LuStack direction="vertical" variant="playlist">
                  <div v-for="(track, idx) in playlist" :key="idx" class="flex items-center gap-4 py-3 border-b border-zinc-800 cursor-pointer hover:bg-zinc-800/50 px-2 rounded-lg transition-colors">
                    <span class="text-zinc-600 font-mono w-6 text-right">{{ idx + 1 }}</span>
                    <div class="w-10 h-10 rounded bg-zinc-800" :style="{ backgroundColor: track.color }"></div>
                    <div class="flex flex-col flex-1 min-w-0">
                      <span class="text-white text-sm truncate font-medium">{{ track.title }}</span>
                      <span class="text-zinc-500 text-xs truncate">{{ track.artist }}</span>
                    </div>
                    <span class="text-zinc-600 text-sm font-mono">{{ track.duration }}</span>
                  </div>
                </LuStack>
              </LuScroll>
            </LuStack>
          </LuTabPanel>

          <!-- CHARGING SCREEN -->
          <LuTabPanel value="charge" variant="view-panel">
            <LuStack direction="vertical" variant="charge-layout">
              <LuStack direction="vertical" variant="battery-display-area">
                <LuStack variant="battery-header">
                  <LuText variant="battery-percent">{{ chargingState.batteryPercent }}%</LuText>
                  <LuStack direction="vertical" variant="battery-status">
                    <LuText variant="charge-status-text">Charging</LuText>
                    <LuText variant="charge-time-text">{{ chargingState.timeRemaining }} remaining</LuText>
                  </LuStack>
                </LuStack>
                
                <!-- Large Battery Bar -->
                <div class="relative w-full h-24 bg-zinc-900 rounded-2xl border-4 border-zinc-800 p-1 overflow-hidden mt-6">
                  <div class="absolute inset-y-1 left-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-xl transition-all duration-1000 ease-in-out" :style="{ width: `calc(${chargingState.batteryPercent}% - 8px)` }">
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMjBMMjAgMEwyMCAyMEgweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30"></div>
                  </div>
                  <div class="absolute inset-y-0 right-1/4 w-1 bg-zinc-800 z-10"></div>
                  <div class="absolute inset-y-0 right-1/2 w-1 bg-zinc-800 z-10"></div>
                  <div class="absolute inset-y-0 right-3/4 w-1 bg-zinc-800 z-10"></div>
                </div>
                
                <LuStack variant="charge-limit-slider">
                  <LuText variant="stat-label">Limit: {{ chargingState.chargeLimit }}%</LuText>
                  <LuProgressBar variant="limit-bar" :value="chargingState.chargeLimit" class="flex-1" />
                </LuStack>
              </LuStack>

              <LuStack variant="charge-stats-grid">
                <LuStack direction="vertical" variant="charge-stat-item">
                  <LuText variant="stat-label">Charge Rate</LuText>
                  <LuText variant="stat-value">{{ chargingState.chargeRate }} kW</LuText>
                </LuStack>
                <LuStack direction="vertical" variant="charge-stat-item">
                  <LuText variant="stat-label">Energy Added</LuText>
                  <LuText variant="stat-value">+{{ chargingState.energyAdded }} kWh</LuText>
                </LuStack>
                <LuStack direction="vertical" variant="charge-stat-item">
                  <LuText variant="stat-label">Est. Cost</LuText>
                  <LuText variant="stat-value">${{ chargingState.cost.toFixed(2) }}</LuText>
                </LuStack>
              </LuStack>

              <LuStack variant="schedule-row">
                <LuStack direction="vertical" class="flex-1">
                  <LuText variant="climate-label">Scheduled Charging</LuText>
                  <LuText variant="stat-label">Starts at 12:00 AM</LuText>
                </LuStack>
                <LuSwitch v-model="chargingState.isScheduled" variant="tesla-switch" />
              </LuStack>
            </LuStack>
          </LuTabPanel>

          <!-- CONTROLS SCREEN -->
          <LuTabPanel value="controls" variant="view-panel">
            <LuScroll variant="controls-scroll">
              <LuStack direction="vertical" variant="controls-layout">
                
                <LuCollapsible defaultOpen variant="control-group">
                  <template #trigger="{ isOpen }">
                    <span class="flex-1 text-left font-semibold text-lg text-white tracking-wide">Quick Controls</span>
                    <svg class="w-6 h-6 text-zinc-500 transition-transform duration-300" :class="isOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </template>
                  <template #content>
                    <LuStack variant="quick-controls-grid">
                      <LuButton variant="quick-control-btn">
                        <svg class="w-8 h-8 mb-2 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        Lock
                      </LuButton>
                      <LuButton variant="quick-control-btn">
                        <svg class="w-8 h-8 mb-2 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        Frunk
                      </LuButton>
                      <LuButton variant="quick-control-btn">
                        <svg class="w-8 h-8 mb-2 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15l7-7 7 7"></path></svg>
                        Trunk
                      </LuButton>
                    </LuStack>
                  </template>
                </LuCollapsible>

                <LuCollapsible defaultOpen variant="control-group">
                  <template #trigger="{ isOpen }">
                    <span class="flex-1 text-left font-semibold text-lg text-white tracking-wide">Lights</span>
                    <svg class="w-6 h-6 text-zinc-500 transition-transform duration-300" :class="isOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </template>
                  <template #content>
                    <LuStack direction="vertical" variant="control-items">
                      <LuStack variant="control-row">
                        <LuText variant="control-label">Headlights</LuText>
                        <LuStack variant="segmented-control">
                          <div class="px-4 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-medium">Auto</div>
                          <div class="px-4 py-1.5 text-zinc-400 rounded-md text-sm font-medium">On</div>
                          <div class="px-4 py-1.5 text-zinc-400 rounded-md text-sm font-medium">Off</div>
                        </LuStack>
                      </LuStack>
                      <LuStack variant="control-row">
                        <LuText variant="control-label">Auto High Beam</LuText>
                        <LuSwitch :modelValue="true" variant="tesla-switch" />
                      </LuStack>
                      <LuStack variant="control-row">
                        <LuText variant="control-label">Dome Lights</LuText>
                        <LuSwitch :modelValue="false" variant="tesla-switch" />
                      </LuStack>
                    </LuStack>
                  </template>
                </LuCollapsible>

                <LuCollapsible defaultOpen variant="control-group">
                  <template #trigger="{ isOpen }">
                    <span class="flex-1 text-left font-semibold text-lg text-white tracking-wide">Driving</span>
                    <svg class="w-6 h-6 text-zinc-500 transition-transform duration-300" :class="isOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </template>
                  <template #content>
                    <LuStack direction="vertical" variant="control-items">
                      <LuStack variant="control-row">
                        <LuText variant="control-label">Steering Mode</LuText>
                        <LuStack variant="segmented-control">
                          <div class="px-4 py-1.5 text-zinc-400 rounded-md text-sm font-medium">Comfort</div>
                          <div class="px-4 py-1.5 bg-indigo-600 text-white rounded-md text-sm font-medium">Standard</div>
                          <div class="px-4 py-1.5 text-zinc-400 rounded-md text-sm font-medium">Sport</div>
                        </LuStack>
                      </LuStack>
                      <LuStack variant="control-row">
                        <LuText variant="control-label">Creep Mode</LuText>
                        <LuSwitch :modelValue="true" variant="tesla-switch" />
                      </LuStack>
                    </LuStack>
                  </template>
                </LuCollapsible>

              </LuStack>
            </LuScroll>
          </LuTabPanel>

        </LuFill>

        <!-- BOTTOM NAVIGATION TAB BAR -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
          <LuTabList variant="nav-dock">
            <LuTab value="drive" variant="nav-tab">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <span class="text-[10px] mt-1 font-medium tracking-wide uppercase">Drive</span>
            </LuTab>
            <LuTab value="climate" variant="nav-tab">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span class="text-[10px] mt-1 font-medium tracking-wide uppercase">Climate</span>
            </LuTab>
            <LuTab value="media" variant="nav-tab">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
              <span class="text-[10px] mt-1 font-medium tracking-wide uppercase">Media</span>
            </LuTab>
            <LuTab value="charge" variant="nav-tab">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <span class="text-[10px] mt-1 font-medium tracking-wide uppercase">Charge</span>
            </LuTab>
            <LuTab value="controls" variant="nav-tab">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span class="text-[10px] mt-1 font-medium tracking-wide uppercase">Controls</span>
            </LuTab>
          </LuTabList>
        </div>

      </LuTabs>
    </template>
  </LuEmbeddedShell>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { 
  LuEmbeddedShell, 
  LuStack, 
  LuFill, 
  LuText, 
  LuButton, 
  LuTabs, 
  LuTabList, 
  LuTab, 
  LuTabPanel, 
  LuProgressBar,
  LuCollapsible,
  LuSwitch,
  LuBadge,
  LuScroll,
  LuFixed
} from '@astrake/lumora-ui';

// Time
const time = ref(new Date());
let timer: ReturnType<typeof setInterval>;
onMounted(() => {
  timer = setInterval(() => {
    time.value = new Date();
  }, 1000);
});
onUnmounted(() => {
  clearInterval(timer);
});
const currentTime = computed(() => {
  return time.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});

const activeTab = ref('drive');

// State Models
const driveState = ref({
  speed: 72,
  gear: 'D',
  tripDistance: 142.3,
  energyUsage: 245,
  tripDuration: '1h 23m'
});

const climateState = ref({
  driverTemp: 21,
  passengerTemp: 22,
  synced: false,
  fanSpeed: 4,
  seatHeatDriver: 2,
  seatHeatPassenger: 0,
  defrostFront: false,
  defrostRear: false,
  recirculate: true
});

const chargingState = ref({
  batteryPercent: 87,
  chargeRate: 150,
  timeRemaining: '45 min',
  energyAdded: 42.5,
  cost: 8.40,
  chargeLimit: 90,
  isScheduled: false
});

const currentTrack = ref({
  title: 'Starboy',
  artist: 'The Weeknd, Daft Punk',
  album: 'Starboy',
  duration: '3:50',
  color: '#e11d48' // Rose 600
});

const playlist = [
  { title: 'Starboy', artist: 'The Weeknd, Daft Punk', duration: '3:50', color: '#e11d48' },
  { title: 'Midnight City', artist: 'M83', duration: '4:03', color: '#0369a1' },
  { title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', color: '#c2410c' },
  { title: 'Nightcall', artist: 'Kavinsky', duration: '4:19', color: '#6d28d9' },
  { title: 'Instant Crush', artist: 'Daft Punk', duration: '5:38', color: '#be185d' },
  { title: 'Save Your Tears', artist: 'The Weeknd', duration: '3:35', color: '#0f766e' },
];
</script>
