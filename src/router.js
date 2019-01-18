import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demi from './views/Demi.vue'
import SelDeMer from './views/SelDeMer.vue'
import Sécession from './views/Sécession.vue'
import Bibliotheque from './views/Bibliotheque.vue'
import CafePhilo from './views/CafePhilo.vue'
import FabLab from './views/FabLab.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cercle/:comite',
            name: 'home',
            component: Home
        },
        {
            path: '/cercle',
            name: 'home',
            component: Home
        },
        {
            path: '/paiement',
            name: 'home',
            component: Home
        },
        {
            path: '/calendrier',
            name: 'home',
            component: Home
        },
        {
            path: '/benevole',
            name: 'home',
            component: Home
        },
        {
            path: '/le-demi',
            name: 'demi',
            component: Demi
        },
        {
            path: '/sel-de-mer',
            name: 'SelDeMer',
            component: SelDeMer
        },
        {
            path: '/sécession',
            name: 'Sécession',
            component: Sécession
        },
        {
            path: '/bibliothèque',
            name: 'Bibliotheque',
            component: Bibliotheque
        },
        {
            path: '/café-philo',
            name: 'CafePhilo',
            component: CafePhilo
        },
        {
            path: '/fablab',
            name: 'FabLab',
            component: FabLab
        }
    ]
})
