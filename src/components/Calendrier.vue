<template>
    <div class="calendar" id="calendrier">
        <v-layout row wrap>
            <v-flex xs0 lg3></v-flex>
            <v-flex xs12 lg6 class="text-center">
                <h1 class="display-2 font-weight-thin">
                    Calendrier et réservation du Loco Local
                </h1>
                <h4 class="body-1">
                    Lieu collectif, ouvert et versatile où citoyen.ne.s et organisations locales organisent, de façon
                    autonome, des activités sociales, culturelles, politiques, d'éducation populaire et/ou de
                    mobilisation citoyenne
                </h4>
            </v-flex>
            <v-flex xs0 lg3></v-flex>
        </v-layout>
        <v-layout row wrap class="mt-12">
            <v-flex xs0 lg2></v-flex>
            <v-flex xs12 lg8>
                <v-sheet height="64">
                    <v-toolbar
                            flat
                    >
                        <v-btn
                                outlined
                                class="mr-4"
                                color="grey darken-2"
                                @click="setToday"
                        >
                            <span v-if="$vuetify.breakpoint.smAndDown">
                                AJD
                            </span>
                            <span v-else>
                                Aujourd'hui
                            </span>
                        </v-btn>
                        <v-btn
                                fab
                                text
                                small
                                color="grey darken-2"
                                @click="prev"
                        >
                            <v-icon small>
                                chevron_left
                            </v-icon>
                        </v-btn>
                        <v-btn
                                fab
                                text
                                small
                                color="grey darken-2"
                                @click="next"
                                left
                        >
                            <v-icon small>
                                chevron_right
                            </v-icon>
                        </v-btn>
                        <v-toolbar-title v-if="$refs.calendar">
                            {{ $refs.calendar.title }}
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn @click="addEvent" color="primary" :icon="$vuetify.breakpoint.smAndDown"
                               :outlined="$vuetify.breakpoint.smAndDown">
                            <v-icon>add</v-icon>
                            <span v-if="$vuetify.breakpoint.mdAndUp">Ajouter</span>
                        </v-btn>
                    </v-toolbar>
                </v-sheet>
                <v-sheet :height="calendarHeight">
                    <v-overlay
                            absolute
                            :value="isLoading"
                    >
                        <v-progress-circular indeterminate :size="80" :width="2"></v-progress-circular>
                    </v-overlay>
                    <v-calendar
                            ref="calendar"
                            v-model="calendarFocus"
                            :weekdays="weekdays"
                            type="week"
                            :events="events"
                            event-overlap-mode="column"
                            :event-overlap-threshold="30"
                            :event-color="getEventColor"
                            @change="getEvents"
                            @mousedown:event="startDrag"
                            @mousedown:time="startTime"
                            @mousemove:time="mouseMove"
                            @mouseup:time="endDrag"
                            @mouseleave.native="cancelDrag"
                            :class="{
                                'dense-hours' : $vuetify.breakpoint.smAndDown
                            }"
                    >
                        <template v-slot:event="{ event, timed, eventSummary }">
                            <div class="v-event-draggable">
                                <component :is="{ render: eventSummary }"></component>
                            </div>
                            <div
                                    v-if="timed"
                                    class="v-event-drag-bottom"
                                    @mousedown.stop="extendBottom(event)"
                            ></div>
                        </template>
                    </v-calendar>
                </v-sheet>
            </v-flex>
            <v-flex xs0 lg2></v-flex>
        </v-layout>
        <PhoneDialog ref="phoneDialog"></PhoneDialog>
        <v-dialog :fullscreen="true" v-model="addEventDialog" v-if="addEventDialog">
            <v-card>
                <v-toolbar
                        color="white"
                >
                    <v-btn
                            icon
                            @click="cancelSave"
                    >
                        <v-icon>close</v-icon>
                    </v-btn>
                    <img
                            :src="require('@/assets/logo-loco-horizontal.png')"
                            :height="logoHeight"
                            class="mr-4"

                    />
                    <v-toolbar-title class="text ">
                        <v-icon left>event</v-icon>
                        Réservation
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <!--                    <v-toolbar-items>-->
                    <!--                        <v-btn-->
                    <!--                                dark-->
                    <!--                                text-->
                    <!--                                @click="save"-->
                    <!--                                :loading="isSaveEventLoading"-->
                    <!--                        >-->
                    <!--                            Sauvegarder-->
                    <!--                        </v-btn>-->
                    <!--                    </v-toolbar-items>-->
                </v-toolbar>
                <v-container class="mt-8 pb-16">
                    <v-alert
                            color="primary"
                            border="left"
                            elevation="2"
                            colored-border
                            icon="schedule"

                    >
                        <p class="body-1">
                            La règle de « la première arrivée, première servie » est de mise.
                        </p>
                        <p class="body-1">
                            Mais n'hésitez pas à contacter la personne qui a réservé, s'il y a conflit d'horaire.
                        </p>
                        <p class="body-1">
                            Enfin, vérifiez que votre événement apparaisse sur le calendrier pour confirmer votre
                            réservation.
                        </p>
                    </v-alert>
                    <v-form name="eventForm" ref="eventForm">
                        <v-row class="text-left">
                            <v-col cols="12">
                                <h4 class="text">Jour et Heure</h4>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" lg="4">
                                <v-menu
                                        ref="orderOpenDateMenu"
                                        v-model="eventStartDateMenu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                                v-model="newEvent.startDay"
                                                label="Jour"
                                                prepend-icon="calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                :rules="[rules.required]"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                            v-model="newEvent.startDay"
                                            no-title
                                            scrollable
                                            @input="eventStartDateMenu = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" lg="4">
                                <v-menu
                                        ref="startTimeMenu"
                                        v-model="startTimeMenu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="newEvent.startTime"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="290px"
                                        min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                                v-model="newEvent.startTime"
                                                label="Début"
                                                prepend-icon="mdi-clock-time-four-outline"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                :rules="[rules.required]"
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                            format="24hr"
                                            v-model="newEvent.startTime"
                                            label="heure"
                                            v-if="startTimeMenu"
                                            full-width
                                            @click:minute="$refs.startTimeMenu.save(newEvent.startTime)"
                                    ></v-time-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" lg="4">
                                <v-menu
                                        ref="endTimeMenu"
                                        v-model="endTimeMenu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="newEvent.endTime"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="290px"
                                        min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                                v-model="newEvent.endTime"
                                                label="Fin"
                                                prepend-icon="mdi-clock-time-four-outline"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                                :rules="[rules.required]"
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                            format="24hr"
                                            v-model="newEvent.endTime"
                                            label="heure"
                                            v-if="endTimeMenu"
                                            full-width
                                            @click:minute="$refs.endTimeMenu.save(newEvent.endTime)"
                                    ></v-time-picker>
                                </v-menu>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <p class="body-1 text-left">
                                    <v-icon left>more_time</v-icon>
                                    Pensez à ajouter du temps avant et après pour préparer et ranger la salle.
                                </p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-divider></v-divider>
                            </v-col>
                            <v-col cols="12">
                                <v-row class="text-left">
                                    <v-col cols="12">
                                        <h4 class="text">Organisateur</h4>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-row>
                                            <v-col cols="12" lg="4">
                                                <v-text-field
                                                        label="Votre nom"
                                                        v-model="newEvent.organizer.fullname"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" lg="4">
                                                <v-text-field
                                                        label="Votre courriel"
                                                        v-model="newEvent.organizer.email"
                                                        prepend-icon="email"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" lg="4">
                                                <v-text-field
                                                        label="Votre téléphone"
                                                        v-model="newEvent.organizer.phone"
                                                        prepend-icon="phone"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" class="">
                                        <h4 class="text font-weight-medium">
                                            <v-icon left large>check</v-icon>
                                            Vous devez être membre de la coopérative pour réserver la salle
                                        </h4>
                                    </v-col>
                                    <v-col cols="12" class="pa-0">
                                        <VerificationAdhesion></VerificationAdhesion>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                        <v-row class="">
                            <v-col cols="12" class="text-left">
                                <h4 class="text">Événement</h4>
                            </v-col>
                            <v-col cols="12" lg="6" xl="4">
                                <v-text-field
                                        v-model="newEvent.summary"
                                        label="Nom de l'événement"
                                        prepend-icon="event"
                                        :rules="[rules.required]">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" lg="6" xl="4">
                                <v-textarea
                                        v-model="newEvent.description"
                                        label="Informations additionnelles"
                                >
                                </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <h4 class="text-left text">Partage de la salle</h4>
                                <v-radio-group
                                        v-model="newEvent.colorId"
                                        column
                                        :rules="[rules.required]"

                                >
                                    <v-radio
                                            label="Seuls les participants à l'activité peuvent être dans la salle"
                                            color="#dc2127"
                                            value="11"
                                    ></v-radio>
                                    <v-radio
                                            label="La salle peut être partagée si les autres respectent le bon déroulement de notre activité."
                                            color="#5484ed"
                                            value="9"
                                    ></v-radio>
                                    <v-radio
                                            label="Pas prioritaire, d'autres peuvent réserver par dessus cet événement"
                                            color="#1d1d1d"
                                            value="10"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>
                        <v-divider class="mt-6 mb-6"></v-divider>
                        <v-row>
                            <v-col cols="12" class="text-left">
                                <h4 class="text">Tarification</h4>
                            </v-col>
                            <v-col cols="12" class="text-left">
                                <p class="body-1 font-weight-bold text-center">
                                    Contribution minimale pour la location
                                    de la salle.
                                </p>
                                <v-card class="mb-8">
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th class="body-1">
                                                    Un bloc de 4 heures<br>
                                                    (matin, après-midi ou soirée)
                                                </th>
                                                <th class="body-1">
                                                    Un bloc de 8 heures<br>
                                                    (toute la journée)
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <template slot="item" slot-scope="props">
                                                <td class="body-1">
                                                    {{ props.item.row1 }}
                                                </td>
                                                <td class="body-1">
                                                    {{ props.item.row2 }}
                                                </td>
                                                <td class="body-1">
                                                    {{ props.item.row3 }}
                                                </td>
                                            </template>
                                            <tr
                                                    v-for="price in priceRows"
                                                    :key="price.row1"
                                            >
                                                <td class="body-1">{{ price.row1 }}</td>
                                                <td class="body-1">{{ price.row2 }}</td>
                                                <td class="body-1">{{ price.row3 }}</td>
                                            </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card>
                                <h4 class="mb-2">
                                    Taxes
                                </h4>
                                <p class="body-1 ml-4">
                                    Pour les événements financés par contributions volontaires, les taxes
                                    ne sont pas
                                    chargées.
                                </p>
                                <h4 class="mb-2">
                                    Modes de paiement
                                </h4>
                                <p class="body-1 ml-4">
                                    Disponible sur notre site web
                                </p>
                                <h4 class="mb-2">
                                    Allègement des tarifs
                                </h4>
                                <p class="body-1 ml-4">
                                    Lorsque que le nombre de participants n'a pas été suffisant pour couvrir les
                                    frais de
                                    location de
                                    la salle,
                                    un montant inférieur peut être donné au Loco.
                                </p>
                                <p class="body-1 ml-4">
                                    Toutefois des démarches doivent êtres entreprises par l'organisateur pour
                                    parvenir à donner la contribution minimale lors des prochaines activités.
                                </p>
                            </v-col>
                        </v-row>
                        <v-divider class="mt-6 mb-6"></v-divider>
                        <v-row>
                            <v-col cols="12" class="text-left">
                                <h4>Conditions d'utilisations de la salle</h4>
                            </v-col>
                            <v-col cols="12" class="text-left">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-action>
                                            <v-icon>
                                                cleaning_services
                                            </v-icon>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                            <v-list-item-title class="body-1 text-wrap">
                                                Laisser l'endroit plus propre qu'il ne l'était avant l'événement.
                                            </v-list-item-title>
                                            <v-list-item-subtitle class="body-1 text-wrap">
                                                Balayer, nettoyer le plancher, les comptoirs, les tables, la salle de
                                                bain, vider les poubelles, recyclage, compost au besoin.
                                            </v-list-item-subtitle>
                                            <v-list-item-subtitle class="body-1 text-wrap">
                                                Replacer les objets à leur place dont les tables et ranger la table de
                                                ping pong.
                                            </v-list-item-subtitle>
                                            <v-list-item-subtitle class="body-1 text-wrap">
                                                Faire le tour du Local pour voir si rien ne traîne.
                                            </v-list-item-subtitle>
                                            <v-list-item-subtitle class="body-1 text-wrap">
                                                Remonter les rideaux et fermer les lumières.
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-action>
                                            <v-icon>
                                                security
                                            </v-icon>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                            <v-list-item-title class="body-1 text-wrap">
                                                Barrer la porte en sortant ou s'assurer que ceux qui restent dans le
                                                local sont membres et majeurs.
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-action>
                                            <v-icon>
                                                diversity_3
                                            </v-icon>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                            <v-list-item-title class="body-1 text-wrap">
                                                En cas de conflit d'horaire, collaborer, mettre ses
                                                limites, être de bonne foi et garder en tête le bien être du Loco
                                                Local.
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                                <v-checkbox
                                        v-model="newEvent.accepteConditions"
                                        label="Je m'engage à respecter ces conditions."
                                        :rules="[rules.required]"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="text-left">
                                <v-btn color="primary" @click="save" :loading="isSaveEventLoading" large>
                                    <v-icon left>add</v-icon>
                                    Ajouter l'événement
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import PhoneDialog from '@/components/PhoneDialog'
import ReservationForm from "@/components/ReservationForm.vue";
import EventService from "@/service/EventService";
import {addHours, format} from "date-fns";
import Rules from "@/Rules";
import VerificationAdhesion from "@/components/VerificationAdhesion.vue";
import Event from "@/Event"

