<template>
    <div class="home">
        <v-layout
                align-center
                column
                justify-center
                id="header-banner"
        >
            <h1 class="display-2 font-weight-thin mb-3 white--text">
                Géré de façon horizontale par ses membres
            </h1>
            <h4 class="subheading font-weight-thin white--text">
                Pour partager des resources et des projets afin de s'adresser aux inégalités sociales et
                environnementales
            </h4>
            <!--<h4 class="subheading font-weight-thin">-->
            <!--Adresser les inégalités sociales et environnementales-->
            <!--</h4>-->
        </v-layout>
        <v-layout row wrap class="mb-5 mt-5">
            <v-flex xs12 class="text-xs-center">
                <h1 class="display-2 font-weight-thin">
                    Membres
                </h1>
                <h4 class="subheading font-weight-thin">
                    de comités actifs
                </h4>
            </v-flex>
        </v-layout>
        <v-layout row v-for="membre in membresDeCercles" class="mb-5">
            <v-flex xs0 lg4></v-flex>
            <v-flex xs12 lg4>
                <v-layout row class="vh-center">
                    <v-flex xs2 :class="{
                            'mr-4 ml-4': $vuetify.breakpoint.mdAndDown
                        }">
                        <v-avatar :size="avatarSize">
                            <img :src='require("../assets/" + membre.avatar)' :alt="membre.nom">
                        </v-avatar>
                    </v-flex>
                    <v-flex xs10 class="text-xs-left mt-3 ml-4">
                        <h3 class="subheading">
                            {{membre.nom}}
                        </h3>
                        <p class="grey-text mb-0">
                            {{membre.cv}}
                        </p>
                        <p>
                            Comités:
                            <router-link v-for="clefDeCercle in membre.cercles" :to="'/comite/' + clefDeCercle">
                                {{nomDeCercle(clefDeCercle)}}
                            </router-link>
                        </p>
                        <!--<v-card flat style="background-color: transparent;">-->
                        <!--<v-card-title class="subheading">-->
                        <!--{{membre.nom}}-->
                        <!--</v-card-title>-->
                        <!--<v-card-text>-->

                        <!--</v-card-text>-->
                        <!--</v-card>-->
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs0 lg4></v-flex>
        </v-layout>
        <!--<v-layout row>-->
        <!--<v-flex xs12>-->
        <!--<img :src='require("../assets/2015-06-05 16.20.45.jpg")' width="50%">-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <v-parallax
                height="400"
                :src="require('../assets/peinture.jpg')"
        ></v-parallax>
        <v-layout row wrap class="mb-5 mt-5">
            <v-flex xs12 class="text-xs-center">
                <h1 class="display-2 font-weight-thin">
                    Comités actifs
                </h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap id="espace" class="vh-center">
            <v-flex xs12 lg7>
                <v-card class="ma-4">
                    <v-img
                            :src="require('../assets/travailler au LL.jpg')"
                            aspect-ratio="1.78"
                    ></v-img>
                    <v-card-title primary-title class="mb-0">
                        <h3 class="headline">
                            Collaborium et espace de vie
                        </h3>
                    </v-card-title>
                    <v-card-text class="text-xs-left mt-0 pt-0 subheading">
                        <p class="font-weight-medium">
                            Central, flexible, collectif, le Collaborium est l'espace-temps de collaboration, terme
                            francisé pour "Coworking space".
                        </p>
                        <p>
                            Accès à un espace de travail avec internet, cuisine pour vous faire à manger, divans pour
                            relaxer, autres travailleurs et travailleuses autonomes avec qui échanger (ou vous pouvez
                            apporter vos écouteurs pour créer votre espace perso), table de ping pong et babyfoot pour se changer les
                            idées: le Collaborium au Loco Local c'est tout ça et bien plus encore!
                        </p>
                        <p>
                            Venez l'essayer!
                        </p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 lg7>
                <v-card class="ma-4">
                    <v-img
                            :src="require('../assets/loco-linux2.jpg')"
                    ></v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Loco Linux</h3>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        asdf
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

    export default {
        name: 'home',
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
        methods: {
            nomDeCercle: function (clefDeCercle) {
                return this.cercles[clefDeCercle].nom;
            }
        },
        watch: {
            '$route'(to) {
                if (to.params.comite) {
                    document.getElementById(to.params.comite).scrollIntoView();
                }
            }
        },
        data() {
            return {
                membresDeCercles: [
                    {
                        nom: "Hug Arsenault",
                        cv: "Hôtelier, artiste de murale et de la débrouille, danseur de promiximité, cayen.",
                        avatar: "hug1-petit-carre.png",
                        cercles: ['ca']
                    },
                    {
                        nom: "Gabrielle Margineanu",
                        cv: "Graphiste, Bédéiste amateure",
                        avatar: "gaby-petit-carre.jpg",
                        cercles: ['ca']
                    },
                    {
                        nom: "Marie-Claire Larocque",
                        cv: "Herboriste, musicienne, graphiste, grimaceuse sympathique.",
                        avatar: "msea-petit-carre.jpg",
                        cercles: ['ca', 'espace']
                    },
                    {
                        nom: "Bruno Mainville",
                        cv: "Peintre, Enseignant, Philosophe, Massothérapeuthe",
                        avatar: "bruno-petit-carre.jpg",
                        cercles: ['espace']
                    },
                    {
                        nom: "Roy Poirier",
                        cv: "Électronicien",
                        avatar: "roy-petit-carre.jpg",
                        cercles: ['linux']
                    },
                    {
                        nom: "Vincent Blouin",
                        cv: "Programmeur",
                        avatar: "chenzo2-petit-carre.jpg",
                        cercles: ['linux']
                    }
                ],
                cercles: {
                    ca: {
                        nom: "CA"
                    },
                    espace: {
                        nom: "Collaborium et espace de vie"
                    },
                    linux: {
                        nom: "Loco Linux"
                    }
                }
            }
        }
    }
</script>
<style>
</style>
