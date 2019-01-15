<template>
    <div class="calendar pt-5">
        <v-layout row wrap class="mt-5">
            <v-flex xs0 lg3></v-flex>
            <v-flex xs12 lg6 class="text-xs-center">
                <h1 class="display-2 font-weight-thin">
                    Calendrier et réservation du Loco Local
                </h1>
                <h4 class="subheading font-weight-thin">
                    Lieu collectif, ouvert et versatile où citoyen.ne.s et organisations locales organisent, de façon
                    autonome, des activités sociales, culturelles, politiques, d'éducation populaire et/ou de
                    mobilisation citoyenne
                </h4>
            </v-flex>
            <v-flex xs0 lg3></v-flex>
        </v-layout>
        <!--<v-layout row class="mt-5">-->
        <!--<v-flex xs12 class="text-xs-center">-->
        <!--<img :src='require("@/assets/logo-loco-horizontal.png")'-->
        <!--:height="50">-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <v-layout row wrap class="mt-5">
            <v-flex xs0 lg2></v-flex>
            <v-flex xs12 lg8>
                <v-tabs
                        color="cyan"
                        dark
                        slider-color="yellow"
                        grow
                        class="pa-0 ma-0"
                >
                    <v-tab>
                        <v-icon class="mr-4">calendar_today</v-icon>
                        Calendrier
                    </v-tab>
                    <v-tab>
                        <v-icon class="mr-4">
                            fa-clipboard
                        </v-icon>
                        Réservation
                    </v-tab>
                    <v-tab-item class="mt-3 text-xs-left">
                        <p class="">
                            Ce calendrier est notre référence pour réserver le local!
                        </p>
                        <p class="text-xs-left pa-0 ma-0">
                            Formations, assemblées, soirées, rencontres, danses, slam, yoga, projection documentaires,
                            discussions et plus encore.
                        </p>
                        <div id="hide-calendar-title" class="pa-0 ma-0"></div>
                        <iframe frameborder="0" :height="calendarHeight" scrolling="no"
                                src="https://www.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;hl=fr&amp;bgcolor=%23FFFFFF&amp;src=kg43q7s4qltiom7s1gntdhts3k%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FMontreal"
                                style=" border-width:0 " width="100%"></iframe>
                    </v-tab-item>
                    <v-tab-item touchless>
                        <v-tabs
                                color="cyan"
                                dark
                                slider-color="yellow"
                                class=""
                                grow
                                v-model="reserveTab"
                                touchless
                        >
                            <v-tab>
                                <v-icon class="mr-2">
                                    attach_money
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Contributions et coûts
                                </span>
                            </v-tab>
                            <v-tab>
                                <v-icon class="mr-2">
                                    priority_high
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Priorité
                                </span>
                            </v-tab>
                            <v-tab>
                                <v-icon class="mr-2">
                                    fa-edit
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Inscrire mon activité
                                </span>
                            </v-tab>
                            <v-tab>
                                <v-icon class="mr-2">
                                    info
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Informations à spécifier
                                </span>
                            </v-tab>
                            <v-tab>
                                <v-icon class="mr-2">
                                    fa-broom
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Entretien du local
                                </span>
                            </v-tab>
                            <v-tab-item class="text-xs-left pl-4 pt-4">
                                <h3 class="title mb-3">
                                    Contributions et coûts
                                </h3>
                                <p>
                                    Le Loco Local est auto-financé grâce à la contribution de ses utilisateur.trices.
                                </p>
                                <v-card class="ma-4 elevation-8">
                                    <!--<v-card-title class="title font-weight-bold">-->
                                    <!--A-->
                                    <!--</v-card-title>-->
                                    <v-card-text>
                                        <p>
                                            Une contribution volontaire est proposée lors des activités initiées par les
                                            citoyen.ne.s. La
                                            bonne vieille méthode du « tour de chapeau », basée sur la confiance, nous
                                            permet
                                            d'amasser
                                            des
                                            dons pour le Local.
                                        </p>
                                        <p>
                                            *Pour les contributions volontaires: une boîte et des enveloppes sont
                                            disponibles à
                                            l'entrée
                                            du
                                            local.
                                        </p>
                                    </v-card-text>
                                </v-card>
                                <p class="font-weight-bold text-xs-center">
                                    OU
                                </p>
                                <v-card class="ma-4 elevation-8">
                                    <!--<v-card-title class="title font-weight-bold">-->
                                    <!--B-->
                                    <!--</v-card-title>-->
                                    <v-card-text>
                                        <p>
                                            Lorsqu'une organisation désire louer le local, nous proposons les tarifs
                                            suivants:
                                        </p>
                                        <v-data-table
                                                class="subheading"
                                                hide-actions
                                                :items="priceRows"
                                        >
                                            <template slot="headers">
                                                <tr>
                                                    <th></th>
                                                    <th class="subheading">
                                                        Un bloc de 4 heures<br>
                                                        (matin, après-midi ou soirée)
                                                    </th>
                                                    <th class="subheading">
                                                        Un bloc de 8 heures<br>
                                                        (toute la journée)
                                                    </th>
                                                </tr>
                                            </template>
                                            <template slot="items" slot-scope="props">
                                                <td class="subheading">
                                                    {{props.item.row1}}
                                                </td>
                                                <td class="subheading">
                                                    {{props.item.row2}}
                                                </td>
                                                <td class="subheading">
                                                    {{props.item.row3}}
                                                </td>
                                            </template>
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                                <p class="mt-4">
                                    * Pour la location de la salle à la collectivité: merci de nous écrire à
                                    <a href="mailto:horizonsgaspesiens@gmail.com">
                                        horizonsgaspesiens@gmail.com
                                    </a>
                                    pour qu'une facture soit émise au besoin!
                                </p>
                                <v-layout row>
                                    <v-flex xs12 class="text-xs-right">
                                        <v-btn @click="nextTab()">
                                            Prochaine page
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-tab-item>
                            <v-tab-item class="text-xs-left pl-4 pt-4">
                                <h3 class="title mb-3">
                                    Priorité
                                </h3>
                                <p>
                                    Notre outil : un calendrier commun auto-géré
                                </p>
                                <p>
                                    Le calendrier est notre référence pour réserver le Loco Local et pour éviter qu'il y
                                    ait
                                    des conflits d'horaire.
                                </p>
                                <p>
                                    Pour la réservation du Loco Local, la règle de « la première arrivée, première servie
                                    »
                                    est de mise.
                                </p>
                                <p>
                                    Et s'il y a conflit d'horaire, vous pouvez toujours contacter la personne qui a
                                    réservé
                                    le local...
                                </p>
                                <p>
                                    Prenez note que le local n'est pas réservé tant que votre activité n'apparaît pas
                                    sur le
                                    calendrier.
                                </p>
                                <v-layout row>
                                    <v-flex xs12 class="text-xs-right">
                                        <v-btn @click="nextTab()">
                                            Prochaine page
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-tab-item>
                            <v-tab-item class="text-xs-left pl-4 pt-4">
                                <h3 class="title mb-3">
                                    Inscrire mon activité
                                </h3>
                                <p>
                                    1. Contactez-nous pour qu'on active votre accès au calendrier via Google-agenda ou
                                    si vous avez besoin de soutien.
                                </p>
                                <p class="text-xs-center">
                                    <v-btn @click="$refs.phoneDialog.show()">
                                        <v-icon class="mr-2">phone</v-icon>
                                        Appelez-nous
                                    </v-btn>
                                </p>
                                <p>
                                    Écrivez-nous à
                                    <a href="mailto:horizonsgaspesiens@gmail.com">
                                        horizonsgaspesiens@gmail.com
                                    </a>
                                </p>
                                <p>
                                    2. Vous pourrez ensuite inscrire et décrire vous-même vos activités dans le
                                    calendrier!
                                </p>
                                <p>
                                    *** N'oubliez pas de cliquer sur l'agenda du Loco Local lorsque vous ajouter une
                                    activité au calendier. Par défaut,c'est votre agenda personnelle qui est
                                    sélectionné!
                                </p>
                                <v-layout row>
                                    <v-flex xs12 class="text-xs-right">
                                        <v-btn @click="nextTab()">
                                            Prochaine page
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-tab-item>
                            <v-tab-item class="text-xs-left pl-4 pt-4">
                                <h3 class="title mb-3">
                                    Informations à spécifier
                                </h3>
                                <ul>
                                    <li>
                                        une courte description de l'activité
                                    </li>
                                    <li>
                                        si l'activité est « ouverte à tou.te.s » ou « sur invitation seulement »
                                    </li>
                                    <li>
                                        la personne référence et une façon de la contacter
                                    </li>
                                    <li>
                                        s’il s’agit d’un réservation du local en entier (i.e. qu’aucune autre activité
                                        ne peut avoir lieu au même moment)
                                    </li>
                                </ul>
                                <v-layout row class="mt-4">
                                    <v-flex xs12 class="text-xs-right">
                                        <v-btn @click="nextTab()">
                                            Prochaine page
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-tab-item>
                            <v-tab-item class="text-xs-left pl-4 pt-4">
                                <h3 class="title mb-3">
                                    Entretien du local
                                </h3>
                                <p>
                                    L'idée c'est de laisser le lieu plus propre qu'à son arrivée: tous les accessoires
                                    et produits de nettoyage sont fournis.
                                </p>
                                <p>
                                    Merci d'encourager le Loco Local et la coop de solidarité Horizons gaspésiens!
                                </p>
                            </v-tab-item>
                        </v-tabs>
                    </v-tab-item>
                </v-tabs>
            </v-flex>
            <v-flex xs0 lg2></v-flex>
        </v-layout>
        <PhoneDialog ref="phoneDialog"></PhoneDialog>
    </div>
</template>

<script>
    import PhoneDialog from '@/components/PhoneDialog'

    export default {
        components: {
            PhoneDialog
        },
        computed: {
            calendarHeight: function () {
                if (this.$vuetify.breakpoint.mdAndDown) {
                    return 350;
                }
                return 600;
            }
        },
        data: function () {
            return {
                reserveTab: null,
                priceRows: [
                    {
                        row1: 'Grande salle (40 personnes)',
                        row2: '50$ + taxes',
                        row3: '75$ + taxes',
                    },
                    {
                        row1: 'Cuisine',
                        row2: '25$ + taxes',
                        row3: '40$ + taxes',
                    },
                    {
                        row1: 'Petite salle de réunion (5 personnes)',
                        row2: '20$ + taxes',
                        row3: '30$ + taxes',
                    }
                ]
            }
        },
        methods: {
            nextTab() {
                this.reserveTab = parseInt(this.reserveTab) + 1;
            }
        }
    }
</script>
<style>
    #hide-calendar-title {
        position: relative;
        height: 20px;
        top: 20px;
        background-color: white;
    }
</style>
