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
                                v-if="!showGoogleCalendar"
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
                                v-if="!showGoogleCalendar"
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
                                v-if="!showGoogleCalendar"
                        >
                            <v-icon small>
                                chevron_right
                            </v-icon>
                        </v-btn>
                        <v-toolbar-title v-if="$refs.calendar && !showGoogleCalendar">
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
                            :value="isLoading && !isFirstLoading"
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
                            @click:event="showEvent"
                            @mousedown:event="startDrag"
                            @mousedown:time="startTime"
                            @mousemove:time="mouseMove"
                            @mouseup:time="endDrag"
                            @mouseleave.native="cancelDrag"
                            :class="{
                                'dense-hours' : $vuetify.breakpoint.smAndDown
                            }"
                            v-if="!showGoogleCalendar"
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
                    <iframe frameborder="0" :height="calendarHeight" scrolling="no"
                            src="https://www.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;hl=fr&amp;bgcolor=%23FFFFFF&amp;src=kg43q7s4qltiom7s1gntdhts3k%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FMontreal"
                            style=" border-width:0 " width="100%"
                            v-if="showGoogleCalendar"
                            :key="googleCalendarUiKey"
                    ></iframe>
                    <v-row class="mt-4">
                        <v-col cols="12" class="text-right">
                            <v-btn text @click="showGoogleCalendar = true" v-if="!showGoogleCalendar">
                                Voir Calendrier Google
                            </v-btn>
                            <v-btn text @click="showGoogleCalendar = false" v-if="showGoogleCalendar">
                                Revenir au calendrier par défaut
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-flex>
            <v-flex xs0 lg2></v-flex>
        </v-layout>
        <PhoneDialog ref="phoneDialog"></PhoneDialog>
        <ReservationDialog ref="reservationDialog"
                           @eventUpdated="updateEvent"
                           @eventAdded="addNewEvent"
                           @eventRemoved="removeEvent"
        ></ReservationDialog>
        <v-menu
                v-model="selectedOpen"
                :close-on-content-click="false"
                :activator="selectedElement"
                offset-x
        >
            <v-card
                    color="grey lighten-4"
                    flat
            >
                <v-toolbar
                        :color="selectedEvent.color"
                        dark
                >
                    <v-toolbar-title v-html="selectedEvent.summary"></v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <span v-html="selectedEvent.description"></span>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                            text
                            @click="selectedOpen = false"
                    >
                        Fermer
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                            text
                            @click="editEvent(selectedEvent)"
                    >
                        <v-icon left>edit</v-icon>
                        Modifier
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
import PhoneDialog from '@/components/PhoneDialog'
import ReservationForm from "@/components/ReservationForm.vue";
import EventService from "@/service/EventService";
import {addHours} from "date-fns";
import VerificationAdhesion from "@/components/VerificationAdhesion.vue";
import Event from "@/Event"
import ReservationDialog from "@/components/ReservationDialog.vue";

export default {
    components: {
        ReservationDialog,
        VerificationAdhesion,
        ReservationForm,
        PhoneDialog
    },
    data: function () {
        return {
            showGoogleCalendar: false,
            isFirstLoading: true,
            isLoading: false,
            calendarHeight: 0,
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,
            events: [],
            weekdays: [1, 2, 3, 4, 5, 6, 0],
            calendarFocus: '',
            dragEvent: null,
            dragStart: null,
            createEvent: null,
            editedEvent: null,
            createStart: null,
            extendOriginal: null,
            googleCalendarUiKey: Math.random()
        }
    },
    mounted: function () {
        this.calendarHeight = this.$vuetify.breakpoint.mdAndDown ? 350 : 700;
        this.$refs.calendar.scrollToTime('08:00')
    },
    methods: {
        removeEvent: function (removedEvent) {
            this.events = this.events.filter((event) => {
                return event.id !== removedEvent.id;
            });
        },
        updateEvent: function (modifiedEvent) {
            this.events = this.events.map((event) => {
                if (event.id === modifiedEvent.id) {
                    return Event.toVuetifyCalendar(modifiedEvent)
                }
                return event;
            })
            this.googleCalendarUiKey = Math.random();
        },
        addNewEvent: function (newEvent) {
            this.events.push(
                Event.toVuetifyCalendar(newEvent)
            )
            this.googleCalendarUiKey = Math.random();
        },
        enterReservationDialog: function () {
            this.$refs.reservationDialog.enter(this.editedEvent)
            this.googleCalendarUiKey = Math.random();
        },
        editEvent: function (event) {
            this.selectedOpen = false;
            this.editedEvent = event;
            this.editedEvent.accepteConditions = true;
            Event.defineDatesFromVuetifyEvent(
                this.editedEvent,
                new Date(event.start),
                new Date(event.end)
            );
            this.enterReservationDialog();
            this.googleCalendarUiKey = Math.random();
        },
        showEvent({nativeEvent, event}) {
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
            }

            if (this.selectedOpen) {
                this.selectedOpen = false
                requestAnimationFrame(() => requestAnimationFrame(() => open()))
            } else {
                open()
            }

            nativeEvent.stopPropagation()
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

                this.editedEvent = this.createEvent = Event.initNewEvent(
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
            // console.log("mousemove")
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
                    this.enterReservationDialog()
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
        addEvent: function () {
            this.editedEvent = Event.initNewEvent()
            this.enterReservationDialog()
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
            this.isFirstLoading = false;
        },
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
