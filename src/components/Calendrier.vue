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
                <v-tabs
                        color="black"
                        light
                        slider-color="#ff3301"
                        grow
                        class="pa-0 ma-0"
                        v-model="calendarTab"
                >
                    <v-tab @click.prevent="$router.push('calendrier')" class="body-1" key="calendrier">
                        <v-icon class="mr-6">calendar_month</v-icon>
                        Calendrier
                    </v-tab>
                    <v-tab @click.prevent="$router.push('reservation')" class="body-1" key="reservation">
                        <v-icon class="mr-6">
                            event
                        </v-icon>
                        Réservation
                    </v-tab>
                </v-tabs>
                <v-tabs-items touchless v-model="calendarTab" class="body-1">
                    <v-tab-item class="mt-4 text-left" :class="{
                            'pl-0' : $vuetify.breakpoint.mdAndUp,
                            'pl-0' : $vuetify.breakpoint.smAndDown
                        }"
                                key="calendrier"
                    >
                        <p class="">
                            Ce calendrier est notre référence pour réserver le local!
                            <v-btn @click="calendarTab = 1">
                                Réserver
                            </v-btn>
                        </p>
                        <p class="text-left pa-0 ma-0">
                            Formations, assemblées, soirées, rencontres, danses, slam, yoga, projection
                            documentaires,
                            discussions et plus encore.
                        </p>
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
                                    Aujourd'hui
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
                                <v-btn @click="addEvent" color="primary">
                                    <v-icon>add</v-icon>
                                    Ajouter
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
                                    :colors="colors"
                                    :event-color="getEventColor"
                                    @change="getEvents"
                                    @mousedown:event="startDrag"
                                    @mousedown:time="startTime"
                                    @mousemove:time="mouseMove"
                                    @mouseup:time="endDrag"
                                    @mouseleave.native="cancelDrag"
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
                    </v-tab-item>
                    <v-tab-item touchless :class="{
                            'pl-4': $vuetify.breakpoint.smAndDown,
                            'pl-0': $vuetify.breakpoint.mdAndUp
                        }"
                                key="reservation"
                    >
                        <ReservationForm></ReservationForm>
                    </v-tab-item>
                </v-tabs-items>
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
                            height="40"
                            class="mr-4"
                    />
                    <v-toolbar-title class="text ">
                        <v-icon left>event</v-icon>
                        Réservation
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                                dark
                                text
                                @click="save"
                                :loading="isSaveEventLoading"
                        >
                            Sauvegarder
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-container class="mt-8">
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
                                    Lorsque l'événement est financé par contributions volontaires, les taxes
                                    ne sont pas
                                    chargées.
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
                                            <v-list-item-title class="body-1">
                                                Laisser l'endroit plus propre qu'il ne l'était avant l'événement.
                                            </v-list-item-title>
                                            <v-list-item-subtitle class="body-1">
                                                Balayer, nettoyer le plancher, les comptoirs, les tables, la salle de
                                                bain, vider les poubelles, recyclage, compost au besoin.
                                            </v-list-item-subtitle>
                                            <v-list-item-subtitle class="body-1">
                                                Replacer les objets à leur place dont les tables et ranger la table de
                                                ping pong.
                                            </v-list-item-subtitle>
                                            <v-list-item-subtitle class="body-1">
                                                Faire le tour du Local pour voir si rien ne traîne.
                                            </v-list-item-subtitle>
                                            <v-list-item-subtitle class="body-1">
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
                                            <v-list-item-title class="body-1">
                                                Barrer la porte en sortant ou s'assurer que ceux qui restent dans le
                                                local sont membres et majeurs.
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
                                <v-btn color="primary" @click="save" :loading="isSaveEventLoading">
                                    Ajouter l'événement
                                </v-btn>
                            </v-col>
                        </v-row>
                        {{ newEvent }}
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

export default {
    components: {
        VerificationAdhesion,
        ReservationForm,
        PhoneDialog
    },
    data: function () {
        return {
            isLoading: false,
            calendarTab: 0,
            calendarHeight: 0,
            events: [],
            weekdays: [1, 2, 3, 4, 5, 6, 0],
            calendarFocus: '',
            colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
            googleColors: [],
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
        this.defineGoogleColors()
    },
    methods: {
        cancelSave: function () {
            this.addEventDialog = false;
            console.log("cancelSave")
        },
        save: async function () {
            if (!this.$refs.eventForm.validate()) {
                return
            }
            this.isSaveEventLoading = true;
            await EventService.add(
                this.newEvent
            )
            this.events.push(this.newEvent)
            this.isSaveEventLoading = false;
            this.addEventDialog = false;
            console.log("save")
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
                this.newEvent = this.createEvent = {
                    name: `Event #${this.events.length}`,
                    startDay: format(createDate, "yyyy-MM-dd"),
                    startTime: format(createDate, "HH:mm"),
                    endTime: format(end, "HH:mm"),
                    start: this.createStart,
                    end: this.createStart,
                    timed: true,
                    organizer: {
                        fullname: null,
                        email: null,
                        phone: null
                    },
                    accepteConditions: false
                }
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
            console.log('yo')
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
            this.events = events.map((event) => {
                const start = new Date(event.start.dateTime)
                const end = new Date(event.end.dateTime)
                return {
                    name: event.summary,
                    color: this.getColorFromId(event.colorId).background,
                    start: format(start, "yyyy-MM-dd HH:mm"),
                    end: format(end, "yyyy-MM-dd HH:mm"),
                    id: event.id
                }
            })
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
        getColorFromId: function (colorId) {
            const color = this.googleColors.filter((color) => {
                return color.id === colorId
            })
            return color.length ? color[0] : this.getColorFromId("9")
        },
        defineGoogleColors: async function () {
            this.googleColors = [{
                "background": "#a4bdfc",
                "foreground": "#1d1d1d",
                "id": "1"
            }, {
                "background": "#7ae7bf", "foreground": "#1d1d1d", "id": "2"
            }, {
                "background": "#dbadff", "foreground": "#1d1d1d", "id": "3"
            }, {"background": "#ff887c", "foreground": "#1d1d1d", "id": "4"}, {
                "background": "#fbd75b",
                "foreground": "#1d1d1d",
                "id": "5"
            }, {"background": "#ffb878", "foreground": "#1d1d1d", "id": "6"}, {
                "background": "#46d6db",
                "foreground": "#1d1d1d",
                "id": "7"
            }, {"background": "#e1e1e1", "foreground": "#1d1d1d", "id": "8"}, {
                "background": "#5484ed",
                "foreground": "#1d1d1d",
                "id": "9"
            }, {"background": "#51b749", "foreground": "#1d1d1d", "id": "10"}, {
                "background": "#dc2127",
                "foreground": "#1d1d1d",
                "id": "11"
            }]
            // this.googleColors = await EventService.listColors();
            // this.googleColors = Object.keys(this.googleColors.event).map((colorId) => {
            //     const color = this.googleColors.event[colorId];
            //     color.id = colorId
            //     return color;
            // })
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

</style>
