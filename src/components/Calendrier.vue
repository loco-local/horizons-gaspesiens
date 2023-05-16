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
                        dark
                        color="primary"
                >
                    <v-btn
                            icon
                            dark
                            @click="cancelSave"
                    >
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>
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
                <v-container>
                    <v-form name="eventForm" ref="eventForm">
                        <v-row class="text-left mt-4">
                            <v-col cols="12">
                                <h2>Jour et Heure</h2>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" lg="6">
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
                                        @input="orderOpenDateMenu = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col cols="12" lg="6">
                                <v-time-picker
                                    format="24hr"
                                    v-model="newEvent.startTime"
                                    label="heure"
                                ></v-time-picker>
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
import {format} from "date-fns";
import Rules from "@/Rules";

export default {
    components: {
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
            eventStartDateMenu: false
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
        save: function () {
            this.isSaveEventLoading = true;
            this.events.push(this.createEvent)
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
                this.newEvent = this.createEvent = {
                    name: `Event #${this.events.length}`,
                    startDay: format(createDate, "yyyy-MM-dd"),
                    startTime: format(createDate, "HH-mm"),
                    end: this.createStart,
                    timed: true,
                }
            }
            console.log("startTime")
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
            }, {"background": "#7ae7bf", "foreground": "#1d1d1d", "id": "2"}, {
                "background": "#dbadff",
                "foreground": "#1d1d1d",
                "id": "3"
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
