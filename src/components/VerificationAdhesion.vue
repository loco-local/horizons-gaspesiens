<template>
  <v-row>
    <v-col cols="12" :class="{
      'h-center' : isCenter
    }">
      <v-card :width="width" flat>
        <v-card-text class="text-body-1 text-center h-center" v-if="status !== null">
          <v-card class="text-center" max-width="400">
            <v-progress-circular
                :size="100"
                color="primary"
                indeterminate
                v-if="loading"
                class="mt-6 mb-6"
            ></v-progress-circular>
            <div v-else>
              <v-card-text>
                <div v-if="status.status === 'active'" class="text-h6 font-weight-regular">
                  <v-icon color="success" size="x-large" start>check</v-icon>
                  Actif
                </div>
                <div v-if="status.status === 'inactive'" class="text-h6 font-weight-regular">
                  <v-icon color="error" size="x-large" start>highlight_off</v-icon>
                  Inactif
                </div>
              </v-card-text>
              <v-card-text v-if="status.reason === 'no renewal date'" class="text-body-1 text-left">
                <p class="text-body-1">
                  Vous avez rempli le formulaire d'adhésion mais nous n'avons pas encore
                  confirmé
                  votre paiement
                </p>
                <strong class="text-body-1 font-weight-bold">Quoi faire</strong>
                <ul class="text-body-1">
                  <li class="text-body-1">
                    <router-link to="/paiement">Payez votre adhésion</router-link>
                    au montant de 25$ la première année et 15$ les années
                    subséquentes.
                  </li>
                  <li class="text-body-1">
                    Pour une organisation, les frais sont de 60$ la première année et de 50$ les années subséquentes.
                  </li>
                  <li class="text-body-1">
                    Écrivez nous un courriel à <a
                      href="mailto:horizonsgaspesiens@gmail.com">horizonsgaspesiens@gmail.com</a>
                    si vous avez payé votre adhésion mais que votre statut est toujours
                    inactif.
                    Notez qu'un délai est
                    nécessaire pour qu'un responsable confirme votre paiement.
                  </li>
                </ul>
                <p class="text-body-1 mt-4 mb-0 pb-0">
                  Merci.
                </p>
              </v-card-text>
              <v-card-text v-if="status.reason === 'email not found'" class="text-body-1 text-left">
                <p class="text-body-1">
                  Votre courriel n'est pas associé à un membre de Horizons Gaspésiens.
                </p>
                <p class="text-body-1">
                  Pour être membre vous devez remplir et suivre les instructions du
                  <a href="https://horizonsgaspesiens.net/devenez-membre">formulaire
                    d'adhésion</a>
                  de Horizons Gaspésiens
                </p>
                <p class="text-body-1">
                  Contactez nous à <a href="mailto:horizonsgaspesiens@gmail.com">horizonsgaspesiens@gmail.com</a>
                  s'il
                  s'agit d'une erreur.
                </p>
                <p class="text-body-1 pb-0 mb-0">
                  Merci.
                </p>
              </v-card-text>
              <v-card-title class="h-center"
                            v-if="!status.reason || ['email not found','no renewal date'].indexOf(status.reason) ===  -1">
                <v-icon start>calendar_month</v-icon>
                <strong class="text-body-1 font-weight-bold">Date d'expiration</strong>
              </v-card-title>
              <v-card-text class="text-body-1">
                {{ status.subscriptionRenewalDate }}
              </v-card-text>
              <v-card-text v-if="status.status === 'inactive' && status.reason === undefined"
                           class="text-body-1 text-left">
                <p>
                  Pour renouveler votre adhésion,
                  remplissez le
                  <a href="https://horizonsgaspesiens.net/devenez-membre">
                    formulaire d'adhésion.
                  </a>
                </p>
                <p>
                  Notez qu'un délai est nécessaire pour qu'un responsable confirme votre
                  paiement.
                </p>
                <p class="text-body-1 mb-0">
                  Merci.
                </p>
              </v-card-text>
              <v-card-text v-if="status.status === 'active' && !status.reason"
                           class="text-body-1 text-left">
                <p class="text-body-1">
                  S.V.P renouvellez votre adhésion à l'avance.
                </p>
                <p class="text-body-1">
                  Pour ce faire,
                  remplissez le
                  <a href="https://horizonsgaspesiens.net/devenez-membre">
                    formulaire d'adhésion.
                  </a>
                </p>
                <p class="text-body-1">
                  Nous ajouterons une année à votre date d'expiration.
                </p>
                <p class="text-body-1 mb-0">
                  Merci.
                </p>
              </v-card-text>
            </div>
          </v-card>
        </v-card-text>
        <v-card-text class="text-body-1">
          <v-form>
            <v-text-field
                v-model="email"
                prepend-inner-icon="mail"
                label="Courriel"
                required
                class="text-body-2"
                @keydown="keydown"
            ></v-text-field>
            <v-btn @click="handleEmailChange()" :loading="loading">
              Vérifier votre adhésion
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MembershipService from "@/service/MembershipService";
import {format} from "date-fns";
import {fr} from "date-fns/locale";

const ENTER_KEY_CODE = 13;
export default {
  name: "VerificationAdhesion",
  props: ['emailInput', 'isCenter'],
  data: function () {
    return {
      email: null,
      loading: true,
      status: null,
      width: 600
    };
  },
  mounted: function () {
    this.loading = false;
    if (this.$route.params.email !== null) {
      this.email = this.$route.params.email;
      this.checkStatus();
    }
    if (this.$vuetify.display.smAndDown) {
      this.width = 350;
    }
  },
  methods: {
    keydown: function (event) {
      if (event.keyCode === ENTER_KEY_CODE) {
        this.handleEmailChange()
      }
    },
    handleEmailChange: async function () {
      await this.$emit('emailChanged', this.email)
      await this.checkStatus()
    },
    checkStatus: async function () {
      if (this.email === null || this.email === undefined || this.email.trim() === "") {
        return;
      }
      this.loading = true;
      const response = await MembershipService.get(this.email);
      this.status = response.data;
      if (this.status.subscriptionRenewalDate) {
        this.status.subscriptionRenewalDate = format(
            new Date(this.status.subscriptionRenewalDate),
            'd MMMM yyyy',
            {
              locale: fr
            }
        )
      }
      this.loading = false;
    }
  },
  watch: {
    emailInput: function () {
      this.email = this.emailInput;
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 12px;
  line-height: 1.5;
}
</style>
