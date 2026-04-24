import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createLumoraUI, type IconResolver } from '@astrake/lumora-ui'
import * as LucideIcons from 'lucide-vue-next'
// We will dynamically provide the skin in App.vue, but we still install the plugin
import { router } from './router'
import './index.css'

import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const iconResolver: IconResolver = (name, size = 18) => {
  const pascal = name.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());
  return (LucideIcons as Record<string, any>)[pascal] ?? null;
};

app.use(pinia)
app.use(router)
app.use(createLumoraUI({ icons: iconResolver }))

app.mount('#app')
