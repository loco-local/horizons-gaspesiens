<template>
  <div class="calendar" id="calendrier">
    <v-row>
      <v-col cols="0" lg="3"></v-col>
      <v-col cols="12" lg="6" class="text-center">
        <h1 class="text-h3 font-weight-thin">
          Calendrier et réservation du Loco Local
        </h1>
        <!--        <h4 class="text-body-1">-->
        <!--          Lieu collectif, ouvert et versatile où citoyen.ne.s et organisations locales organisent, de façon-->
        <!--          autonome, des activités sociales, culturelles, politiques, d'éducation populaire et/ou de-->
        <!--          mobilisation citoyenne-->
        <!--        </h4>-->
      </v-col>
      <v-col cols="0" lg="3"></v-col>
    </v-row>
    <v-row class=" vh-center">
      <v-col cols="12" lg="8" :class="{
                'pl-0 pr-0' : $vuetify.display.smAndDown
            }">
        <v-card class="mt-2" flat>
          <v-sheet height="64">
            <v-toolbar
                flat
                color="transparent"
                variant="outlined"
            >
              <v-spacer></v-spacer>
              <v-btn @click="tarificationDialog = true;" variant="outlined" size="large">
                <v-icon start v-if="$vuetify.display.mdAndUp">attach_money</v-icon>
                Tarification
              </v-btn>
              <v-btn @click="addEvent" color="primary"
                     variant="outlined" size="large" class="ml-4">
                Réserver
              </v-btn>
              <v-spacer></v-spacer>
            </v-toolbar>
            <!--            <v-toolbar-->
            <!--                flat-->
            <!--                color="transparent"-->
            <!--                variant="outlined"-->
            <!--                v-if="$vuetify.display.mdAndDown"-->
            <!--            >-->
            <!--              <v-btn @click="addEvent" color="primary"-->
            <!--                     variant="outlined" size="large" class="ml-4">-->
            <!--                Réserver-->
            <!--              </v-btn>-->
            <!--            </v-toolbar>-->
          </v-sheet>
          <v-row class="" v-if="!showGoogleCalendar">
            <v-col cols="12" class="text-body-1 text-left pb-0 pl-8">
              Légende
            </v-col>
            <v-col cols="12" class="text-left">
              <v-chip
                  class="ma-2 text-body-1 text-truncate"
                  color="#5484ed"
              >
                La salle peut être partagée si les autres respectent le bon déroulement de
                l'activité.
              </v-chip>
              <v-chip
                  class="ma-2 text-body-1"
                  color="#dc2127"
              >
                Seuls les participants à l'activité peuvent être dans la salle.
              </v-chip>
              <v-chip
                  class="ma-2 text-body-1"
                  color="#51b749"
              >
                Pas prioritaire, d'autres peuvent réserver par dessus cet événement.
              </v-chip>
            </v-col>
          </v-row>
          <v-sheet>
            <v-card class="pa-0">
              <v-overlay
                  :model-value="isLoading"
                  class="align-center justify-center"
              >
                <v-progress-circular indeterminate :size="80" :width="2"></v-progress-circular>
              </v-overlay>
              <ScheduleXCalendar :calendar-app="calendarApp" v-if="!showGoogleCalendar"/>
              <iframe frameborder="0" :height="calendarHeight" scrolling="no"
                      src="https://www.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;hl=fr&amp;bgcolor=%23FFFFFF&amp;src=kg43q7s4qltiom7s1gntdhts3k%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FMontreal"
                      style=" border-width:0 " width="100%"
                      v-if="showGoogleCalendar"
                      :key="googleCalendarUiKey"
              ></iframe>
              <v-row class="mt-4">
                <v-col cols="12" class="text-right">
                  <v-btn variant="text" @click="showGoogleCalendar = true" v-if="!showGoogleCalendar">
                    Voir Calendrier Google
                  </v-btn>
                  <v-btn variant="text" @click="showGoogleCalendar = false" v-if="showGoogleCalendar">
                    Revenir au calendrier par défaut
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-sheet>
        </v-card>
        <v-card class="mt-8">
          <v-card-title class="text-h6 text">
            Utiliser la salle sans réserver.
          </v-card-title>
          <v-card-text class="text-left text">
            Lorsque vous êtes membre,
            <router-link to="/adhesion">vérifiez votre adhésion</router-link>
            , vous pouvez utiliser la salle, quand elle n'est pas réservée,
            pour travailler sur votre ordi, jouer avec vos enfants, cuisiner, lire, socialiser, jouer au ping pong,
            danser etc. Dans ces
            moments, ce n'est pas
            nécessaire de payer ou de réserver la salle. Mais, au minimum, gardez l'endroit très
            propre, et pensez quand même à redonner au Loco pour que la formule reste viable.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <PhoneDialog ref="phoneDialog"></PhoneDialog>
    <ReservationDialog ref="reservationDialog"
                       @eventUpdated="updateEvent"
                       @eventAdded="addNewEvent"
                       @eventRemoved="removeEvent"
    ></ReservationDialog>
    <v-dialog
        v-model="eventInfoDialog"
        width="600"
    >
      <v-card
          color="grey-lighten-4"
          flat
      >
        <v-toolbar color="blue"
                   class="d-flex justify-space-between align`-center text-h5 text-medium-emphasis ps-2 text-white pb-0">
          <div class="text-white ml-2">
            {{ selectedEvent.summary }}
          </div>
          <v-spacer></v-spacer>
          <v-icon @click="eventInfoDialog=false" color="white">close</v-icon>
        </v-toolbar>
        <v-alert icon="schedule">
          {{ $filters.dayDate(selectedEvent.start) }}
          de
          {{ $filters.time(selectedEvent.start) }}
          à
          {{ $filters.time(selectedEvent.end) }}.
          <div class="mt-3">
            L'heure d'accueil et de départ des participants à un événement,
            n'est pas toujours l'heure que l'organisation a réservé sur le calendrier du Loco Local pour préparer et
            fermer la salle.
          </div>
        </v-alert>
        <v-card-text>
          {{ selectedEvent.description }}
        </v-card-text>
        <!--        <v-card-text class="mt-4 text-body-1">-->
        <!--          Les heures de réservation de la salle ne correspondent pas nécessairement avec les heures où l'événement commence.s-->
        <!--        </v-card-text>-->
        <v-card-actions>
          <v-btn
              variant="text"
              @click="eventInfoDialog = false"
              size="large"
          >
            Fermer
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              variant="text"
              @click="editEvent(selectedEvent)"
          >
            <v-icon start>edit</v-icon>
            Modifier
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="tarificationDialog" max-width="900" :fullscreen="$vuetify.display.smAndDown">
      <v-card>
        <v-card-text class="pt-6 pb-6">
          <Tarification :roomPicker="false" :topCloseButton="true" @close="tarificationDialog=false"></Tarification>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="tarificationDialog = false" variant="text" size="large">
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script setup>
import PhoneDialog from '@/components/PhoneDialog'
import EventService from "@/service/EventService";
import {addDays, format,} from "date-fns";
import Event from "@/Event"
import ReservationDialog from "@/components/ReservationDialog.vue";
import Tarification from "@/components/TarificationSection.vue";
import {ref, onMounted} from 'vue';

