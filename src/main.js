import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import {registerPlugins} from '@/plugins'
import DateUtil from './DateUtil'
import {loadFonts} from './plugins/webfontloader'
import Clipboard from 'v-clipboard'
import { createPinia } from 'pinia'

loadFonts()

const app = createApp(App)
registerPlugins(app)
app.config.globalProperties.$filters = {};
DateUtil.setup(app);
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(Clipboard)
app.mount('#app')
