import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

Vue.config.productionTip = false;

Vue.use(VueClipboard);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
