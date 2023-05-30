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
                    <v-btn @click="remove" :loading="isRemoveEventLoading" text color="red">
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
                                                :rules="[rules.required]"
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                            format="24hr"
                                            v-model="editedEvent.endTime"
                                            label="heure"
                                            v-if="endTimeMenu"
                                            full-width
                                            @click:minute="$refs.endTimeMenu.save(editedEvent.endTime)"
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
                        <v-row v-if="!isModifyEventFlow">
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
                                <h4 class="text-left text">Partage de la salle</h4>
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
                                <v-btn @click="$refs.paymentMethodsDialog.enter()" class="mb-6">
                                    <v-icon left class="">monetization_on</v-icon>
                                    Modes de paiements
                                </v-btn>
                                <h4 class="mb-2">
                                    Taxes
                                </h4>
                                <p class="body-1 ml-4">
                                    Pour les événements financés par contributions volontaires, les taxes
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
                                        v-model="editedEvent.accepteConditions"
                                        label="Je m'engage à respecter ces conditions."
                                        :rules="[rules.required]"
                                ></v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="text-left">
                                <v-btn color="primary" @click="save" :loading="isSaveEventLoading" large>
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
        <PaymentMethodsDialog ref="paymentMethodsDialog"></PaymentMethodsDialog>
    </div>
</template>

<script>
import VerificationAdhesion from "@/components/VerificationAdhesion.vue";
import PaymentMethodsDialog from "@/components/PaymentMethodsDialog.vue";
import EventService from "@/service/EventService";
import Rules from "@/Rules";

export default {
    name: "ReservationDialog",
    components: {PaymentMethodsDialog, VerificationAdhesion},
    data: function () {
        return {
            isRemoveEventLoading: false,
            dialog: false,
            editedEvent: null,
            rules: Rules,
            isSaveEventLoading: false,
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
    methods: {
        enter: function (editedEvent) {
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
            this.editEventDialog = false;
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
                    ". " + this.editedEvent.description;
            }
            if (this.isModifyEventFlow) {
                const modifiedEvent = await EventService.update(
                    this.editedEvent
                );
                this.$emit('eventUpdated', modifiedEvent)
            } else {
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
