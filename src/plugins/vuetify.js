import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: "#062a8f", // #E53935
                secondary: "#ff3301",
            }
        }
    }
})
