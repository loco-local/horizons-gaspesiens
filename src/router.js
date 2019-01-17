import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demi from './views/Demi.vue'
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
        }
    ]
})
