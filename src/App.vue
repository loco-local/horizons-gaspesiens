<template>
    <v-app>
        <v-toolbar flat style="background-color:white;" fixed>
            <v-toolbar-side-icon v-if="$vuetify.breakpoint.mdAndDown">
                <v-icon>info</v-icon>
            </v-toolbar-side-icon>
            <img :src='require("./assets/logo-horizontal.png")'
                 :height="this.toolbarLogoHeight">
            <v-spacer></v-spacer>

            <v-icon large class="mr-4" v-if="$vuetify.breakpoint.lgAndUp">phone</v-icon>
            <!--<v-avatar-->
            <!--:tile="tile"-->
            <!--:size="60"-->
            <!--color="grey lighten-4 mr-2"-->
            <!--&gt;-->
            <!--<img :src='require("./assets/hug1.jpg")' alt="avatar">-->
            <!--</v-avatar>-->
            <span class="mr-2">Hug Arsenault</span>
            <a href="tel:418-392-9867" class="mr-2">
                418-392-9867
            </a>
            <!--<v-avatar-->
            <!--:tile="tile"-->
            <!--:size="60"-->
            <!--color="grey lighten-4 mr-2"-->
            <!--&gt;-->
            <!--<img :src='require("./assets/gaby.jpg")' alt="avatar">-->
            <!--</v-avatar>-->
            <v-divider
                    class="mx-3"
                    inset
                    vertical
            ></v-divider>
            <span class="mr-2">Gabrielle Margineanu</span>
            <a href="tel:418-751-3103" class="mr-2">
                418-751-3103
            </a>
            <!--<v-avatar-->
            <!--:tile="tile"-->
            <!--:size="60"-->
            <!--color="grey lighten-4 mr-2"-->
            <!--&gt;-->
            <!--<img :src='require("./assets/chenzo.jpg")' alt="avatar">-->
            <!--</v-avatar>-->
            <v-divider
                    class="mx-3"
                    inset
                    vertical
            ></v-divider>
            <span class="mr-2">Vincent Blouin</span>
            <a href="tel:418-751-3103" class="mr-2">
                581-233-9481
            </a>
            <a href="https://www.facebook.com/locolocal1" class="ml-4">
                <img src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30">
            </a>
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

        <!--<div style="width:100%">-->
        <!--<img :src='require("./assets/2015-06-05 16.20.45.jpg")' width="50%">-->
        <!--&lt;!&ndash;<img :src='require("./assets/souper spag.jpg")' width="50%">&ndash;&gt;-->
        <!--</div>-->
        <!--<v-parallax-->
        <!--dark-->
        <!--src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"-->
        <!--&gt;-->
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
        <!--</v-parallax>-->
        <v-content class="pa-4 mt-0">
            <v-layout row wrap class="mb-5">
                <v-flex xs12 class="text-xs-center">
                    <h1 class="display-2 font-weight-thin">
                        Membres
                    </h1>
                    <h4 class="subheading font-weight-thin">
                        de cercles actifs
                    </h4>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs-4></v-flex>
                <v-flex xs-4 class="vh-center">
                    <!--<v-layout row>-->
                    <!--<v-flex xs-1>-->
                    <!--<v-avatar-->
                    <!--:tile="tile"-->
                    <!--:size="120"-->
                    <!--color="grey lighten-4 mr-2"-->
                    <!--&gt;-->
                    <!--<img :src='require("./assets/hug1-petit-carre.png")' alt="avatar">-->
                    <!--</v-avatar>-->
                    <!--</v-flex>-->
                    <!--<v-flex xs-10>-->
                    <!--<div>-->
                    <!--<v-subheader>-->
                    <!--Hug Arsenault-->
                    <!--</v-subheader>-->
                    <!--</div>-->
                    <!--</v-flex>-->
                    <!--</v-layout>-->
                    <!--<v-list three-line style="background-color:transparent;">-->
                    <!--<v-list-tile avatar v-for="membre in membresDeCercles" class="mb-5">-->
                    <!--<v-list-tile-avatar :size="avatarSize">-->
                    <!--<img :src='require("./assets/" + membre.avatar)' alt="avatar">-->
                    <!--</v-list-tile-avatar>-->
                    <!--<v-list-tile-content class="ml-4">-->
                    <!--<v-list-tile-title>-->
                    <!--{{membre.nom}}-->
                    <!--</v-list-tile-title>-->
                    <!--<v-list-tile-sub-title>-->
                    <!--{{membre.cv}}-->
                    <!--</v-list-tile-sub-title>-->
                    <!--<v-list-tile-title>-->
                    <!--<em class="">Cerles:</em>-->
                    <!--<span v-for="clefDeCercle in membre.cercles">-->
                    <!--{{clefDeCercle}}-->
                    <!--</span>-->
                    <!--</v-list-tile-title>-->
                    <!--</v-list-tile-content>-->
                    <!--</v-list-tile>-->
                    <!--</v-list>-->
                    <!--<v-avatar-->
                    <!--:tile="tile"-->
                    <!--:size="120"-->
                    <!--color="grey lighten-4 mr-2"-->
                    <!--&gt;-->
                    <!--<img :src='require("./assets/hug1-petit-carre.png")' alt="avatar">-->
                    <!--</v-avatar>-->
                    <!--<span class="mr-2">Hug Arsenault</span>-->
                    <!--<a href="tel:418-392-9867" class="mr-2">-->
                    <!--418-392-9867-->
                    <!--</a>-->
                </v-flex>
                <v-flex xs-4></v-flex>
            </v-layout>
            <v-layout row v-for="membre in membresDeCercles" class="mb-5">
                <v-flex xs0 lg4></v-flex>
                <v-flex xs12 lg4>
                    <v-layout row class="vh-center">
                        <v-flex xs2 :class="{
                            'mr-4': $vuetify.breakpoint.mdAndDown
                        }">
                            <v-avatar :size="avatarSize">
                                <img :src='require("./assets/" + membre.avatar)' :alt="membre.nom">
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
                                <span v-for="clefDeCercle in membre.cercles">
                                        {{clefDeCercle}}
                                    </span>
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
                <v-flex xs0></v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <img :src='require("./assets/2015-06-05 16.20.45.jpg")' width="50%">
                </v-flex>
            </v-layout>
            <!--<v-parallax-->
            <!--height="300"-->
            <!--:src='require("./assets/2015-06-05 16.20.45.jpg")'-->
            <!--&gt;</v-parallax>-->
            <!--<v-layout-->
            <!--align-center-->
            <!--column-->
            <!--justify-center-->
            <!--&gt;-->
            <!--<h1 class="display-2 font-weight-thin mb-3">-->
            <!--<img :src='require("./assets/logo-horizontal.png")' height="30">-->
            <!--</h1>-->
            <!--<h1 class="display-2 font-weight-thin mb-3">-->
            <!--<img :src='require("./assets/logo-loco-horizontal.png")' height="30">-->
            <!--</h1>-->
            <!--<h4 class="subheading">Géré par ses membres pour partager et faire plus</h4>-->
            <!--</v-layout>-->
            <!--<v-layout>-->
            <!--<v-flex mb-4></v-flex>-->
            <!--<v-flex mb-4 class="headline" id="panel">-->
            <!--<h3>Géré par ses membres pour partager et faire plus</h3>-->

            <!--&lt;!&ndash;<p>&ndash;&gt;-->
            <!--&lt;!&ndash;Le Loco Local et Horizon Gaspésien sont gérés par leurs <a href="#">membres</a>.&ndash;&gt;-->
            <!--&lt;!&ndash;</p>&ndash;&gt;-->
            <!--<p>-->
            <!--Leur <a href="#">mission</a> est de stimuler et soutenir la mise en commun et le partage de-->
            <!--ressources-->
            <!--et de lieux.-->
            <!--</p>-->
            <!--&lt;!&ndash;<p>&ndash;&gt;-->
            <!--&lt;!&ndash;Tout cela dans le respect de certaines <a href="">valeurs</a>.&ndash;&gt;-->
            <!--&lt;!&ndash;</p>&ndash;&gt;-->

            <!--<v-list subheader>-->
            <!--<v-list-tile avatar>-->
            <!--<v-list-tile-avatar>-->
            <!--<img :src="require('./assets/hug1.jpg')">-->
            <!--</v-list-tile-avatar>-->
            <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>-->
            <!--Hug 418-392-9867-->
            <!--</v-list-tile-title>-->
            <!--</v-list-tile-content>-->
            <!--<v-list-tile-action>-->
            <!--<v-icon class="mr-2" color="white">phone</v-icon>-->
            <!--</v-list-tile-action>-->
            <!--</v-list-tile>-->
            <!--</v-list>-->

            <!--<p>-->
            <!--<v-icon class="mr-2" color="white">map</v-icon>-->
            <!--<a href="#">193A Avenue de Grand-Pré Bonaventure</a>-->
            <!--</p>-->
            <!--</v-flex>-->
            <!--<v-flex mb-4></v-flex>-->
            <!--</v-layout>-->
            <!--<HelloWorld/>-->
        </v-content>
    </v-app>
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
            }
        },
        data() {
            return {
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
</style>
