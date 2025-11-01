<template>
  <v-dialog v-model="dialog" width="900" :fullscreen="$vuetify.display.smAndDown">
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center text-h5 text-medium-emphasis ps-2">
        <div>
          Modes de paiement
        </div>
        <v-icon @click="dialog = false">close</v-icon>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-list class="text-left">
          <v-list-item>

            <v-list-item-title class="text-h6 font-weight-regular text-wrap">
              Virement interact à admin@loco-local.net
            </v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-wrap">
              Utilisez la question "Ville" et la réponse "Bonaventure".
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item>

            <v-list-item-title class="text-h6 font-weight-regular">
              Transfert bancaire
            </v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-wrap">
              Transit caisse: 40001, No institution: 815, Folio: 0451286.
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item>
            <v-list-item-title class="text-h6 font-weight-regular">
              Comptant
            </v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-wrap">
              Déposez l'argent dans la caisse qui se trouve sous la balance.
            </v-list-item-subtitle>
            <v-list-item-subtitle class="text-body-1 text-wrap">
              Inscrivez votre transaction dans la tablette électronique sur place ou sur les feuilles
              de transactions.
            </v-list-item-subtitle>

          </v-list-item>
          <v-list-item>

            <v-list-item-title class="text-h6 font-weight-regular">
              Par chèque
            </v-list-item-title>
            <v-list-item-subtitle class="text-body-1 text-wrap">
              À la coopérative de solidarité Horizons Gaspésiens.
            </v-list-item-subtitle>
            <v-list-item-subtitle class="text-body-1 text-wrap">
              Déposez le chèque dans la caisse sous la balance.
            </v-list-item-subtitle>

          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" @click="dialog = false" size="large">Fermer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PaymentMethodsDialog",
  data: function () {
    return {
      dialog: false
    }
  },
  methods: {
    enter: function () {
      this.dialog = true;
    }
  }
}
</script>

<style scoped></style>
