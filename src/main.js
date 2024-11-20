import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import { registerPlugins } from '@/plugins'

import {loadFonts} from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
registerPlugins(app)
app.config.globalProperties.$filters = {};
app.use(router)
app.mount('#app')
