import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import fr from 'vuetify/lib/locale/fr'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    lang: {
        locales: {fr},
        current: 'fr',
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