import {ScheduleXCalendar} from '@schedule-x/vue'
import {
  createCalendar,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import {createEventsServicePlugin} from '@schedule-x/events-service'
import '@schedule-x/theme-default/dist/index.css'
import {useDisplay} from "vuetify";
import {useRouter} from "vue-router";

const router = useRouter();
const display = useDisplay();

const calendarHeight = ref(0)
const tarificationDialog = ref(false)
const isLoading = ref(false)
const showGoogleCalendar = ref(false)
const googleCalendarUiKey = ref(Math.random())

const eventInfoDialog = ref(false)
const selectedEvent = ref(null)

const eventsServicePlugin = createEventsServicePlugin();
const calendarApp = createCalendar({
  locale: 'fr-FR',
  selectedDate: format(new Date(), 'yyyy-MM-dd HH:mm'),
  views: [
    createViewWeek(),
    createViewMonthGrid(),
    createViewMonthAgenda(),
  ],
  dayBoundaries: {
    start: '06:00',
    end: '23:59',
  },
  weekOptions: {
    gridHeight: display.mdAndDown.value ? 350 : 750
  },
  callbacks: {
    async onRangeUpdate(range) {
      const events = await getEvents(range.start, range.end)
      eventsServicePlugin.set(events)
    },
    async beforeRender($app) {
      const range = $app.calendarState.range.value
      const events = await getEvents(range.start, range.end)
      eventsServicePlugin.set(events)
    },
    onEventClick(calendarEvent) {
      selectedEvent.value = calendarEvent
      eventInfoDialog.value = true;
    }
  },
  calendars: {
    exclusive: {
      colorName: 'exclusive',
      lightColors: {
        main: '#e32323',
        container: '#e32323',
        onContainer: '#ffffff',
      }
    },
    shared: {
      colorName: 'shared',
      lightColors: {
        main: '#2349e3',
        container: '#2349e3',
        onContainer: '#ffffff',
      }
    },
    nonPriority: {
      colorName: 'nonPriority',
      lightColors: {
        main: '#23e343',
        container: '#23e343',
        onContainer: '#ffffff',
      }
    }
  }
}, [eventsServicePlugin])

async function getEvents(start, end) {
  isLoading.value = true;
  const date = {
    start: {
      date: format(start, "yyyy-MM-dd")
    },
    end: {
      date: format(end, "yyyy-MM-dd")
    }
  };
  const endDate = addDays(new Date(date.end.date), 2)
  let events = await EventService.list(
      date.start.date,
      format(endDate, "yyyy-MM-dd")
  )
  events = events.map(Event.formatEventToScheduleX)
  isLoading.value = false;
  return events;
}

onMounted(() => {
  calendarHeight.value = display.mdAndDown.value ? 350 : 1150;
  if (router.currentRoute.name === 'tarification') {
    tarificationDialog.value = true;
  }
})

const editedEvent = ref(null)
const reservationDialog = ref(null)

function addEvent() {
  editedEvent.value = Event.initNewEvent()
  enterReservationDialog()
}

function enterReservationDialog() {
  reservationDialog.value.enter(editedEvent.value)
  googleCalendarUiKey.value = Math.random();
}

function addNewEvent(newEvent) {
  eventsServicePlugin.add(
      Event.formatEventToScheduleX(newEvent)
  )
  googleCalendarUiKey.value = Math.random();
}

function editEvent(event) {
  eventInfoDialog.value = false;
  editedEvent.value = event;
  editedEvent.value.accepteConditions = true;
  console.log(event)
  Event.defineDatesFromScheduleXEvent(
      this.editedEvent,
      new Date(event.start),
      new Date(event.end)
  );
  enterReservationDialog();
}

function updateEvent(modifiedEvent) {
  eventsServicePlugin.update(
      Event.formatEventToScheduleX(modifiedEvent)
  )
  googleCalendarUiKey.value = Math.random();
}

function removeEvent(removedEvent) {
  eventsServicePlugin.remove(
      removedEvent.id
  )
  googleCalendarUiKey.value = Math.random();
}

// export default {
//   components: {
//     Tarification,
//     ReservationDialog,
//     PhoneDialog,
//     // VCalendar,
//     ScheduleXCalendar
//   },
//   data: function () {
//     return {
//       selectedEvent: {},
//       selectedElement: null,
//       selectedOpen: false,
//       events: [],
//       weekdays: [1, 2, 3, 4, 5, 6, 0],
//       calendarFocus: [new Date()],
//       dragEvent: null,
//       dragStart: null,
//       createEvent: null,
//       editedEvent: null,
//       createStart: null,
//       extendOriginal: null,
//       tarificationDialog: false
//     }
//   },
//   methods: {
//     showEvent({nativeEvent, event}) {
//       const open = () => {
//         this.selectedEvent = event
//         this.selectedElement = nativeEvent.target
//         requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
//       }
//
//       if (this.selectedOpen) {
//         this.selectedOpen = false
//         requestAnimationFrame(() => requestAnimationFrame(() => open()))
//       } else {
//         open()
//       }
//
//       nativeEvent.stopPropagation()
//     },
//     startDrag({event, timed}) {
//       if (event && timed) {
//         this.dragEvent = event
//         this.dragTime = null
//         this.extendOriginal = null
//       }
//       console.log("startDrag")
//     },
//     startTime(tms) {
//       const mouse = this.toTime(tms)
//
//       if (this.dragEvent && this.dragTime === null) {
//         const start = this.dragEvent.start
//
//         this.dragTime = mouse - start
//       } else {
//         this.createStart = this.roundTime(mouse)
//         const createDate = new Date(this.createStart);
//         const end = addHours(createDate, 2);
//
//         this.editedEvent = this.createEvent = Event.initNewEvent(
//             createDate, end
//         )
//       }
//     },
//     extendBottom(event) {
//       this.createEvent = event
//       this.createStart = event.start
//       this.extendOriginal = event.end
//       console.log("extendBottom")
//     },
//     mouseMove(tms) {
//       const mouse = this.toTime(tms)
//
//       if (this.dragEvent && this.dragTime !== null) {
//         const start = this.dragEvent.start
//         const end = this.dragEvent.end
//         const duration = end - start
//         const newStartTime = mouse - this.dragTime
//         const newStart = this.roundTime(newStartTime)
//         const newEnd = newStart + duration
//
//         this.dragEvent.start = newStart
//         this.dragEvent.end = newEnd
//       } else if (this.createEvent && this.createStart !== null) {
//         const mouseRounded = this.roundTime(mouse, false)
//         const min = Math.min(mouseRounded, this.createStart)
//         const max = Math.max(mouseRounded, this.createStart)
//
//         this.createEvent.start = min
//         this.createEvent.end = max
//       }
//       // console.log("mousemove")
//     },
//     async endDrag() {
//       const showDialog = this.createEvent !== null;
//       this.dragTime = null
//       this.dragEvent = null
//       this.createEvent = null
//       this.createStart = null
//       this.extendOriginal = null
//       if (showDialog) {
//         setTimeout(() => {
//           this.enterReservationDialog()
//         }, 100)
//       }
//       console.log("endDrag")
//     },
//     cancelDrag() {
//       if (this.createEvent) {
//         if (this.extendOriginal) {
//           this.createEvent.end = this.extendOriginal
//         } else {
//           const i = this.events.indexOf(this.createEvent)
//           if (i !== -1) {
//             this.events.splice(i, 1)
//           }
//         }
//       }
//
//       this.createEvent = null
//       this.createStart = null
//       this.dragTime = null
//       this.dragEvent = null
//       console.log("cancelDrag")
//     },
//     roundTime(time, down = true) {
//       const roundTo = 15 // minutes
//       const roundDownTime = roundTo * 60 * 1000
//
//       return down
//           ? time - time % roundDownTime
//           : time + (roundDownTime - (time % roundDownTime))
//     },
//     toTime(tms) {
//       return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime()
//     },
//     addEvent: function () {
//       this.editedEvent = Event.initNewEvent()
//       this.enterReservationDialog()
//     },
//     setToday() {
//       this.calendarFocus = [new Date()]
//     },
//     getEventColor: function (event) {
//       return event.color
//     },
// }
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
    width: 29px !important;
  }
}

.v-chip {
  height: auto !important;
}

.v-chip .v-chip__content {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  white-space: pre-wrap;
}
</style>
