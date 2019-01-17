<template>
    <div id="app">
        <v-navigation-drawer
                clipped
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
                dense
                id="app-navigation"
        >
            <v-list avatar>
                <div v-for="phone in phoneNumbers" :key="phone.nom" :href="'tel:' + phone.telephone">
                    <v-list-tile :href="'tel:' + phone.telephone">
                        <v-list-tile-action>
                            <v-icon>phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>
                            {{phone.nom}}
                        </v-list-tile-title>
                        <v-list-tile-avatar>
                            <img :src="require('./assets/' + phone.avatar)">
                        </v-list-tile-avatar>
                    </v-list-tile>
                    <v-divider class="mb-2 mt-2"></v-divider>
                </div>
                <v-list-tile
                        href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983">
                    <v-list-tile-action>
                        <v-icon>location_on</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        193a Avenue Grand-Pré, Bonaventure, QC
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile
                        @click="Scroll.allerALaSection('paiement', '/paiement')">
                    <v-list-tile-action>
                        <v-icon>attach_money</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        Don et paiement
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile
                        @click="Scroll.allerALaSection('calendrier', '/calendrier')">
                    <v-list-tile-action>
                        <v-icon>calendar_today</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        Calendrier et réservation
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile
                        href="http://eepurl.com/c7iHkr">
                    <v-list-tile-action>
                        <v-icon>email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        Infolettre
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar flat style="background-color:white;" fixed>
            <v-toolbar-side-icon v-if="$vuetify.breakpoint.mdAndDown">
                <v-icon @click="drawer = !drawer">menu</v-icon>
            </v-toolbar-side-icon>
            <v-spacer v-if="$vuetify.breakpoint.mdAndDown"></v-spacer>
            <router-link to="/">
                <img :src='require("./assets/logo-horizontal.png")'
                     class="pull-right"
                     :height="this.toolbarLogoHeight" v-if="true" @click="Scroll.allerALaSection('app')">
                <img :src='require("./assets/logo-loco-horizontal.png")'
                     :height="this.toolbarLogoHeight + 20" v-if="false">
            </router-link>
            <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat
                       @click="Scroll.allerALaSection('paiement', '/paiement')">
                    <v-icon class="mr-3">attach_money</v-icon>
                    <span>Don et paiement</span>
                </v-btn>
                <v-btn flat
                       @click="Scroll.allerALaSection('calendrier', '/calendrier')">
                    <v-icon class="mr-3">calendar_today</v-icon>
                    Calendrier et réservation
                </v-btn>
                <v-btn flat
                       href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983">
                    <v-icon class="mr-3">location_on</v-icon>
                    193a Avenue Grand-Pré, Bonaventure, QC
                </v-btn>
                <v-btn flat @click="$refs.phoneDialog.show()">
                    <v-icon class="mr-3">phone</v-icon>
                    Téléphones
                </v-btn>
                <v-btn flat href="http://eepurl.com/c7iHkr">
                    <v-icon class="mr-3">email</v-icon>
                    Infolettre
                </v-btn>
                <v-btn flat href="https://www.facebook.com/locolocal1">
                    <img src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30">
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-title class="headline text-uppercase special-font" style="font-weight:bold;">
            </v-toolbar-title>
        </v-toolbar>
        <router-view class="mb-2"/>
        <p class="special-font headline mb-4">
            Merci à tous les bénévoles, clients et organismes partenaires
        </p>
        <v-footer class="pa-3" dark>
            <v-spacer></v-spacer>
            <a href="https://github.com/VincentBlouin/horizons-gaspesiens">
                <img height="32" width="32" :src="require('@/assets/GitHub-Mark-Light-32px.png')" class="mt-1">
            </a>
            <v-spacer></v-spacer>
        </v-footer>
        <PhoneDialog ref="phoneDialog"></PhoneDialog>
    </div>
</template>

<script>
    import PhoneDialog from '@/components/PhoneDialog'
    import PhoneNumbers from '@/PhoneNumbers'
    import VueScrollTo from 'vue-scrollto'
    import Scroll from '@/Scroll'

    export default {
        name: 'App',
        components: {
            PhoneDialog
        },
        computed: {
            toolbarLogoHeight: function () {
                if (this.$vuetify.breakpoint.mdAndDown) {
                    return 25;
                }
                return 30;
            },
            avatarSize: function () {
                if (this.$vuetify.breakpoint.mdAndDown) {
                    return 70;
                }
                return 100;
            },
            host: function () {
                return window.location.hostname;
            }
        },
        data() {
            return {
                Scroll: Scroll,
                drawer: false,
                phoneNumbers: PhoneNumbers.data
            }
        },
        methods: {
            scrollTop: function () {
                VueScrollTo.scrollTo(
                    document.getElementById('app'), 500, {
                        easing: 'linear'
                    }
                )
            }
        }
    }
</script>


<style>
    * {
        font-size: 1.03em;
    }

    #header-banner {
        /*background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);*/
        /*background-image: linear-gradient(120deg, #667eea 0%, #764ba2 100%);*/
        width: 100 wh;
        height: 90vh;
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        -webkit-animation: Gradient 15s ease infinite;
        -moz-animation: Gradient 15s ease infinite;
        animation: Gradient 15s ease infinite;
    }

    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /*color: #2c3e50;*/
        margin-top: 0;
    }

    /*.application--wrap a {*/
    /*color: white !important;*/
    /*}*/
    .special-font {
        font-family: 'Pacifico', cursive !important;
        color: black;
    }

    .vh-center {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .grey-text {
        color: rgba(0, 0, 0, 0.54) !important;
    }

    a {
        text-decoration: none;
    }

    .list-inline {
        padding-left: 0;
        margin-left: -5px;
        list-style: none;
    }

    .list-inline > li {
        display: inline-block;
        padding-right: 5px;
        padding-left: 5px;
    }

    .bullet-like .v-breadcrumbs__divider {
        padding: 0 !important;
    }

    #app-navigation .v-btn--active::before {
        background-color: transparent !important;
    }
</style>
