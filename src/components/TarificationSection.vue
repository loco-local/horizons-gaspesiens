<template>
  <v-row>
    <v-col cols="12" class="text-left text-no-wrap">
      <v-row>
        <v-col cols="10">
          <div class="text text-h5">Tarification</div>
          <div class="text-grey-darken-2 text-body-1">Taxes incluses</div>
        </v-col>
        <v-col cols="2" class="text-right" v-if="topCloseButton">
          <v-icon @click="$emit('close')" size="x-large">close</v-icon>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="vh-center">
      <v-card width="300" color="#2349e3">
        <v-card-title>
          16$ de l'heure
        </v-card-title>
        <v-card-text class="text-body-1">
          Pour une location où il est toléré que d'autres personnes discrètes partagent le local.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" class="vh-center">
      <v-card width="300" color="#e32323">
        <v-card-title>
          20$ de l'heure
        </v-card-title>
        <v-card-text class="text-body-1">
          Pour une location de salle exclusive aux participants.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" class="vh-center mt-4">
      <v-btn @click="$refs.paymentMethodsDialog.enter()" class="" variant="outlined">
        <v-icon start class="">monetization_on</v-icon>
        Modes de paiements
      </v-btn>
    </v-col>
    <PaymentMethodsDialog ref="paymentMethodsDialog"></PaymentMethodsDialog>
  </v-row>
</template>

<script>
import PaymentMethodsDialog from "@/components/PaymentMethodsDialog.vue";

export default {
  name: "TarificationSection",
  components: { PaymentMethodsDialog },
  props: {    
    topCloseButton: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      price: null,
      roomPiece: null,
      priceRows: [
        {
          row1: "Grande salle (jusqu'à 40 pers.)",
          row2: '15$',
          row3: '30$',
          row4: '40$',
          row5: '50$',
          row6: '60$',
          row7: '100$',
          row8: '125$'
        },
        {
          row1: "Cuisine (jusqu'à 6 pers.)",
          row2: '7,50$',
          row3: '15$',
          row4: '20$',
          row5: '25$',
          row6: '30$',
          row7: '50$',
          row8: '-'
        },
        {
          row1: "Petite salle de réunion (jusqu'à 5 pers.)",
          row2: '7,50$',
          row3: '15$',
          row4: '20$',
          row5: '25$',
          row6: '30$',
          row7: '50$',
          row8: '-'
        }
      ]
    }
  },
  methods: {
    updatePrice: function () {
      this.price = this.calculatePrice();
    },
    calculatePrice: function () {
      switch (this.roomPiece) {
        case 'Grande salle':
          return 40
        case 'Cuisine':
          return 20
        case 'Petite salle de réunion':
          return 10
      }
    },
  }
}
</script>

<style scoped></style>
