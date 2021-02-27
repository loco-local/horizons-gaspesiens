import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demi from './views/Demi.vue'
import SelDeMer from './views/SelDeMer.vue'
import Sécession from './views/Sécession.vue'
import Bibliotheque from './views/Bibliotheque.vue'
import CafePhilo from './views/CafePhilo.vue'
import FabLab from './views/FabLab.vue'
import LocoLinux from './views/LocoLinux.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        savedPosition
                    });
                }, 1000);
            });
        } else {
            return {x: 0, y: 0}
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/loco-local',
            component: Home
        },
        {
            path: '/cercle/:comite',
            name: 'comite',
            component: Home
        },
        {
            path: '/gouvernance',
            name: 'gouvernance',
            component: () => import("@/views/GouvernancePage")
        },
        {
            path: '/biblio-outils',
            name: 'biblio-outils',
            component: () => import("@/views/BibliothequeOutilsPage")
        },
        {
            path: '/bouger-ensemble',
            name: 'bouger-ensemble',
            component: () => import("@/views/BougerEnsemblePage")
        },
        {
            path: '/loco-linux',
            name: 'loco-linux',
            component: LocoLinux
        },
        {
            path: '/produits-nettoyant',
            name: 'produits-nettoyant',
            component: () => import("@/views/ProduitsNettoyantPage")
        },
        {
            path: '/groupe-achat',
            name: 'groupe-achat',
            component: () => import("@/views/GroupeAchatPage")
        },
        {
            path: '/collaborium',
            name: 'collaborium',
            component: () => import("@/views/CollaboriumPage")
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
            path: '/reservation',
            name: 'reservation',
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
            component: () => import("@/views/PagePourprePage")
        },
        // {
        //     path: '/pop-doc',
        //     name: 'pop-doc',
        //     component: Home
        // },
        // {
        //     path: '/imaginez-demain',
        //     name: 'imaginez-demain',
        //     component: Home
        // },
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
        },
        {
            path: '/aga-2020',
            name: 'AGA2020',
            component: () => import('@/views/AGA2020.vue')
        },
        {
            path: '/aga',
            name: 'AGA',
            component: () => import('@/views/AGA2020.vue')
        },
    ]
})
