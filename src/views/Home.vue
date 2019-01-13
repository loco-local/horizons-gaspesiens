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
        <v-layout row wrap class="mb-5">
            <!--<v-flex xs0 lg3></v-flex>-->
            <v-flex xs12 md6 v-for="(membre, index) in membresDeCerclesTries" :key="membre.nom">
                <v-layout row class="mb-5" :class="{
                    'ml-5 pl-5': $vuetify.breakpoint.mdAndUp
                }">
                    <v-flex xs2 v-if="index % 2 === 0 && $vuetify.breakpoint.mdAndUp"></v-flex>
                    <v-flex xs2 class="" :class="{
                            'mr-4 ml-4': $vuetify.breakpoint.smAndDown
                        }">
                        <v-avatar :size="avatarSize">
                            <img :src='require("../assets/" + membre.avatar)' :alt="membre.nom">
                        </v-avatar>
                    </v-flex>
                    <v-flex xs10 lg8 class="text-xs-left mt-3 ml-4 mr-4">
                        <h3 class="subheading">
                            {{membre.nom}}
                        </h3>
                        <p class="grey-text mb-0">
                            {{membre.cv}}
                        </p>
                        <!--<v-icon small color="black">panorama_fish_eye</v-icon>-->
                        Comités:
                        <v-breadcrumbs :items="membre.cercles" class="d-inline pa-0 subheading bullet-like" small>
                            <template slot="item" slot-scope="props" class="">
                                <router-link :to="'/cercle/' + props.item">
                                    {{nomDeCercle(props.item)}}
                                </router-link>
                            </template>
                            <v-icon slot="divider" class="pa-0 ma-0 caption">lens</v-icon>
                        </v-breadcrumbs>

                        <!--<div class="d-inline" >-->

                        <!--<v-icon v-if="index < membre.cercles.length - 1" small class="mb-1">panorama_fish_eye</v-icon>-->
                        <!--</div>-->
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
            <!--<v-flex xs0 lg2></v-flex>-->
        </v-layout>
        <!--<v-layout row>-->
        <!--<v-flex xs12>-->
        <!--<img :src='require("../assets/2015-06-05 16.20.45.jpg")' width="50%">-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <v-parallax
                :height="parallaxSize"
                :src="require('../assets/peinture-rogner.jpg')"
        ></v-parallax>
        <v-layout row wrap class="mb-1 mt-5">
            <v-flex xs12 class="text-xs-center">
                <h1 class="display-2 font-weight-thin">
                    Comités actifs
                </h1>
            </v-flex>
        </v-layout>
        <Cercle title="Collaborium et espace de vie" anchor="espace" image="travailler au LL.jpg">
            <div slot="subtitle">
                Central, flexible, collectif, le Collaborium est l'espace-temps de collaboration, terme francisé pour
                "Coworking space".
            </div>
            <div slot="content">
                <p class="">
                    Accès à un espace de travail avec internet
                    <v-icon>wifi</v-icon>
                    , machine à café
                    <v-icon>fa-coffee</v-icon>
                    , cuisine pour vous faire à manger
                    <v-icon>fastfood</v-icon>
                    , divans
                    <v-icon>fa-couch</v-icon>
                    pour
                    relaxer, autres travailleurs et travailleuses autonomes avec qui échanger (ou vous pouvez
                    apporter vos écouteurs pour créer votre espace perso), table de ping pong
                    <v-icon>fa-table-tennis</v-icon>
                    et babyfoot pour
                    se changer les
                    idées: le Collaborium au Loco Local c'est tout ça et bien plus encore!
                </p>
                <p>
                    Venez l'essayer!
                </p>
            </div>
        </Cercle>
        <v-divider></v-divider>
        <Cercle title="Groupe d'achat" anchor="groupe-achat" image="string-bean-3861864_640.jpg">
            <!--https://pixabay.com/fr/haricots-assortiment-agriculture-3861864/-->
            <div slot="subtitle">
                Commander des produits biologiques, locaux, en grand format pour limiter la quantité d'emballage, et
                acheter ensemble pour réduire le coût d'achat et augmenter la diversité et l'accessibilité d'une
                nourriture saine et responsable.
            </div>
            <div slot="content">
                <p>
                    Manger devient alors un moyen de constuire une communauté durable et autonome, saine et solidaire.
                </p>
                <v-card class="mt-4">
                    <v-list>
                        <v-list-tile href="mailto:groupe.achat.hg@gmail.com">
                            <v-list-tile-action>
                                <v-icon>mail</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>
                                Demande d'adhésion à groupe.achat.hg@gmail.com
                            </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile href="http://horizonsgaspesiens.net/sites/default/files/Compte-rendu_2018-01-17_0.pdf">
                            <v-list-tile-action>
                                <v-icon>picture_as_pdf</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>
                                Compte rendu de réunion
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </div>
        </Cercle>
        <v-divider></v-divider>
        <Cercle title="Loco Linux" anchor="linux" image="loco-linux2.jpg">
            <div slot="subtitle">
                Loco Linux est composé de Geek bénévoles qui remonteront vos ordinateurs pour pas cher (juste assez pour
                aider à financer Linux et le Loco Local), ou qui les remonteront pour les donner à des familles qui ont
                moins de moyens.
            </div>
            <div slot="content">
                <p class="">
                    Vous avez un vieil ordinateur qui traine dans votre sous-sol, et vous pensez qu'il est rendu trop
                    vieux: pu à la mode, trop lent, trop "dépassé"?
                </p>
                <p>
                    C'est parce que vous ne connaissez pas encore le système d'exploitation Linux. C'est comme Windows
                    ou Mac, mais LIBRE! La différence, c'est qu'il n'installe pas des mises à jour qui ralentissent
                    votre ordinateur jusqu'à ce que vous vous disiez que vous en avez besoin d'un nouveau.
                </p>
            </div>
        </Cercle>
    </div>
</template>

<script>

    import Cercle from '@/components/Cercle'

    export default {
        name: 'home',
        components: {
            Cercle
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
            parallaxSize: function () {
                if (this.$vuetify.breakpoint.mdAndDown) {
                    return 200;
                }
                return 350;
            },
            host: function () {
                return window.location.hostname;
            },
            membresDeCerclesTries: function () {
                return this.membresDeCercles.sort(function () {
                    return 0.5 - Math.random()
                });
            }
        },
        methods: {
            nomDeCercle: function (clefDeCercle) {
                return this.cercles[clefDeCercle].nom;
            }
        }
        ,
        watch: {
            '$route'(to) {
                if (to.params.comite) {
                    document.getElementById(to.params.comite).scrollIntoView();
                }
            }
        }
        ,
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
                        cercles: ['linux', 'ca']
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
