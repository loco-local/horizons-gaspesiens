<template>
  <div>
    <v-dialog :fullscreen="true" v-model="dialog" v-if="dialog">
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
          <v-toolbar-title class="text" v-if="$vuetify.breakpoint.mdAndUp">
            <v-icon left>event</v-icon>
            Réservation
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="confirmRemoveDialog=true" text color="red" v-if="isModifyEventFlow">
            <v-icon left class="material-icons-outlined">delete</v-icon>
            Supprimer
          </v-btn>
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
                <div class="text text-h5">Jour et Heure</div>
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
                        v-model="editedEvent.startDay"
                        label="Jour"
                        prepend-icon="calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        :rules="[rules.required]"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="editedEvent.startDay"
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
                    :return-value.sync="editedEvent.startTime"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="editedEvent.startTime"
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
                      v-model="editedEvent.startTime"
                      label="heure"
                      :allowed-minutes="allowedMinutes"
                      v-if="startTimeMenu"
                      full-width
                      @click:minute="$refs.startTimeMenu.save(editedEvent.startTime)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" lg="4">
                <v-menu
                    ref="endTimeMenu"
                    v-model="endTimeMenu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="editedEvent.endTime"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="editedEvent.endTime"
                        label="Fin"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        :rules="[
                            rules.required,
                            rules.afterTime(editedEvent.endTime, editedEvent.startTime),
                            ]"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                      format="24hr"
                      v-model="editedEvent.endTime"
                      :allowed-minutes="allowedMinutes"
                      label="heure"
                      v-if="endTimeMenu"
                      full-width
                      @click:minute="$refs.endTimeMenu.save(editedEvent.endTime)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-card :flat="!isWeekly" class="pl-8 mb-6">
              <v-row>
                <v-col cols="12">
                  <v-checkbox
                      v-if="!isModifyEventFlow"
                      v-model="isWeekly"
                      label="Est un événement qui se répète à chaque semaine"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" v-if="isWeekly" class="pt-0">
                  <v-menu
                      ref="weeklyUntilMenu"
                      v-model="weeklyUntilMenu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="weeklyUntilDate"
                          label="Jusqu'au"
                          prepend-icon="calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          class="pt-0"
                          :rules="[rules.required]"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="weeklyUntilDate"
                        no-title
                        scrollable
                        @input="weeklyUntilMenu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card>
            <v-row>
              <v-col cols="12">
                <p class="body-1 text-left">
                  <v-icon left>more_time</v-icon>
                  Pensez à ajouter du temps avant et après pour préparer et ranger la salle.
                </p>
              </v-col>
            </v-row>
            <v-row v-if="!isModifyEventFlow">
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12">
                <v-row class="text-left">
                  <v-col cols="12">
                    <div class="text text-h5">Organisatrice</div>
                    <div class="body-1">
                      Ces informations sont publiées dans la description de l'événement
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <v-row>
                      <v-col cols="12" lg="4">
                        <v-text-field
                            label="Votre nom"
                            v-model="editedEvent.organizer.fullname"
                            :rules="[rules.required]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" lg="4">
                        <v-text-field
                            label="Votre courriel"
                            v-model="editedEvent.organizer.email"
                            prepend-icon="email"
                            :rules="[rules.required]"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" lg="4">
                        <v-text-field
                            label="Votre téléphone"
                            v-model="editedEvent.organizer.phone"
                            prepend-icon="phone"
                            :rules="[rules.required]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12" class="">
                    <div class="text text-h5">
                      L'organisatrice doit être membre de la coopérative
                    </div>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <VerificationAdhesion
                        :email-input="editedEvent.organizer.email"></VerificationAdhesion>
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
                <div class="text text-h5">Événement</div>
              </v-col>
              <v-col cols="12" lg="6" xl="4">
                <v-text-field
                    v-model="editedEvent.summary"
                    label="Nom de l'événement"
                    prepend-icon="event"
                    :rules="[rules.required]">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="6" xl="4">
                <v-textarea
                    v-model="editedEvent.description"
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
                <div class="text-left text text-h5">Partage de la salle</div>
                <v-radio-group
                    v-model="editedEvent.colorId"
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
                      color="#51b749"
                      value="10"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-divider class="mt-6 mb-6"></v-divider>
              <Tarification></Tarification>
            <v-divider class="mt-6 mb-6"></v-divider>
            <v-row>
              <v-col cols="12" class="text-left">
                <div class="text-h5">Conditions d'utilisations de la salle</div>
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
                        Nettoyer les planchers, les comptoirs, les tables.
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="body-1 text-wrap">
                        Vider les poubelles, recyclage, compost et nettoyer la toilette au
                        besoin.
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="body-1 text-wrap">
                        Replacer meubles et objets à leur place.
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="body-1 text-wrap">
                        Faire le tour du Local et s'assurer que rien ne traîne.
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon>
                        electric_bolt
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title class="body-1 text-wrap">
                        Baisser le chauffage, fermer les lumières et ouvrir les rideaux pour les
                        plantes.
                      </v-list-item-title>
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
                        Barrer la porte en sortant.
                      </v-list-item-title>
                      <v-list-item-subtitle class="body-1 text-wrap">
                        Ou s'assurer que ceux qui restent dans le
                        local sont membres et majeurs.
                      </v-list-item-subtitle>
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
                        En cas de conflit d'horaire.
                      </v-list-item-title>
                      <v-list-item-subtitle class="body-1 text-wrap">
                        Collaborer.
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="body-1 text-wrap">
                        Mettre ses limites.
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="body-1 text-wrap">
                        Garder en tête le bien être du Loco Local.
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon>
                        free_cancellation
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title class="body-1 text-wrap">
                        Supprimer son événement lorsqu'il est annulé.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon class="material-icons-outlined">
                        diversity_1
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title class="body-1 text-wrap">
                        Respect des valeurs : respect, bienveillance, ouverture, solidarité, inclusion, partage, autonomie individuelle, et égalité.
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-checkbox
                    v-model="editedEvent.accepteConditions"
                    label="Je m'engage à respecter ces conditions."
                    :rules="[rules.required]"
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="text-left">
                <v-btn color="primary" @click="save" large :loading="isSaveEventLoading">
                  <v-icon left v-if="!isModifyEventFlow">add</v-icon>
                  <span v-if="isModifyEventFlow">
                                        Modifier l'événement
                                    </span>
                  <span v-else>
                                        Ajouter l'événement
                                    </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog width="600" v-model="confirmRemoveDialog" v-if="confirmRemoveDialog">
      <v-card>
        <v-card-title>
          {{ editedEvent.summary }}
          <v-spacer></v-spacer>
          <v-icon @click="confirmRemoveDialog=false">close</v-icon>
        </v-card-title>
        <v-card-actions>
          <v-btn color="red" text @click="remove" :loading="isRemoveEventLoading">
            <v-icon left class="material-icons-outlined">delete</v-icon>
            Supprimer
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="confirmRemoveDialog=false">
            Annuler
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import VerificationAdhesion from "@/components/VerificationAdhesion.vue";
import EventService from "@/service/EventService";
import Rules from "@/Rules";
import Tarification from "@/components/TarificationSection.vue";

