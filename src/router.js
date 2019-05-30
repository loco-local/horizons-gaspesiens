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
            alias:'/loco-local',
            component: Home
        },
        {
            path: '/cercle/:comite',
            name: 'comite',
            component: Home
        },
        {
            path: '/loco-linux',
            name: 'loco-linux',
            component: Home
        },
        {
            path: '/produits-lemieux',
            name: 'produits-lemieux',
            component: Home
        },
        {
            path: '/groupe-achat',
            name: 'groupe-achat',
            component: Home
        },
        {
            path: '/collaborium',
            name: 'collaborium',
            component: Home
        },
        {
            path: '/cercle',
            name: 'cercle',
            component: Home
        },
        {
            path: '/paiement',
            name: 'paiement',
            component: Home
        },
        {
            path: '/calendrier',
            name: 'calendrier',
            component: Home
        },
        {
            path: '/benevole',
            name: 'benevole',
            component: Home
        },
        {
            path: '/page-pourpre',
            name: 'page-pourpre',
            component: Home
        },
        {
            path: '/pop-doc',
            name: 'pop-doc',
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
