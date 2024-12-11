import * as VueRouter from 'vue-router';

import Demi from './views/Demi.vue'
import SelDeMer from './views/SelDeMer.vue'
import Sécession from './views/SécessionPage.vue'
import Bibliotheque from './views/Bibliotheque.vue'
import CafePhilo from './views/CafePhilo.vue'
import FabLab from './views/FabLab.vue'
import LocoLinux from './views/LocoLinux.vue'
import HomePage from "@/views/HomePage.vue";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
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
            return {top: 0}
        }
    },
    routes: [
        {
            path: '/',
            name: 'HomePage',
            alias: '/loco-local',
            component: HomePage
        },
        {
            path: '/membres-en-vedette',
            name: 'MembresEnVedette',
            component: HomePage
        },
        {
            path: '/comites',
            name: 'Comites',
            component: HomePage
        },
        {
            path: '/comites-archives',
            name: 'ComitesArchives',
            component: HomePage
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
            path: '/cafe-reparation',
            alias: '/café-réparation',
            name: 'CafeReparation',
            component: () => import("@/views/CafeReparationPage")
        },
        {
            path: '/bouger-ensemble',
            name: 'bouger-ensemble',
            component: () => import("@/views/BougerEnsemblePage")
        },
        {
            path: '/partage-heure',
            name: 'partage-heure',
            component: () => import("@/views/PartageHeurePage")
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
            path: '/financement',
            name: 'financement',
            component: () => import("@/views/FinancementPage")
        },
        {
            path: '/cercle',
            name: 'cercle',
            component: HomePage
        },
        {
            path: '/paiement',
            name: 'paiement',
            component: () => import("@/views/PaiementPage")
        },
        {
            path: '/calendrier',
            name: 'calendrier',
            component: () => import("@/views/CalendrierPage")
        },
        {
            path: '/reservation',
            name: 'reservation',
            component: () => import("@/views/CalendrierPage")
        },
        {
            path: '/tarification',
            name: 'tarification',
            component: () => import("@/views/CalendrierPage")
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
            path: '/secession',
            name: 'Sécession',
            component: Sécession
        },
        {
            path: '/bibliotheque',
            name: 'Bibliotheque',
            component: Bibliotheque
        },
        {
            path: '/cafe-philo',
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
        {
            path: '/adhesion',
            name: 'Adhesion',
            component: () => import('@/views/Adhesion.vue')
        },
        {
            path: '/adhesion/:email',
            name: 'AdhesionWithEmail',
            component: () => import('@/views/Adhesion.vue')
        },
        {
            path: '/politique-confidentialite',
            name: 'PolitiqueConfidentialite',
            component: () => import('@/views/PolitiqueConfidentialite.vue')
        },
        {
            path: '/finance',
            name: 'Finance',
            component: () => import('@/views/FinancePage.vue')
        },
        {
            path: '/:slug/',
            name: 'ComitePage',
            component: () => import('@/views/ComitePage')
        },
    ]
})

export default router