export default {
  name: "ReservationDialog",
  components: {Tarification, VerificationAdhesion},
  data: function () {
    return {
      isWeekly: false,
      weeklyUntilMenu: false,
      weeklyUntilDate: null,
      allowedMinutes: [0, 15, 30, 45],
      confirmRemoveDialog: false,
      isRemoveEventLoading: false,
      dialog: false,
      editedEvent: null,
      rules: Rules,
      isSaveEventLoading: false,
      eventStartDateMenu: false,
      startTimeMenu: false,
      endTimeMenu: false,
      logoHeight: this.$vuetify.breakpoint.smAndDown ? 20 : 40
    }
  },
  methods: {
    enter: function (editedEvent) {
      this.isWeekly = false;
      this.editedEvent = Object.assign({}, editedEvent);
      this.editedEvent.organizer = editedEvent.organizer;
      this.dialog = true
    },
    cancelSave: function () {
      this.dialog = false;
    },
    remove: async function () {
      this.isRemoveEventLoading = true;
      await EventService.delete(
          this.editedEvent.id
      )
      this.isRemoveEventLoading = false;
      this.confirmRemoveDialog = false;
      this.dialog = false;
      this.$emit('eventRemoved', this.editedEvent)
    },
    save: async function () {
      if (!this.$refs.eventForm.validate()) {
        this.$refs.eventForm.$el.scrollIntoView({behavior: 'smooth'})
        return
      }
      this.isSaveEventLoading = true;
      if (!this.isModifyEventFlow) {
        this.editedEvent.description = "Contactez " + this.editedEvent.organizer.fullname + " " +
            this.editedEvent.organizer.email + " " + this.editedEvent.organizer.phone +
            ". " + (this.editedEvent.description || "");
      }
      if (this.isModifyEventFlow) {
        const modifiedEvent = await EventService.update(
            this.editedEvent
        );
        this.$emit('eventUpdated', modifiedEvent)
      } else {
        if (this.isWeekly) {
          const untilDateFormatted = this.weeklyUntilDate.replaceAll("-", "");
          this.editedEvent.recurrence = [
            "RRULE:FREQ=WEEKLY;UNTIL=" + untilDateFormatted
          ];
        }
        const newEvent = await EventService.add(
            this.editedEvent
        )
        this.$emit('eventAdded', newEvent)
      }
      this.isSaveEventLoading = false;
      this.dialog = false;
    },
  },
  computed: {
    isModifyEventFlow: function () {
      return this.editedEvent.id !== undefined
    }
  }
}
</script>

<style scoped>

</style>
