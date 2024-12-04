<template>
  <div>
    <v-dialog v-model="phoneModal" v-if="phoneModal" width="600">
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center text-h5 text-medium-emphasis ps-2">
          <div>
            Téléphone
          </div>
          <div>
            <v-icon @click="phoneModal = false">close</v-icon>
          </div>
        </v-card-title>
        <!--                <v-card-subtitle class="grey-text subtitle-1 grey-text pt-0 mt-0 text-left">-->
        <!--                    N'hésitez pas à contacter ces bénévoles pour le code de la porte, une réservation ou tout autre-->
        <!--                    sujet.-->
        <!--                </v-card-subtitle>-->
        <v-card-text class="pt-0 text-body-2">
          <v-list lines="two" class="text-left">
            <v-list-item href="tel:581-630-0058">
              <template v-slot:prepend>
                <v-icon>phone</v-icon>
              </template>
              <v-list-item-title>
                581-630-0058
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PhoneDialog",
  data() {
    return {
      phoneModal: false
    }
  },
  methods: {
    show() {
      this.phoneModal = true;
    }
  }
}
</script>

<style scoped>

</style>
