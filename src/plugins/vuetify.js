import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#062a8f", // #E53935
    secondary: "#ff3502"
  }
})
