<template>
    <div class="calendar" id="calendrier">
        <v-layout row wrap class="mt-12">
            <v-flex xs0 lg3></v-flex>
            <v-flex xs12 lg6 class="text-center">
                <h1 class="display-2 font-weight-thin">
                    Calendrier et réservation du Loco Local
                </h1>
                <h4 class="text-h6 font-weight-regular">
                    Lieu collectif, ouvert et versatile où citoyen.ne.s et organisations locales organisent, de façon
                    autonome, des activités sociales, culturelles, politiques, d'éducation populaire et/ou de
                    mobilisation citoyenne
                </h4>
            </v-flex>
            <v-flex xs0 lg3></v-flex>
        </v-layout>
        <!--<v-layout row class="mt-12">-->
        <!--<v-flex xs12 class="text-center">-->
        <!--<img :src='require("@/assets/logo-loco-horizontal.png")'-->
        <!--:height="50">-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <v-layout row wrap class="mt-12">
            <v-flex xs0 lg2></v-flex>
            <v-flex xs12 lg8>
                <v-tabs
                        color="black"
                        light
                        slider-color="#ff3301"
                        grow
                        class="pa-0 ma-0"
                        v-model="calendarTab"
                >
                    <v-tab @click.prevent="$router.push('calendrier')" href="#">
                        <v-icon class="mr-6">calendar_today</v-icon>
                        Calendrier
                    </v-tab>
                    <v-tab @click.prevent="$router.push('réservation')" href="#">
                        <v-icon class="mr-6">
                            fa-clipboard
                        </v-icon>
                        Réservation
                    </v-tab>
                    <v-tab-item class="mt-4 text-left" :class="{
                        'pl-0' : $vuetify.breakpoint.mdAndUp,
                        'pl-0' : $vuetify.breakpoint.smAndDown
                    }">
                        <p class="">
                            Ce calendrier est notre référence pour réserver le local!
                            <v-btn @click="calendarTab = 1">
                                Réserver
                            </v-btn>
                        </p>
                        <p class="text-left pa-0 ma-0">
                            Formations, assemblées, soirées, rencontres, danses, slam, yoga, projection documentaires,
                            discussions et plus encore.
                        </p>
                        <div id="hide-calendar-title" class="pa-0 ma-0"></div>
                        <iframe frameborder="0" :height="calendarHeight" scrolling="no"
                                src="https://www.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;hl=fr&amp;bgcolor=%23FFFFFF&amp;src=kg43q7s4qltiom7s1gntdhts3k%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FMontreal"
                                style=" border-width:0 " width="100%"></iframe>
                    </v-tab-item>
                    <v-tab-item touchless class='pl-0'>
                        <v-tabs
                                color="black"
                                slider-color="#ff3301"
                                class=""
                                grow
                                v-model="reserveTab"
                                touchless
                        >
                            <v-tab href="#" @click.prevent>
                                <v-icon class="mr-2">
                                    attach_money
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Contributions et coûts
                                </span>
                            </v-tab>
                            <v-tab href="#" @click.prevent>
                                <v-icon class="mr-2">
                                    priority_high
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Priorité
                                </span>
                            </v-tab>
                            <v-tab href="#" @click.prevent>
                                <v-icon class="mr-2">
                                    fa-edit
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Inscrire mon activité
                                </span>
                            </v-tab>
                            <v-tab href="#" @click.prevent>
                                <v-icon class="mr-2">
                                    info
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Informations à spécifier
                                </span>
                            </v-tab>
                            <v-tab href="#" @click.prevent>
                                <v-icon class="mr-2">
                                    fa-broom
                                </v-icon>
                                <span class="hidden-sm-and-down">
                                    Entretien du local
                                </span>
                            </v-tab>
                            <v-tab-item class="text-left pt-6" :class="{
                                'pl-4' : $vuetify.breakpoint.mdAndUp,
                                'pl-2' : $vuetify.breakpoint.smAndDown
                            }">
                                <h3 class="title mb-4">
                                    Contributions et coûts
                                </h3>
                                <p>
                                    Le Loco Local est auto-financé grâce à la contribution de ses utilisateur.trices.
                                </p>
                                <v-card :class="{
                                    'ma-4 elevation-8' : $vuetify.breakpoint.mdAndUp,
                                    'ml-0 pa-0' : $vuetify.breakpoint.smAndDown
                                }" :flat="$vuetify.breakpoint.smAndDown">
                                    <!--<v-card-title class="title font-weight-bold">-->
                                    <!--A-->
                                    <!--</v-card-title>-->
                                    <v-card-text :class="{
                                        'ma-0 pa-0' : $vuetify.breakpoint.smAndDown
                                    }">
                                        Nous avons 2 formules d’auto-financement
                                        <v-list three-line-line>
                                            <v-list-item>
                                                <v-list-item-action v-if="$vuetify.breakpoint.mdAndUp">
                                                    <v-icon>fa-hat-cowboy</v-icon>
                                                </v-list-item-action>
                                                <v-list-item-content>
                                                    <v-list-item-title class="font-weight-regular" :class="{
                                                        'subtitle-1' : $vuetify.breakpoint.smAndDown,
                                                        'title' : $vuetify.breakpoint.mdAndUp
                                                    }">
                                                        <span v-if="$vuetify.breakpoint.mdAndUp">
                                                            La bonne vielle méthode du «tour de chapeau»
                                                        </span>
                                                        <v-icon class="mr-1" v-if="$vuetify.breakpoint.smAndDown" small>
                                                            fa-hat-cowboy
                                                        </v-icon>
                                                        <span v-if="$vuetify.breakpoint.smAndDown">
                                                            La méthode du «tour de chapeau»
                                                        </span>
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle class="subtitle-1">
                                                        Pour les activités citoyennes ouvertes à tous.
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item class="mt-2">
                                                <v-list-item-action v-if="$vuetify.breakpoint.mdAndUp">
                                                    <v-icon>
                                                        event
                                                    </v-icon>
                                                </v-list-item-action>
                                                <v-list-item-content>
                                                    <v-list-item-title class="font-weight-regular" :class="{
                                                        'subtitle-1' : $vuetify.breakpoint.smAndDown,
                                                        'title' : $vuetify.breakpoint.mdAndUp
                                                    }">
                                                        <v-icon class="mr-1" v-if="$vuetify.breakpoint.smAndDown" small>
                                                            event
                                                        </v-icon>
                                                        Location par un membre ou un organisme
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle class="subtitle-1">
                                                        Pour un usage publique ou privé.
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                        <v-card flat>
                                            <v-card-text>
                                                <v-layout row wrap>
                                                    <v-flex sm12 md2 lg1 class="text-center" :class="{
                                                        'pb-4': $vuetify.breakpoint.smAndDown
                                                    }">
                                                        <v-icon large>
                                                            warning
                                                        </v-icon>
                                                    </v-flex>
                                                    <v-flex sm12 md10 lg11 class="title font-weight-regular">
                                                        <p>
                                                            Dans tous les cas l'organisme ou la personne porteuse de
                                                            l’activité
                                                            devra
                                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQu47n0_bPKPO2kDAlWLdvg4JoJC-pasQWeBVQWVP2OI5tdw/viewform">
                                                                être membre
                                                            </a>, indiquer sur l’agenda son nom et numéro
                                                            de tel
                                                            ainsi que les <a href="#" @click.prevent="reserveTab = 3">informations
                                                            à spécifier</a>.
                                                        </p>
                                                        <p>
                                                            Elle s’engage aussi à passer le chapeau, sauf en location,
                                                            et
                                                            remplir le
                                                            «coupon d’activité» qui se trouve à côté de la boîte à
                                                            contribution.
                                                            L'insérer dans l’enveloppe avec l’argent et déposer le tout
                                                            dans la
                                                            boite à
                                                            contribution.
                                                        </p>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card-text>
                                        </v-card>
                                    </v-card-text>
                                </v-card>
                                <v-card class="ma-6 elevation-8">
                                    <!--<v-card-title class="title font-weight-bold">-->
                                    <!--B-->
                                    <!--</v-card-title>-->
                                    <v-card-text>
                                        <p>
                                            Lorsqu'une organisation désire louer le local, nous proposons les tarifs
                                            suivants:
                                        </p>
                                        <v-data-table
                                                class="subtitle-1"
                                                hide-actions
                                                :headers="priceHeaders"
                                                :items="priceRows"
                                        >
                                            <template slot="header" slot-scope="props">
                                                <tr>
                                                    <th></th>
                                                    <th class="subtitle-1">
                                                        Un bloc de 4 heures<br>
                                                        (matin, après-midi ou soirée)
                                                    </th>
                                                    <th class="subtitle-1">
                                                        Un bloc de 8 heures<br>
                                                        (toute la journée)
                                                    </th>
                                                </tr>
                                            </template>
                                            <template slot="item" slot-scope="props">
                                                <td class="subtitle-1">
                                                    {{props.item.row1}}
                                                </td>
                                                <td class="subtitle-1">
                                                    {{props.item.row2}}
                                                </td>
                                                <td class="subtitle-1">
                                                    {{props.item.row3}}
                                                </td>
                                            </template>
                                        </v-data-table>
                                    </v-card-text>
                                </v-card>
                                <v-card flat>
                                    <v-card-text class="text-center">
                                        Facture sur demande
                                        <a href="mailto:horizonsgaspesiens@gmail.com">
                                            <v-icon class="ml-2 mr-2">email</v-icon>
                                            horizonsgaspesiens@gmail.com
                                        </a>
                                    </v-card-text>
                                </v-card>
                                <v-layout row>
                                    <v-flex xs12 class="text-xs-right">
                                        <v-btn @click="nextTab()">
                                            Prochaine page
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-tab-item>
                            <v-tab-item class="text-left pl-6 pt-6">
                                <h3 class="title mb-4">
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
                                    Pour la réservation du Loco Local, la règle de « la première arrivée, première
                                    servie
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
                            <v-tab-item class="text-left pl-6 pt-6">
                                <h3 class="title mb-4">
                                    Inscrire mon activité
                                </h3>
                                <p>
                                    1. Contactez-nous pour qu'on active votre accès au calendrier via Google-agenda ou
                                    si vous avez besoin de soutien.
                                </p>
                                <p class="text-center">
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
                            <v-tab-item class="text-left pl-6 pt-6">
                                <h3 class="title mb-4">
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
                                        s’il s’agit d’une réservation du local en entier (i.e. qu’aucune autre activité
                                        ne peut avoir lieu au même moment)
                                    </li>
                                </ul>
                                <v-layout row class="mt-6">
                                    <v-flex xs12 class="text-xs-right">
                                        <v-btn @click="nextTab()">
                                            Prochaine page
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-tab-item>
                            <v-tab-item class="text-left pl-6 pt-6">
                                <h3 class="title mb-4">
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
    import Scroll from '@/Scroll'

    export default {
        components: {
            PhoneDialog
        },
        data: function () {
            return {
                reserveTab: null,
                calendarTab: 0,
                calendarHeight: 0,
                priceHeaders: [{
                    text: ''
                }, {
                    text: ''
                }, {
                    text: ''
                }],
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
        mounted: function () {
            this.calendarHeight = this.$vuetify.breakpoint.mdAndDown ? 350 : 600;
            this.refreshTabWithPath();
        },
        methods: {
            nextTab() {
                this.reserveTab = parseInt(this.reserveTab) + 1;
                Scroll.allerALaSection('calendrier');
            },
            refreshTabWithPath: function () {
                if (this.$route.name === "calendrier") {
                    this.calendarTab = 0;
                    return;
                }
                if (this.$route.name === "réservation") {
                    this.calendarTab = 1;
                    return;
                }
            }
        },
        computed: {
            routeName: function () {
                return this.$route.name;
            }
        },
        watch: {
            routeName: function () {
                this.refreshTabWithPath();
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

    .v-tabs__slider {
        height: 3px;
    }
</style>
