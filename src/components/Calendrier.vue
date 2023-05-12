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
                                    :absolute="false"
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
                            ></v-calendar>
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
    </div>
</template>

<script>
import PhoneDialog from '@/components/PhoneDialog'
import ReservationForm from "@/components/ReservationForm.vue";
import EventService from "@/service/EventService";
import {format} from "date-fns";

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
            googleColors: []
        }
    },
    mounted: function () {
        this.calendarHeight = this.$vuetify.breakpoint.mdAndDown ? 350 : 700;
        this.refreshTabWithPath();
        this.$refs.calendar.scrollToTime('08:00')
        this.defineGoogleColors()
    },
    methods: {
        addEvent: function () {

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
        getEventColor: function () {
            return 'cyan'
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
                    start: format(start, "yyyy-MM-dd HH:mm"),
                    end: format(end, "yyyy-MM-dd HH:mm")
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

.v-tabs__slider {
    height: 3px;
}

.v-calendar-daily__interval-text {
    font-size: 14px !important
}

.v-calendar-daily_head-weekday {
    font-size: 14px !important
}
</style>
