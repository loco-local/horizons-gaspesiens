<template>
    <div id="app">
        <v-navigation-drawer
                clipped
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
                dense
        >
            <v-list avatar>
                <div v-for="phone in phoneNumbers" :key="phone.nom" :href="'tel:' + phone.telephone">
                    <v-list-tile>
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
                <v-list-tile href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983">
                    <v-list-tile-action>
                        <v-icon>location_on</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        193a Avenue Grand-Pré, Bonaventure, QC
                    </v-list-tile-title>
                </v-list-tile>

                <v-list-group
                        prepend-icon="account_circle"
                        value="true"
                >
                    <v-list-tile slot="activator">
                        <v-list-tile-title>Users</v-list-tile-title>
                    </v-list-tile>

                    <v-list-group
                            no-action
                            sub-group
                            value="true"
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-title>Admin</v-list-tile-title>
                        </v-list-tile>
                    </v-list-group>

                    <v-list-group
                            sub-group
                            no-action
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-title>Actions</v-list-tile-title>
                        </v-list-tile>

                        <!--<v-list-tile-->
                        <!--v-for="(crud, i) in cruds"-->
                        <!--:key="i"-->
                        <!--@click=""-->
                        <!--&gt;-->
                        <!--<v-list-tile-title v-text="crud[0]"></v-list-tile-title>-->
                        <!--<v-list-tile-action>-->
                        <!--<v-icon v-text="crud[1]"></v-icon>-->
                        <!--</v-list-tile-action>-->
                        <!--</v-list-tile>-->
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar flat style="background-color:white;" fixed>
            <v-toolbar-side-icon v-if="$vuetify.breakpoint.mdAndDown">
                <v-icon @click="drawer = !drawer">menu</v-icon>
            </v-toolbar-side-icon>
            <v-spacer v-if="$vuetify.breakpoint.mdAndDown"></v-spacer>
            <img :src='require("./assets/logo-horizontal.png")'
                 class="pull-right"
                 :height="this.toolbarLogoHeight" v-if="true">
            <img :src='require("./assets/logo-loco-horizontal.png")'
                 :height="this.toolbarLogoHeight + 20" v-if="false">
            <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>
            <!--<v-avatar-->
            <!--:tile="tile"-->
            <!--:size="60"-->
            <!--color="grey lighten-4 mr-2"-->
            <!--&gt;-->
            <!--<img :src='require("./assets/hug1.jpg")' alt="avatar">-->
            <!--</v-avatar>-->
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat
                       href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983">
                    <v-icon class="mr-3">calendar_today</v-icon>
                    Calendrier et réservation
                </v-btn>
                <v-btn flat
                       href="https://www.google.com/maps/place/193a+Avenue+Grand-Pr%C3%A9,+Bonaventure,+QC+G0C+1E0/@48.0504148,-65.4841869,17z/data=!3m1!4b1!4m5!3m4!1s0x4c9903b413501697:0x54f0eb5dfa1d4425!8m2!3d48.0504112!4d-65.4819983">
                    <v-icon class="mr-3">location_on</v-icon>
                    193a Avenue Grand-Pré, Bonaventure, QC
                </v-btn>
                <v-btn flat @click="phoneModal = true;">
                    <v-icon class="mr-3">phone</v-icon>
                    Téléphones
                </v-btn>
                <v-btn flat href="https://www.facebook.com/locolocal1">
                    <img src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30">
                </v-btn>
            </v-toolbar-items>


            <!--<a href="tel:581-233-9481" class="mr-2">-->
            <!--581-233-9481-->
            <!--</a>-->
            <!--<img :src='require("./assets/FB logo.jpg")'-->
            <!--height="100">-->
            <!--<v-spacer></v-spacer>-->
            <!--<v-icon>phone</v-icon>-->
            <!--Hug-->
            <!--<a href="tel:418-392-9867">-->
            <!--418-392-9867-->
            <!--</a>-->
            <!--<v-icon>phone</v-icon>-->
            <!--Hug-->
            <!--<a href="tel:418-392-9867">-->
            <!--418-392-9867-->
            <!--</a>-->
            <!--<v-icon>phone</v-icon>-->
            <!--Hug-->
            <!--<a href="tel:418-392-9867">-->
            <!--418-392-9867-->
            <!--</a>-->

            <!--<img :src='require("./assets/logo-loco-horizontal.png")' class="my-3"-->
            <!--contain-->
            <!--height="30">-->
            <v-toolbar-title class="headline text-uppercase special-font" style="font-weight:bold;">
                <!--<ColorText text="Horizons Gaspésiens"/>-->
                <!--<span class="purple&#45;&#45;text">-->
                <!--H-->
                <!--</span>-->
                <!--<span class="yellow&#45;&#45;text">-->
                <!--o-->
                <!--</span>-->
                <!--<span class="orange&#45;&#45;text">-->
                <!--r-->
                <!--</span>-->
                <!--<span class="light-blue&#45;&#45;text">-->
                <!--i-->
                <!--</span>-->
                <!--<span class="blue&#45;&#45;text">-->
                <!--z-->
                <!--</span>-->
                <!--<span class="red&#45;&#45;text">-->
                <!--o-->
                <!--</span>-->
                <!--<span>-->
                <!--n-->
                <!--</span>-->
                <!--<span>-->
                <!--s-->
                <!--</span>-->
                <!--rizons Gaspésiens-->
            </v-toolbar-title>
        </v-toolbar>
        <router-view/>
        <v-dialog v-model="phoneModal" v-if="phoneModal" width="600">
            <v-card>
                <v-card-title class="pb-2 title">
                    Téléphones de bénévoles
                    <v-spacer></v-spacer>
                    <v-icon @click="phoneModal = false">close</v-icon>
                </v-card-title>
                <v-card-title class="grey-text subheading grey-text pt-0 mt-0 text-xs-left">
                    N'hésitez pas à contacter ces bénévoles pour le code de la porte, une réservation ou tout autre
                    sujet.
                </v-card-title>
                <v-card-text class="pt-0">
                    <v-list two-line>
                        <v-list-tile
                                v-for="phone in phoneNumbers"
                                :key="phone.nom"
                                avatar
                        >
                            <v-list-tile-avatar>
                                <img :src="require('./assets/' + phone.avatar)">
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{phone.nom}}
                                </v-list-tile-title>
                                <v-list-tile-sub-title>
                                    {{phone.telephone}}
                                </v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import ColorText from './components/ColorText'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            ColorText
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
                drawer: false,
                phoneModal: false,
                phoneName: '',
                phoneNumber: '',
                phoneNumbers: [
                    {
                        nom: "Hug Arsenault",
                        avatar: "hug1-petit-carre.png",
                        telephone: "418-392-9867"
                    },
                    {
                        nom: "Gabrielle Margineanu",
                        avatar: "gaby-petit-carre.jpg",
                        telephone: "418-751-3103"
                    },
                    {
                        nom: "Vincent Blouin",
                        avatar: "chenzo2-petit-carre.jpg",
                        telephone: "581-233-9481"
                    }
                ],
                membresDeCercles: [
                    {
                        nom: "Hug Arsenault",
                        cv: "Hôtelier, artiste de murale et de la débrouille, danseur de promiximité, cayen.",
                        avatar: "hug1-petit-carre.png",
                        cercles: ['CA']
                    },
                    {
                        nom: "Gabrielle Margineanu",
                        cv: "Graphiste, Bédéiste amateure",
                        avatar: "gaby-petit-carre.jpg",
                        cercles: ['CA']
                    },
                    {
                        nom: "Marie-Claire Larocque",
                        cv: "Herboriste, musicienne, graphiste, grimaceuse sympathique.",
                        avatar: "msea-petit-carre.jpg",
                        cercles: ['CA']
                    },
                    {
                        nom: "Bruno Mainville",
                        cv: "Peintre, Enseignant, Philosophe, Massothérapeuthe",
                        avatar: "bruno-petit-carre.jpg",
                        cercles: ['ESPACE']
                    },
                    {
                        nom: "Roy Poirier",
                        cv: "Électronicien",
                        avatar: "roy-petit-carre.jpg",
                        cercles: ['LINUX']
                    },
                    {
                        nom: "Vincent Blouin",
                        cv: "Programmeur",
                        avatar: "chenzo2-petit-carre.jpg",
                        cercles: ['LINUX']
                    }
                ],
                cercles: {
                    CA: {
                        nom: "CA",
                        lien: "CA"
                    }
                }
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
        font-family: 'Shadows Into Light Two', cursive !important;
        color: white;
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
</style>
