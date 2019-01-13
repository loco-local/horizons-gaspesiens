import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Calendrier from './views/Calendrier.vue'

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
            path: '/comite/:comite',
            name: 'home',
            component: Home
        },
        {
            path: '/calendrier',
            name: 'calendrier',
            component: Calendrier
        }
    ]
})
