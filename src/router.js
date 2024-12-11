import * as VueRouter from 'vue-router';
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
            path: '/bouger-ensemble',
            name: 'bouger-ensemble',
            component: () => import("@/views/BougerEnsemblePage")
        },
        {
            path: '/produits-nettoyant',
            name: 'produits-nettoyant',
            component: () => import("@/views/ProduitsNettoyantPage")
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
        // {
        //     path: '/aga-2020',
        //     name: 'AGA2020',
        //     component: () => import('@/views/AGA2020.vue')
        // },
        // {
        //     path: '/aga',
        //     name: 'AGA',
        //     component: () => import('@/views/AGA2020.vue')
        // },
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
        // {
        //     path: '/finance',
        //     name: 'Finance',
        //     component: () => import('@/views/FinancePage.vue')
        // },
        {
            path: '/:slug/',
            name: 'ComitePage',
            component: () => import('@/views/ComitePage')
        },
    ]
})

export default router
