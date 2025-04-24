<template>
  <v-row>
    <v-col cols="12" class="text-left text-no-wrap">
      <v-row>
        <v-col cols="10">
          <div class="text text-h5">Tarification</div>
        </v-col>
        <v-col cols="2" class="text-right">
          <v-icon @click="$emit('close')" size="x-large">close</v-icon>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-left pa-0">
      <p class="text-body-1 font-weight-bold text-center">
        Contribution minimale (avant taxes) pour la location
        de la salle.
      </p>
      <v-card class="mb-8">
        <v-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th></th>
              <th class="text-body-1 font-weight-bold">
                1h
              </th>
              <th class="text-body-1 font-weight-bold">
                2h
              </th>
              <th class="text-body-1 font-weight-bold">
                3h
              </th>
              <th class="text-body-1 font-weight-bold">
                4h
              </th>
              <th class="text-body-1 font-weight-bold">
                5h
              </th>
              <th class="text-body-1 font-weight-bold">
                10h
              </th>
              <th class="text-body-1 font-weight-bold">
                Jour + nuit
              </th>
            </tr>
            </thead>
            <tbody>
<!--            <template slot="item" slot-scope="props">-->
<!--              <td class="text-body-1">-->
<!--                {{ props.item.row1 }}-->
<!--              </td>-->
<!--              <td class="text-body-1">-->
<!--                {{ props.item.row2 }}-->
<!--              </td>-->
<!--              <td class="text-body-1">-->
<!--                {{ props.item.row3 }}-->
<!--              </td>-->
<!--              <td class="text-body-1">-->
<!--                {{ props.item.row4 }}-->
<!--              </td>-->
<!--              <td class="text-body-1">-->
<!--                {{ props.item.row5 }}-->
<!--              </td>-->
<!--              <td class="text-body-1">-->
<!--                {{ props.item.row6 }}-->
<!--              </td>-->
<!--              <td class="text-body-1">-->
<!--                {{ props.item.row7 }}-->
<!--              </td>-->
<!--              <td class="text-body-1">-->
<!--                {{ props.item.row8 }}-->
<!--              </td>-->
<!--            </template>-->
            <tr
                v-for="price in priceRows"
                :key="price.row1"
            >
              <td class="text-body-1">{{ price.row1 }}</td>
              <td class="text-body-1">{{ price.row2 }}</td>
              <td class="text-body-1">{{ price.row3 }}</td>
              <td class="text-body-1">{{ price.row4 }}</td>
              <td class="text-body-1">{{ price.row5 }}</td>
              <td class="text-body-1">{{ price.row6 }}</td>
              <td class="text-body-1">{{ price.row7 }}</td>
              <td class="text-body-1">{{ price.row8 }}</td>
            </tr>
            </tbody>
          </template>
        </v-table>
      </v-card>
<!--      <div class="text-left text text-h6" v-if="roomPicker">-->
<!--        Option de salle-->
<!--      </div>-->
<!--      <v-radio-group v-model="roomPiece" row @change="updatePrice" v-if="roomPicker">-->
<!--        <v-radio-->
<!--            label="Grande salle"-->
<!--            value="Grande salle"-->
<!--        ></v-radio>-->
<!--        <v-radio-->
<!--            label="Cuisine"-->
<!--            value="Cuisine"-->
<!--        ></v-radio>-->
<!--        <v-radio-->
<!--            label="Petite salle de réunion"-->
<!--            value="Petite salle de réunion"-->
<!--        ></v-radio>-->
<!--      </v-radio-group>-->
<!--      <div v-if="roomPicker" class="text-h5">-->
<!--        {{ price }}$-->
<!--      </div>-->
      <v-btn @click="$refs.paymentMethodsDialog.enter()" class="mb-6">
        <v-icon start class="">monetization_on</v-icon>
        Modes de paiements
      </v-btn>
      <div class="mb-2 text-h6">
        Taxes
      </div>
      <p class="text-body-1 ml-4">
        Pour les événements financés par contributions volontaires, les taxes
        ne sont pas
        chargées.
      </p>      
    </v-col>
    <PaymentMethodsDialog ref="paymentMethodsDialog"></PaymentMethodsDialog>
  </v-row>
</template>

<script>
import PaymentMethodsDialog from "@/components/PaymentMethodsDialog.vue";

export default {
  name: "TarificationSection",
  components: {PaymentMethodsDialog},
  props: {
    roomPicker: {
      type: Boolean,
      default: true
    },
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

<style scoped>

</style>