export default {
    components: {
        VerificationAdhesion,
        ReservationForm,
        PhoneDialog
    },
    data: function () {
        return {
            isLoading: false,
            calendarHeight: 0,
            events: [],
            weekdays: [1, 2, 3, 4, 5, 6, 0],
            calendarFocus: '',
            dragEvent: null,
            dragStart: null,
            createEvent: null,
            newEvent: null,
            createStart: null,
            extendOriginal: null,
            addEventDialog: false,
            isSaveEventLoading: false,
            rules: Rules,
            eventStartDateMenu: false,
            startTimeMenu: false,
            endTimeMenu: false,
            logoHeight: this.$vuetify.breakpoint.smAndDown ? 20 : 40,
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
        this.calendarHeight = this.$vuetify.breakpoint.mdAndDown ? 350 : 700;
        this.refreshTabWithPath();
        this.$refs.calendar.scrollToTime('08:00')
    },
    methods: {
        cancelSave: function () {
            this.addEventDialog = false;
            console.log("cancelSave")
        },
        save: async function () {
            if (!this.$refs.eventForm.validate()) {
                this.$refs.eventForm.$el.scrollIntoView({behavior: 'smooth'})
                return
            }
            this.isSaveEventLoading = true;
            this.newEvent.description = this.newEvent.organizer.fullname + " " +
                this.newEvent.organizer.email + " " + this.newEvent.organizer.phone +
                " " + this.newEvent.description;
            const newEvent = await EventService.add(
                this.newEvent
            )
            this.events.push(
                Event.toVuetifyCalendar(newEvent)
            )
            this.isSaveEventLoading = false;
            this.addEventDialog = false;
        },
        startDrag({event, timed}) {
            if (event && timed) {
                this.dragEvent = event
                this.dragTime = null
                this.extendOriginal = null
            }
            console.log("startDrag")
        },
        startTime(tms) {
            const mouse = this.toTime(tms)

            if (this.dragEvent && this.dragTime === null) {
                const start = this.dragEvent.start

                this.dragTime = mouse - start
            } else {
                this.createStart = this.roundTime(mouse)
                const createDate = new Date(this.createStart);
                const end = addHours(createDate, 2);

                this.newEvent = this.createEvent = Event.initNewEvent(
                    createDate, end
                )
            }
        },
        extendBottom(event) {
            this.createEvent = event
            this.createStart = event.start
            this.extendOriginal = event.end
            console.log("extendBottom")
        },
        mouseMove(tms) {
            const mouse = this.toTime(tms)

            if (this.dragEvent && this.dragTime !== null) {
                const start = this.dragEvent.start
                const end = this.dragEvent.end
                const duration = end - start
                const newStartTime = mouse - this.dragTime
                const newStart = this.roundTime(newStartTime)
                const newEnd = newStart + duration

                this.dragEvent.start = newStart
                this.dragEvent.end = newEnd
            } else if (this.createEvent && this.createStart !== null) {
                const mouseRounded = this.roundTime(mouse, false)
                const min = Math.min(mouseRounded, this.createStart)
                const max = Math.max(mouseRounded, this.createStart)

                this.createEvent.start = min
                this.createEvent.end = max
            }
            console.log("mousemove")
        },
        async endDrag() {
            const showDialog = this.createEvent !== null;
            this.dragTime = null
            this.dragEvent = null
            this.createEvent = null
            this.createStart = null
            this.extendOriginal = null
            if (showDialog) {
                setTimeout(() => {
                    this.addEventDialog = true;
                }, 100)
            }
            console.log("endDrag")
        },
        cancelDrag() {
            if (this.createEvent) {
                if (this.extendOriginal) {
                    this.createEvent.end = this.extendOriginal
                } else {
                    const i = this.events.indexOf(this.createEvent)
                    if (i !== -1) {
                        this.events.splice(i, 1)
                    }
                }
            }

            this.createEvent = null
            this.createStart = null
            this.dragTime = null
            this.dragEvent = null
            console.log("cancelDrag")
        },
        roundTime(time, down = true) {
            const roundTo = 15 // minutes
            const roundDownTime = roundTo * 60 * 1000

            return down
                ? time - time % roundDownTime
                : time + (roundDownTime - (time % roundDownTime))
        },
        toTime(tms) {
            return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime()
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
        rndElement(arr) {
            return arr[this.rnd(0, arr.length - 1)]
        },
        addEvent: function () {
            this.newEvent = Event.initNewEvent()
            this.addEventDialog = true;
        },
        setToday() {
            this.calendarFocus = ''
        },
        prev() {
            this.$refs.calendar.prev()
        },
        next() {
            this.$refs.calendar.next()
        },
        getEventColor: function (event) {
            return event.color
        },
        getEvents: async function (date) {
            this.isLoading = true;
            const events = await EventService.list(
                date.start.date,
                date.end.date
            )
            console.log(events);
            this.events = events.map(Event.toVuetifyCalendar)
            this.isLoading = false;
        },

        refreshTabWithPath: async function () {
            if (this.$route.name === "calendrier") {
                this.calendarTab = 0;
            }
            if (this.$route.name === "reservation") {
                this.calendarTab = 1;
            }
        },
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

.v-calendar .v-event-timed-container {
    margin-right: 0px;
}

.v-calendar .v-event-summary {
    white-space: normal
}

.dense-hours {
    .v-calendar-daily__intervals-body, .v-calendar-daily__intervals-head {
        width: 25px !important;
    }
}

</style>
