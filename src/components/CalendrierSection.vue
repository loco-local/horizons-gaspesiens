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
          <v-row class="">
            <v-col cols="12" class="text-body-1 text-left pb-0 pl-8">
              Légende du partage de la salle:
            </v-col>
            <v-col cols="12" class="text-left">
              <v-chip
                  class="ma-2 text-body-1"
                  color="#dc2127"
              >
                Exclusif aux participants.
              </v-chip>
              <v-chip
                  class="ma-2 text-body-1 text-truncate"
                  color="#5484ed"
              >
                Ouvert à de nons participants discrets.
              </v-chip>
              <v-chip
                  class="ma-2 text-body-1"
                  color="#51b749"
              >
                Non prioritaire. Réservez par dessus.
              </v-chip>
            </v-col>
          </v-row>
          <v-sheet>
            <v-card class="pa-0">
              <v-overlay
                  :model-value="isLoading"
                  class="align-center justify-center"
                  contained
              >
                <v-progress-circular indeterminate :size="80" :width="2" color="primary"></v-progress-circular>
              </v-overlay>
              <ScheduleXCalendar :calendar-app="calendarApp"/>
            </v-card>
          </v-sheet>
        </v-card>
        <v-card class="mt-8">
          <v-card-title class="text-h6 text">
            Utiliser la salle sans réserver.
          </v-card-title>
          <v-card-text class="text-left text-h6 font-weight-regular">
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
    <ContactDialog ref="contactDialog"></ContactDialog>
    <ReservationDialog ref="reservationDialog"
                       @eventUpdated="updateEvent"
                       @eventAdded="addNewEvent"
                       @eventRemoved="removeEvent"
    ></ReservationDialog>
    <v-dialog
        v-model="eventInfoDialog"
        :fullscreen="$vuetify.display.smAndDown"
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
        <v-alert icon="schedule"
                 prominent
        >
          <strong>
            {{ $filters.dayDate(selectedEvent.start) }}
            de
            {{ $filters.time(selectedEvent.start) }}
            à
            {{ $filters.time(selectedEvent.end) }}.
          </strong>
          <div class="text-grey">
            Créé le {{ $filters.dayDateWithTime(selectedEvent.createdAt)}}
          </div>
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
import ContactDialog from '@/components/ContactDialog'
import EventService from "@/service/EventService";
import {addDays, format, roundToNearestHours,} from "date-fns";
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

const eventInfoDialog = ref(false)
const selectedEvent = ref(null)

const eventsServicePlugin = createEventsServicePlugin();
const calendarApp = createCalendar({
  locale: 'fr-FR',
  selectedDate: format(new Date(), 'yyyy-MM-dd'),
  views: [
    createViewWeek(),
    createViewMonthGrid(),
    createViewMonthAgenda(),
  ],
  dayBoundaries: {
    start: '06:00',
    end: '06:00',
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
    },
    onClickDate(date) {
      if (display.smAndDown.value) {
        return;
      }
      editedEvent.value = Event.initNewEvent(
          date
      )
      enterReservationDialog()
    },
    /**
     * Is called when clicking somewhere in the time grid of a week or day view
     * */
    onClickDateTime(dateTime) {
      if (display.smAndDown.value) {
        return;
      }
      editedEvent.value = Event.initNewEvent(
          roundToNearestHours(dateTime)
      )
      enterReservationDialog()
    },
    /**
     * Is called when selecting a day in the month agenda
     * */
    onClickAgendaDate(date) {
      if (display.smAndDown.value) {
        return;
      }
      editedEvent.value = Event.initNewEvent(
          date
      )
      enterReservationDialog()
    },
    onDoubleClickAgendaDate(date) {
      if (display.smAndDown.value) {
        return;
      }
      editedEvent.value = Event.initNewEvent(
          date
      );
      enterReservationDialog();
    },

    /**
     * Is called when double clicking a date in the month grid
     * */
    onDoubleClickDate(date) {
      if (display.smAndDown.value) {
        return;
      }
      editedEvent.value = Event.initNewEvent(
          date
      );
      enterReservationDialog();
    },

    /**
     * Is called when double clicking somewhere in the time grid of a week or day view
     * */
    onDoubleClickDateTime(dateTime) {
      if (display.smAndDown.value) {
        return;
      }
      editedEvent.value = Event.initNewEvent(
          roundToNearestHours(dateTime)
      )
      enterReservationDialog()
    },

  },
  calendars: {
    exclusive: {
      colorName: 'exclusive',
      lightColors: {
        main: '#e32323',
        container: '#FFEBEE',
        onContainer: '#000000',
      }
    },
    shared: {
      colorName: 'shared',
      lightColors: {
        main: '#2349e3',
        container: '#E3F2FD',
        onContainer: '#000000',
      }
    },
    nonPriority: {
      colorName: 'nonPriority',
      lightColors: {
        main: '#23e343',
        container: '#E8F5E9',
        onContainer: '#000000',
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
  if (router.currentRoute.value.name === 'tarification') {
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
}

function addNewEvent(newEvent) {
  eventsServicePlugin.add(
      Event.formatEventToScheduleX(newEvent)
  )
}

function editEvent(event) {
  eventInfoDialog.value = false;
  editedEvent.value = event;
  editedEvent.value.accepteConditions = true;
  Event.defineDatesFromScheduleXEvent(
      editedEvent.value,
      new Date(event.start),
      new Date(event.end)
  );
  enterReservationDialog();
}

function updateEvent(modifiedEvent) {
  eventsServicePlugin.update(
      Event.formatEventToScheduleX(modifiedEvent)
  )
}

function removeEvent(removedEvent) {
  eventsServicePlugin.remove(
      removedEvent.id
  )
}
</script>
<style>
</style>
