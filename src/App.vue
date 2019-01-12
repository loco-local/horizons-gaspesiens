<template>
    <div id="app">
        <v-toolbar flat style="background-color:white;" fixed>
            <v-toolbar-side-icon v-if="$vuetify.breakpoint.mdAndDown">
                <v-icon>info</v-icon>
            </v-toolbar-side-icon>
            <img :src='require("./assets/logo-horizontal.png")'
                 :height="this.toolbarLogoHeight" v-if="true">
            <img :src='require("./assets/logo-loco-horizontal.png")'
                 :height="this.toolbarLogoHeight + 20" v-if="false">
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
        <router-view/>
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
    *{
        font-size:1.03em;
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
</style>
