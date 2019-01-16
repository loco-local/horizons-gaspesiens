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
                        <v-list-tile
                                href="http://horizonsgaspesiens.net/sites/default/files/Compte-rendu_2018-01-17_0.pdf">
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
        <v-divider></v-divider>
        <Cercle title="Comptabilité" anchor="comptable" class="pa-0">
            <div slot="image" class="pa-0">
                <v-card
                        class="text-xs-center pa-0"
                        dark
                        width="100%"
                >
                    <v-card-text id="dessin-comptable" class="" width="100%"></v-card-text>
                    <v-card-text>
                        <div class="display-1 font-weight-thin">Balance Revenus/Dépenses 2018-2019</div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions class="justify-center pa-0">
                        <v-btn block flat
                               href="https://www.dropbox.com/s/4410d7cmwhgnurm/Comptabilit%C3%A9%202018-2019.ods?dl=0">
                            <!--<v-icon class="mr-2">fa-dropbox</v-icon>-->
                            Détails sur fichier Dropbox. Faites télécharger.
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
            <div slot="subtitle">
                La transparence est vitale à l'autogestion. L'argent est un composant important du pouvoir. Faut donc
                que ça soit clair !
            </div>
            <div slot="content">
                <p>
                    Il n'y a pas encore d'expert en comptabilité dans notre comité. Par contre, on s'améliore tout le
                    temps.
                </p>
                <p>
                    On manque d'argent par contre mais ça, c'est la responsabilité de tous les membres et du
                    <router-link to="/cercle/financement">comité financement !</router-link>
                </p>
            </div>
        </Cercle>
    </div>
</template>

<script>

    const revenus = [
        1524.13,
        927.81,
        1067.04,
        1162.73,
        967.12,
        1456.65,
        4150.01,
        1382.45,
        1013.02
    ];

    const depenses = [
        1227.8,
        1132.26,
        1310.23,
        1844.59,
        1057.76,
        1411.56,
        4969.86,
        1955.22,
        1337.11
    ];

    const lemieuxDepenses = [
        126.8,
        0,
        166.8,
        410.6,
        0,
        268.13,
        0,
        706.89,
        236.8
    ];

    const lemieuxRevenus = [
        588.74,
        276.72,
        465.69,
        446.07,
        559.58,
        172.9,
        348.75,
        696.35,
        376.2
    ];

    const dette = [
        8355.89,
        8255.89,
        8155.89,
        8055.89,
        7955.89,
        7855.89,
        7755.89,
        7655.89,
        7555.89
    ];

    const mois = [
        'avril',
        'mai',
        'juin',
        'juil',
        'août',
        'sept',
        'oct',
        'nov',
        'dec'
    ];

    import Cercle from '@/components/Cercle'
    import {GoogleCharts} from 'google-charts';

    let VueScrollTo = require('vue-scrollto');

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
            },
            balanceCalculate: function () {
                let balance = [];
                for (let i = 0; i < revenus.length; i++) {
                    let balanceAbsolue = revenus[i] - depenses[i];
                    let balanceSansLemieux = balanceAbsolue - lemieuxRevenus[i] + lemieuxDepenses[i];
                    let balanceAvecProfitsLemieux = balanceSansLemieux + lemieuxRevenus[i] * .4
                    balance[i] = Math.floor(balanceAvecProfitsLemieux);
                }
                return balance;
            },
            dessinComptable() {
                let monthIndex = -1;
                // const data = GoogleCharts.api.visualization.arrayToDataTable([
                //     ['Chart thing', 'Chart amount']
                // ].concat(this.balance.map(function (amount) {
                //     monthIndex++;
                //     return [
                //         mois[monthIndex],
                //         amount
                //     ];
                // })));
                // const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('dessin-comptable'));
                // pie_1_chart.draw(data);

                // let data = new GoogleCharts.api.visualization.DataTable();
                // data.addColumn('string', 'Mois');
                // data.addColumn('number', 'Balance');
                // data.addColumn('number', 'Dette');
                // let monthIndex = -1;
                // data.addRows([
                //     this.balance.map(function (amount) {
                //         monthIndex++;
                //         return [
                //             mois[monthIndex],
                //             amount,
                //             dette[monthIndex]
                //         ];
                //     })
                // ]);


                let data = new GoogleCharts.api.visualization.arrayToDataTable([
                    ['Mois', 'Balance']
                ].concat(
                    this.balance.map(function (amount) {
                        monthIndex++;
                        return [
                            mois[monthIndex],
                            amount
                        ];
                    })
                ))
                var options = {
                    chart: {
                        title: '',
                        subtitle: '',
                    },
                    height: 400,
                    legend: {position: 'none'}
                };

                var chart = new GoogleCharts.api.charts.Line(document.getElementById('dessin-comptable'));

                chart.draw(data, GoogleCharts.api.charts.Line.convertOptions(options));

            }
        }
        ,
        watch: {
            '$route'(to) {
                if (to.params.comite) {
                    VueScrollTo.scrollTo(
                        document.getElementById(to.params.comite), 500, {
                            easing: 'linear',
                            offset: -50
                        }
                    )
                }
            }
        },
        data() {
            return {
                balance: this.balanceCalculate(),
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
                        cercles: ['ca', 'comptable']
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
                        cercles: ['linux', 'ca', 'comptable']
                    },
                    {
                        nom: "Fred Guilbault",
                        cv: "Programmeur, sécurité informatique, marin",
                        avatar: "fred-guilbault-petit-carre.jpg",
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
                    },
                    comptable: {
                        nom: "Comptabilité"
                    }
                }
            }
        },
        mounted() {
            GoogleCharts.load(this.dessinComptable, {'packages': ['line']});
        }
    }
</script>
<style>

</style>
